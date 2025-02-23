import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Linker,
  Frame,
  IconLabelStart,
  IconLabelEnd,
  Symbol,
  Button,
  Greeting,
  IconLabelWrapper,
  Burger
} from './SharedLayout.styled';
import { useState,Suspense } from 'react';
import { logOut } from '../../redux/AuthRedux/operations';
import { useDispatch } from 'react-redux';
import { useAuthHook } from '../../customHook/customHook';
import logoImage from './Airboxify.png';
import { useMediaQuery } from 'react-responsive';
import svg from './icons.svg';
import clsx from 'clsx';
import css from './SharedLayout.module.css';
import { Link } from 'react-router-dom';


export const SharedLayout = () => {
  const [isMenuHidden, setMenuHide] = useState(true);
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
        ></div>
        <nav>
          <Linker to="/sharedLayout/Home">Home</Linker>
          <Linker to="/sharedLayout/tasks">Scheduler</Linker>
          <Linker to="/sharedLayout/sorting">Sorting</Linker>
          <Linker to="/sharedLayout/profile">My Profile</Linker>
          <Button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </Button>
        </nav>
        <Burger type="button" onClick={() => setMenuHide(false)}>
          <svg width="60px" height="40px">
            <use href={`${svg}#icon-burger`}></use>
          </svg>
        </Burger>
      </Header>

      <div
        className={clsx(css.menu, {
          [css.menuHidden]: isMenuHidden,
        })}
      >
        <div>
          <div className={css.headerWindow}>
            <button
              type="button"
              className={css.headerWindowButton}
              onClick={() => setMenuHide(true)}
            >
              <svg
                width="14px"
                height="14px"
                className={css.headerWindowCloseIcon}
              >
                <use href={`${svg}#icon-cross`}></use>
              </svg>
            </button>

            <div className={css.headerWindowNameWrapper} href="#">
              <span className={css.headerWindowName}>
                {user.firstname}
              </span>
            </div>

            <nav className={css.headerWindowNav}>
              <ul className={css.headerWindowNavList}>
                <li className={css.headerWindowNavItem}>
                  <Link
                    to="/sharedLayout/Home"
                    className={css.headerWindowNavLink}
                    onClick={() => setMenuHide(true)}
                  >
                    Home
                  </Link>
                </li>
                <li className={css.headerWindowNavItem}>
                  <Link
                    to="/sharedLayout/tasks"
                    className={css.headerWindowNavLink}
                    onClick={() => setMenuHide(true)}
                  >
                    Scheduler
                  </Link>
                </li>
                <li className={css.headerWindowNavItem}>
                  <Link
                    to="/sharedLayout/sorting"
                    className={css.headerWindowNavLink}
                    onClick={() => setMenuHide(true)}
                  >
                    Sorting
                  </Link>
                </li>
                <li className={css.headerWindowNavItem}>
                  <Link
                    to="/sharedLayout/profile"
                    className={css.headerWindowNavLink}
                    onClick={() => setMenuHide(true)}
                  >
                    My Profile
                  </Link>
                </li>
                <li className={css.headerWindowNavItem}>
                  <button
                    type="button"
                    className={css.headerWindowNavButton}
                    onClick={() => dispatch(logOut())}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
