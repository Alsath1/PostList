'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, setupStore } from '@/appFsd/redux/store';
export const ReduxProvider = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        storeRef.current = setupStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
};
