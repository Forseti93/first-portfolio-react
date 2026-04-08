import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faEnvelope,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons' 

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" to="/">
          <FontAwesomeIcon icon={faHouseChimney} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/serhii-lavrenov/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/Forseti93'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://t.me/Forseti_93'>
            <FontAwesomeIcon icon={faTelegram} color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  )
}
