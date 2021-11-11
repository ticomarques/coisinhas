import styled from 'styled-components';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export const SlidingMenu = () => {

    const [ state, setState ] = useState({ open: false });


    const toggleMenu = () => {
        setState({ open: !state.open });
    }

    const linksArray = [
        { name: "home", url: "#" },
        { name: "log in", url: "#" },
        { name: "photos", url: "#" },
        { name: "contact", url: "#" },
        { name: "download", url: "#" }
    ];
 
    const Button = () => {
          return (
            <button 
                className={state.open 
                ? "menu-toggle close-button" 
                : "menu-toggle "}
                onClick={toggleMenu}
            > <i className="fa fa-plus"></i>
            </button>
        );  
    };

    const Panel = () => {
          return (
             <div 
                className={state.open 
                ? "menu-wrapper menu-open" 
                : "menu-wrapper"}
             >

             <Links 
               links={linksArray} 
               open={state.open} 
             />

             <Social 
               open={state.open}
             />
           </div>
        );
    };

    const Links = () => {
          const linkList = linksArray.map((link, k) => (
          <li className="link" key={k}>
            <a href={link.url}>{link.name}</a>
          </li>
        ));
       
        return (
            <div 
                className={state.open 
                ? "links-wrapper"
                : "links-wrapper links-wrapper-closed"}
            >   
                <ul className="link-list">
                    {linkList}
                </ul>
            </div>
        );
    };

    const Social =  () => {
          return (
            <div 
                className={state.open 
                ? "social-wrapper social-open"
                : "social-wrapper social-closed"}
            > 
                <a href='https://github.com/matthewvincent'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href='https://www.instagram.com/middlestates/'>
                    <FontAwesomeIcon icon= {faGooglePlusG} />
                </a>
                <a href='http://matthewvincentphotography.com/'>
                    <FontAwesomeIcon icon= {faLinkedinIn} />
                </a>

          </div>
        );
    };



    return(
        <WrapperSlidingMenu>
            <Panel 
            open={state.open} 
            links={linksArray} 
            />
            <Button 
            toggle={toggleMenu} 
            open={state.open} 
            />
        </WrapperSlidingMenu>
    )
}

const WrapperSlidingMenu = styled.div`
    background: rgba(241, 206, 184, 1);
    background: 
        linear-gradient(
        -45deg, 
        rgba(241, 206, 184, 1) 0%, 
        rgba(142, 186, 163, 1) 100%
    );
    background: 
        linear-gradient(
        -45deg, 
        rgba(241, 206, 184, 1) 0%, 
        rgba(142, 186, 163, 1) 100%
    );
    font-family: "helvetica neue", helvetica;
    font-weight: light;
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .menu-wrapper {
        height: 600px;
        width: 250px;
        background-color: rgba(255, 255, 255, .8);
        margin-left: -450px;
        margin-top: -10px;
        opacity: 0;
        -box-shadow: 10px 10px 6px -8px rgba(161, 136, 119, .7);
        transition: all .3s ease-in-out;
        border-radius: 2px;
        padding: 0 auto;
        border-right: 1px solid rgba(0, 0, 0, .2);
        border-bottom: 1px solid rgba(0, 0, 0, .2);
      }
      
      .menu-open {
        margin-left: 0px;
        opacity: 1;
      }
      
      .menu-toggle {
        cursor: pointer;
        position: absolute;
        z-index: 1000;
        top: 0;
        margin: 20px;
        padding: 0px;
        height: 50px;
        width: 50px;
        font-size: 20px;
        color: rgba(0, 0, 0, .5);
        font-weight: bold;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .8);
        transform: rotate(0deg);
        transition: all .2s ease-in;
        border: 0 none;
      }
      
      .menu-toggle:hover {
        cursor: pointer;
        transform: scale(1.1) rotate(0deg);
        -box-shadow: 10px 2px 8px -8px rgba(179, 164, 139, .6);
      }
      
      .menu-toggle:focus {
        cursor: pointer;
        outline: 0 none;
      }
      
      .close-button {
        cursor: pointer;
        transform: rotate(45deg);
        background-color: rgba(109, 163, 140, 1);
        -box-shadow: 10px 2px 8px -8px rgba(179, 164, 139, .6);
      }
      
      .close-button:hover {
        transform: scale(1.1) rotate(45deg);
      }
      
      .links-wrapper {
        margin: 10px;
        padding: 10px;
        text-align: right;
        opacity: 1;
        transition: all .7s ease-out;
        transition-delay: .3s;
        letter-spacing: 2px;
      }
      
      .links-wrapper-closed {
        padding-top: 50px;
        opacity: 0;
        letter-spacing: 0px;
      }
      
      .link-list {
        padding-top: 90px;
        padding-right: 25px;
        padding-left: 25px;
      }
      
      .link-list li {
        list-style-type: none;
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 30px;
        border-bottom: 2px solid rgba(0, 0, 0, .5);
        padding: 3px;
      }
      
      .link-list a {
        text-decoration: none;
        color: rgba(0, 0, 0, .5);
        transition: color .3s ease;
      }
      
      .link-list a:hover {
        color: rgba(0, 0, 0, .3);
      }
      
      .social-wrapper {
        margin-top: 100px;
        text-align: center;
        padding: 0 auto;
      }
      
      .social-wrapper a {
        margin: 4px;
        font-size: 24px;
        color: rgba(0, 0, 0, .5);
        transition: color .3s ease;
      }
      
      .social-wrapper a:hover {
        color: rgba(0, 0, 0, .3);
      }
      
      .social-open {
        opacity: 1;
        transition: opacity .7s ease-out;
        transition-delay: .3s;
      }
      
      .social-closed {
        opacity: 0;
        transition: opacity .3s ease-out;
      }

`