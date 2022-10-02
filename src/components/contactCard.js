import React from "react";
// import user from "../../images/user.png"

const CardContact = (props) => {
    const { id, name, email}= props.contact;
    return( 
    <div className="item" style={{display: "flex", position:"space-between"}}>
        {/* <img className="ui avatar image" src={user} alt="user" /> */}
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{color:"red", marginTop:"4px", display:"flex-right"}}
      onClick={() => props.clickHandler(id)}></i>
    </div>
    );
};

export default CardContact;