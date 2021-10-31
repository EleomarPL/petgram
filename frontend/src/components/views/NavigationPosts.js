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
            <NavLink to={ `/home${nav.link}` }
              className="header-post"
              activeClassName="active-header-post"
              exact={ index === 0 }
            >
              <picture>
                <source srcSet={ require(`../../img/posts/${nav.nameImage}.webp`).default } />
                <img src={ require(`../../img/posts/${nav.nameImage}.jpg`).default }
                  style={ {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    overflow: 'hidden',
                    borderRadius: '50%'
                  } }
                />
              </picture>
            </NavLink>
          </div>
        )
        }
      </div>
    </nav>
  );
};

export default NavigationPosts;