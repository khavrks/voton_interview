import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, getUserAPI } from '../../api/ApiCalls';
import Cookies from 'js-cookie';

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await loginAPI(credentials);
    Cookies.set('token', response.access, { expires: 7 });
    Cookies.set('refreshToken', response.refresh, { expires: 7 });
    localStorage.setItem('token', response.access);
    localStorage.setItem('refreshToken', response.refresh);
    const user = await getUserAPI(response.access);
    if (user){
      localStorage.setItem('username', JSON.stringify(user.username));
      localStorage.setItem('roles', JSON.stringify(user.roles));
    }
    return { token: response.access, user: user };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});