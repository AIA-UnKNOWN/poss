import React from 'react';
import './NavigationBar.style.scss';
import { NavigationBarProps } from './NavigationBar.types';
import useNavigationStore from 'src/store/navigation';


const NavigationBar: React.FC<NavigationBarProps> = props =>  {
  const {
    logoUrl,
    companyName,
    upperNav,
    lowerNav,
  } = props;
  const navigationStore = useNavigationStore();

  return (
    <div className="navigation-bar">
      {/* Logo Container */}
      <div className='logo-container'>
        <div className='logo-image-container'>
          {logoUrl && (
            <img
              id="logo"
              src={logoUrl}
              alt={`${companyName} logo`}
            />
          )}
        </div>
        <span id="company-name">
          {companyName}
        </span>
      </div>
      {/* Navigation Container */}
      <div className='navigation-container'>
        {/* Upper Nav */}
        <ul className='upper-nav'>
          {upperNav?.map(nav => (
            <li
              key={nav.label}
              className={`nav ${nav.label === navigationStore.pageName && 'active'}`}
              onClick={() => nav.onClick?.(nav.label)}
            >
              <span>
                {nav.label}
              </span>
            </li>
          ))}
        </ul>
        {/* Lower Nav */}
        <ul className='lower-nav'>
          {lowerNav?.map(nav => (
            <li
              key={nav.label}
              className='nav'
              onClick={() => nav.onClick?.(nav.label)}
            >
              <span>
                {nav.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;