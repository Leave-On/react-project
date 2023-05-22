import { HStack } from "@/shared/ui/deprecated/Stack";
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
            <HStack>
                <div>{t('login: user - password: 123')}</div>

            </HStack>
        </Page>
    );
};

export default MainPage;
