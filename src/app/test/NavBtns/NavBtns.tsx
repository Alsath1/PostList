import { FC } from 'react';

import { TButtonList, TModalList } from '../types';
import style from './NavBtns.module.sass';

const buttonList: TModalList[] = [
    'login1',
    'login2',
    'register1',
    'register2',
    'logout'
];

const ButtonModal: FC<TButtonList> = ({ click, title }) => {
    return (
        <button className={style.btnModal} onClick={click}>
            {title}
        </button>
    );
};

export const BtnModalControlList: FC<{ func: (el: TModalList) => void }> = ({
    func
}) => {
    return (
        <nav className={style.btnList}>
            {buttonList.map(el => (
                <ButtonModal key={el} title={el} click={() => func(el)} />
            ))}
        </nav>
    );
};
