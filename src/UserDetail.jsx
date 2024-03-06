import React from 'react'
import { useUser } from './UsersContext'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const { id } = useParams();
    const { users } = useUser();
    const user = users.find((b)=>b.id === parseInt(id));
    
  return (
    <div className='container mt-10 mb-20'>
        <h1 className='pb-4 border-b-2 mb-4 font-medium text-[24px]'>{user?.name} Information</h1>
        <p className='pb-2 border-b-2 pt-2 text-[15px]'><b className='font-semibold text-[14px] pr-4'>Name:</b>{user.name}</p>
        <p className='pb-2 border-b-2 pt-2 text-[15px]'><b className='font-semibold text-[14px] pr-4'>Email:</b>{user.email}</p>
        <p className='pb-2 border-b-2 pt-2 text-[15px]'><b className='font-semibold text-[14px] pr-4'>Username:</b>{user.username}</p>
        <p className='pb-2 border-b-2 pt-2 text-[15px]'><b className='font-semibold text-[14px] pr-4'>Address:</b>{`${user.address.street} ${user.address.suite} ${user.address.city}`}</p>
        <p className='pb-2 border-b-2 pt-2 text-[15px]'><b className='font-semibold text-[14px] pr-4'>Phone:</b>{user?.phone}</p>
        <p className='pb-2 border-b-2 pt-2 text-[15px]'><b className='font-semibold text-[14px] pr-4'>Company:</b>{`${user.company.name} / ${user.company.catchPhrase} / ${user.company.bs}`}</p>
    </div>
  )
}

export default UserDetail