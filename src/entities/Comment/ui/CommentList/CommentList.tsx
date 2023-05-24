import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesign/Stack';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
	const { className, comments, isLoading } = props;
	const { t } = useTranslation();

	if (isLoading) {
		return (
			<VStack gap={'16'} max className={classNames('', {}, [className])}>
				<CommentCard isLoading={true} />
				<CommentCard isLoading={true} />
				<CommentCard isLoading={true} />
			</VStack>
		);
	}

	return (
		<VStack gap={'16'} max className={classNames('', {}, [className])}>
			{comments?.length ? (
				comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
			) : (
				<Text title={t('No comments yet') as string} />
			)}
		</VStack>
	);
};
