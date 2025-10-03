'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormBtn, FormInput } from './FormComponents/FormComponents';
import { FormSlider } from './FormSlider/FormSlider';
import { FromWrapper } from './FromWrapper/FormWrapper';
import { BtnModalControlList } from './NavBtns/NavBtns';
import { TModalList } from './types';
export type TLoginForm = {
    username: string;
    password: string;
    nickname: string;
    tag: string;
};
const Login1 = () => {
    const { register, handleSubmit } = useForm<TLoginForm>();

    const onSubmit = (data: TLoginForm) => {
        console.log(data, 'Login1');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSlider
                listComponent={[
                    {
                        component: [
                            <FormInput
                                label='username'
                                name='username'
                                register={register}
                            />,
                            <FormInput
                                label='password'
                                name='password'
                                register={register}
                            />
                        ],
                        title: 'Login1 step1'
                    },
                    {
                        component: [
                            <FormInput
                                label='tag'
                                name='tag'
                                register={register}
                            />,
                            <FormInput
                                label='nickname'
                                name='nickname'
                                register={register}
                            />,
                            <FormBtn title='submit' type='submit' />
                        ],
                        title: 'Login1 step2'
                    }
                ]}
            />
        </form>
    );
};

const Login2 = () => {
    const { register, handleSubmit } = useForm<TLoginForm>();

    const onSubmit = (data: TLoginForm) => {
        console.log(data, 'Login2');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSlider
                listComponent={[
                    {
                        component: [
                            <FormInput
                                label='username'
                                name='username'
                                register={register}
                            />,
                            <FormInput
                                label='password'
                                name='password'
                                register={register}
                            />
                        ],
                        title: 'Login2 step1'
                    },
                    {
                        component: [
                            <FormInput
                                label='tag'
                                name='tag'
                                register={register}
                            />,
                            <FormInput
                                label='nickname'
                                name='nickname'
                                register={register}
                            />,
                            <FormBtn title='submit' type='submit' />
                        ],
                        title: 'Login2 step2'
                    }
                ]}
            />
        </form>
    );
};
const Register1 = () => {
    const { register, handleSubmit } = useForm<TLoginForm>();

    const onSubmit = (data: TLoginForm) => {
        console.log(data, 'Register1');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSlider
                listComponent={[
                    {
                        component: [
                            <FormInput
                                label='username'
                                name='username'
                                register={register}
                            />,
                            <FormInput
                                label='password'
                                name='password'
                                register={register}
                            />
                        ],
                        title: 'Register1 step1'
                    },
                    {
                        component: [
                            <FormInput
                                label='tag'
                                name='tag'
                                register={register}
                            />,
                            <FormInput
                                label='nickname'
                                name='nickname'
                                register={register}
                            />,
                            <FormBtn title='submit' type='submit' />
                        ],
                        title: 'Register1 step2'
                    }
                ]}
            />
        </form>
    );
};
const Register2 = () => {
    const { register, handleSubmit } = useForm<TLoginForm>();

    const onSubmit = (data: TLoginForm) => {
        console.log(data, 'Register2');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSlider
                listComponent={[
                    {
                        component: [
                            <FormInput
                                label='username'
                                name='username'
                                register={register}
                            />,
                            <FormInput
                                label='password'
                                name='password'
                                register={register}
                            />
                        ],
                        title: 'Register2 step1'
                    },
                    {
                        component: [
                            <FormInput
                                label='tag'
                                name='tag'
                                register={register}
                            />,
                            <FormInput
                                label='nickname'
                                name='nickname'
                                register={register}
                            />,
                            <FormBtn title='submit' type='submit' />
                        ],
                        title: 'Register2 step2'
                    }
                ]}
            />
        </form>
    );
};
const Logout = () => {
    const { register, handleSubmit } = useForm<TLoginForm>();

    const onSubmit = (data: TLoginForm) => {
        console.log(data, 'Logout');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSlider
                listComponent={[
                    {
                        component: [
                            <FormInput
                                label='username'
                                name='username'
                                register={register}
                            />,
                            <FormInput
                                label='password'
                                name='password'
                                register={register}
                            />
                        ],
                        title: 'Logout step1'
                    },
                    {
                        component: [
                            <FormInput
                                label='tag'
                                name='tag'
                                register={register}
                            />,
                            <FormInput
                                label='nickname'
                                name='nickname'
                                register={register}
                            />,
                            <FormBtn title='submit' type='submit' />
                        ],
                        title: 'Logout step2'
                    }
                ]}
            />
        </form>
    );
};

const modalList = {
    login1: <Login1 />,
    login2: <Login2 />,
    register1: <Register1 />,
    register2: <Register2 />,
    logout: <Logout />
};

export const ClientPage = () => {
    const [modalState, setModalState] = useState<TModalList>(null);
    const currentModal = modalState ? modalList[modalState] : null;

    return (
        <div>
            <BtnModalControlList func={setModalState} />
            <FromWrapper
                isOpen={!!modalState}
                closeFunc={() => setModalState(null)}
            >
                {currentModal}
            </FromWrapper>
        </div>
    );
};
