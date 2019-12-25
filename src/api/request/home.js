import fetchs from '../fetchs.js'
export default {
    getBannerUrl(params){
        return fetchs('get','/api/daoway/rest/config/banners',params)
    },
    getCategroy(params){
        return fetchs('get','/api/daoway/rest/category/for_filter',params)
    },
    getRecommend(params){
        return fetchs('get','/api/daoway/rest/service_items/recommend_top',params)
    }
}