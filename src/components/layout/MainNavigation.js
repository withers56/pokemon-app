import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg"}"navbar navbar-expand-lg navbar-light bg ${classes.navColor} noPadding`}>
            <div className="container-fluid">
                <Link to='/' className={`m-1`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" className="ms-md-3 width50"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/'>Pokemon Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/favorites'>Favorite Pokemon</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <header className={classes.nav}>
        //     <Link to='/' className={`m-1`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" className="ms-md-3"/>
        //     </Link>
        //     <div className={classes.links}>
        //         <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/'>Pokemon Search</Link>
        //         <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/favorites'>Favorite Pokemon</Link>
        //     </div>
        // </header>
    )
}

export default MainNavagation;