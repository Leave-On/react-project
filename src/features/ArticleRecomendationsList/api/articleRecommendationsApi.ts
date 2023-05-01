import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRecomendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),
    })
});

export const useArticlesRecomendationsList = recommendationsApi.useGetArticlesRecomendationsListQuery
