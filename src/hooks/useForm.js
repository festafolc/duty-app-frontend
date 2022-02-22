import { useState } from 'react';


export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const setFormValues = (properties) => {
        setValues({...properties});
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, setFormValues, reset];
}