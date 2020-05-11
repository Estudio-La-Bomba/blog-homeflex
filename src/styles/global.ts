import { createGlobalStyle } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default createGlobalStyle`* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
 background: #FCFDFF;
 color: #505050;
 -webkit-font-smoothing: antialiased;
}

body, input, button {
 font-size: 16px;
 font-family: 'Poppins', sans-serif;
 font-weight: 400;
}

button {
 cursor: pointer;
}

`;
