import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-full min-h-[calc(100vh-300px)]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default LoadingSpinner;
