import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {


    const { data: users = [] } = useQuery({
        queryKey: ['users', 'buyer'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=buyer`)
            const data = await res.json()
            return data;
        }
    })
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
                               
                                <td><button className='btn btn-xs btn-primary'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;