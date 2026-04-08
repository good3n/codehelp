import { atom } from 'nanostores';

// create theme atom with default value
export const themeStore = atom('dark');

// initialize from localStorage on client
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  themeStore.set(savedTheme);

  // sync localStorage and DOM whenever theme changes
  themeStore.subscribe(theme => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  });
}
