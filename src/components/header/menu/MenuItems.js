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
      <li key={item.ID}  class="dropdown">
        <NavLink href={item.url}>{item.title}</NavLink>
      {item.sub_menu.map(subItem => (
            <li class="dropdown-content"><MenuItem key={subItem.ID} item={subItem} /></li>
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
 <div class="nav-bar-sec">
            <ul id="menu-main-menu" class="menu">
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


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MenuItem = ({ item }) => {
//   const [hovered, setHovered] = useState(false);
//   const [dynamicContent, setDynamicContent] = useState([]);

//   const handleMouseEnter = () => {
//     setHovered(true);
//     fetchDynamicContent(item.ID);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//     setDynamicContent([]);
//   };

//   const fetchDynamicContent = (itemId) => {
//     // Replace this with your API endpoint to fetch dynamic content based on itemId
//     const dynamicApiUrl = `https://your-api-url/${itemId}`;
    
//     axios
//       .get(dynamicApiUrl)
//       .then(response => {
//         setDynamicContent(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching dynamic content:', error);
//       });
//   };

//   return (
//     <li
//       key={item.ID}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <a href={item.url}>{item.title}</a>
//       {hovered && (
//         <div>
//           <p>Dynamic Content:</p>
//           <ul>
//             {dynamicContent.map(contentItem => (
//               <li key={contentItem.ID}>{contentItem.title}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </li>
//   );
// };

// const MenuComponent = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://xploreseo.com/react-wordpress-api/wp-json/custom/v1/menu/main-menu';

//     axios
//       .get(apiUrl)
//       .then(response => {
//         setMenuItems(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching menu data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <ul className='py-4'>
//         {menuItems.map(item => (
//           <MenuItem key={item.ID} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MenuComponent;

