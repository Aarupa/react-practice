import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
    const {toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};

export default ThemeSwitcher;