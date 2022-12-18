import { Avatar, Container, Grid, Image, Link, Text } from '@nextui-org/react';
import { contactLinks } from '../data/contactLinks';

const Index = () => {
  return (
    <section>
      <Text
        h1
        size={ 60 }
        css={ {
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
          textAlign: 'center'
        } }
        weight="bold"
      >
        Petgram
      </Text>
      <picture>
        <source srcSet={ require('../img/index.webp').default } />
        <Image
          width="15rem"
          height={ 180 }
          src={ require('../img/index.webp').default }
          alt="Development people"
          objectFit="cover"
        />
      </picture>
      <Container css={ {
        textAlign: 'center'
      } }>
        <Text css={ { fontFamily: 'inherit' } }>
          Aplicación web que simula Instagram, pero con operaciones básicas,
          que son crear usuarios y darle me gusta a post predefinidos.
        </Text>
        <Text>Creador: Eleomar Pedro Lorenzo</Text>
        <Text>Contactame</Text>
        <Grid.Container gap={ 2 } css={ { placeContent: 'center' } }>
          { contactLinks &&
                contactLinks.map( contact =>
                  <Grid key={ contact.className }>
                    <Avatar squared
                      icon={ <i style={ { fontSize: '1.8rem' } } className={ contact.className } /> }
                      as={ Link }
                      target="_blank"
                      rel="noreferrer"
                      href={ contact.link }
                      css={ {
                        color: '#000',
                        cursor: 'pointer'
                      } }
                    />
                  </Grid>
                  
                )
          }
        </Grid.Container>
      </Container>
      
    </section>
  );
};

export default Index;