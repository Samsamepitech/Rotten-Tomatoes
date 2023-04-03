import React from 'react'
import "../../style/Adminstyle/topbar.css"
import { NotificationImportantSharp, Language, Settings } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function TopBar() {
    
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"><Link to={{pathname: '/'}}><span>SHOW TIME</span></Link></div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationImportantSharp/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://pickaface.net/gallery/avatar/unr_workplacemale_180407_1548_cm3i.png" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}