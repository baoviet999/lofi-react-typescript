import { useAppDispatch } from "App/store";
import { userActions } from "fearture/Auth/authSlice";
import React from "react";
import "./Logout.scss";

interface LogoutProps {
    onCancel : ()=>void
}

const Logout = ({ onCancel }: LogoutProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className="logout">
            <h3>Do you want to Logout?</h3>
            <div className="logout__btns">
                <div className="logout__btn cancel" onClick={onCancel}>Cancel</div>
                <div className="logout__btn" onClick={()=> dispatch(userActions.logout())}>Yes</div>
            </div>
        </div>
    );
};

export default Logout;
