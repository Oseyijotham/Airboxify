import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

//axios.defaults.baseURL = 'http://localhost:8000/api';

axios.defaults.baseURL = 'https://oasis-tasks-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, phone, password }, thunkAPI) => {
    alert(
      'Please wait a bit, first requests can take up to 60 seconds because the backend is hosted with a free plan'
    );
    Notiflix.Loading.pulse('Registering Your Account...', {
      svgColor: '#9225ff',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.post('/users/signup', {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      Notiflix.Loading.remove();
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Incorrect email or password format, or email has already been registered'
      );
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    alert(
      'Please wait a bit, first requests can take up to 60 seconds because the backend is hosted with a free plan'
    );
    Notiflix.Loading.pulse('Logging You In...', {
      svgColor: '#9225ff',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.post('/users/login', { email, password });
      
      setAuthHeader(res.data.token);
      Notiflix.Loading.remove();
      //console.log(res.data);
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure('Incorrect email or password');
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    Notiflix.Loading.pulse('Logging You Out...', {
      svgColor: '#9225ff',
      fontFamily: 'DM Sans',
    });
  try {
    await axios.get('/users/logout');
  
    clearAuthHeader();
     Notiflix.Loading.remove();
  } catch (error) {
    Notiflix.Loading.remove();
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
       thunkAPI.dispatch(logOut());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/get',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      window.location.reload();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (file, thunkAPI) => {
    Notiflix.Loading.pulse('Updating Your Picture...', {
      svgColor: '#9225ff',
      fontFamily: 'DM Sans',
    });
    try {
      const res = await axios.patch('/users/avatars', file, { headers: { 'Content-Type': 'multipart/form-data' } });
      Notiflix.Loading.remove();
      return res.data;
    } catch (error) {
      Notiflix.Loading.remove();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
