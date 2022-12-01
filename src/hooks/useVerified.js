import { useEffect, useState } from "react"

const useVerified = email =>{
    const [isVerified, setIsVerified]= useState(false)
    const [ isVerifiedLoding, setIsVerifiedLoading] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/seller/verified/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsVerified(data.isVerified)
            setIsVerifiedLoading(false)
        })
    },[email])
    return [isVerified, isVerifiedLoding]
}

export default useVerified;