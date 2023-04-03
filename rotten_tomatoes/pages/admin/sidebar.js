// import "../../style/admin/sidebar.css"

import { Timeline, PersonSharp, Event, Web } from "@material-ui/icons"
import {Nav} from "react-bootstrap";

export default function SideBar() {
  return (
    <div className="AdminSideBar">
       <div className="sidebarWrapper">
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">
             Dashboard
            </h3>
            <ul className="sidebarList">
              <li className="sidebartListItem">
              <Web className="sidebarIcon"/> <Nav.Link href="/">Website</Nav.Link> 
              </li>
              <li className="sidebartListItem">
                 <Timeline className="sidebarIcon"/> <Nav.Link href="/admin">Analytics</Nav.Link> 
              </li>
            </ul>
              <h3 className="sidebarTitle">
                Management
              </h3>
            <ul className="sidebarList">
              <li className="sidebartListItem">
                <PersonSharp className="sidebarIcon"/> <Nav.Link href="/admin/users">Users</Nav.Link> 
              </li>
              <li className="sidebartListItem">
                <Event className="sidebarIcon"/><Nav.Link href="/admin/concerts">Events</Nav.Link>
              </li>
            </ul>
         </div>
       </div>
    </div>
  )
}