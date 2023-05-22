import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/deprecated/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";




export const Counter = () => {

    const dispatch = useAppDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    const { t } = useTranslation()

    return (
        <div >
            <h1 data-testid='value-title'> { counterValue }</h1>
            <Button onClick={increment} data-testid='increment-btn'>
                {t('increment')}
            </Button>
            <Button onClick={decrement} data-testid='decrement-btn'>
                {t('decrement')}
            </Button>
        </div>
    );
}