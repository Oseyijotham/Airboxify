import css from './Profile.module.css';
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
import Scheduling from './SchedulerCorper.jpg';
import SchedulingDensity from './SchedulerCorper@2x.jpg';
import Sorting from './SortingCorper.jpg';
import SortingDensity from './SortingCorper@2x.jpg';
import DataVisualization from './Data Visualization Corper.jpg';
import DataVisualizationDensity from './Data Visualization Corper@2x.jpg';
import { useMediaQuery } from 'react-responsive';




export const Profile = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const myUser = useSelector(selectUser);
  const myContact = useSelector(selectedContact);
  const [isOneHovered, setIsOneHovered] = useState(false);
  const [isTwoHovered, setIsTwoHovered] = useState(false);
  const [isThreeHovered, setIsThreeHovered] = useState(false);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
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
    <div className={css.profileDisplay}>
      <div className={css.detailsSection}>
        <h2 className={css.detailsSectionTitle}>YOUR DETAILS</h2>
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
              <span className={css.details}>First Name:</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.firstname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Last Name:</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.lastname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Email:</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.email}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Phone:</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.phone}</i>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;