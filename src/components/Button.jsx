import React from 'react'
import './styles/Button.css'

const Button = ({children, width}) => {
  return (
    <div className='Button'>
        <a type="button" className="btn btn-success button-nav" href="#">{children}</a>
    </div>
  )
}

export default Button