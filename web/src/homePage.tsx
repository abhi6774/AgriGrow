import Form from './components/form'
import Portal from './components/portal'

const Home = ({componentData}: {componentData: boolean}) => {

    console.log(componentData)    
    return componentData ? <Form /> : <Portal />
}

export default Home;