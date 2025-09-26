'use client';

import { useMainModal } from '@/shared/lib/hooks/useActionModal';
import { EditModal } from '@/shared/ui/Modal/EditModal';

export const ModalList = () => {
    const { isOpen, open, close } = useMainModal();

    return (
        <>
            <EditModal isOpen={isOpen} open={open} close={close} />
        </>
    );
};
