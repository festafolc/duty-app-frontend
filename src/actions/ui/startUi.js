import { types } from "../../types/types";

export const uiOpenModal = (modalId) => ({
    type: types.uiOpenModal,
    modalId
});

export const uiCloseModal = () => ({
    type: types.uiCloseModal,
})