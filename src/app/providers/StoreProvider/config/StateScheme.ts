import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import {  AxiosInstance } from "axios";
import { ArticleDetailsScheme } from "entities/Article";
import { CounterScheme } from "entities/Counter";
import { ProfileScheme } from "entities/Profile";
import { UserScheme } from "entities/User";
import { addNewCommentScheme } from "features/AddNewComment";
import { LoginScheme } from "features/AuthByUsername";
import { ArticleDetailsCommentsScheme } from "pages/ArticleDetailsPage";
import { ArticlesPageScheme } from "pages/ArticlePage";

export interface StateScheme {
  counter: CounterScheme;
  user: UserScheme;

  // async reducers
  loginForm?: LoginScheme;
  profile?: ProfileScheme;
  articleDetails?: ArticleDetailsScheme;
  articleDetailsComments?: ArticleDetailsCommentsScheme;
  addNewComment?: addNewCommentScheme;
  articlesPage?: ArticlesPageScheme;
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
