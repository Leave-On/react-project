## Сущность статьи


#### Public api

- Components:

`ArticleDetails` - компонент с информацией о статье

`ArticleList` -  Компонент со списком статей

- types:

`Article` - Тип, описывающий статью

`ArticleDetailsScheme` - Тип, описывающий слайс стейта статьи

- consts:

`ArticleSortField` - Содержит варианты сортировки статей

`ArticleType` - Содержит тематики статей

`ArticleView` - Содержит варианты вида статей (плитка или список)

`ArticleBlockType` - Содержит варианты контента статьи (изображение, текст или кодовая вставка)

- selectors:

`getArticleDetailsData` - Селектор для получения информации о текущей открытой статье

- reducers:

`ArticleDetailsReducer` - Редьюсер слайса подробной информации о статье
