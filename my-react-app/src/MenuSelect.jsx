import React from 'react';
import './MenuSelect.css';
function MenuSelect(props) {


    const openMenu = () => {
        console.log("Menu Select Clicked");
    }
  return (
    <>

        <div id ='menu-select' onClick={props.onClick}>
            <div id="color-bar"></div>
            <p>{props.text}</p>
        </div>

    </>
  );
}

export default MenuSelect;
