import { modalSlice } from '@/appFsd/redux/slice/modalSlice';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useRedux';

export const useMainModal = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(state => state.modalSlice.isOpenMainModal);
    const { SetIsOpenMainModal } = modalSlice.actions;
    const open = () => dispatch(SetIsOpenMainModal(true));
    const close = () => dispatch(SetIsOpenMainModal(false));

    return {
        isOpen,
        open,
        close
    };
};
