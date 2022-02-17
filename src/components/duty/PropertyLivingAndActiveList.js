import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetAllLivingAndActiveHomes } from '../../actions/duty/startGetAllLivingAndActiveHomes';

export const PropertyLivingAndActiveList = () => {
    //Obtenemos el useDispatch
    const dispatch = useDispatch();

    //Obtenemos el estado de los homes del duty del store
    const {homes} = useSelector(state => state.duty);

    //Mostramos todos los homes vivos y activos
    useEffect(() => {
        dispatch(startGetAllLivingAndActiveHomes());
    }, []);
    
    return (
        <>
            {
                homes.map(home =>
                    <div key={home.id}><b>{home.name}</b></div>
                    )
            }
            <div>PropertyLivingAndActiveList</div>
        </>

    )
}
