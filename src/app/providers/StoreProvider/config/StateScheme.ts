import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import {  AxiosInstance } from "axios";
import { ArticleDetailsScheme } from "@/entities/Article";
import { CounterScheme } from "@/entities/Counter";
import { UserScheme } from "@/entities/User";
import { addNewCommentScheme } from "@/features/AddNewComment";
import { LoginScheme } from "@/features/AuthByUsername";
import { ProfileScheme } from "@/features/EditableFrofileCard";
import { ScrollSaveScheme } from "@/features/ScrollSave";
import { ArticleDetailsPageSheme } from "@/pages/ArticleDetailsPage";
import { ArticlesPageScheme } from "@/pages/ArticlePage";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateScheme {
  counter: CounterScheme;
  user: UserScheme;
  scroll: ScrollSaveScheme;

  // async reducers
  loginForm?: LoginScheme;
  profile?: ProfileScheme;
  articleDetails?: ArticleDetailsScheme;
  addNewComment?: addNewCommentScheme;
  articlesPage?: ArticlesPageScheme;
  articleDetailsPage?: ArticleDetailsPageSheme;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

// export type MountedReducers = OptionalRecord<StateSchemeKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
  add: (key: StateSchemeKey, reducer: Reducer) => void;
  remove: (key: StateSchemeKey) => void;
  // getMountedReducers: () => MountedReducers;
}

export type StateSchemeKey = keyof StateScheme;

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateScheme;
}
