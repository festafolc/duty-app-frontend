import { fetchWithoutToken } from '../../helpers/fetch';
import { types } from '../../types/types';

export const startSignUp = (name, surname, surname2, birth, email, phone, username, password) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('signup', {name, surname, surname2, birth, email, phone, username, password}, 'POST');
        const body = await resp.json();
        console.log(body);
        //dispatch(signUp(rname, surname, surname2, birth, email, phone, username, password));
    }
}



const signUp = (rname, surname, surname2, birth, email, phone, username, password) => ({
    type: types.userSignUp,
    payload: {
        rname,
        surname,
        surname2,
        birth,
        email,
        phone,
        username,
        password
    }
})