let cache = {};
let maxAge = 10000;
export default {
    set(name,data){
        cache[name] = {
            data:data,
            time:Date.now()
        };
    },
    get(name){
        let tempObj = cache[name];
        if(!tempObj || Date.now() - cache[name].time > maxAge){
            this.remove(name);
        }else{
            return tempObj.data;
        }
    },
    remove(name){
        delete cache[name];
    }
}