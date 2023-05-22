import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesign/AppLogo';
import { Icon } from '@/shared/ui/redesign/Icon';
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
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
                >
                    <AppLogo className={cls.appLogo} size={collapsed ? 32 : 54} />
                    <VStack role={'navigation'} gap='8' className={cls.itemsRedesigned}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid='sidebar-toggle'
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        width={16}
                        height={16}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher/>
                        <LangSwitcher short={collapsed} className={cls.lang}/>
                    </div>
                </section>
            }
        />
    )

})