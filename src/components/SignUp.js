import React, {useState} from 'react'

const SignUp = () => {
    const[active,setActive]=useState("btn1")
  const handleActive =()=>{
    setActive('btn1')
  }
  const handleActiveBtn2 =()=>{
    setActive('btn2')
  }
  return (
    <div className='signInWrapper'>
      
                    
                    <div className='signup'>
                     <div className='signm'>
                        <p>&#xf177; </p>
                        <p className='john'>  johndoe@example.com</p>
                     </div>
                        <div className='buttons'>
                        <button onClick={handleActive} className={active ==='btn1'? 'activeBtn':''}>User</button>
                <button onClick={handleActiveBtn2} className={active ==="btn2"? "activeBtn":""}>Company</button>
                        
                        </div>
                        
                    </div>
                    <form>
                      <input className='fontAwesome' type='text'placeholder='&#xf2c0;Full name'/><br/>
                      <input className='fontAwesome' type='text'placeholder='&#xf0ac;Country'/><br/>
                      <input className='fontAwesome' type='text'placeholder='&#61450;Category &#xf141;'/><br/>
                      <input className='fontAwesome' type='text'placeholder='&#xf023;Password'/><br/>
                      <input className='fontAwesome' type='text'placeholder='&#xf023;Repeat Password'/><br/>
      
            <div className='check'>
                <input type='radio' id='remember' name='remember' value='remember me'/>
                <label for='remember'><small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                    </label>
                
            </div>
                
       
                      {/* <div className='checkwrapper'>
                <input type='radio' id='remember' name='remember' value='remember me'/>
                <label for='remember'>Yes, I understand and agree to the workwise Terms & Conditions.</label>
                
            </div> */}
           
                <button className='sign'>Get started</button>
      
            
                    </form>
                    

                  </div> 
  )
}

export default SignUp