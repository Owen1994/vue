// import Vue from 'vue';

export default function(Vue){
    Vue.filter("formatDate",function(val,format){
    let eryear = /YYYY/;
    let erMonth= /MM/;
    let eryDate = /DD/;

    let time = new Date(val);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    return format.replace(eryear,year).replace(erMonth,month).replace(eryDate,date);
})
} 