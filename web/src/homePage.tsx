import { Typography } from "@mui/material"
import Form from './components/form'
import Portal from './components/portal'
import {useState} from 'react'

const Home = () => {

    const [userStatus, setUserStatus] = useState(false)

    return userStatus ? <Form /> : <Portal />

}

export default Home;