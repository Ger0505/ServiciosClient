import { url, url_file } from "../global.json";
import Session from './Session'

class API{
    async getLog(URL, body){
        let jsonObj = JSON.stringify(body)
        const query = await fetch(url + URL,
        {   method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: jsonObj})
        const data = query.json()
        return data
    }

    async getBody(URL, method, body){
        let token = await Session.getToken()
        if(!token || token === null || token === undefined) return null
        let jsonObj = JSON.stringify(body)
        const query = await fetch(url + URL,
        {   method: method,
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: jsonObj})
        const data = query.json()
        return data
    }

    async getData(URL, method = "GET"){
        let token = await Session.getToken()
        if(!token || token === null || token === undefined) return null
        const query = await fetch(url + URL,{
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = query.json()
        return data
    }

    async getFile(file){
        const formData = new FormData();
        formData.append('file', file);
        fetch(url_file, { method: 'POST', body: formData })
    }
}

export default new API();