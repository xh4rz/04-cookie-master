import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '../themes';

interface Props extends AppProps {
	theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {
	const currentTheme: Theme =
		theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
// 	const { theme } = appContext.ctx.req
// 		? (appContext.ctx.req as any).cookies
// 		: { theme: 'light' };

// 	const validThemes = ['light', 'dark', 'custom'];

// 	return {
// 		theme: validThemes.includes(theme) ? theme : 'dark'
// 	};
// };

export default MyApp;
