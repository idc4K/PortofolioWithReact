import Home from "../Components/Home/Home";
export default class Animation{
    static animations = new Animation();

    fadeInscreen = (Home) =>{
        let screen = document.getElementById(Home);
        if(!Home || !screen)
        return
        screen.style.opacity = "5"
        screen.style.transform ="translateY(1px)"
    }
}