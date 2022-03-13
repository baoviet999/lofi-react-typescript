import { closeIcon } from "assets/icons";
import { logoImg } from "assets/images";
import React, { LegacyRef, useRef, useState } from "react";
import { UserPayLoad } from "../../authSlice";
import Logout from "../Logout/Logout";
import Member from "../Member/Member";
import Profile from "../Profile/Profile";
import "./AccountModal.scss";
interface AccountModalProps {
    accountData: UserPayLoad;
    onCloseModal?: () => void;
}

const AccountModal = ({ accountData, onCloseModal }: AccountModalProps) => {
    const [tab, setTab] = useState<string>("profile");
    const handleCancel = () => {
        setTab("profile");
    };
    return (
        <div className="account__wrapper">
            <div className="account">
                <img src={closeIcon} alt="" onClick={onCloseModal} />
                <div className="grid">
                    <div className="row">
                        <div className="col l-3">
                            <ul className="account__menu">
                                <li>
                                    <img src={logoImg} alt="" />
                                </li>
                                <li
                                    className={`${tab === "profile" && "active"}`}
                                    onClick={() => setTab("profile")}
                                >
                                    <span>Profile</span>
                                </li>
                                <li
                                    className={`${tab === "member" && "active"}`}
                                    onClick={() => setTab("member")}
                                >
                                    <span>Membership</span>
                                </li>
                                <li
                                    className={`${tab === "logout" && "active"}`}
                                    onClick={() => setTab("logout")}
                                >
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-9">
                            <div className="account__tabs">
                                {tab === "profile" && <Profile accountData={accountData} />}
                                {tab === "member" && <Member />}
                                {tab === "logout" && <Logout onCancel={handleCancel} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountModal;

interface AccountInputProps {
    placeholder?: string;
    label: string;
}
export const AccountInput = ({ placeholder, label }: AccountInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div
            className="account__input"
            onClick={() => (inputRef.current !== null ? inputRef.current.focus() : null)}
        >
            <label>{label}</label>
            <input ref={inputRef} type="text" value={placeholder} />
        </div>
    );
};
