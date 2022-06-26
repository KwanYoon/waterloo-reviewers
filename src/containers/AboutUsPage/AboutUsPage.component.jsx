import React from "react";
import Navbar from './../../components/Navbar/Navbar.component';
import "./AboutUsPage.styles.scss";
import ProfileImgDiyar from "./images/profile-img-diyar.png";
import ProfileImgJaden from "./images/profile-img-jaden.png";
import ProfileImgKwan from "./images/profile-img-kwan.png";

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <Navbar />
            <div className="about-us-flex-container">
                <div className="about-us-profile-modal">
                    <div className="about-us-profile-image">
                        <img alt="Jaden" src={ProfileImgJaden} className="about-us-profile-image-inner"/>
                    </div>
                    <div className="about-us-profile-bio">
                        <h3>Jaden Chang</h3>
                        To be bussin', or not to be bussin'
                    </div>
                </div>
                
                <div className="about-us-profile-modal">
                    <div className="about-us-profile-image">
                        <img alt="Diyar" src={ProfileImgDiyar} className="about-us-profile-image-inner"/>
                    </div>
                    <div className="about-us-profile-bio">
                        <h3>Diyar Yasin</h3>
                        A big sweet tooth who loves ice cream, pastries, and the occasional boba
                    </div>
                </div>
                
                <div className="about-us-profile-modal">
                    <div className="about-us-profile-image">
                        <img alt="Kwan" src={ProfileImgKwan} className="about-us-profile-image-inner"/>
                    </div>
                    <div className="about-us-profile-bio">
                        <h3>Kwan Yoon</h3>
                        Hate boba, love chicken
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutUsPage;