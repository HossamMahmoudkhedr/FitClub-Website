import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const [mobile, setMobile] = useState(false)
    window.onload = () => {
        const mobilei = window.innerWidth <= 768 ? true : false;
        setMobile(mobilei)
    }
    window.onresize = () => {
        const mobilei = window.innerWidth <= 768 ? true : false;
        setMobile(mobilei)
    }
    return (
        <div className="header">
            <img src={Logo} alt="" className='logo' />
            {mobile &&
                <div onClick={()=>{setMenuOpened(!menuOpened)}} className='bars-cont'>
                    <img src={Bars} className='bars' alt="" />
            </div>}
            
            {menuOpened === true ? 
            (
                <ul className='header-menu'>
                <li onClick={()=>{setMenuOpened(false)}}><a href="#home">Home</a></li>
                <li onClick={()=>{setMenuOpened(false)}}><a href="#programs">Programs</a></li>
                <li onClick={()=>{setMenuOpened(false)}}><a href="#reason">Why us</a></li>
                <li onClick={()=>{setMenuOpened(false)}}><a href="#plans">Plans</a></li>
                <li onClick={()=>{setMenuOpened(false)}}><a href="#testmonials">Testmonials</a></li>
            </ul>    
            )
                : ""}
            {!mobile ? (<ul className='header-menu'>
                <li ><a href="#home">Home</a></li>
                <li ><a href="#programs">Programs</a></li>
                <li ><a href="#reason">Why us</a></li>
                <li ><a href="#plans">Plans</a></li>
                <li ><a href="#testmonials">Testmonials</a></li>
            </ul>  ): ''}
            
            
        </div>
    )
}

export default Header
