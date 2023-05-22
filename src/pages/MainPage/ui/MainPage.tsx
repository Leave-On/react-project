import { VStack } from "@/shared/ui/deprecated/Stack";
import { Page } from "@/widgets/Page";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }
    return (
        <Page data-testid="MainPage">
            {t('Main page')}
            <VStack>
                <div>{t('user  123 - old design')}</div>
                <div>{t('admin  123 - new design')}</div>
            </VStack>
        </Page>
    );
};

export default MainPage;
