// theme.js

const light = {
  name: 'light',
  colors: {
    background: '#f7f9fc',
    surface: '#ffffff',
    primary: '#1976d2',
    secondary: '#ff9800',
    text: '#0f1724',
    textSecondary: '#5f6368',
    header: '#ffffff',
    sidebar: '#ffffff',
    footer: '#ffffff',
    hover: '#e3f2fd',
    border: '#e0e0e0',
    accent: '#ff5722',
  },
  muiPalette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#ff9800' },
  },
};

const dark = {
  name: 'dark',
  colors: {
    background: '#0b1220',
    surface: '#1a2234',
    primary: '#90caf9',
    secondary: '#f48fb1',
    text: '#e6eef8',
    textSecondary: '#9aa0a6',
    header: '#09101a',
    sidebar: '#071025',
    footer: '#071025',
    hover: '#26394d',
    border: '#2d3748',
    accent: '#ff5722',
  },
  muiPalette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
  },
};

const ocean = {
  name: 'ocean',
  colors: {
    background: '#e6f7ff',
    surface: '#ffffff',
    primary: '#0077b6',
    secondary: '#00b4d8',
    text: '#023047',
    textSecondary: '#4f6875',
    header: '#00b4d8',
    sidebar: '#0077b6',
    footer: '#0096c7',
    hover: '#caf0f8',
    border: '#b3d9e6',
    accent: '#ff5722',
  },
  muiPalette: {
    mode: 'light',
    primary: { main: '#0077b6' },
    secondary: { main: '#00b4d8' },
  },
};

const sunset = {
  name: 'sunset',
  colors: {
    background: '#fff5f5',
    surface: '#ffe5d9',
    primary: '#ff6f61',
    secondary: '#ff9f1c',
    text: '#3c1518',
    textSecondary: '#6d4c41',
    header: '#ff9f1c',
    sidebar: '#ff6f61',
    footer: '#ff9f1c',
    hover: '#ffd7ba',
    border: '#ffc8a2',
    accent: '#ff5722',
  },
  muiPalette: {
    mode: 'light',
    primary: { main: '#ff6f61' },
    secondary: { main: '#ff9f1c' },
  },
};

const forest = {
  name: 'forest',
  colors: {
    background: '#f1f8f6',
    surface: '#ffffff',
    primary: '#2e7d32',
    secondary: '#a5d6a7',
    text: '#1b4332',
    textSecondary: '#4e6151',
    header: '#a5d6a7',
    sidebar: '#2e7d32',
    footer: '#a5d6a7',
    hover: '#dcedc8',
    border: '#c8e6c9',
     accent: '#ff5722',
  },
  muiPalette: {
    mode: 'light',
    primary: { main: '#2e7d32' },
    secondary: { main: '#a5d6a7' },
  },
};

const neon = {
  name: 'neon',
  colors: {
    background: '#0f0f1e',
    surface: '#1a1a2e',
    primary: '#ff00ff',
    secondary: '#00e5ff',
    text: '#e0e0ff',
    textSecondary: '#9a9abc',
    header: '#1a1a2e',
    sidebar: '#0f0f1e',
    footer: '#1a1a2e',
    hover: '#2e2e46',
    border: '#39395a',
     accent: '#ff5722',
  },
  muiPalette: {
    mode: 'dark',
    primary: { main: '#ff00ff' },
    secondary: { main: '#00e5ff' },
  },
};

export default { light, dark, ocean, sunset, forest, neon };
