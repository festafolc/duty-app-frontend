import { fetchWithoutToken } from '../../helpers/fetch';
import { types } from '../../types/types';

export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('login', {email, password}, 'POST');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login(body.user));
        } else {
            alert('Not email found');
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
});