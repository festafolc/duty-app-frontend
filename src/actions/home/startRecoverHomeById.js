import { fetchWithToken } from '../../helpers/fetch';
import { types } from '../../types/types';

export const startRecoverHomeById = (id) => {
  return async (dispatch) => {
      try {
          const resp = await fetchWithToken(`recoverHomes/${id}`, {}, 'PUT');
          const body = await resp.json();
          if (body.ok) {
              dispatch(recoverHome(id));
          }
      } catch (error) {
          console.log(error);
      }
  }
}

const recoverHome = (id) => ({
    type: types.homeRecover,
    payload: id
})