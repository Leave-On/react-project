import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss'
import MainIcon from 'shared/assets/icons/main_page_icon.svg'
import AboutIcon from 'shared/assets/icons/about_page_icon.svg'

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  const { t } = useTranslation()
  return (
    <div 
    data-testid='sidebar'
    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button 
      data-testid='sidebar-toggle' 
      onClick={onToggle} 
      className={cls.collapseBtn}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      square
      size={ButtonSize.L}
      >
        { collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div >
          <AppLink 
          to={RoutePath.main} 
          theme={AppLinkTheme.SECONDARY} 
          className={cls.item}
        > 
            <MainIcon className={cls.icon}/>
            <span className={cls.link}>
              {t('Главная страница')}
            </span>
         </AppLink>
        </div>
        <div >
          <AppLink 
          to={RoutePath.about} 
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
          > 
            <AboutIcon className={cls.icon}/>
            <span className={cls.link}>
              {t('О нас')} 
            </span>
            
          </AppLink>
          </div>




      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed} className={cls.lang}/>
      </div>
    </div>
  );
}