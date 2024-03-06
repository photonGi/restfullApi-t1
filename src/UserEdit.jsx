import React, { useState } from 'react';
import { useUser } from './UsersContext';
import { useParams , useNavigate  } from 'react-router-dom';
import axios from 'axios';

const UserEdit = () => {
    const { id } = useParams();
    const { users, setUsers } = useUser();
    const user = users.find((b)=>b.id===parseInt(id));
    const navigate = useNavigate();

    // editable vars
    const[userTitle, setUserTitle] = useState(user.name);
    const[userEmail, setUserEmail] = useState(user.email);
    const[userPhone, setUserPhone] = useState(user.phone);
    const[userCity, setUserCity] = useState(user.address.city);
    const[userStreet, setUserStreet] = useState(user.address.street);

    const editPost = async()=>{
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{
          id: user.id,
          name:userTitle,
          email:userEmail,
          phone:userPhone,
          address:{
            city:userCity,
            street:userStreet,
          }
        });

        const updatedUser = {
          id: user.id,
          name:userTitle,
          email:userEmail,
          phone:userPhone,
          address:{
            city:userCity,
            street:userStreet,
          }
        }
        const updatedUsers = users.map(u => (u.id === parseInt(id) ? updatedUser : u));
        setUsers(updatedUsers);
        // navigate('/');
        console.log(updatedUsers);
      } catch (error) {
        console.error("Error updating user", error);
      }
    }

  return (
    <div className='container mt-10 mb-20'>
      <form className='flex gap-10 flex-wrap'>
        <div className='input-group flex-grow w-[45%]'>
          <label className='d-block text-sm mb-2'>Name</label>
          <input type='text' className='bg-gray-50 border w-full p-3 text-sm focus:outline-none' value={userTitle} onChange={(e)=>setUserTitle(e.target.value)}/>
        </div>
        <div className='input-group flex-grow w-[45%]'>
          <label className='d-block text-sm mb-2'>Email</label>
          <input type='text' className='bg-gray-50 border w-full p-3 text-sm focus:outline-none' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}/>
        </div>
        <div className='input-group flex-grow w-[45%]'>
          <label className='d-block text-sm mb-2'>Phone</label>
          <input type='text' className='bg-gray-50 border w-full p-3 text-sm focus:outline-none' value={userPhone} onChange={(e)=>setUserPhone(e.target.value)}/>
        </div>
        <div className='input-group flex-grow w-[45%]'>
          <label className='d-block text-sm mb-2'>City</label>
          <input type='text' className='bg-gray-50 border w-full p-3 text-sm focus:outline-none' value={userCity} onChange={(e)=>setUserCity(e.target.value)}/>
        </div>
        <div className='input-group flex-grow w-[45%]'>
          <label className='d-block text-sm mb-2'>Street Address</label>
          <input type='text' className='bg-gray-50 border w-full p-3 text-sm focus:outline-none' value={userStreet} onChange={(e)=>setUserStreet(e.target.value)}/>
        </div>

        <div className='w-full'>
          <button type='button' className='h-12 w-[150px] bg-orange-400 rounded-md text-white text-[14px] flex items-center justify-center' onClick={editPost}>Edit User</button>
        </div>
      </form>
    </div>
  )
}

export default UserEdit