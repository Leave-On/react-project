import { useContext } from 'react';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface useThemeResult {
	toggleTheme: (saveAction?: (theme: Theme) => void) => void;
	theme: Theme;
}

export function useTheme(): useThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);
	const toggleTheme = (saveAction?: (theme: Theme) => void) => {
		let newTheme: Theme;

		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.RED;
				break;
			case Theme.RED:
				newTheme = Theme.DARK;
				break;
			default:
				newTheme = Theme.LIGHT;
		}

		setTheme?.(newTheme);
		document.body.className = newTheme;

		saveAction?.(newTheme);
	};
	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	};
}
