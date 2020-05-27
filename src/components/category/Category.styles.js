import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: var(--big);
`;

export const SubCategoryContainer = styled(Link)`
  position: relative;
  color: var(--white);
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    opacity: 0.8;
  }
  h4 {
    margin: 0 10px;
    font-family: var(--Merriweather);
    font-size: var(--mid);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    z-index: 1;
  }
`;
