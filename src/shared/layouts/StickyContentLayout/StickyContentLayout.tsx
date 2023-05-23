import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactElement } from 'react';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
   className?: string;
   left?: ReactElement;
   content?: ReactElement;
   right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;

    return (
        <div className={classNames(cls.StickyContentLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            {content && <div className={cls.content}>{content}</div>}
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
})