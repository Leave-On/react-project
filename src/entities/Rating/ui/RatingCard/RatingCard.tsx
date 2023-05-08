import { classNames } from '@/shared/lib/classNames/classNames';
import { useDetectMobile } from '@/shared/lib/hooks/useDetectMobile/useDetectMobile';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface RatingCardProps {
   className?: string;
   title: string;
   afterRatingText: string;
   feedbackTitle?: string;
   hasFeedback?: boolean;
   onCancel?: (starCount: number) => void;
   onAccept?: (starCount: number, feedback?: string) => void;
   rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        afterRatingText: afterSendTitle,
        rate = 0
    } = props;

    const { t } = useTranslation()
    const isMobile = useDetectMobile()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeddback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeddback}
                placeholder={t('Your feedback') as string}
            />
        </>

    )

    console.log(isMobile ? 'on mobile' : 'on desktop');

    return (
        <Card className={className} max>
            <VStack align='center' gap='8' max>
                <Text
                    title={starsCount ? afterSendTitle : title}
                />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            {isMobile && (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap='32'>
                        {modalContent}
                        <Button onClick={acceptHandler} size={ButtonSize.L} fullWidth>
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            )}
            {!isMobile && (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap='32'>
                        {modalContent}
                        <HStack max gap='16' justify='end'>
                            <Button
                                onClick={cancelHandler}
                                theme={ButtonTheme.OUTLINED_RED}
                            >{t('Close')}
                            </Button>
                            <Button
                                onClick={acceptHandler}
                            >{t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )

            }

        </Card>
    );
})