import React from 'react'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>ORIGIN TRIBE</h1>
                <p>Choose us to help nature. </p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-youtube-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
                <a href='/'>Links</a>
            </div>
        </div>
    </div>
  )
}

export default Footer