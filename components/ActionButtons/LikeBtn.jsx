import { HeartIcon } from "@heroicons/react/24/outline";
import { useUser } from "../UserRoleProvider";
import axios from "axios";
import { useEffect, useState } from "react";


export default function LikeBtn({id}) {
  
  const user = useUser().user

  const [isAdded , setIsAdded] = useState(null)

  const checkIn = (id) => {
    if (user){
      const isIn = user.favorites.find((item) => item.estateId == id)
      setIsAdded(isIn)
    }
  }

  const addFavorite = async () => {
    const {data} = await axios.get('http://localhost:5000/estates/' + id)
    const { title , location , images  , forRent , price , id : estateId  } = data
    let favEstate = {title , images , location , forRent , price , estateId}
    user.favorites.push(favEstate)
    await axios.put('http://localhost:5000/users/' + user.id , user)
    setIsAdded(true)
  }

  const removeFavorite = async () => {
    user.favorites = user.favorites.filter((item) => item.estateId != id)
    const {data} = await axios.put('http://localhost:5000/users/' + user.id , user)
    setIsAdded(false)
  }

  useEffect(() => {
    checkIn(id)
  } , [])

  const clickHandler = ()  => {
    if (!user) return console.log('log in first')
    if (user.role === "USER") {
        if (isAdded) {
          removeFavorite()
        } else {
          addFavorite()
        }
    }
  }

  return (    
    <HeartIcon onClick={() => clickHandler()} strokeWidth={2} className={`cursor-pointer rounded-md shadow-customeThree hover:bg-red-500 w-[2.5rem] p-2 flex gap-2 items-center transition-all hover:text-white hover:scale-110 ${isAdded ? 'text-white scale-110 bg-red-500' : 'text-red-500 bg-white'}`}/>
  )
}