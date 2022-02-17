import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { HomeScreen } from '../components/main/HomeScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { SignUpScreen } from '../components/auth/SignUpScreen';
import { UserScreen } from '../components/user/UserScreen';
import { NewDutyScreen } from '../components/duty/NewDutyScreen';
import { ListingScreen } from '../components/home/ListingScreen';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={
                    <PublicRoutes>
                        <HomeScreen />
                    </PublicRoutes>
                } />
                <Route path='/login' element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />
                <Route path='/signup' element={
                    <PublicRoutes>
                        <SignUpScreen />
                    </PublicRoutes>
                } />
                <Route path='/' element={
                    <PrivateRoutes>
                        <UserScreen />
                    </PrivateRoutes>
                } />
                <Route path='/newDuty' element={
                    <PrivateRoutes>
                        <NewDutyScreen />
                    </PrivateRoutes>
                } />
                <Route path='/homes' element={
                    <PrivateRoutes>
                        <ListingScreen />
                    </PrivateRoutes>
                } />
            </Routes>
        </ BrowserRouter>
    )
}
