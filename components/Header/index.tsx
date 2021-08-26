import { IconButton } from "@material-ui/core";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { themes } from "../../enums";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { DARK, LIGHT } = themes;

  function ChangeTheme(theme: string) {
    setTheme(theme === DARK ? LIGHT : DARK);
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === DARK ? LIGHT : DARK)
    );
  }

  return (
    <header>
      <h2>Todo</h2>
      <div className="icon_container">
        {theme === DARK ? (
          <IconButton onClick={() => ChangeTheme(theme)}>
            <WbSunnyOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => ChangeTheme(theme)}>
            <Brightness2OutlinedIcon />
          </IconButton>
        )}
      </div>
    </header>
  );
};

export default Header;
