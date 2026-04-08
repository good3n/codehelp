// inline script to prevent flash of unstyled content (FOUC)
const script = `
(function() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.dataset.theme = theme;
})();
`;

export default script;
