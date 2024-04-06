import { Typography } from "@mui/material"
import {useState} from 'react'
import './ProfileView.css'

const ProfileView = () => {

    const [data, setData] = useState({
        name:"Aryan Karma",
        region: "Indore",
        fieldarea:"300",
        preference: "Wheat, Rice, xyz" 
    })

    return <div className="containerOut">
    <div className="container">
        <h1>PROFILE</h1>
        <div className="wrapper">
        <div className="profileInput">
            <form action="/profile" method="post" id="profileForm">
            <div className="inputRow">
                <label htmlFor="email">Name</label> <br />
                <input type="text" id="name" name="name" required placeholder={data.name} />
            </div>
            <div className="inputRow">
                <label htmlFor="full_name">Region</label> <br />
                <input type="text" id="Region" name="Region" placeholder={data.region}
                required />
            </div>
            <div className="inputRow">
                <label htmlFor="contact">Field Area (in hectare)</label><br />
                <input type="number" id="contact" name="contact" placeholder={data.fieldarea}
                required />
            </div>
            <div className="inputRow">
                <label htmlFor="adrress">Preference</label><br />
                <input type="text" id="adrress" name="address" placeholder={data.preference}
                required />
            </div>
            <button type="submit" className="button-24">Save & Submit</button>
            </form>
        </div>
        </div>
    </div>
  </div> 

}

export default ProfileView;