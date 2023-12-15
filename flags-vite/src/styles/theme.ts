// my-theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    background: '#F5F5F7',
    backgroundLight: '#ffffff',
    backgroundDark: '#e2e2e2',
    text: '#1d1d1f',
    main: '#6e6e73',
    secondary: '#e30000',
  },

  shadow: '2px 4px 12px rgba(0, 0, 0, 0.08)',
  hoverShadow: '2px 4px 16px rgba(0, 0, 0, 0.16)',
  hoverTransform: 'scale3d(1.01, 1.01, 1.01)',
  transition: 'all 0.3s cubic-bezier(0, 0, 0.5, 1)',
};

export { theme };
