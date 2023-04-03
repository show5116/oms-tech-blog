import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import compareProps from '../../utils/compareProps';

interface IProps {
    title?: string;
    description: string;
    keywords: string[];
    thumbnail?: string;
}

const Seo = React.memo(({ title, description, keywords, thumbnail = '/images/default.png' }: IProps) => {
    const router = useRouter();
    return <Head>{title === undefined}</Head>;
}, compareProps);
Seo.displayName = 'Seo';

export default Seo;
