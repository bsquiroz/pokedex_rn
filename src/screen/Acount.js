import React from "react";
import { LoginForm } from "../components/Auth/LoginForm";
import { UserData } from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export const Acount = () => {
    const { auth } = useAuth();

    return <>{auth ? <UserData /> : <LoginForm />}</>;
};
