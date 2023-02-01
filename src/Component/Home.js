import React from 'react'
import Sidebar from '../Pages/Sidebar'
import Chat from "../Pages/Chat";

const Home = () => {
  return (
    <>
   <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>


    </>
  )
}

export default Home