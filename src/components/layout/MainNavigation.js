import {Link} from "react-router-dom";
import classes from './MainNavagation.module.css'
import {useContext} from "react";

function MainNavagation() {

    return (
        <header className={classes.nav}>
            <Link to='/' className={`m-1`}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" className="ms-md-3"/>
            </Link>
            <div className={classes.links}>
                <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/'>Pokemon Search</Link>
                <Link className={`py-3 px-2 text-decoration-none ${classes.tabDiv}`} to='/favorites'>Favorite Pokemon</Link>
            </div>
        </header>
    )
}

export default MainNavagation;