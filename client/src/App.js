import {authActions} from './redux';
import {useDispatch} from 'react-redux';

import {
    LoginPage,
    CompaniesPage,
    NotFoundPage,
    ProfilePage,
    RegisterPage,
    AuthPage,
    CompanyDetailPage,
    CreateCompanyPage,
    UpdateCompanyPage, UpdateProfilePage
} from './pages';
import {MainLayout} from './layouts';
import {Navigate, Route, Routes} from 'react-router-dom';
import {RequireAuth} from './hoc';


function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    if (token) {
        dispatch(authActions.setAuth())
    }
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/profile'}/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/registration'} element={<RegisterPage/>}/>
                <Route path={'/profile'} element={<RequireAuth><ProfilePage/></RequireAuth>}/>
                <Route path={'/profile/update'} element={<RequireAuth><UpdateProfilePage/></RequireAuth>}/>
                <Route path={'/companies'} element={<RequireAuth><CompaniesPage/></RequireAuth>}/>
                <Route path={'/companies/:companyId'} element={<RequireAuth><CompanyDetailPage/></RequireAuth>}/>
                <Route path={'/companies/:companyId/update'} element={<RequireAuth><UpdateCompanyPage/></RequireAuth>}/>
                <Route path={'/companies/create'} element={<RequireAuth><CreateCompanyPage/></RequireAuth>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>

    );
}

export default App;
