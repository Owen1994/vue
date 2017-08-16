export default {
    set(key,Obj){
        let goods;
        try{
            goods =  JSON.stringify(Obj);
        }catch(e){
            goods = obj;
        }finally{
            localStorage.setItem(key,goods);
        }
    },
    get(key){
        let data = localStorage.getItem(key);
        let result;
        try{
            result = JSON.parse(data);
        }catch(e){
            result = {}
        }finally{
            return result || {};
        }
    }
}