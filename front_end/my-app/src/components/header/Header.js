import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import "./Header.css";

const Header = () => {
    return(
    <div className="header">
        <PersonIcon/>
        <img className="header__logo" src="https://www.logosurfer.com/wp-content/uploads/2018/03/tinder-logo_0.png" alt="tinder logo"/>
        <QuestionAnswerIcon/>
    </div>
    )
}
export default Header;