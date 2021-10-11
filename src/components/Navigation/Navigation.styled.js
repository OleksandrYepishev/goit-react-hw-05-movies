import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px 20px 0px 20px;
  font-weight: 700;
  color: #2a363b;
  font-size: 20px;

  &:focus,
  &:hover {
    color: #007ba7;
  }

  &.active {
    text-shadow: 0 3px 20px red, 0 0 20px red, 0 0 10px orange,
      4px -5px 6px yellow, -4px -10px 10px yellow, 0 -10px 30px yellow;
    animation: 2s Blazing infinite alternate linear;
  }

  @keyframes Blazing {
    0% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 0 10px orange, 0 0 0 yellow,
        0 0 5px yellow, -2px -5px 5px yellow, 4px -10px 10px yellow;
    }
    25% {
      text-shadow: 0 3px 20px red, 0 0 30px red, 0 0 20px orange, 0 0 5px yellow,
        -2px -5px 5px yellow, 3px -10px 10px yellow, -4px -15px 20px yellow;
    }
    50% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 -5px 10px orange,
        -2px -5px 5px yellow, 3px -10px 10px yellow, -4px -15px 20px yellow,
        2px -20px 30px rgba(255, 255, 0, 0.5);
    }
    75% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 -5px 10px orange,
        3px -5px 5px yellow, -4px -10px 10px yellow,
        2px -20px 30px rgba(255, 255, 0, 0.5),
        0px -25px 40px rgba(255, 255, 0, 0);
    }
    100% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 0 10px orange, 0 0 0 yellow,
        0 0 5px yellow, -2px -5px 5px yellow, 4px -10px 10px yellow;
    }
  }
`;
