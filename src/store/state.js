
let defaultCity='上海'
try{
    if(localStorage.city){
        defaultCity=localStorage.city
    }
}catch(e){console.log(e)}

export default {    
    // city: localStorage.city || '上海'
    city:defaultCity
}