import React from 'react'
import ScrollVelocity from "../Component/ScrollVelocity/Scroll";

export default function ScrollVelocityLayout() {
  return (
    <div className='my-10 overflow-x-hidden'>
       <ScrollVelocity
        texts={["Fullstack Developer", "Fullstack Developer"]}
        velocity={100}
        className="custom-scroll-text"
      />
    </div>
  )
}
