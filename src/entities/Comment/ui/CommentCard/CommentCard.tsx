import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesign/Stack';
import { FC } from 'react';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
	const { className, comment, isLoading } = props;

	if (isLoading) {
		return (
			<VStack
				data-testid="CommentCard.loading"
				gap={'8'}
				max
				className={classNames(cls.CommentCard, {}, [className, cls.loading])}
			>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border="50%" />
					<Skeleton height={16} width={100} className={cls.username} />
				</div>
				<Skeleton width={'100%'} height={50} className={cls.text} />
			</VStack>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<VStack
			data-testid="CommentCard.content"
			gap={'8'}
			max
			className={classNames(cls.CommentCard, {}, [className])}
		>
			<AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
				{comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
				<Text className={cls.username} title={comment.user.username} />
			</AppLink>
			<Text className={cls.text} text={comment.text} />
		</VStack>
	);
};
