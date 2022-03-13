import React from "react";
import './Member.scss'
const Member = () => {
    return (
        <div className="account__member">
            <h3>Manage Membership </h3>
            <div className="account__member-active">
                <div className="account__member-plan">
                    <div className="account__member-header">
                        Free Plan
                        <span>Active</span>
                    </div>
                    <div className="account__member-footer">FREE</div>
                </div>
                <div className="account__member-btn">Cancel</div>
            </div>
        </div>
    );
};

export default Member;
