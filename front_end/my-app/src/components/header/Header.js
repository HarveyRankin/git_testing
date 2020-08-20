import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
    return(
    <div className="header">
        <IconButton>
        <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>

        <img style={{height:'40px',objectFit:'contain'}} src="https://www.logosurfer.com/wp-content/uploads/2018/03/tinder-logo_0.png" alt="tinder logo"/>
        <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large"/>
        </IconButton>
        
    </div>
    )
}
export default Header;