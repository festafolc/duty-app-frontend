import { fetchWithToken } from '../../helpers/fetch';
import { types } from "../../types/types";


export const startGetAllLivingHomesByUserId = (id) => {
    return async (dispatch) => {
        try {
            //Realizamos la petición al servidor
            const resp = await fetchWithToken('livingHomes', {id}, 'GET');
            //Parseamos la respuesta a formato json
            const body = await resp.json();
            //Comprobamos si la petición fue exitosa
            if (body.ok) {
                dispatch(getAllLivingHomesByUserId(body.homes));
            } else {
                alert('No data has been found')
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const getAllLivingHomesByUserId = (homesByUserId) => ({
    type: types.homeGetAllLiving,
    payload: homesByUserId
});