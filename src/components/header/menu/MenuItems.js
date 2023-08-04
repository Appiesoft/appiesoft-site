import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuItems.css'
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => {
  if (item.sub_menu.length === 0) {
    return (
      <li key={item.ID}>
        <NavLink to={item.url}>{item.title}</NavLink>
      </li>
    );
  } else {
    return (
      <li key={item.ID}  className="dropdown">
        <NavLink href={item.url}>{item.title}</NavLink>
      {item.sub_menu.map(subItem => (
            <li className="dropdown-content"><MenuItem key={subItem.ID} item={subItem} /></li>
          ))}
      </li>
    );
  }
};

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://xploreseo.com/react-wordpress-api/wp-json/custom/v1/menu/main-menu';

    axios
      .get(apiUrl)
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, []);

  return (
    <>
 <div className="nav-bar-sec">
            <ul id="menu-main-menu" className="menu">
              {menuItems.map((item) => {
                return (
                  <>
                    <li key={item.ID} className="py-3">
                    <MenuItem key={item.ID} item={item} />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
</>
  );
};

export default MenuComponent;


