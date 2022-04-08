import Button from './Button';
import React from 'react';
import bgHero from '../images/img_car.png'
import './styles/Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5 ps-4 my-4 hero-left">
              <p className="h1 fw-bold">Sewa & Rental Mobil Terbaik di Kawasan Bekasi</p>
              <p className="text-p my-4">Selamat Datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                  Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Button>Sewa Sekarang</Button>
            </div>
            <div className="col mt-4 pe-0">
                <img src={bgHero} className="img-fluid float-end car-img" alt="hero"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero