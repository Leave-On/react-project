import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Page } from "shared/ui/Page/Page";

const MainPage = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }
    return (
        <Page>
            {t('Главная страница')}
            < Input
                placeholder="type here"
                value={value}
                onChange={onChange}
            />
        </Page>
    );
};

export default MainPage;
