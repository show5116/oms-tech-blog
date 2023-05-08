import * as S from './Strong.style';

type TStrongChild = string | JSX.Element;

interface IProps {
    children: string | TStrongChild[];
}

const Strong = ({ children }: IProps) => {
    if (typeof children === 'string') {
        if (children.startsWith('주의')) {
            const newString = children.replace('주의', '').trim();
            return (
                <S.Caution>
                    <S.CautionIcon>❗</S.CautionIcon>
                    {newString}
                </S.Caution>
            );
        } else if (children.startsWith('팁')) {
            const newString = children.replace('팁', '').trim();
            return (
                <S.Tip>
                    <S.TipIcon>💡</S.TipIcon>
                    {newString}
                </S.Tip>
            );
        }
        return <S.Strong>{children}</S.Strong>;
    } else {
        return (
            <S.Caution>
                <S.CautionIcon>❗</S.CautionIcon>
                {children.map((child, index) => {
                    if (typeof child === 'string' && index === 0) {
                        child.replace('주의', '').trimStart();
                    }
                    return child;
                })}
            </S.Caution>
        );
    }
};

export default Strong;
