import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'




export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}><h5>Hello, myname is </h5> <b> Pankaj Gupta </b><br /> <h4> And I'm a <span style={{color:"crimson"}}>Software Enginner</span> </h4></h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>About me</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Self Motivated web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Skills </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        HTML   CSS  JAVASCRIPT  REACTJS  NODEJS  MONGODB   BOOTSRAP OS  DBMS   OOPS   DSA
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Contact me </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <a class="btn" href="https://linkedin.com/in/PankajGupta2025" target="_blank"> 
                    <FontAwesomeIcon icon={faLinkedin} style={{
  fontSize: "1.5em",
  boxShadow: "0 0 0 2px #ccc",color: props.mode ==='dark'?'white':'#042743',}} /></a> 

                    <a class="btn" href="mailto:guptapankaj6363@gmail.com" target="_blank"> 
                    <FontAwesomeIcon icon={faGoogle} style={{
  fontSize: "1.5em",
  boxShadow: "0 0 0 2px #ccc",color: props.mode ==='dark'?'white':'#042743',}} /></a> 

                    <a class="btn" href="https://www.instagram.com/pankajgupta_25/" target="_blank"> 
                    <FontAwesomeIcon icon={faInstagram} style={{
  fontSize: "1.5em",
  boxShadow: "0 0 0 2px #ccc",color: props.mode ==='dark'?'white':'#042743',}} /></a> 
                    <a class="btn" href="https://twitter.com/PnkajGupta1" target="_blank"> 
                    <FontAwesomeIcon icon={faTwitter} style={{
  fontSize: "1.5em",
  boxShadow: "0 0 0 2px #ccc",color: props.mode ==='dark'?'white':'#042743',}} /></a> 

                    </div>

                    </div>
                </div>
                    <div className="hire my-3"><a href="https://drive.google.com/file/d/1_GnyRR2mXoOm8ngHr1IHiYDLx2SqxPJg/view?usp=share_link" class="btn btn-info" role="button"target="_blank">Hire Me</a></div>
            </div>

        </div>
    )
}
