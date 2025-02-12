import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the default home page. You can customize it by editing the Home.js file.</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

export default Home
