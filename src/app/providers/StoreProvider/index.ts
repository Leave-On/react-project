import type { StateScheme, ThunkConfig, ThunkExtraArg, ReduxStoreWithManager, StateSchemeKey } from "./config/StateScheme";
import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export type {  };
export {
    StoreProvider,
    createReduxStore,
};

export type {
    AppDispatch,
    StateScheme,
    ThunkConfig,
    ThunkExtraArg,
    ReduxStoreWithManager,
    StateSchemeKey
}
