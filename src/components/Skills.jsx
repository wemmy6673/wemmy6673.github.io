import Css from '../images/css.png';
import Html from '../images/html.png';
import Javascript from '../images/javascript.png';
import React from '../images/react.png';
import Tailwind from '../images/tailwind.png';
const Skills = () => {

    return(
        <div className="w-full py-8 md:py-20">
        <h1 className='px-20 text-3xl text-center md:text-left'>Stack</h1>
        <div className="grid grid-cols-2 gap-3 p-8 md:gap-6 md:py-6 md:px-20 md:w-[70%] lg:w-[50%]">
            <div className="bg-blue-400 px-3 py-3 flex flex-row md:justify-between lg:justify-between items-center rounded-lg">
                <p className="text-lg text-white">CSS</p>
                <img src={Css} alt='css'/>

            </div>
            <div className="bg-cyan-200 px-3 py-3 rounded-lg flex flex-row md:justify-between items-center ">
                <p className="text-lg text-white">TAILWIND</p>
                <img src={Tailwind} alt='tailwind'/>

            </div>
            <div className="bg-green-500 px-3 py-3 rounded-lg flex flex-row md:justify-between items-center ">
                <p className="text-lg text-white">JS</p>
                <img src={Javascript} alt='javascript'/>

            </div>
            <div className="bg-orange-600 px-3 py-3 rounded-lg flex flex-row md:justify-between items-center ">
                <p className="text-lg text-white">REACT</p>
                <img src={React} alt='react'/>

            </div>
            <div className="bg-lime-500 px-3 py-3 rounded-lg flex flex-row md:justify-between items-center ">
                <p className="text-lg text-white">HTML</p>
                <img src={Html} alt='html'/>

            </div>

        </div>
        </div>
    )
}

export default Skills;