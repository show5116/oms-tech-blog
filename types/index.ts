export interface IFrontMatter {
    title: string;
    date?: string;
    description: string;
    authorId: string;
    authorName: string;
    thumbnail?: string;
    tags: string[];
}

export interface IPost {
    content: string;
    data: IFrontMatter;
    slug: string[];
}

export interface ITag {
    name: string;
    cnt: number;
}
