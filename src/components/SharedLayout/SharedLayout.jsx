import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Frame,
  IconLabelStart,
  IconLabelEnd,
  Symbol,
  Button,
  Greeting,
  IconLabelWrapper,
  Burger
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { logOut } from '../../redux/AuthRedux/operations';
import { useDispatch } from 'react-redux';
import { useAuthHook } from '../../customHook/customHook';
import logoImage from './Airboxify.png';
import { useMediaQuery } from 'react-responsive';
import svg from './icons.svg';


export const SharedLayout = () => {
  const dispatch = useDispatch();
  const { user } = useAuthHook();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  return (
    <Container>
      <Header>
        <Symbol to="/">
          <Logo>
            <Frame role="img" aria-label="computer icon">
              <img src={logoImage} alt="Logo" width="80px" />
            </Frame>
            <IconLabelWrapper>
              <IconLabelStart>Airbox</IconLabelStart>
              <IconLabelEnd>
                <i>ify</i>
              </IconLabelEnd>
            </IconLabelWrapper>
          </Logo>
        </Symbol>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
         
        </div>
        <nav>
          <Link to="/sharedLayout/Home">Home</Link>
          <Link to="/sharedLayout/tasks">Tasks</Link>
          <Link to="/sharedLayout/sorting">Sorting</Link>
          <Button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </Button>
        </nav>
        <Burger>
          <svg width="60px" height="40px">
            <use href={`${svg}#icon-burger`}></use>
          </svg>
        </Burger>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
