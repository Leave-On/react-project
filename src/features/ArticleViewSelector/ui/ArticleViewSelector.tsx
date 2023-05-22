import { ArticleView } from '@/entities/Article';
import BlocksIcon from '@/shared/assets/icons/blocks.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BLOCKS,
        icon: BlocksIcon
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon
    }
]


export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {

    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        width={24}
                        height={24}
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: viewType.view === view }, [cls.icons])}

                    />
                </Button>
            ))}
        </div>
    );
}