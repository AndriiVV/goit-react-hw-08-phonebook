// import { Redirect, Route, Switch } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import MainNav from './MainNav/MainNav';
// import HomePage from './HomePage/HomePage';
import RegisterPage from './RegisterPage/RegisterPage';
import LoginPage from './LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getIsAuth } from 'redux/auth/authSelectors';
import { getCurUser } from 'redux/auth/authOperations';

const PhonebookPage = lazy(() => import("./PhonebookPage/PhonebookPage"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    console.log("useEffect is running...");
    isAuth && dispatch(getCurUser());
  }, [dispatch, isAuth]);

  return (
    <div>
      <MainNav isAuth={isAuth}/>

      <Suspense fallback={<h2>Loading...</h2>}>
        <PrivateRoute path={"/contacts"}>
          <PhonebookPage />
        </PrivateRoute>
        <PublicRoute path={"/register"}>
          <RegisterPage />
        </PublicRoute>
        <PublicRoute path={"/login"}>
          <LoginPage />
        </PublicRoute>
      </Suspense>
    
    </div>
  );
};

export default App;