import React from 'react';
import UsersList from './UsersList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UsersContext';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<UsersList/>}></Route>
            <Route path='/userDetail/:id' element={<UserDetail/>}></Route>
            <Route path='/userEdit/:id' element={<UserEdit/>}></Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App