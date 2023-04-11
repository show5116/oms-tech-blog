import Link from 'next/link';

interface IProps {
    children: string | JSX.Element;
    href: string;
    download?: string | boolean;
}

const A = ({ children, href, download }: IProps) => {
    const renderChildren = () => {
        if (typeof children === 'string') {
            return <span className="underline">{children}</span>;
        } else {
            return children;
        }
    };

    const convertTextToId = (title: string) => {
        return title.toLowerCase().replace(/[?.]/gi, '').replace(/\s/g, '-');
    };

    if (href.startsWith('/') && !download) {
        return <Link href={href}>{renderChildren()}</Link>;
    } else if (href.startsWith('#')) {
        return <Link href={location.pathname + convertTextToId(href)}>{renderChildren()}</Link>;
    } else if (download) {
        return (
            <a href={href} download={download}>
                {renderChildren()}
            </a>
        );
    } else {
        return (
            <a href={href} target="_blank" rel="noreferrer">
                {renderChildren()}
            </a>
        );
    }
};

export default A;
