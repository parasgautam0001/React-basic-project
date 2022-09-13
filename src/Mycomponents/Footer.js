import React from 'react'
import Inst from '@mui/icons-material/Instagram'
import Fac from '@mui/icons-material/Facebook'
import Twit from '@mui/icons-material/Twitter'
export default function Footer() {
    let FootStyle={
        position:"absolute",
        width:"100%",
        border:"5px solid green",
        top:"150vh"
    }
  return (
    <footer className='bg-dark text-light py-3' style={FootStyle}>
      <p>
        <div><Inst/>zee@4.0</div>
        <div><Fac/> Zee4.0</div>
        <div><Twit/> @Zee4.0</div>
        Copyright &copy; Zee.com
      </p>
    </footer>
  )
}
