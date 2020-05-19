import React from 'react'
import profile from '../../images/profile.jpg'
import lin from '../../images/linkedinblack.png'
import git from '../../images/gitblack.png'
import so from '../../images/stackblack.png'

function Profile() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-2">
                    <img className="profile" src={profile} alt="profile" />
                </div>
                <div className="col-lg-6 profile-name">
                    Varun Miyani
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <img className="profile-link ml2" src={lin} alt="profile-link" />
                    <img className="profile-link" src={git} alt="profile-link" />
                    <img className="profile-link" src={so} alt="profile-link" />
                </div>
                <div className="col-lg-6">
                    varunmiyani@gmail.com | +91 8892538145
                </div>
            </div>
            <hr />
        </React.Fragment>
    )
}

export default Profile
