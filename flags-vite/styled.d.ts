// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundLight: string;
      text: string;
      main: string;
      secondary: string;
    };
    shadow: string;
    hoverShadow: string;
    hoverTransform: string;
    transition: string;
  }
}
