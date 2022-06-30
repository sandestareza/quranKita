import axios from "axios"

const apiUrl = 'https://api.npoint.io/99c279bb173a6e28359c'

export default async function handler(req, res) {

    const { method, query } = req
    
    if (method === 'GET') {

        try {

            const response = await axios.get(`${apiUrl}/surat/${query.id}`) 

            const result = await response.data

            return res.status(200).json({status:200, data:result})
            
            
        } catch (error) {
            
            const {status, statusText}= error.response

            return res.status(status).json({status: status, message: statusText})
        }
        
    }



}
