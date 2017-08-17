import Vue from "vue";
import cache from "./cache.js";
import { Toast } from 'mint-ui';
export default {
    get(url,success){
        if(cache.get(url)){
            let resbody = cache.get(url);
            success(resbody);
        }else{
            Vue.http.get(url).then((res) => {
                let resbody = res.body;
                if(resbody.status == 0){
                    cache.set(url,resbody);
                    success(resbody);
                }else{
                    Toast('请求失败！');
                }
            })
        }
    },
    post(){}
}