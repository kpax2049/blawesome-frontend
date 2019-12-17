import { decorate, observable, action } from 'mobx';

class ThemeStore {
  DARK_THEME = 'bp3-dark';

  LIGHT_THEME = 'bp3-light';

  constructor() {
    this.themeName = localStorage.getItem('theme') || this.DARK_THEME;
  }

  setTheme(themeName) {
    this.themeName = themeName;
    localStorage.setItem('theme', themeName);
  }
}

decorate(ThemeStore, {
  themeName: observable,

  setTheme: action,
});

export default new ThemeStore();
