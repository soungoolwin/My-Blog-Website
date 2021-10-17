import { ref } from '@vue/reactivity'
let getData = ()=>{
    let error = ref("")
    let article = ref("")
    let fetchData = async(resource)=>{
        try{
            let res = await fetch(resource)
            if(!res){
                throw new Error('url not found')
            }
            return res
        }catch(err){
            console.log(err.message)
        }
    }

return {error, fetchData, article}
}

export default getData;