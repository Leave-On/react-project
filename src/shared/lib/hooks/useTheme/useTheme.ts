import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localstorage";
import { useContext } from "react";
import { Theme } from "../../../const/theme";
import { ThemeContext } from "../../context/ThemeContext";

interface useThemeResult {
   toggleTheme: () => void;
   theme: Theme;

}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        let newTheme: Theme

        switch(theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break
        case Theme.LIGHT:
            newTheme = Theme.RED;
            break
        case Theme.RED:
            newTheme = Theme.DARK;
            break
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    }
}