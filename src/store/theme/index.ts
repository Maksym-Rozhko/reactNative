import { makeAutoObservable } from 'mobx';

export type ColorTheme = 'light' | 'dark';

class ThemeStore {
  constructor() {
    makeAutoObservable(this);
  }

  theme: ColorTheme = 'light';

  setTheme = (theme: ColorTheme) => {
    this.theme = theme;
  };
}

export default new ThemeStore();
