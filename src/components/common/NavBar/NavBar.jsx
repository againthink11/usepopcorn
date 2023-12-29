import React from 'react'
import Logo from '../Logo/Logo';
import NumResults from '../NumResults/NumResults';
import SearchBox from '../SearchBox/SearchBox';

const NavBar = ({movies}) => {
  return (
    <nav className="nav-bar">
        <Logo />
        <SearchBox/>
        <NumResults movies={movies}/>
      </nav>
  )
}

export default NavBar