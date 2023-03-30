import React from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
}

const ResponsiveImage = ({ src, alt }: ImageProps) => {
    const size = (() => {
        if (!alt.includes('size:')) {
            return undefined;
        }
        const sizeInfo = alt.split('size:')[1].split('x');
        return {
            width: Number(sizeInfo[0]),
            height: Number(sizeInfo[1]),
        };
    })();
    if (!src.startsWith('/')) {
        return <img src={src} alt={alt} {...size} />;
    } else if (size) {
        return <Image objectFit="contain" priority src={src} alt={alt} {...size} layout="fixed" />;
    } else {
        return (
            <span style={{ position: 'relative', display: 'inline-block', width: '100%', height: '500px' }}>
                <Image objectFit="contain" priority src={src} alt={alt} layout="fill" />
            </span>
        );
    }
};

export default React.memo(ResponsiveImage);
