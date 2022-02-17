import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startNewDuty } from '../../actions/duty/startNewDuty';
import { PropertyLivingAndActiveList } from './PropertyLivingAndActiveList';

export const NewDutyScreen = () => {
    //Obtenemos el dispatch para lanzar acciones
    const dispatch = useDispatch();

    //Obtenemos el id del usuario que va a crear un nuevo duty
    const {id} = useSelector(state => state.auth);

    //Acción para crear un duty
    const handleCreateDuty = () => {
        return dispatch(startNewDuty(id));
    }
  return <>
            <section className='p-5'>
                <h1>New Duty Screen</h1>
                <hr />
                <PropertyLivingAndActiveList />
                <div>
                    <button className='btn btn-primary' onClick={handleCreateDuty}>New duty</button>
                </div>    
            </section>

        </>;
};
