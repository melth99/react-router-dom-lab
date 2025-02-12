import {Link} from 'react-router'
const NavBar = () => {
    return (
        <>
            <ul>
    
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mail/new'>New</Link></li>
            <li><Link to='/mail'>List</Link></li>



            </ul>
        </>
    )
}

export default NavBar