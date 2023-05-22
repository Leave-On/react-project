import { Button } from '@/shared/ui/deprecated/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


// тестовый
export const BugButton = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button
            onClick={onThrow}
        >
            {t('Показать ошибку')}
        </Button>
    );
}