import { ReducersMapObject } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateScheme } from "../config/StateScheme";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScheme>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider = (props: StoreProviderProps) => {

    const {
        children,
        initialState,
        asyncReducers
    } = props


    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>,
        navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}