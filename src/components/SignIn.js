import React from 'react'
import Social from './Social'

const SignIn = () => {
  return (

    <div className='signInWrapper'>
        <h4>Sign In</h4>
            <span></span>
            <form>
                <input className='fontAwesome '  type='text' placeholder= '&#xf2c0; Username'/><br/>
                <input type='password' placeholder=' &#xf023; Password'/>
            </form>
        <div className='rememberActionWrapper'>
            <div className='checkwrapper'>
                <input type='radio' id='remember' name='remember' value='remember me'/>
                <label for='remember'>Remember me</label>
                
            </div>
                <p>Forgot Password?</p>
        </div>
        <div className='sign'>
            <p>Sign in</p>
        </div>
        
        <Social/>
    </div>
  )
}

export default SignIn
