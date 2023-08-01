import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MenuItem = ({ item }) => {
  if (item.sub_menu.length === 0) {
    return (
      <li key={item.ID}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  } else {
    return (
      <li key={item.ID}>
        <a href={item.url}>{item.title}</a>
        <ul>
          {item.sub_menu.map(subItem => (
            <MenuItem key={subItem.ID} item={subItem} />
          ))}
        </ul>
      </li>
    );
  }
};

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Replace the API endpoint with your WordPress API URL
    const apiUrl = 'https://xploreseo.com/react-wordpress-api/wp-json/custom/v1/menu/main-menu';

    // Fetch the menu data using axios
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
    <div>
      <ul>
        {menuItems.map(item => (
          <MenuItem key={item.ID} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;