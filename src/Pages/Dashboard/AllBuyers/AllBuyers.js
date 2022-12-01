import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [refresh, setRefresh] = useState(false)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', 'buyer'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=buyer`)
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = id =>{
        const proceed = window.confirm('Are You sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount) {
                        toast.success('Buyer Deleted Succesfully')
                        setRefresh(!refresh)
                        refetch()
                    }
                })
                .catch(e => console.log(e))
        }
    }
    
    return (
        <div className='mx-5'>
            <h3 className='text-center text-3xl font-bold my-3'>All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>

                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                               
                                <td><button onClick={()=>handleDelete(user._id)} className='btn btn-xs btn-primary'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;