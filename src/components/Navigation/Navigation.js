import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, NavigationWrapper, List } from './Navigation.css'

function Navigation({ items, RightElement }) {
  return (
    <Container>
      <NavigationWrapper>
        <List>
          {items.map(item => (
            <li key={item.to}>
              <Link to={item.to}>{item.content}</Link>
            </li>
          ))}
        </List>
        {RightElement}
      </NavigationWrapper>
    </Container>
  )
}

Navigation.ropTypes = {
  items: PropTypes.array.isRequired
}


export default Navigation;