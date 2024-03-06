import React, { useEffect, useState } from 'react';
import { useUser } from './UsersContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UsersList = () => {
  const { users, setUsers} = useUser();

  const deleteUser = async(id)=>{
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user=>user.id !== id));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  }

  return (
    <div className='container mt-10 mb-20'>
      <table className='table w-full border-2'>
        <thead>
          <tr className='border-b-2'>
            <td className='border-l-2 first-of-type:border-l-0 p-3 text-sm font-bold'>#</td>
            <td className='border-l-2 p-3 text-sm font-bold'>Name</td>
            <td className='border-l-2 p-3 text-sm font-bold'>Email</td>
            <td className='border-l-2 p-3 text-sm font-bold'>Address</td>
            <td className='border-l-2 p-3 text-sm font-bold'>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} className='border-l-2 p-3 text-sm text-center'>Unable to fetch users.</td>
            </tr>
          ) :
          (users.map(user=>(
            <tr className='border-b-2 even:bg-gray-50' key={user.id}>
              <td className='border-l-2 first-of-type:border-l-0 p-3 text-sm'>{user.id}</td>
              <td className='border-l-2 p-3 text-sm'>{user.name}</td>
              <td className='border-l-2 p-3 text-sm'>{user.email}</td>
              <td className='border-l-2 p-3 text-sm'>{`${user.address.street} ${user.address.suite} ${user.address.city}`}</td>
              <td className='border-l-2 p-3 text-sm'>
                <Link to={`/userDetail/${user.id}`} className='h-7 inline-flex items-center justify-center w-[60px] bg-yellow-300 text-xs mr-4 rounded-md'>View</Link>
                <Link to={`/userEdit/${user.id}`} className='h-7 inline-flex items-center justify-center w-[60px] bg-blue-400 text-xs mr-4 rounded-md text-white'>Edit</Link>
                <button onClick={()=>deleteUser(user.id)} className='h-7 w-[60px] bg-red-500 text-white text-xs rounded-md'>Delete</button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList;