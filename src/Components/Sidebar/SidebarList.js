import React from 'react'
import "./SidebarList.css"
import profilepicture from "../../Image/profile.jpg"

const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>

        {expandSidebar ? (
        <div className='navbar-items'>

            <div className='sidebar-profile-pic'>
                <img src={profilepicture} alt="" />
            </div>

        </div>) : (<div>
            
        </div>)}


    </React.Fragment>
  )
}

export default SidebarList