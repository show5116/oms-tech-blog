import path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

const getMdxContent = async (content) => {
    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [[remarkToc, {}]],
            rehypePlugins: [[rehypeSlug, {}]],
        },
    }).then((value) => {
        return value;
    });
    return mdxContent;
};

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getAllCategories = () =>
    fs
        .readdirSync(POSTS_PATH, { withFileTypes: true })
        .filter((file) => file.isDirectory())
        .map((file) => file.name);

export const getPost = async (slug) => {
    const filePath = path.join(POSTS_PATH, slug.join('/') + '.mdx');
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    const mdxSource = await getMdxContent(content);
    return { mdxSource, data, content };
};

export const getPostByCategory = (category) => {
    const files = fs
        .readdirSync(path.join(POSTS_PATH, category))
        .filter((file) => /\.mdx/.test(file))
        .map((file) => path.join(category, file));

    const posts = files.map((file) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, file));
        const { content, data } = matter(source);
        file = file.replace(POSTS_PATH, '');
        file = file.replace('.mdx', '');
        file = file.replace('\\', '/');
        const slug = file.split('/');
        return {
            content,
            data,
            slug,
        };
    });

    posts.sort((a, b) => {
        return +new Date(b.data.date) - +new Date(a.data.date);
    });

    return posts;
};

export const getAllPost = () => {
    const categories = getAllCategories();

    let posts = [];
    categories.forEach((category) => {
        posts = posts.concat(getPostByCategory(category));
    });

    posts.sort((a, b) => {
        return +new Date(b.data.date) - +new Date(a.data.date);
    });

    return posts;
};
