"use client"; 

import { useEffect } from "react";

import { useStoreModal } from "../../hooks/use-store-model";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);
    
    return (
        <div className='p-4'>
        </div>
    )
}

export default SetupPage;



