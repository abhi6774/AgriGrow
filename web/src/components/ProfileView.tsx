import {useState} from 'react'
import './ProfileView.css'

const ProfileView = () => {

    const data = {
        name:"Aryan Karma",
        region: "Indore",
        fieldarea:"300",
        preference: "Wheat, Rice, xyz" 
    }

    const [statedata, setstatedata] = useState([])

    async function getState (){
        fetch('http://localhost:3000/api/v1/regions/states')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
            setstatedata(data)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      
    }

    getState()

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
    
            <label htmlFor="dropdown">Choose State:</label>
            <select>
                {statedata.map((input : any)=>{
                    return <option value={input}>{input}</option>
                })}
            </select>

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