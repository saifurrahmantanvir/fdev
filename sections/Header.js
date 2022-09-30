import React from 'react'
import Navbar from 'widgets/Navbar'
import HeroCover from 'widgets/HeroCover'
import HeroContent from 'widgets/HeroContent'

// kumbh-sans 600 700
// cabin
// josefin-sans 600

const Header = () => {
   return (
      <header className="section">
         <Navbar />
         <HeroContent />
         <HeroCover />
      </header>
   )
}

export default Header