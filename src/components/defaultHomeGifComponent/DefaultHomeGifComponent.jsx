import React, { useContext } from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';

import { GifContext } from '../../context/GifContext';

import Placeholder from '../placeholder/Placeholder';
import { TrendingContainer } from '../trending/Trending.styles';
import {
  Card,
  CardTitle,
  CardTime,
  CardUser,
  CardContainer,
} from '../card/Card.styles';
import { Title } from '../title/Title.styles';

const DefaultHomeGifComponent = ({ title, gifType, visible }) => {
  const { getGif } = useContext(GifContext);
  return (
    <>
      <Title>{title}</Title>
      <TrendingContainer>
        {gifType.length &&
          gifType.map((gif) => {
            return (
              <CardContainer key={gif.id}>
                <LazyLoad
                  height={300}
                  offset={300}
                  placeholder={
                    <Placeholder
                      style={{
                        height: '300px',
                        background: 'var(--smoke-black)',
                      }}
                    />
                  }
                >
                  <Card
                    to={
                      // because I made the router check for only words for certain slugs
                      // if gifs' slug has only word, router doesn't show the gif component
                      // so if gif has a one word slug, I am changing link with title
                      gif.slug.split('-').length === 1
                        ? `/${gif.title.toLowerCase().split(' ').join('-')}-${
                            gif.slug
                          }`
                        : `/${gif.slug}`
                    }
                    onClick={() => getGif(gif)}
                  >
                    <CardUser>
                      {gif.user && (
                        <img src={gif.user.avatar_url} alt="gif user" />
                      )}
                    </CardUser>
                    <picture>
                      <source
                        srcSet={gif.images.original.webp}
                        type="image/webp"
                      />
                      <source
                        srcSet={gif.images.original.url}
                        type="image/gif"
                      />
                      <img
                        src={gif.images.original.url}
                        alt={gif.title ? gif.title : 'gif'}
                      />
                    </picture>

                    <CardTitle>{gif.title}</CardTitle>
                    {visible && (
                      <CardTime>
                        {moment(gif.trending_datetime).fromNow()}
                      </CardTime>
                    )}
                  </Card>
                </LazyLoad>
              </CardContainer>
            );
          })}
      </TrendingContainer>
    </>
  );
};

export default DefaultHomeGifComponent;
