import { useEffect, useState } from "react"

const useSeller = email =>{
    const [isBuyer, setIsBuyer]= useState(false)
    const [ isBuyerLoding, setIsBuyerLoading] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/buyer/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsBuyer(data.isBuyer)
            setIsBuyerLoading(false)
        })
    },[email])
    return [isBuyer, isBuyerLoding]
}

export default useSeller;