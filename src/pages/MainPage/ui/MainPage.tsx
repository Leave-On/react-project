import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";
import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }
    return (
        <Page>
            {t('Main page')}
            <HStack>
                <div>{t('login: user - password: 123')}</div>

            </HStack>
            <RatingCard
                title={t('Title') as string}
                feedbackTitle={t('Feedback give') as string}
                hasFeedback
                afterRatingText=""
            />
        </Page>
    );
};

export default MainPage;
