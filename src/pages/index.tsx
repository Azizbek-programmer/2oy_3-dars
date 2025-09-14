import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Login from '../components/login/Login';
import Home from './home/Home';
import Users from './users/Users';

const Main = () => {
  return (
     <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>
          <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
};

export default memo(Main);