import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
	inverted?: boolean;
}
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const Icon: FC<IconProps> = (props) => {
	const { className, Svg, inverted, ...otherProps } = props;

	return (
		<Svg
			className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
			{...otherProps}
		/>
	);
};
