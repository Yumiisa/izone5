import React from 'react'

const Social = () => {
  return (
    <div className='socialWrapper1'>
        <div className='log'>
            <p>Login via social account</p>
        </div>
    
     <div className='socialWrapper'>
    <button className='btn'><i class="fa fa-facebook" aria-hidden="true"></i> Login via facebook</button>
    <button className='btn1'><i className="fa fa-twitter" aria-hidden="true"></i> Login via twitter</button>
    </div>
</div>
  )
}

export default Social