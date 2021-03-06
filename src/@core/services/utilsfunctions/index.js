import axios from '../../config'

const getData = async (url) =>{
    return await axios.get(url)
}

const postData = async (url, data) =>{
    await axios.post(url, {data})
    .then((response)=>{
        return response
    },(error) =>{
        return error
    })
}

const putData = async (url, data) =>{
    await axios.put(url, {data})
    .then((response)=>{
        return response
    },(error) =>{
        return error
    })
}

export default{
    _getApi: getData,
    _postApi: postData,
    _putApi: putData
}