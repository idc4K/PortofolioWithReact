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
    scrollToHome = ()=>{
        let homeScreen = document.getElementById('Home')
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behvior: "smooth"})    
    }
    is ElementInView = (elem,type)=>{
        let rec = elem.getBoundingClientRect()
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;
        let partiallyVisible = element<window.innerHeight && elementBottom >=0;
        let completVisible = elemenTop>=0 && elementBottom<=window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible
            case "complete":
                return completVisible
            default:
                return false 
                
                break;
        
            default:
                break;
        }
    }

    checkCurrentScreenUnderViewport = (even)=>{
        if(!event || Object.keys(event).length <1)
        return;

        for(let screen of Home){
            let screenFromDom = document.getElementById(screen.Home)
            if(!screenFromDom)
            continue;

            let fullyVisible = this.isElementInView(screenFromDom,"complete")
            let partiallyVisible = this.isElementInView(screenFromDom,"partial")


            if(fullyVisible|| partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered)
                {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.Home
                    });
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBoardCaster.next({
                        screenInView: screen.Home
                    });
                    break;
                }
            }

        }
    }
}