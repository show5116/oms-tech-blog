import React from 'react';
import * as S from './Code.style';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

interface IProps {
    children: string;
    className?: string;
}

const Code = ({ children, className }: IProps) => {
    const language = className ? className.replace(/language-/, '') : '';
    if (className) {
        return (
            <S.Container>
                <S.CodeInfoBar>
                    <span>{language}</span>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </S.CodeInfoBar>
                <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language as any}>
                    {({ tokens, getLineProps, getTokenProps }) => (
                        <S.TableWrapper>
                            <S.Table>
                                <tbody>
                                    {tokens.map((line, i) => (
                                        <S.Line key={i} {...getLineProps({ line, key: i })}>
                                            <S.LineNo>{language ? i + 1 : ''}</S.LineNo>
                                            <td>
                                                {line.map((token, key) => (
                                                    <span key={key} {...getTokenProps({ token, key })} />
                                                ))}
                                            </td>
                                        </S.Line>
                                    ))}
                                </tbody>
                            </S.Table>
                        </S.TableWrapper>
                    )}
                </Highlight>
            </S.Container>
        );
    } else {
        return <S.Method>{children}</S.Method>;
    }
};

export default React.memo(Code);
