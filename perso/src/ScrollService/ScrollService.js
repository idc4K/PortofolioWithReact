import Home from "../Components/Home/Home";
import {Subject} from "rxjs";

export default class ScrollService{
    static scrollhandler = new ScrollService()

    static currentScreenBoardCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', checkCurrentScreenUnderViewport)
    }
    scrollToHireMe = ()=>{
        let contactMeScreen = document.getElementById('Contact Me')
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behvior: "smooth"})    
    }
}