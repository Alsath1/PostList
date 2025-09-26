'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';

import { useCreatePostMutation } from '@/appFsd/api/getPlaceholderData';
import useClickOutside from '@/shared/lib/hooks/useClickOutside';
import style from '@/shared/ui/Modal/EditModal.module.sass';

import { TEditModal } from './types';
const MotionDiv = dynamic(() =>
    import('framer-motion').then(mod => mod.motion.div)
);
const MotionBtn = dynamic(() =>
    import('framer-motion').then(mod => mod.motion.button)
);
const DynamicAnimatePresence = dynamic(() =>
    import('framer-motion').then(mod => mod.AnimatePresence)
);

export const EditModal: FC<TEditModal> = Props => {
    const { close, isOpen } = Props;
    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref, close);
    const [createPost, { isLoading, data }] = useCreatePostMutation();
    const [dragOver, setDragOver] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            if (file) formData.append('file', file);

            await createPost(formData).unwrap();
        } catch (err) {
            console.error('Ошибка отправки:', err);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => setDragOver(false);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };
    return (
        <DynamicAnimatePresence>
            {isOpen && (
                <>
                    <MotionDiv
                        className={style.backGround}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    ></MotionDiv>
                    <div className={style.osagoWrapper}>
                        <MotionDiv
                            ref={ref}
                            className={style.card}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                scale: [1, 1.1, 1],
                                transition: {
                                    duration: 0.4,
                                    ease: 'easeInOut'
                                }
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1,
                                transition: { duration: 0.4 }
                            }}
                        >
                            <MotionBtn
                                className={style.xMark}
                                whileTap={{ scale: 0.9 }}
                                onClick={close}
                            >
                                <Image
                                    alt=''
                                    src={'/xMark.svg'}
                                    width={28}
                                    height={28}
                                ></Image>
                            </MotionBtn>

                            <form
                                className={style.textWrapper}
                                onSubmit={handleSubmit}
                            >
                                <span>Введите данные</span>
                                <input
                                    className={style.textInput}
                                    name='text'
                                    type='text'
                                    placeholder='Заголовок'
                                />

                                <div
                                    className={`${style.fileInputWrapper} ${
                                        dragOver ? style.dragOver : ''
                                    }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() =>
                                        document
                                            .getElementById('fileInput')
                                            ?.click()
                                    }
                                >
                                    {file
                                        ? file.name
                                        : 'Перетащите файл сюда или нажмите для выбора'}
                                    <input
                                        id='fileInput'
                                        type='file'
                                       
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <button type='submit' disabled={isLoading}>
                                    {isLoading ? 'Отправка...' : 'Отправить'}
                                </button>

                                {data && (
                                    <pre>{JSON.stringify(data, null, 2)}</pre>
                                )}
                            </form>
                        </MotionDiv>
                    </div>
                </>
            )}
        </DynamicAnimatePresence>
    );
};
