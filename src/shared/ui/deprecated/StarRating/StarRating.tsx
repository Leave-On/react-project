import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import StarIcon from '../../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
   className?: string;
   onSelect?: (starsCount: number) => void;
   size?: number;
   selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5]
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        selectedStars = 0,
        size
    } = props;
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))


    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map(starNumber => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarCount >= starNumber ? cls.hovered : cls.normal]
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={'StarRating.' + starNumber}
                    data-selected={currentStarCount >= starNumber}
                />
            ))}
        </div>
    );
})