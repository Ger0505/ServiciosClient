import { url, url_file } from "../global.json";

class API{
    async getBody(URL, method, body){
        let jsonObj = JSON.stringify(body)
        const query = await fetch(url + URL,
        {   method: method,
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: jsonObj})
        const data = query.json()
        return data
    }

    async getData(URL){
        const query = await fetch(url + URL)
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