import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface IProps {
    title?: string;
    description: string;
    keywords: string[];
    thumbnail?: string;
}

const Seo = ({ title, description, keywords, thumbnail = '/images/default.png' }: IProps) => {
    const router = useRouter();
    return <Head>{title === undefined}</Head>;
};

export default React.memo(Seo);
