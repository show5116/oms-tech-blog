import React, { memo } from 'react';
import * as S from './Header.style';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import useScroll from 'hooks/useScroll';

import { RootState } from 'store';
import { setDarkTheme, setWhiteTheme } from 'store/action/themeAction';
import { darkTheme } from 'styles/theme';

const Header = React.memo(() => {
    const themeState = useSelector((state: RootState) => state.themeReducer);
    const dispatch = useDispatch();
    const isScrollDown = useScroll('down');

    const changeTheme = () => {
        if (themeState.theme === darkTheme) {
            dispatch(setWhiteTheme());
        } else {
            dispatch(setDarkTheme());
        }
    };

    return (
        <S.Container isScrollDown={isScrollDown}>
            <S.HeaderMenu>
                <Link href="/">
                    <S.Logo>OMS-Tech-Blos</S.Logo>
                </Link>
                <S.RightMenu>
                    <FontAwesomeIcon
                        icon={themeState.theme === darkTheme ? faMoon : faSun}
                        color={themeState.theme.fontColor}
                        onClick={changeTheme}
                        size="1x"
                    />
                    <Link href="/about">About</Link>
                    <Link href="/category/back-end">BackEnd</Link>
                    <Link href="/category/front-end">FrontEnd</Link>
                </S.RightMenu>
            </S.HeaderMenu>
        </S.Container>
    );
});
Header.displayName = 'Header';

export default Header;
