import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/authActions';
import Cookies from 'js-cookie';

const initialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    updateTokens: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      Cookies.set('token', action.payload.token, { expires: 7 });
      Cookies.set('refreshToken', action.payload.refreshToken, { expires: 7 });
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      Cookies.remove('token');
      Cookies.remove('refreshToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setAuthState, updateTokens } = authSlice.actions;

export default authSlice.reducer;
