import React from 'react'
import styled from 'styled-components'

export default class RippleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        waveRipple: null, 
        hover: false
      };
    };
    
    clickHdl(event) {
      let container = this.refs.containerDiv.getDOMNode().getBoundingClientRect();
      let left = (event.clientX - container.left);
      let top = (event.clientY - container.top);
      
      let rippleStyle = {
        animation: "pulsate 1s ease-in-out",
        animationDuration: "1000ms",
        animationIterationCount: "1",
        position: "absolute",
        opacity: "0",
        left: left,
        top: top,
        height: "100px",
        width: "100px",
        marginTop: "-50px",
        marginLeft: "-50px",
        borderRadius: "50%",
        background: "radial-gradient(rgba(255,255,255,.2) 0,rgba(255,255,255,.3) 40%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.5) 60%,rgba(255,255,255,0) 70%)"
      };
      
      let waveRipple = <div style={rippleStyle}/>;
      let timer = setTimeout(this.removeRipple.bind(this), 1000);
      this.setState({waveRipple, timer});
    }
    removeRipple() {
      this.setState({waveRipple: null, timer: null})
    }
    toggleHover(){
      this.setState({hover: this.state.hover})
    }
    render () {
      let buttonStyle = {
        background: !this.state.hover ? "#4285F4": null,
        fontSize: ".8rem",
        padding: ".85rem",
        borderRadius: "2px",
        border: "0px",
        color: "#fff!important",
        margin: "6px",
        whiteSpace: "normal!important",
        wordWrap: "break-word",
        textTransform: "uppercase",
        boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)",
        
        width: "119px",
        height: "41px",          
      }
      let waveEffect = {
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        userSelect: "none",
        zIndex: "1" 
      }
      
      return (
        <WrapperRipple>
          <button ref="containerDiv" type="button" style={Object.assign({}, buttonStyle, waveEffect)} onMouseDown={this.clickHdl.bind(this)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
            Test Button
            {this.state.waveRipple}
          </button>
        </WrapperRipple>
      );
    }
  }

const WrapperRipple = styled.div`
    @keyframes pulsate {
    0% {transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {transform: scale(7, 7); opacity: 0.0;}
}`