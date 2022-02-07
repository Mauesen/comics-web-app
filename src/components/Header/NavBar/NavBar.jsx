import {CartWidget} from '../CartWidget/CartWidget';
import {NavItem} from './NavItem';

import logo from '../../../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = ({brand}) => {

const linkStyle ={
    textDecoration: 'none'
}
   
return (

    
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <p className="navbar-brand" href="#">

            <img src={logo} className="d-inline-block align-top" alt="Logo WebComicSite"/>

            

        </p>
        <Link to='/' style={linkStyle}>
        <h1 className="navbar-brand">
            {brand}
        </h1>
        </Link>
        

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto d-flex justify-content-center align-items-center">

                <NavLink to='categoria/Marvel' className='no-dec'>
                
                    <NavItem item="Marvel"/>

                </NavLink>

                <NavLink to='categoria/Dc-Comics' className='no-dec'>

                    <NavItem item="Dc Comics"/>
                    
                </NavLink>

                <NavLink to='categoria/Shonen-Jump' className='no-dec'>

                    <NavItem item="Manga"/>
                    
                </NavLink>
                
                

            </ul>



        </div>

        <div >
        <Link to='/carrito' style={linkStyle}>
        <p className="nav-link m-auto text-white" ><CartWidget></CartWidget></p>

        </Link>
           
        </div>

        

    </nav>
   

</div>
)
}