import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Allsellers = () => {
    const [refresh, setRefresh] = useState(false)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', 'seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`)
            const data = await res.json()
            return data;
        }
    })

    const handleVerify= id =>{
        fetch(`http://localhost:5000/users/admin/verify/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                toast.success('Seller verified Successfully')
                refetch()
            }
        })
    }

    const handleDelete = id =>{
        const proceed = window.confirm('Are You sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount) {
                        toast.success('seller Deleted Succesfully')
                        setRefresh(!refresh)
                        refetch()
                    }
                })
                .catch(e => console.log(e))
        }
    }
    return (
        <div className='mx-5'>
            <h3 className='text-center text-3xl font-bold my-3'>All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Verify Seller</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                               
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.isVerified !=='verified' ?
                                <button onClick={()=>handleVerify(user._id)} className='btn btn-xs btn-success'>Verify</button>
                                : <p>Verified</p>
                            }</td>
                                <td><button onClick={()=> handleDelete(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;