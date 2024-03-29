import { Link } from 'react-router-dom';
import './topbar.css'
import { useContext } from 'react';
import { Context } from '../../context/Context'

function TopBar() {
  const {User,dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }
  return (

    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook fa-fade"></i>
      <i className="topIcon fa-brands fa-x-twitter fa-fade"></i>
      <i className="topIcon fa-brands fa-pinterest fa-fade"></i>
      <i className="topIcon fa-brands fa-instagram fa-fade"></i>
      </div>

      <div className="topCenter">
        <ul className='topList'>
            <li className=' topListItem'><Link className='link' to="/">HOME</Link></li>
            <li className=' topListItem'><Link className='link' to="/about">ABOUT</Link></li>
            <li className=' topListItem'><Link className='link' to="/">CONTACT</Link></li>
            <li className=' topListItem'><Link className='link' to="/write">WRITE</Link></li>
            <li className=' topListItem' onClick={handleLogout}>{User && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">

{
  User ? (<img className='topImage' src={User.profilePic} alt="" />)
  :(
    <ul className='topList'>
      <li className='topListItem'>
    <Link className='link' to="/login">LOGIN</Link>
    </li>
      <li className='topListItem'>
    <Link className='link' to="/register">REGISTER</Link>
    </li>
    </ul>
  )
}       
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar
