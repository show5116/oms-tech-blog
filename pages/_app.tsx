import 'styles/globals.css';
import * as S from 'styles/pages/app.style';

import wrapper from 'store/configureStore';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import Header from 'components/layout/Header';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import SEO from '../seo.config';

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
                <DefaultSeo {...SEO} />
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
