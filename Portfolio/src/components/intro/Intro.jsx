import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            backSpeed:60,
            showCursor:true,
            strings: ["Front-end", "Back-end" ] 
        });
    }, []);
    return (
        <div className ="intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man2.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome, I'm</h2>
                    <h1>Alberto Canales</h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                </div>
                <a href="#works">
                <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
