import ProfileView from "./ProfileView"
import PortalView from './PortalView';


const ShowComponent = ({somePropName}:{somePropName:boolean}) => {

    // console.log(somePropName)

    return somePropName === true ? <PortalView /> : <ProfileView/> 

}
export default ShowComponent;