import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	variant?: CardVariant;
	max?: boolean;
	padding?: CardPadding;
	border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
	'0': 'padding-0',
	'8': 'padding-8',
	'16': 'padding-16',
	'24': 'padding-24',
};

export const Card = memo((props: CardProps) => {
	const {
		className,
		children,
		max,
		variant = 'normal',
		padding = '8',
		border = 'normal',
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.max]: max,
	};

	const paddingClass = mapPaddingToClass[padding];

	return (
		<div
			className={classNames(cls.Card, mods, [
				className,
				cls[variant],
				cls[paddingClass],
				cls[border],
			])}
			{...otherProps}
		>
			{children}
		</div>
	);
});
