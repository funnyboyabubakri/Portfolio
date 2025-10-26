import React from 'react'
import "./../styles/Education.css"; 

const Education = () => {
  return (
    <div>
      <section className="education-background" id="education">
        <div className="education-left">
          <div className="education-top">
            <p className='experience'>My Experince</p>
          </div>
          <div className="education-bottom">
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2022</p></em>
              <h1><mark className='mark'>Achievement:</mark> Frontend</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> HTML || CCS || JAVASCRIPT || REACT</span></i>
            </div>
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2023</p></em>
              <h1><mark className='mark'>Achievement:</mark> Backend</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> FIREBASE || MONGODB || NODE.js</span></i>
            </div>
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2024</p></em>
              <h1><mark className='mark'>Achievement:</mark> Fullstack</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> REACT.js || NODE.js || NEXT.js</span></i>
            </div>
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2025</p></em>
              <h1><mark className='mark'>Achievement:</mark> App Development</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> REACTNATIVE || NATIVEWIND</span></i>
            </div>
          </div>
        </div>
         <div className="education-right">
          <div className="education-top">
            <p className='experience'>My Education</p>
          </div>
          <div></div>
          <div className="education-bottom">
           <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2022</p></em>
              <h1><mark className='mark'>School:</mark> SQI College of ICT</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> HTML || CCS || JAVASCRIPT || REACT</span></i>
            </div>
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2023</p></em>
              <h1><mark className='mark'>School:</mark> SQI College of ICT</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> MONGODB || NODE.js || NEXT.js</span></i>
            </div>
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2024</p></em>
              <h1><mark className='mark'>School:</mark> Self-learned</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> REACTNATIVE || NATIVEWIND</span></i>
            </div>
            <div className="bottoms">
              <em><p><mark className='mark'>Year:</mark> 2025</p></em>
              <h1><mark className='mark'>School:</mark> Kwasu</h1>
              <i><span><mark className='mark'>Tech Stacks:</mark> Computer science || DSA</span></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education