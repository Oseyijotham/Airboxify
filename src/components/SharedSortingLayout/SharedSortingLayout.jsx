import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link
} from './SharedSortingLayout.styled';
import { Suspense } from 'react';
import {
setSortAll, setSortPending, setSortFulfilled, setSortPastDue
} from '../../redux/AuthRedux/operations';
import { useDispatch} from 'react-redux';

export const SharedSortingLayout = () => {
  const dispatch = useDispatch();
  const handleSortAll = () => {
     dispatch(setSortAll());
  }

   const handleSortPending = () => {
     dispatch(setSortPending());
  };
  
  const handleSortFulfilled = () => {
    dispatch(setSortFulfilled());
  };

  const handleSortPastDue = () => {
    dispatch(setSortPastDue());
  };
  return (
    <Container>
      <Header>
        <Link to="/sharedLayout/sorting/all" onClick={handleSortAll}>
          All
        </Link>
        <Link to="/sharedLayout/sorting/pending" onClick={handleSortPending}>
          Pending
        </Link>
        <Link to="completed" onClick={handleSortFulfilled}>
          Fulfilled
        </Link>
        <Link to="past_due" onClick={handleSortPastDue}>
          Past Due
        </Link>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
