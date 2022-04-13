import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { UserInfoProvider } from './context/UserInfo2';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserInfoProvider >
        <Routes >
          <Route path="/*" element={<App /> } ></Route>
        </Routes>

        
      </UserInfoProvider >

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


