import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";

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
                {/* <ListBox
                    defaultValue={'Choose'}
                    value={undefined}
                    items={[
                        { value: '1', content: 'sfdgg' },
                        { value: '3', content: 'sfdgg', disabled: true },
                        { value: '2', content: 'sfdgg' },
                    ]}
                    onChange={(value: string) => {}}
                /> */}
            </HStack>
        </Page>
    );
};

export default MainPage;
