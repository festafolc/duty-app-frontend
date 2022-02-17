import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetallDeletedHomesByUserId } from '../../actions/home/startGetallDeletedHomesByUserId';
import { startGetAllLivingHomesByUserId } from '../../actions/home/startGetAllLivingHomesByUserId';
import { uiOpenModal } from '../../actions/ui/startUi';
import { ListingDeletedModal } from './ListingDeletedModal';
import { ListingList } from './ListingList';
import { ListingModal } from './ListingModal';

export const ListingScreen = () => {
    const dispatch = useDispatch();

    //Obtenemos el id del usuario que va a solicitar todos sus homes
    const {id} = useSelector(state => state.auth);

    //Mostramos todos los living homes del usuario
    useEffect(() => {
        dispatch(startGetAllLivingHomesByUserId(id));
    }, []);

    //Abrimos el modal
    const handleOpenModal = (e) => {
        if (e.target.id === '2') {
            //Mostrar los homes eliminados por id del usuario
            dispatch(startGetallDeletedHomesByUserId(id));
            setTimeout(() => {
                dispatch(uiOpenModal(e.target.id));
            }, 100)
        } else {
            //Abrimos el modal para crear un home
            dispatch(uiOpenModal(e.target.id));
        }
    }

    //Seleccionamos el id del modal que queremos abrir
    const {modalId} = useSelector(state => state.ui);
    
  return (
        <>
            <h1>Listing screen</h1>
            <hr />
            <div className='container mb-5'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-sm'>
                        <button type='button' id='1' className='btn btn-primary' onClick={handleOpenModal}>Create Home</button>
                    </div>
                    <div className='col-sm d-flex justify-content-end'>
                        <button type='button' id='2' className='btn btn-primary' onClick={handleOpenModal}>Recover your homes</button>
                    </div>
                </div>
            </div>
            <ListingList />
            {(modalId === '1') ? <ListingModal /> : null}
            {(modalId === '2') ? <ListingDeletedModal /> : null}
        </>
    )
}