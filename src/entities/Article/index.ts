import { getArticleDetailsData } from './model/selectors/ArticleDetails'
import { Article } from './model/types/article'
import { ArticleDetailsScheme } from './model/types/ArticleDetailsScheme'
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
import { ArticleList } from './ui/ArticleList/ArticleList'
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs'
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'
import { ArticleDetailsReducer } from './model/slice/ArticleDetailsSlice'

export {
    ArticleSortField,
    ArticleType,
    ArticleView,
    ArticleBlockType,
} from './model/consts/consts'

export type {
    Article,
    ArticleDetailsScheme,

}
export {
    ArticleDetails,
    ArticleList,
    ArticleViewSelector,
    ArticleTypeTabs,
    getArticleDetailsData,
    ArticleDetailsReducer
}
