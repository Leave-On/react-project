
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';

const App = () => {
  const { theme } = useTheme()


   return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <Button >toggle</Button>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense> 
    </div>
  );
};


export default App;