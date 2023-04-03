import "../../../style/Adminstyle/widgetSmall.css"
import { Visibility } from "@material-ui/icons"
import {useRef, useState, useEffect } from 'react';

export default function WidgetSmall() {
    const [users, setUser] = useState([]);
  
    // fetch all concerts from data
    useEffect(() => {
      //setConcerts(true);
      const getUsers = () => {
    
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost:3030/auth", {
          method: 'GET',
          redirect: 'follow'
        })
          .then(response => response.json())
          .then(result => setUser(result))
          .catch(error => console.log('error', error));
      }
      getUsers()
        // console.log(concerts)
        //.then(setConcerts(false));
        
    }, []);
  if (users === undefined) return null
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername"> <p key={user.id}>{ user.firstName } </p></span>
                    <span className="widgetSmUserEmail"><p key={user.id}>{ user.email} </p></span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li> 
        </ul>
    </div>
  )
}