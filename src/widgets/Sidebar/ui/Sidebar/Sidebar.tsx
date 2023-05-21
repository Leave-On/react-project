import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarItemsList = useSelector(getSidebarItems)

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList])

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            off={
                <section
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
                    <VStack role={'navigation'} gap='8' className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher/>
                        <LangSwitcher short={collapsed} className={cls.lang}/>
                    </div>
                </section>
            }
            on={
                <section
                    data-testid='sidebar'
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [className])}
                >
                    <AppLogo className={cls.appLogo} />
                </section>
            }
        />
    )

})