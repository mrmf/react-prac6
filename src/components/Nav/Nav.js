import { Link} from 'react-router-dom'
import styles from "./Nav.module.css"
export function Nav(){

    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to= "/" >
                        Main
                    </Link>
                </li>
                <li>
                    <Link to= "/About" >
                        About
                    </Link>
                </li>
                <li>
                    <Link to= "/products" >
                        Products
                    </Link>
                </li>
                 <li>
                    <Link to= "/Blog/1" >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to= "/Blog/2" >
                        BLog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}