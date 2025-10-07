/**
 * 🎨 Theme System
 * Each theme defines a consistent color palette across the app.
 * 
 * Usage Mapping:
 * ─────────────────────────────────────────────
 * background → Main content area (Main)
 * surface → Sidebar item hover background
 * primary → Header background
 * secondary → Active sidebar item highlight
 * text → Primary text color
 * textSecondary → Secondary text (muted labels, placeholders)
 * header → Optional gradient/accent behind header branding
 * sidebar → Sidebar background
 * footer → Footer background
 * hover → Generic hover backgrounds (buttons, table rows)
 * border → Border lines, table/grid dividers
 * accent → Accent elements (hover text color, link highlight, table hover)
 *
 * muiPalette → MUI integration colors (for buttons, dividers, etc.)
 * ─────────────────────────────────────────────
 */

const light = {
  name: 'light',
  colors: {
    background: '#f7f9fc',       // 🧱 Page content background (Main area)
    surface: '#ffffff',          // 🪟 Sidebar item hover background
    primary: '#1976d2',          // 🎩 Header background
    secondary: '#496886ff',      // 📚 Active sidebar menu highlight
    text: '#0f1724',             // 🖋️ Main text color
    textSecondary: '#5f6368',    // 🩶 Muted text (placeholders, sub-labels)
    header: '#6bb1a5ff',         // 💠 Optional header accent (currently unused)
    sidebar: '#2f7e6aff',        // 🧭 Sidebar background
    footer: '#428560ff',         // 📦 Footer background
    hover: '#e3f2fd',            // 🪶 Button/table hover background
    border: '#e0e0e0',           // 🧩 Borders (cards, tables, layout dividers)
    accent: '#6984b4ff',         // ✨ Accent color for hover text / table row hover
  },
  muiPalette: {
    divider: "#775aadff",        // MUI divider lines
    mode: 'light',
    primary: { main: '#1976d2' }, // Header background in MUI buttons
    secondary: { main: '#ff9800' },
  },
};

const dark = {
  name: 'dark',
  colors: {
    background: '#0b1220',       // Dark main content area
    surface: '#1a2234',          // Sidebar hover surface
    primary: '#90caf9',          // Header background (light blue)
    secondary: '#808f9bff',      // Active sidebar item
    text: '#e6eef8',             // Main text (light)
    textSecondary: '#9aa0a6',    // Dimmed text
    header: '#182231ff',         // Header accent (optional)
    sidebar: '#3b4355ff',        // Sidebar background
    footer: '#071025',           // Footer background
    hover: '#26394d',            // Generic hover
    border: '#2d3748',           // Dividers and table borders
    accent: '#9e7062ff',         // Accent for hover/table highlight
  },
  muiPalette: {
    divider: "#2d3748",
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
  },
};

const ocean = {
  name: 'ocean',
  colors: {
    background: '#e6f7ff',       // Light blue main area
    surface: '#ffffff',          // Sidebar hover background
    primary: '#0077b6',          // Header background (deep ocean blue)
    secondary: '#00b4d8',        // Active sidebar item
    text: '#023047',             // Main text (dark navy)
    textSecondary: '#4f6875',    // Muted text (cool gray)
    header: '#00b4d8',           // Header accent
    sidebar: '#0077b6',          // Sidebar background
    footer: '#0096c7',           // Footer background
    hover: '#caf0f8',            // Hover for table rows/buttons
    border: '#b3d9e6',           // Borders
    accent: '#ff5722',           // Accent / highlight color (orange)
  },
  muiPalette: {
    divider: "#b3d9e6",
    mode: 'light',
    primary: { main: '#0077b6' },
    secondary: { main: '#00b4d8' },
  },
};

const sunset = {
  name: 'sunset',
  colors: {
    background: '#fff5f5',       // Warm light pink background
    surface: '#ffe5d9',          // Sidebar hover background
    primary: '#ff6f61',          // Header background (coral red)
    secondary: '#815450ff',      // Active sidebar highlight
    text: '#3c1518',             // Main text (dark brown)
    textSecondary: '#6d4c41',    // Muted text
    header: '#cf9543ff',         // Header accent
    sidebar: '#ff6f61',          // Sidebar background
    footer: '#ff9f1c',           // Footer background (orange)
    hover: '#ffd7ba',            // Hover color for rows/buttons
    border: '#ffc8a2',           // Border color
    accent: '#c48572ff',         // Accent (hover text / active link)
  },
  muiPalette: {
    divider: "#4d2e18ff",
    mode: 'light',
    primary: { main: '#ff6f61' },
    secondary: { main: '#ff9f1c' },
  },
};

const forest = {
  name: 'forest',
  colors: {
    background: '#f1f8f6',       // Light green background for main content
    surface: '#ffffff',          // Sidebar hover background
    primary: '#2e7d32',          // Header background (deep green)
    secondary: '#648866ff',      // Active sidebar item
    text: '#1b4332',             // Main text
    textSecondary: '#4e6151',    // Muted text
    header: '#a5d6a7',           // Header accent (optional)
    sidebar: '#2e7d32',          // Sidebar background
    footer: '#a5d6a7',           // Footer background
    hover: '#87a862ff',          // Hover (rows/buttons)
    border: '#af7564ff',         // Border color
    accent: '#af7564ff',         // Accent hover color
  },
  muiPalette: {
    divider: "#c8e6c9",
    mode: 'light',
    primary: { main: '#2e7d32' },
    secondary: { main: '#a5d6a7' },
  },
};

const neon = {
  name: 'neon',
  colors: {
    background: '#0f0f1e',       // Very dark background
    surface: '#1a1a2e',          // Sidebar hover surface
    primary: '#ff00ff',          // Header background (neon pink)
    secondary: '#816581ff',      // Active sidebar highlight
    text: '#e0e0ff',             // Main text (light violet)
    textSecondary: '#9a9abc',    // Muted text
    header: '#1a1a2e',           // Header accent
    sidebar: '#0f0f1e',          // Sidebar background
    footer: '#1a1a2e',           // Footer background
    hover: '#2e2e46',            // Hover background
    border: '#ff5722',           // Divider color
    accent: '#ff5722',           // Accent / highlight color
  },
  muiPalette: {
    divider: "#39395a",
    mode: 'dark',
    primary: { main: '#ff00ff' },
    secondary: { main: '#00e5ff' },
  },
};

export default { light, dark, ocean, sunset, forest, neon };


