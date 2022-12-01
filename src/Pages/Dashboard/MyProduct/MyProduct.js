import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [refresh, setRefresh] = useState(false)
    const url = `http://localhost:5000/bikes?sellerEmail=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id =>{
        const proceed = window.confirm('Are You sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/bikes/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount) {
                        toast.success('Item Deleted Succesfully')
                        setRefresh(!refresh)
                        refetch()
                    }
                })
                .catch(e => console.log(e))
        }
    }

    const handleAdvertize = id =>{
        fetch(`http://localhost:5000/bikes/seller/advertize/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                toast.success('product advertized Successfully')
                refetch()
            }
        })
    }
    return (
        <div className='mx-5'>
            <h3 className='text-center text-3xl font-bold my-3'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Bike Name</th>
                            <th>Status</th>
                            <th>Advertize</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) => <tr key={i}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={product?.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product?.bikeName}</td>
                                <td>
                                    {
                                    
                                    product?.status?.status ?
                                    product?.status?.status
                                    : <p>Available</p>
                                    }
                                    
                                    
                                </td>
                                <td>
                                    {
                                        product.isAdvertized !== 'true' 
                                        ? <button onClick={()=>handleAdvertize(product._id)} className='btn btn-xs btn-success'>Advertize</button>
                                        : <p>Advertized</p>
                                    }
                                </td>
                                <td><button onClick={()=>handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;