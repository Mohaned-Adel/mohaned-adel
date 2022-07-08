import './Nav.css'
import IMG from "../../assets/images/icon-hamburger.png";
import { useState } from 'react';

const Nav = () => {
  const [isActive , setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive)
  }

  return (
    <nav className={`AppNav ${isActive ? "is-active" : null}`}>
      <div className="nav__container">
        <div className="nav__header">
          <button onClick={ToggleClass} type="button" className="btn-icon">
            <span className="btnicon__icon">
              <img src={IMG} alt="icon" />
            </span>
            <span className="btnicon__label">Burger menu</span>
          </button>
        </div>
        <div className="nav__content">
          <div className="nav__inner">
            <ul className="nav__list">
              <li className="nav__item">
                <h4 className="nav__title">About</h4>
                <p className="nav__description">
                  Delicately tender with a slice of cheese.
                </p>
              </li>
              <li className="nav__item">
                <h4 className="nav__title">Skills</h4>
                <p className="nav__description">
                  Our great selection from the best in town
                </p>
              </li>
              <li className="nav__item">
                <h4 className="nav__title">References</h4>
                <p className="nav__description">
                  Our special services
                </p>
              </li>
              <li className="nav__item">
                <h4 className="nav__title">Projects</h4>
                <p className="nav__description">
                  Served on a bed of frontend tech.
                </p>
              </li>
              <li className="nav__item">
                <h4 className="nav__title">Contact</h4>
                <p className="nav__description">
                  A superb choice to finish the day
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
