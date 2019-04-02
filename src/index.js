import React from 'react';
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import CharacterSheet from "./Components/Character/CharacterSheet";
import store from "./js/store/index";
import Header from './Components/UIComponents/Header'; 


window.store = store;
function Layout (){  
  return (
    <Provider store={store}>
      <div className="Layout">
        <Header />
        <CharacterSheet /> 
      </div>
    </Provider>
  ); 
}

ReactDOM.render(
  React.createElement(Layout, null),
  document.getElementById("app")
);

module.hot.accept();
