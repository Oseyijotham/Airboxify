import css from './Home.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectedContact,
} from '../../redux/AppRedux/selectors';
import { selectUser } from '../../redux/AuthRedux/selectors';
import { updateAvatar } from '../../redux/AuthRedux/operations';
import svg from '../SharedLayout/icons.svg';
import icon from './list2.svg';
import Scheduling from './SchedulerCorp.png';




export const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const myUser = useSelector(selectUser);
  const myContact = useSelector(selectedContact);
  const [isOneHovered, setIsOneHovered] = useState(false);
  const [isTwoHovered, setIsTwoHovered] = useState(false);
  const [isThreeHovered, setIsThreeHovered] = useState(false);
  const handleImageChange = e => {
    //console.log("gbyghnu")
    const file = e.target.files[0];
    //dispatch(updateAvatar({ avatar: file }));
    console.log({ avatar: file });
    if (file) {
      dispatch(updateAvatar({ avatar: file })); // Store the file under the key "avatar"
    }
  };

  useEffect(() => {
    //dispatch(getUser());
  }, [myContact, dispatch]);
  return (
    <div className={css.homeDisplay}>
      <div>
        <div className={css.homeDisplayIntro}>
          <div className={css.homeIconWrapper}>
            <img src={icon} alt="icon" className={css.homeIcon} />
          </div>
          <span>
            <span className={css.homeDisplayTitle}>
              Welcome,{' '}
              <span className={css.homeDisplayTitlePart}>
                <i>{myUser.firstname}</i>
              </span>
            </span>
            <span className={css.homeDisplaySlogan}>
              <i>
                Here at Airboxify! We provide an all-in-one platform designed to
                help your business streamline its operations. From scheduling
                appointments and events to data visualization, our cloud-based
                SaaS solution simplifies your workflow, keeping your business
                efficient and growing.
              </i>
            </span>
          </span>
          <div className={css.homeIconWrapper}>
            <img src={icon} alt="icon" className={css.homeIcon} />
          </div>
        </div>
      </div>

      <div className={css.hero}>
        <div className={css.offersLabel}>We offer</div>
        <div className={css.offersWrapper}>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsOneHovered(true);
            }}
            onMouseLeave={() => {
              setIsOneHovered(false);
            }}
            style={{
              transform: `
    ${isTwoHovered ? 'translateY(110%)' : 'translateY(0)'}
    ${isThreeHovered ? 'translateX(-25%)' : 'translateX(0)'}
  `,
            }}
          >
            <div
              key="townMayor"
              className={css.movieItem}
              onClick={() => {
                setIsOneHovered(false);
              }}
            >
              <Link to="/cat_ward" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={Scheduling}
                    alt="Scheduling"
                  />
                  <p className={css.catWardDescription}>
                    Welcome to Petpal's Cat Ward! Answer a few questions, and
                    we'll match you with the perfect cat breeds that fit your
                    lifestyle and preferences
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Scheduling</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link to="/sharedLayout/tasks" className={css.homeLink}>
        Start Planning
      </Link>

      {isLoading && !error && <div>Please wait...</div>}
      {error && <div>There was an error</div>}

      <div className={css.detailsSection}>
        <h2 className={css.detailsSectionTitle}>ADMIN DASHBOARD</h2>
        <div className={css.detailsImageWrapper}>
          <img
            className={css.detailsImage}
            src={`https://oasis-tasks-backend.onrender.com${myUser.avatarURL}`}
            alt="User"
          />
        </div>
        <input
          className={css.detailsImageButton}
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleImageChange}
          id="2"
        />
        <label className={css.detailsImageInput} htmlFor="2">
          Update Picture +
        </label>
        <ul className={css.detailsWrapper}>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>First Name:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.firstname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Last Name:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.lastname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Email:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.email}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Phone Number:-</span>{' '}
              <span className={css.detailsValPhone}>
                <i className={css.detail}>{myUser.phone}</i>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;