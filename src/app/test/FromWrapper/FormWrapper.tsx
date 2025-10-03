'use client';
import dynamic from 'next/dynamic';
import { FC, useRef } from 'react';

import useClickOutside from '@/shared/lib/hooks/useClickOutside';
const MotionDiv = dynamic(() =>
    import('framer-motion').then(mod => mod.motion.div)
);
const MotionBtn = dynamic(() =>
    import('framer-motion').then(mod => mod.motion.button)
);
const DynamicAnimatePresence = dynamic(() =>
    import('framer-motion').then(mod => mod.AnimatePresence)
);
import Image from 'next/image';

import style from './FormWrapper.module.sass';

export const FromWrapper: FC<{
    children: React.ReactNode;
    closeFunc: () => void;
    isOpen: boolean | null;
}> = ({ children, closeFunc, isOpen }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref, closeFunc);
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
                                onClick={closeFunc}
                            >
                                <Image
                                    alt=''
                                    src={'/xMark.svg'}
                                    width={28}
                                    height={28}
                                ></Image>
                            </MotionBtn>
                            {children}
                        </MotionDiv>
                    </div>
                </>
            )}
        </DynamicAnimatePresence>
    );
};
