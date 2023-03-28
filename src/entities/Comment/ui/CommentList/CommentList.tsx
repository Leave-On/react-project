import { Comment } from 'entities/Comment/model/types/comment';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true}  />
                <CommentCard isLoading={true}  />
                <CommentCard isLoading={true}  />
            </div>
        )
    }


    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ?  comments.map(comment => (
                    <CommentCard
                        className={cls.comment}
                        key={comment.id}
                        comment={comment}
                    />
                ))
                : <Text title={t('No comments yet') as string} />

            }
        </div>
    );
}