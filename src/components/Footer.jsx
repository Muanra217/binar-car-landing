import React from 'react'
import './styles/Footer.css'
import facebook from '../images/icon_facebook.png'
import instagram from '../images/icon_instagram.png'
import mail from '../images/icon_mail.png'
import twitch from '../images/icon_twitch.png'
import twitter from '../images/icon_twitter.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <footer className="container my-5">
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <a href="mailto:binarcarrental@gmail.com" className="text-decoration-none text-body">binarcarrental@gmail.com</a>
                    <p className="mt-4">081-233-334-808</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2 mt-5">
                    <ul className="ps-0">
                    <li className="mb-4"><a href="#our-service" className="text-body text-decoration-none">Our Services</a></li>
                    <li className="mb-4"><a href="#why-us" className="text-body text-decoration-none">Why Us</a></li>
                    <li className="mb-4"><a href="#testimonial" className="text-body text-decoration-none">Testimonial</a></li>
                    <li className="mb-4"><a href="#faq" className="text-body text-decoration-none">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <p>Connect with us</p>
                    <div className="media-foot">
                        <a href="#" className="me-5 me-md-4"><img src={facebook} className="mb-4" alt="icon facebook"/></a>
                        <a href="#" className="me-5 me-md-4"><img src={instagram} className="mb-4" alt="icon instagram"/></a>
                        <a href="#" className="me-5 me-md-4"><img src={mail} className="mb-4" alt="icon mail"/></a>
                        <a href="#" className="me-5 me-md-4"><img src={twitter} className="mb-4" alt="icon twitter"/></a>
                        <a href="#" className="me-5 me-md-4"><img src={twitch} className="mb-4" alt="icon icon_twitch"/></a>
                    </div>
                    
                </div>
                <div className="col-sm-12 col-md-6 col-lg-2 mt-5">
                    <p className="mb-0">Copyright Binar 2022</p>
                    <a className="navbar-brand logo" href="#">BCR</a>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer