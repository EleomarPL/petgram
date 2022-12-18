import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Text, Avatar, Link } from '@nextui-org/react';

import useInteraction from '../../hooks/useInteraction';

const Post = ({dataPost, aditionalEvt, initialValueLike = true}) => {
  const [isLike, setIsLike] = useState(initialValueLike);
  const [totalLikes, setTotalLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {createInteraction, deleteInteraction, getLikesByIdPost} = useInteraction();

  useEffect(() => {
    getLikesByIdPost({idPost: dataPost.idPost}).then((res) => {
      if (res) {
        setTotalLikes(res.likes);
      }
    });
  }, [isLike]);

  const handleInteraction = () => {
    setIsLoading(true);
    if (!isLike) {
      createInteraction({
        idPost: dataPost.idPost, photographer: dataPost.photographer, photographerId: dataPost.photographerId, photographerUrl: dataPost.photographerUrl,
        srcImageMedium: dataPost.srcImageMedium, srcImageSmall: dataPost.srcImageSmall, url: dataPost.url
      }).then(() => {
        setIsLike(!isLike);
        setIsLoading(false);
      });
    } else {
      deleteInteraction({idPost: dataPost.idPost}).then(() => {
        setIsLike(!isLike);
        setIsLoading(false);
      });
    }

    if (aditionalEvt)
      aditionalEvt();
  };
  return (
    <Card css={ { w: '100%', h: '400px' } }>
      <Card.Header css={ { position: 'absolute', zIndex: 1, top: 5 } }>
        <Col>
          <Text size={ 12 } weight="bold"
            transform="uppercase" color="#9E9E9E">
            { dataPost.photographer }
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={ { p: 0 } }>
        <Card.Image
          src={ dataPost?.src?.medium || dataPost?.srcImageMedium }
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={ {
          position: 'absolute',
          bgBlur: '#0f111466',
          borderTop: '$borderWeights$light solid $gray800',
          bottom: 0,
          zIndex: 1
        } }
      >
        <Row>
          <Col>
            <Row>
              <Col span={ 6 } css={ {margin: 'auto 0'} }>
                <Avatar
                  color="gradient"
                  textColor="white"
                  height={ 30 }
                  width={ 30 }
                />
              </Col>
              <Col>
                <Link color="#d1d1d1" size={ 8 }
                  href={ dataPost.photographerUrl }
                  isExternal
                  target="_blank"
                  rel="noreferrer"
                >
                  Sitio del Fotografo
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button color="error" auto
                shadow
                onPress={ handleInteraction } disabled={ isLoading }
              >
                <i className={ `bi bi-heart${isLike ? '-fill' : ''}` }>
                  { totalLikes } likes
                </i>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

Post.propTypes = {
  dataPost: PropTypes.object.isRequired,
  initialValueLike: PropTypes.bool,
  aditionalEvt: PropTypes.func
};

export default Post;