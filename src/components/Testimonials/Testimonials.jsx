import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react'
import { motion } from 'framer-motion'
const Testimonials = () => {
    const transition = {type:'spring', duration: 3}
    const [person, setPerson] = useState(0)
    const length = testimonialsData.length;
    const leftClick = () => {
        if (person === 0) {
            setPerson(length - 1)
        } else {
            setPerson(person - 1)
        }
    }
    const rightClick = () => {
        if (person === length - 1) {
            setPerson(0)
        } else {
            setPerson(person + 1)
        }
    }
    return (
      <div className="testimonials" id='testimonials'>
          <div className="left-t">
              <span>TESTIMONIALS</span>
              <span className="stroke-text">WHAT THEY</span>
              <span>SAY ABOUT US</span>
                <motion.span
                    key={person}
                    initial={{opacity: 0, x:100}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{...transition, duration: 1}}
                >{testimonialsData[person].review}</motion.span>
                  <span className='viewer'>
                  <span>{ testimonialsData[person].name}</span> - {testimonialsData[person].status}
                  </span>
            </div>
            <div className="right-t">
                <motion.div
                    transition={{...transition, duration : 2}}
                    initial={{opacity : 0, x:-100 }}
                    whileInView={{opacity : 1, x: 0}}

                    className="border"></motion.div>
                <motion.div
                    initial={{opacity : 0, x:100 }}
                    transition={{...transition, duration : 2}}
                    whileInView={{opacity : 1, x: 0}}
                    className="back"></motion.div>
                <motion.img
                    key={person}
                    initial={{opacity: 0, x:100}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{...transition, duration: 1}}
                    src={testimonialsData[person].image} alt={testimonialsData[person].name} />
                <div className="arrows">
                    <img src={leftArrow} onClick={leftClick} alt="" />
                    <img src={rightArrow} onClick={rightClick} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Testimonials