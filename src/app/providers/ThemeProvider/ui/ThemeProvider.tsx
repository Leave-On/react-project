import { useJsonSettings } from '@/entities/User';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '../../../../shared/const/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const { children, initialTheme } = props;

	const { theme: defaultTheme } = useJsonSettings();
	const [isThemeInited, setIsThemeInited] = useState(false);

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

	useEffect(() => {
		if (!isThemeInited && defaultTheme) {
			setTheme(defaultTheme);
			setIsThemeInited(true);
		}
	}, [defaultTheme, isThemeInited]);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme],
	);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
