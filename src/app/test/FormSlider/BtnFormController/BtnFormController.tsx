import { FC } from 'react';

import style from './BtnFormController.module.sass';
const BtnFormController: FC<{
    title: string;
    click: () => void;
}> = ({ title, click }) => {
    return (
        <button className={style.btnModal} type='button' onClick={click}>
            {title}
        </button>
    );
};

export const BtnFormControllerList: FC<{
    prevFunc: () => void;
    nextFunc: () => void;
}> = ({ prevFunc, nextFunc }) => {
    return (
        <nav className={style.btnList}>
            <BtnFormController title={'<'} click={prevFunc} />
            <BtnFormController title={'>'} click={nextFunc} />
        </nav>
    );
};
