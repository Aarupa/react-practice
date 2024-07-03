import { useTheme } from "./ThemeContext";

const ThemeButton = ({children}) => {
    const {theme} = useTheme();

    return(
        <button style={{ background: theme.background, color: theme.color }}>{children}</button>
    )
}

export default ThemeButton;