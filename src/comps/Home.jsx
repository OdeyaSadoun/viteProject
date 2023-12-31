import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto text-center my-5'>
      <h2 className='display-4'>Hello!</h2>
      <br></br>
      in this site you can build your cv!
      <br></br>
      try it now!
      <br></br>

      <a className='mx-2' href='/users/login'>Login now</a>

    </div>
  )
}

export default Home