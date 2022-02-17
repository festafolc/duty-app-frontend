import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startNewHome } from '../../actions/home/startnewHome';
import { startUpdateHomeById } from '../../actions/home/startUpdateHomeById';
import { startUnselectHome } from '../../actions/home/startUnselectHome';
import { uiCloseModal } from '../../actions/ui/startUi';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };


Modal.setAppElement('#root');

export const ListingModal = () => {
    //Creamos el manejador de los valores del formulario
    const [formHomeValues, handleHomeChange] = useForm({
        hname: '',
        typeHome: '',
        country: '',
        state: '',
        city: '',
        street: '',
        homeNumber: '',
        floor: '',
        door: '',
        zipcode: ''
    });

    //Obtenemos los parámetros del formulario
    const {hname, country, state, city, street, homeNumber, floor, door, zipcode} = formHomeValues;

    //Controlamos el estado del tipo de home
    const [typeHomeValue, setTypeHomeValue] = useState('');

    //Obtenemos el hook useDispatch
    const dispatch = useDispatch();

    //Obtenemos el id del usuario que va a crear un nuevo home
    const {id} = useSelector(state => state.auth);

    //Obtenemos el estado de activeHome
    const selectHome = useSelector(state => state.homes.selectHome);

    //Buscamos el estado del modal en el store de Redux
    const openModal = useSelector(state => state.ui.modalOpen);

    //Establecemos en false el modal del store y limpiamos el home seleccionado
    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(startUnselectHome())
    }

    //Actualizamos el valor de typeHome según el seleccionado
    const handleTypeHomeChange = (e) => {
        setTypeHomeValue(e.target.value);        
    }

    //Enviamos los valores del home al backend
    const handleHomeSubmit = (e) => {
        e.preventDefault();
        if (selectHome) {
            //Actuliazamos el home seleccionado
            dispatch(startUpdateHomeById(hname, typeHomeValue, country, state, city, street, homeNumber, floor, door, zipcode, selectHome[0].id));
        } else {
            //Creamos un nuevo home
            dispatch(startNewHome(hname, typeHomeValue, country, state, city, street, homeNumber, floor, door, zipcode, id))
        }
    }

    return (
        <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='container d-flex justify-content-center'>
                <div className='row'>
                    <div className='d-flex align-items-center'>
                        <div className='col-md'>
                            <h1 className='text-center'>{(selectHome) ? 'Edit home' : 'Create new home'}</h1>
                            <div className='container'>
                                <form onSubmit={handleHomeSubmit}>
                                    <input type='text' name='hname' onChange={handleHomeChange} className='form-control mt-5' placeholder='Name of your home'/>
                                    <select name='typeHome' value={typeHomeValue} onChange={handleTypeHomeChange} className='form-control mt-2'>
                                        <option>Choose a type of home</option>
                                        <option value='House'>House</option>
                                        <option value='Apartment'>Apartment</option>
                                    </select>
                                    <input type='text' name='country' onChange={handleHomeChange} className='form-control mt-2' placeholder='Country'/>
                                    <input type='text' name='state' onChange={handleHomeChange} className='form-control mt-2' placeholder='State'/>
                                    <input type='text' name='city' onChange={handleHomeChange} className='form-control mt-2' placeholder='City'/>
                                    <input type='text' name='street' onChange={handleHomeChange} className='form-control mt-2' placeholder='Street'/>                    
                                    <input type='text' name='homeNumber' onChange={handleHomeChange} className='form-control mt-2' placeholder='Home Number'/>                                           
                                    <input type='text' name='floor' onChange={handleHomeChange} className='form-control mt-2' placeholder='Floor'/>                     
                                    <input type='text' name='door' onChange={handleHomeChange} className='form-control mt-2' placeholder='Door'/>
                                    <input type='text' name='zipcode' onChange={handleHomeChange} className='form-control mt-2' placeholder='Zipcode'/>
                                    <div className='d-flex justify-content-center mt-5'>
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
