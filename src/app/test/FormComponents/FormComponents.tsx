'use client';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { TLoginForm } from '../ClientPage';
import style from './FormComponents.module.sass';

type FormInputProps = {
    label: string;
    name: keyof TLoginForm;
    register: UseFormRegister<TLoginForm>;
};

export const FormInput: FC<FormInputProps> = ({ label, name, register }) => {
    return (
        <div className={style.formInputWrapper}>
            <label className={style.formLabel} htmlFor={name}>
                {label}
            </label>
            <input
                className={style.formInput}
                type='text'
                placeholder='Placeholder'
                {...register(name)}
            />
        </div>
    );
};

export const FormBtn: FC<{ type: 'submit' | 'button'; title: string }> = ({
    type,
    title
}) => {
    return (
        <button className={style.formBtn} type={type}>
            {title}
        </button>
    );
};
