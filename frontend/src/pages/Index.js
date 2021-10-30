import { contactLinks } from '../data/contactLinks';

const Index = () => {
  return (
    <section>
      <h1 className="text-center">PetGram</h1>
      <picture>
        <source srcSet={ require('../img/index.webp').default } />
        <div className="d-flex justify-content-center">
          <img src={ require('../img/index.webp').default }
            style={ {
              width: '15rem',
              objectFit: 'cover'
            } }
          />
        </div>
        <div className="text-center">
          <p>
            Aplicación web que simula Instagram, pero con operaciones básicas,
            que son crear usuarios y darle me gusta a post predefinidos.
          </p>
          <p>Creador: Eleomar Pedro Lorenzo</p>
          <p>Contactame</p>
          <div className="d-flex flex-wrap justify-content-center">
            { contactLinks &&
                contactLinks.map( contact =>
                  <a href={ contact.link }
                    key={ contact.className }
                    style={ {fontSize: '2rem', color: 'black', marginRight: '1rem'} }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={ contact.className }></i>
                  </a>
                )
            }
          </div>
        </div>
      </picture>
    </section>
  );
};

export default Index;