import React from 'react'
import Navbar from "../components/Navbar/Navbar.jsx";
import ParentLoader from "../components/loading/parentLoader.jsx";
const Home = () => {
  return (<div>
    <ParentLoader />
    <div className="flex  h-screen w-full bg-gray-900">
    <Navbar/>
    </div>

    </div>
  )
}

export default Home;
