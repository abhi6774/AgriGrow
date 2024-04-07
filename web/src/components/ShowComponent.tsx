import { Typography } from "@mui/material"
import ProfileView from "./ProfileView"
import PortalView from './PortalView';

import {useState} from 'react'

const ShowComponent = ({somePropName}:{somePropName:boolean}) => {

    // console.log(somePropName)

    return somePropName === true ? <PortalView /> : <ProfileView/> 

}
export default ShowComponent;