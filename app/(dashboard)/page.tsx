'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className='min-h-screen p-4'>
      <h1>Dashboard</h1>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value='system'>System</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </div>
  );
};

export default Dashboard;
