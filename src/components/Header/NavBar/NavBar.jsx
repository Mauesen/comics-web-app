import {CartWidget} from '../CartWidget/CartWidget';
import {NavItem} from './NavItem';

import logo from '../../../assets/img/logo.png';


export const NavBar = ({brand}) => {
   
return (

    
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <p className="navbar-brand" href="#">

            <img src={logo} className="d-inline-block align-top" alt="Logo WebComicSite"/>

            

        </p>

        <h1 className="navbar-brand">
            {brand}
        </h1>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto d-flex justify-content-center align-items-center">

                <NavItem item="Marvel"/>
                <NavItem item="Dc Comics"/>
                <NavItem item="Image Comics"/>

            </ul>



        </div>

        <div >

            <p className="nav-link  text-white" ><CartWidget></CartWidget></p>

        </div>

        

    </nav>
   

</div>
)
}