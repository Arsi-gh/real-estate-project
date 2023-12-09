import AddressGuide from '@/components/AddressGuide'
import FavoritesModal from '@/components/FavoritesModal'
import FooterPart from '@/components/FooterPart'
import LoginForm from '@/components/LoginForm'
import Nav from '@/components/Nav'
import SignUpForm from '@/components/SignUpForm'
import UserProvider from '@/components/UserRoleProvider'
import AddEstateForm from '@/components/dashboardComponents/globalUsage/AddEstateForm'
import AgentReqForm from '@/components/dashboardComponents/globalUsage/AgentReqForm'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [displayLogin , setDisplayLogin] = useState(false)
  const [displaySignUp , setDisplaySignUp] = useState(false)
  const [displayAddEstate , setDisplayAddEstate] = useState(false)
  const [displayAgentReq, setDisplayAgentReq] = useState(false)
  const [displayFavorites , setDisplayFavorites] = useState(false)

  return (
  <UserProvider>
    <Nav displayLogin={setDisplayLogin} displaySignUp={setDisplaySignUp} displayAddEstate={setDisplayAddEstate} displayFavorites={setDisplayFavorites}/>
    {/* <AddressGuide/> */}
    <Component {...pageProps} />
    <FooterPart/>
    {displayLogin && <LoginForm displayHandler={setDisplayLogin}/>}
    {displaySignUp && <SignUpForm displayHandler={setDisplaySignUp}/>}
    {displayAddEstate && <AddEstateForm displayHandler={setDisplayAddEstate}/>}
    {displayAgentReq && <AgentReqForm displayHandler={setDisplayAgentReq}/> }
    {displayFavorites && <FavoritesModal displayHandler={setDisplayFavorites}/>}
  </UserProvider>
  )
}
