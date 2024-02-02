import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your E-mail </h1>
      <p>Subscribe to or news letter and stay updated</p>
      <div>
        <input type="email" placeholder='Your E-mail id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
