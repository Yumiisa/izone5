import React, {useState} from 'react'
import wklogo from '../components/images/wklogo.png'
import logo from "../components/images/logo.png"
import { Link } from 'react-router-dom'
const Work = () => {
    const[active,setActive]=useState("btn1")
  const handleActive =()=>{
    setActive('btn1')
  }
  const handleActiveBtn2 =()=>{
    setActive('btn2')
  }
  return (
    <div className='container'>
         <div className='upperCircContainer'>
           <div className='innerUpperCircContainer'>
              <div >
                <div className='topCirc  topCirc2'></div> 
                <div className='topCirc  topCirc1'></div>
              </div>
           </div>
          </div> 
          <div className='logoWrapper'>
            
           
                <img src={wklogo} alt=""/>
               <div className='work'>
                    <p>Workwise, is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                </div>
                
              </div>
              <div className='act'>
                <Link onClick={handleActive} className={active ==='btn1'? 'activeBtn':''} to="/sign">Sign in</Link>
             <Link onClick={handleActiveBtn2} className={active ==="btn2"? "activeBtn":""} to="/signup">sign up</Link>
              </div>
            <div className='mylogo'>
                <img src={logo} alt="logo"/>
            </div>
       
    </div>
  )
}

export default Work