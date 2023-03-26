import React from 'react'
import {useState, useEffect} from 'react'
import './BackToTop.css'

export default function BackToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            
            if(window.scrollY > 400){
                
                setBackToTopButton(true)
            }else {

                setBackToTopButton(false)}
        })
    }, [])

    const scrollUp = () => {
        console.log('hello')
        window.scrollTo(
            {
                top :0,
                behavior: "smooth"
            }
        )

    }
  return (
    <>
        {
            backToTopButton && (
                <button className = "scroll btn btn-outline-info" onClick={() => {scrollUp()}}> ^ </button>
            )
        }
    </>
  )
}
