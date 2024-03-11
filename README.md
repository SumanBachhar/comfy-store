# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  <!-- form theme change -->

const themes = {
winter: "winter",
dracula: "dracula",
};
const getThemeFromLocalstorage = () => {
localStorage.getItem("theme") || themes.winter;
};

<!-- under function component -->

const handleTheme = () => {
const { winter, dracula } = themes;
const newTheme = theme === winter ? dracula : winter;
document.documentElement.setAttribute("data-theme", theme);
setTheme(newTheme);
};

useEffect(() => {
localStorage.setItem("theme", theme);
}, [theme]);
