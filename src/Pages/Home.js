import React from 'react'
import movie from '../assets/Movie.jpg'
import {Link} from 'react-router-dom'
function Home() {
    let mov={
        backgroundImage: `url(${movie})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '130vh'
    }
    let fi={
        textDecoration:'none',
        color:'white',
        padding:'10px',
        backgroundColor:'red',
        marginTop:'450px'    
    }
  return (
    <div style={mov}>
        <Link to="/Trending" ><button style={fi}>Start Watching</button></Link>
    </div>
  )
}

export default Home


