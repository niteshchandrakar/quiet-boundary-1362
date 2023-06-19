import React, { useContext } from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import App from '../../App';
import { AppContext } from '../Pages/AuthContextProvider';
const PrivateRoute = ({children}) => {
    const {data,setdata,HandleFormRequest} =useContext(AppContext)
if(!data.isAuth){
    return(<Navigate to='/'/>)
}else{
    return children
}

};

export default PrivateRoute;