import { fetchWithToken } from '../../helpers/fetch';
import { types } from '../../types/types';

export const startGetallDeletedHomesByUserId = (id) => {
  return async (dispatch) => {
      try {
          //Realizamos la petición al servidor
          const resp = await fetchWithToken('recoverHomes', {id}, 'GET');
          //Parseamos la respuesta a formato json
          const body = await resp.json();
          //Comprobamos si la petición fue exitosa
          if (body.ok) {
            dispatch(getAllDeletedHomesByUserId(body.homes));
          }
      } catch (error) {
          console.log(error);
      }
  }
};

const getAllDeletedHomesByUserId = (homes) => ({
  type: types.homeGetAllDeleted,
  payload: homes
})