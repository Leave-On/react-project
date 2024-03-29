import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback } from 'react';
import CopyIcon from '../../../assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
	className?: string;
	text: string;
}
/**
 * Deprecated, use redesigned compoents
 * @deprecated
 */
export const Code = (props: CodeProps) => {
	const { className, text } = props;

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.Code, {}, [className])}>
			<Button onClick={onCopy} className={cls.copy_btn} theme={ButtonTheme.CLEAR}>
				<CopyIcon className={cls.copyIcon} />
			</Button>
			<code>{text}</code>
		</pre>
	);
};
