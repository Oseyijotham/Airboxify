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
import { useState,Suspense } from 'react';
import { logOut } from '../../redux/AuthRedux/operations';
import { useDispatch } from 'react-redux';
import { useAuthHook } from '../../customHook/customHook';
import logoImage from './Airboxify.png';
import { useMediaQuery } from 'react-responsive';
import svg from './icons.svg';
import clsx from 'clsx';
import css from './SharedLayout.module.css';


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
          <Link to="/sharedLayout/Home">Home</Link>
          <Link to="/sharedLayout/tasks">Scheduler</Link>
          <Link to="/sharedLayout/sorting">Sorting</Link>
          <Link to="/sharedLayout/sorting">My Profile</Link>
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

            <a className={css.headerWindowLink} href="#">
              <span className={css.headerWindowLinkContent}>
                <span className={css.headerWindowLabel}>Buy now</span>
                <svg class="header-window__icon" width="5.26" height="8">
                  <use href="./images/icons.svg#icon-Vector3"></use>
                </svg>
              </span>
            </a>

            <nav className={css.headerWindowNav}>
              <ul className={css.headerWindowNavList}>
                <li className={css.headerWindowNavItem}>
                  <a href="#" className={css.headerWindowNavLink}>
                    Home
                  </a>
                </li>
                <li className={css.headerWindowNavItem}>
                  <a href="#" className={css.headerWindowNavLink}>
                    Scheduler
                  </a>
                </li>
                <li className={css.headerWindowNavItem}>
                  <a href="#" className={css.headerWindowNavLink}>
                    Sorting
                  </a>
                </li>
                <li className={css.headerWindowNavItem}>
                  <a href="#" className={css.headerWindowNavLink}>
                    My Profile
                  </a>
                </li>
                <li className={css.headerWindowNavItem}>
                  <button
                    type="button"
                    className={css.headerWindowNavLink}
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
