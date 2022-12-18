import { Avatar } from '@nextui-org/react';
import {NavLink} from 'react-router-dom';

import '../../styles/navigationPosts.css';

const NavigationPosts = () => {
  let dataNavPosts = [
    {nameImage: 'dog', link: ''},
    {nameImage: 'cat', link: '/cat'},
    {nameImage: 'hamster', link: '/hamster'},
    {nameImage: 'rabbit', link: '/rabbit'}
  ];
  return (
    <nav className="container-posts">
      <div className="navigation-posts">
        { dataNavPosts &&
        dataNavPosts.map((nav, index) =>
          <div key={ nav.nameImage }
            className="container-card-pet"
          >
            <Avatar
              size="xl"
              src={ require(`../../img/posts/${nav.nameImage}.jpg`).default }
              zoomed as={ NavLink }
              exact={ index === 0 }
              activeClassName="active-header-post"
              to={ `/home${nav.link}` }
            />
          </div>
        )
        }
      </div>
    </nav>
  );
};

export default NavigationPosts;