import { useState } from "react";


import { useNavigate } from "react-router";


export const useSignUp = () => {
     const [error, setError] = useState(null)
     const [isLoading, setIsLoading] = useState(false)

     const navigate = useNavigate()
    

     const signup = async (email:any, password:any) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://jobspot-cc0j.onrender.com/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            navigate('/login')

            // update redux
         
            setIsLoading(false)
        }
     }

     return { signup, isLoading, error }
}

