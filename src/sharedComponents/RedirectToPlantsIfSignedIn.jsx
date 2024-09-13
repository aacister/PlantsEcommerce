import { useContext, useEffect } from 'react';
import SessionContext from "context/sessionContext";
import { useNavigate } from 'react-router-dom';

const RedirectToPlantsIfSignedIn = (props) => {
    //if signed in, redirect to PlantsListPage
    //Otherwise, render children
    const { username } = useContext(SessionContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(username){
            navigate('/plants');
        }
    }, [username]);
    return props.children
};

export default RedirectToPlantsIfSignedIn;