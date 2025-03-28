import React from 'react';

const AuthWrapper = () => {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute left-0 top-0 h-60 w-60 bg-[radial-gradient(#FF00A2,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
      <div className='absolute bottom-0 right-0 h-60 w-60 bg-[radial-gradient(#FF00A2,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)]' />
      <div className='flex h-[80vh] flex-col items-center justify-center rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold'>Welcome to Attractify AI</h1>
        <p className='text-sm text-gray-500'>Please sign in to continue</p>
      </div>
    </div>
  );
};

export default AuthWrapper;
