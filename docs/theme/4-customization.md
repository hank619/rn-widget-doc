# Customization

1. create a file named custom-theme.js and customize theme in it
   
  ```tsx title="custom-theme.js"
  import { customTheme } from 'rn-widget/lib/module/theme';
  customTheme({
    Colors: {
      primary: "xxx",
      primarLight: "xxx",
      black: "xxx",
      fog: "xxx",
    },
  });
  ```
2. import `custom-theme.js` in the entry of project
  :::tip
  Watch out that you would better import it at the most begining of the entry file to prevent protential bugs
  :::
  ```tsx title="index.js"
  import './custom-theme';
  ```