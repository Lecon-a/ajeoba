import React from "react";
import VerticalDivider from "./VerticalDivider";

const Menu = (props) => {
  return (
    <>
      <div className="header-menu-left">
        <div className="search-notification-operator">left</div>
        <VerticalDivider height='42' className='gap-30' />
        { !props.hideUser && <div className="active-user-info gap-12">
          <h5 className="username">Username</h5>
          <div className="user-image">
            <img className="img-fluid" src="images/user_01.jpg" alt="" />
          </div>
        </div>}
      </div>
    </>
  );
};

export default Menu;
