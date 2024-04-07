import Form from './components/form'
import Portal from './components/portal'
import {useState} from 'react'

const Home = ({componentData}: {componentData: boolean}) => {

    console.log(componentData)    
    return componentData ? <Form /> : <Portal />
}

export default Home;