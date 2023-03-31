import 'styles/globals.css';
import * as S from 'styles/pages/app.style';

import wrapper from 'store/configureStore';
import { ThemeProvider } from 'styled-components';
import Header from 'components/layout/Header';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [showChild, setShowChild] = useState(false);
    const themeState = useSelector((state: RootState) => state.themeReducer);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    } else {
        return (
            <>
                <ThemeProvider theme={themeState.theme}>
                    <S.Container>
                        <Header />
                        <Component {...pageProps} />
                    </S.Container>
                </ThemeProvider>
            </>
        );
    }
};

export default wrapper.withRedux(MyApp);
