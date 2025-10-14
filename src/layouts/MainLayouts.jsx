import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header />
            <main className="min-h-[calc(100vh-300px)]">
                {navigation.state === 'loading' ? <LoadingSpinner /> : <Outlet />}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

