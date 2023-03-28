import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getAddNewCommentError, getAddNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const AddNewComment: FC<AddNewCommentProps> = (props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('translation')
    const text = useSelector(getAddNewCommentText)
    const error = useSelector(getAddNewCommentError)
    const dispatch = useAppDispatch()

    const reducers: ReducerList = {
        addNewComment: addNewCommentReducer
    }

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewComment, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('What do you think about that?') as string}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                >{t('Publish')}</Button>
            </div>
        </DynamicModuleLoader>

    );
}

export default AddNewComment