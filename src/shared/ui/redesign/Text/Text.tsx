import { classNames } from '@/shared/lib/classNames/classNames';
import { DefaultTFuncReturn } from 'i18next';
import { memo } from 'react';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
	className?: string;
	title?: DefaultTFuncReturn | string;
	text?: DefaultTFuncReturn | string;
	variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;

	// test
	'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
	s: 'size-s',
	m: 'size-m',
	l: 'size-l',
};
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	s: 'h1',
	m: 'h2',
	l: 'h3',
};

export const Text = memo((props: TextProps) => {
	const {
		className,
		text,
		title,
		align = 'left',
		variant = 'primary',
		size = 'm',
		'data-testid': dataTestId = '',
	} = props;

	const HeaderTag = mapSizeToHeaderTag[size];
	const sizeClass = mapSizeToClass[size];
	const additionalClasses = [className, cls[variant], cls[align], sizeClass];

	return (
		<div className={classNames(cls.Text, {}, additionalClasses)}>
			{title && (
				<HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
					{title}
				</HeaderTag>
			)}
			{text && (
				<p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
					{text}
				</p>
			)}
		</div>
	);
});
