import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                toast.success('Admin Added Successfully')
                refetch()
            }
        })
    }
    return (
        <div className='mx-5'>
             <h3 className='text-center text-3xl font-bold my-3'>All Users</h3>
             <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>

                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                               
                                <td>{ user?.role !=='admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-error'>Make Admin</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;