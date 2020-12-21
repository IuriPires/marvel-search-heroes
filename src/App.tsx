import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./global/styles/globals";

import Routes from "./routes";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
