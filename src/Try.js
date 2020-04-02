import React, { Component } from 'react';
import './Try.scss';
import Aux from './hoc/Aux';

class Try extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Aux>
                 <div className="container">
  <div className="components">
    
    <div className="switch">
      <div className="switch__1">
        <input id="switch-1" type="checkbox"/>
        <label for="switch-1"></label>
      </div>
      
      <div className="switch__2">
        <input id="switch-2" type="checkbox" checked />
        <label for="switch-2"></label>
      </div>
    </div>
    
    <div className="checkbox">
      <div className="checkbox__1">
        <input id="checkbox-1" type="checkbox"/>
        <label for="checkbox-1">
          <i className="material-icons">done</i></label>
      </div>
      <div className="checkbox__2">
        <input id="checkbox-2" type="checkbox" checked />
        <label for="checkbox-2">
          <i className="material-icons">done</i></label>
      </div>
    </div>
    
    <div className="radio">
      <div className="radio__1">
        <input id="radio-1" type="radio"  name="radio" value="1" />
        <label for="radio-1"></label>
      </div>
      
      <div className="radio__2">
        <input id="radio-2" type="radio" name="radio" value="2" checked />
        <label for="radio-2"></label>
      </div>
    </div>
    
    <div className="btn btn__primary"><p>Button</p></div>
    <div className="btn btn__secondary"><p>Button</p></div>
    
    <div className="clock">
      <div className="hand hours"></div>
      <div className="hand minutes"></div>
      <div className="hand seconds"></div>
      <div className="point"></div>
      <div className="marker">
        <span className="marker__1"></span>
        <span className="marker__2"></span>
        <span className="marker__3"></span>
        <span className="marker__4"></span>
      </div>
    </div>
    
    <div className="chip">
      <div className="chip__icon">
        <ion-icon name="color-palette"></ion-icon></div>
      <p>Neumorphic Design</p>
      <div className="chip__close">
        <ion-icon name="close"></ion-icon>
      </div>
    </div>
    
    <div className="circle">
      <span className="circle__btn">
        <ion-icon className="pause" name="pause"></ion-icon>
        <ion-icon className="play" name="play"></ion-icon>
      </span>
      <span className="circle__back-1"></span>
      <span className="circle__back-2"></span>
    </div>
    
    <div className="form">
      <input type="text" className="form__input" placeholder="Type anything..."/>
    </div>
    
    <div className="search">
      <input type="text" className="search__input" placeholder="Search..."/>
      <div className="search__icon">
        <ion-icon name="search"></ion-icon>
      </div>
    </div>
    
    <div className="segmented-control">
      
      <input type="radio" name="radio2" value="3" id="tab-1" checked/>
      <label for="tab-1" className= "segmented-control__1">
        <p>Tab 1</p></label>
      
      <input type="radio" name="radio2" value="4" id="tab-2" />
      <label for="tab-2" className= "segmented-control__2">
        <p>Tab 2</p></label>
      
      <input type="radio" name="radio2" value="5" id="tab-3" />
      <label for="tab-3" className= "segmented-control__3">
        <p>Tab 3</p></label>
      
      <div className="segmented-control__color"></div>
    </div>
    
    <div className="icon">
      <div className="icon__home">
        <ion-icon name="home"></ion-icon></div>
      <div className="icon__account">
        <ion-icon name="person"></ion-icon></div>
      <div className="icon__settings">
        <ion-icon name="settings"></ion-icon></div>
    </div>
    
    <div className="slider">
      <div className="slider__box">
        <span className="slider__btn" id="find"></span>
        <span className="slider__color"></span>
        <span className="slider__tooltip">50%</span>
      </div>
    </div>
  </div>
  <a href="https://dribbble.com/myacode" className="dribbble" target="_blank"><ion-icon name="logo-dribbble"></ion-icon></a>
</div>
            </Aux>
           
         );
    }
}
 
export default Try;