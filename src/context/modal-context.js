import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => setIsOpen(true);
    const hideModal = () => setIsOpen(false);
    const toggleModal = () => setIsOpen(prev => !prev)

    return <ModalContext.Provider value={{isOpen, showModal, hideModal, toggleModal}}>
        {children}
    </ModalContext.Provider>
}

const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider }