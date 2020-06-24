import React from 'react'

function SuccessBlock() {
  return (
    <div className="center success-content">
      <div>
        <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m24 4c-11.05 0-20 8.95-20 20 0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30-10-10 2.83-2.83 7.17 7.17 15.17-15.17 2.83 2.83z" fill="#4caf50"/></svg>
        <div className="success-block">
          Logged In Successfully
        </div>
      </div>
    </div>
  )
}

export default SuccessBlock;
