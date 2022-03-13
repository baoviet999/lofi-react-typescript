import { UserPayLoad } from "fearture/Auth/authSlice";
import React from "react";
import { AccountInput } from "../AccountModal/accountModal";

interface ProfileProps {
    accountData : UserPayLoad
}

const Profile = ({accountData}: ProfileProps) => {
    return (
        <div className="account__profile">
            <div className="account__profile-wrap">
                <div className="account__profile-header">
                    <h3>My information</h3>
                    <button>Update</button>
                </div>
                <div className="account__profile-content">
                    <AccountInput
                        placeholder={accountData.displayName !== null ? accountData.displayName : ""}
                        label="UserName"
                    />
                </div>
            </div>
            <div className="account__profile-wrap">
                <div className="account__profile-header">
                    <h3>Email Adress</h3>
                    <button>Update Email</button>
                </div>
                <div className="account__profile-content">
                    <AccountInput
                        placeholder={accountData.email !== null ? accountData.email : ""}
                        label="UserName"
                    />
                </div>
            </div>
            <div className="account__profile-wrap">
                <div className="account__profile-header">
                    <h3>Change Password</h3>
                    <button>Change Password</button>
                </div>
                <div className="account__profile-content">
                    <AccountInput label="Current Password" />
                    <AccountInput label="New Password" />
                    <AccountInput label="Confirm" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
