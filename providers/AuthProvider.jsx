import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { parseCookies } from 'nookies';
import { getUserAPI, refreshTokenAPI } from '../api/ApiCalls';
import { setAuthState, updateTokens, logout } from '../redux/reducers/authReducer';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      //logic here 
    };

    fetchUser();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
