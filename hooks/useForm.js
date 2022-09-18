import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log(target)
        setformState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setformState(initialForm);
    }

    //Desestructuramos el mismo formstate para poder desestructurar al momento de llamar la funcion
    //Sin necesidad de desestructurar estos valores por aparte
    return {
        ...formState,
        formState, onInputChange, onResetForm
    }


}