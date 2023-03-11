import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type { StateScheme, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig } from "./config/StateScheme";

export {
    StoreProvider,
    createReduxStore,
    StateScheme,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig
}
