import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'PT Sans', sans-serif;
  }

  h2 {
    font-size: 52px;
    font-weight: 700;
    line-height: 60px;
  }
  
  p {
    color: #7A7A7A;
    font-size: 18px;
    font-weight: 400;
    margin: 0px 0 16px 0;
  }

  small {
    color: #7A7A7A;
    display: block;
    font-size: 16px;
  }
`;

