import React from 'react';
import {useSpring,animated} from 'react-spring';
import logo from '/images/YS_icon.png';
import './App.css';

let ReactImage = () => {
    let reactProps = useSpring({
        from: {marginLeft: 1000, marginTop: 1000, opacity:0},
        to: {marginLeft: 0, marginTop:0, opacity:1}       
      })

    return (
    <animated.img className="App-logo" style={reactProps} src={logo} alt="logo"/>
    )

}

export default ReactImage
