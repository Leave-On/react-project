import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme()

  const { t } = useTranslation()
 

   return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <Button >{t('toggle')}</Button>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense> 
    </div>
  );
};


export default App;