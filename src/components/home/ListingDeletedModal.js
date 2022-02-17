import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAllLivingHomesByUserId } from '../../actions/home/startGetAllLivingHomesByUserId';
import { startRecoverHomeById } from '../../actions/home/startRecoverHomeById';
import { uiCloseModal } from '../../actions/ui/startUi';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        maxHeight: '500px',
        maxWidth: '700px',
        minWidth: '700px',
        transform: 'translate(-50%, -50%)',
        },
    };


Modal.setAppElement('#root');

export const ListingDeletedModal = () => {
    //Obtenemos el hook useDispatch
    const dispatch = useDispatch();

    //Obtenemos el id del usuario
    const {id} = useSelector(state => state.auth);

    //Obtenemos el estado de deletedHomes
    const {deletedHomes} = useSelector(state => state.homes);

    //Buscamos el estado del modal en el store de Redux
    const openModal = useSelector(state => state.ui.modalOpen);

    //Establecemos en false el modal del store
    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    //Recuperación de home eliminado
    const handleRecoverHome = (e) => {
        //Obtenemos el id del home que se quiere recuperar
        const {home: homeId} = e.target.dataset;
        //Lanzamos la acción para recuperar home
        dispatch(startRecoverHomeById(homeId));
        //Lanzamos la acción para mostrar los living homes
        setTimeout(() => {
            dispatch(startGetAllLivingHomesByUserId(id));
        }, 100);
        
    }
    return (
        <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >

            {
                (deletedHomes.length === 0) ? <p className='text-center'>No deleted homes found</p> :                 <div className='row'>
                {
                    deletedHomes.map(home =>
                        <div className='col-xs-1 py-2 d-flex align-items-stretch' key={home.id}>
                            <div className={`card h-100 w-100 ${home.deactivated === 'YES' ? "bg-secondary" : ""}`}>
                                <div className='card-header d-flex justify-content-between'>
                                    <b>{home.name}</b> 
                                </div>
                                <div className='card-body d-inline'>
                                    <ul>
                                        <li>Type: {home.type_home}</li>
                                        {(home.country) ? <li>Country: {home.country}</li> : null}
                                        {(home.state) ? <li>State: {home.state}</li> : null}
                                        {(home.city) ? <li>City: {home.city}</li> : null}
                                        {(home.street) ? <li>Street: {home.street}</li> : null}
                                        {(home.home_number) ? <li>Home number: {home.home_number}</li> : null}
                                        {(home.floor) ? <li>Floor: {home.floor}</li> : null}
                                        {(home.door) ? <li>Door: {home.door}</li> : null}
                                        {(home.zipcode) ? <li>Zipcode: {home.zipcode}</li> : null}
                                    </ul>
                                </div>  
                                <button type='button' data-home={home.id} className='btn btn-success btn-block' onClick={handleRecoverHome}>Recover</button>
                            </div>
                        </div>
                    )
                }
            </div>
            }
            

            
        </Modal>
    );
};