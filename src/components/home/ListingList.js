import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSelectHome } from '../../actions/home/startSelectHome';
import { startDeleteHomeById } from '../../actions//home/startDeleteHomeById';
import { uiOpenModal } from '../../actions/ui/startUi';
import { startActivateHome } from '../../actions/home/startActivateHomeById';
import { startDeactivateHome } from '../../actions/home/startDeactivateHomeById';

export const ListingList = () => {
    //Obtenemos el useDispatch
    const dispatch = useDispatch();

    //Obtenemos los living homes del state
    const {livingHomes} = useSelector(state => state.homes);

    //Editar home
    const handleUpdateHome = (e) => {
        //Obtenemos el id del home que se pretende editar
        const {home: homeId} = e.target.dataset
        //Seleccionamos el home que se pretende editar
        dispatch(startSelectHome(homeId));
        //Abrimos el modal para editar los homes
        setTimeout(() => {
            dispatch(uiOpenModal('1'));
        }, 100)
    }
    //Eliminar home
    const handleDeleteHome = (e) => {
        //Obtenemos el id del home que se pretende eliminar
        const {home: homeId} = e.target.dataset
        //Lanzamos la accion para eliminar el home
        dispatch(startDeleteHomeById(homeId));
    }
    //Activar y desactivar home
    const activateDeactivateHome = (e) => {
        //Obtenemos el id del home que se pretende activar o desactivar y su estado
        const {home: homeId, deactivated} = e.target.dataset;
        if (deactivated === 'YES') {
            //Lanzamos la acción para activar el home
            dispatch(startActivateHome(homeId));
        } else {
            //Lanzamos la acción para desactivar el home
            dispatch(startDeactivateHome(homeId)); 
        }
    }
    return (
        <div className='container mt-3'>
            {
                livingHomes.map(home =>
                    <div className={`card mb-2 ${home.deactivated === 'YES' ? "bg-secondary" : ""}`} key={home.id}>
                            <div className='card-header d-flex justify-content-between'>
                                <b>{home.name}</b> {(home.deactivated === 'YES') ? <button className='btn btn-success' type='button' data-home={home.id} data-deactivated={home.deactivated} onClick={activateDeactivateHome}>Activate</button> : <button className='btn btn-secondary' type='button' data-home={home.id} data-deleted={home.deleted} onClick={activateDeactivateHome}>Deactivate</button>} 
                            </div>
                            <div className='card-body d-inline'>
                                <ul>
                                    <li>Type: {home.type_home}</li>
                                    {(home.country) ? <li>Country: {home.country}</li> : null}
                                    {(home.state) ? <li>State: {home.state}</li> : null}
                                    {(home.city) ? <li>City: {home.city}</li> : null}
                                    {(home.street) ? <li>Street: {home.street}</li> : null}
                                    {(home.street_number) ? <li>Street number: {home.street_number}</li> : null}
                                    {(home.floor) ? <li>Floor: {home.floor}</li> : null}
                                    {(home.door) ? <li>Door: {home.door}</li> : null}
                                    {(home.zipcode) ? <li>Zipcode: {home.zipcode}</li> : null}
                                </ul>
                                <button type='button' data-home={home.id} className='btn btn-warning mx-2' onClick={handleUpdateHome}>Edit Home</button>
                                <button type='button' data-home={home.id} className='btn btn-danger' onClick={handleDeleteHome}>Delete Home</button>
                            </div>
                        </div> 
                    )
            }
        </div>
    );
};
