import storage from "./localstorage.js";
const storageKey = 'goodsTotal';
let goodsNum = storage.get(storageKey) || {};
export default {
    set(id,val){
        goodsNum[id] = val;
        storage.set(storageKey,goodsNum);
    },
    get(id){
        if(id){
            return goodsNum[id] || 0;
        }else{
            let totals = this.getTotal();
            return totals.length && totals.reduce((v1,v2) => v1+v2);
        }
    },
    getIdList(){
        return Object.keys(goodsNum);
    },
    getTotal(){
        return Object.values(goodsNum);
    },
    remove(id){
        delete goodsNum[id];
        storage.set(storageKey,goodsNum);
    }
}