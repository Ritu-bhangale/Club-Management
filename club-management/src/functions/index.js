import * as api from '../apis/index'

export const readClubs = async ()=>{
    try{
        const {data} = await api.readClubs()
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}

export const readEvents = async()=>{
    try{
        const {data} = await api.readEvents()
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}