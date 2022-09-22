import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3434/getAllItems";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'mode': 'no-cors'
}


class APICalls {



    getMedicineById(medId) {
        console.log("-----", medId);
        let url ="http://localhost:3434/medDetails/"+ medId;
        console.log('url :',url);
        return axios.get( url, { headers, mode: 'no-cors', });
        }

    getAllMedicines() {
        return axios.get("http://localhost:3434/getAllMedicines",{ headers, mode: 'no-cors', });
    }

    raiseRequest(req) {
        console.log('raise req');
        return axios.post("http://localhost:3434/raiseRequest", req);
    }
    
    getAllRaiseRequest() {
        return axios.get("http://localhost:3434/getAllRaiseRequest",{ headers, mode: 'no-cors', });
    }

    getAllApprovedRequest(){
        return axios.get("http://localhost:3434/getAllApprovedRequest",{ headers, mode: 'no-cors', }); 
    }
    getPendingRequest(){
        return axios.get("http://localhost:3434/getAllPendingRequest",{ headers, mode: 'no-cors', }); 
    }
    getCreatedRequest(){
        return axios.get("http://localhost:3434/getAllCreatedRequest",{ headers, mode: 'no-cors', }); 
    }
    getDeclinedRequest(){
        return axios.get("http://localhost:3434/getAllDeclinedRequest",{ headers, mode: 'no-cors', }); 
    }


    updateRaiseRequest(statudReq) {
        return axios.put("http://localhost:3434/updateRaiseRequest", statudReq,{ headers,  });
    }
    createUser(req) {
        console.log('raise req');
        return axios.post("http://localhost:3434/createUser", req,headers);
    }
    
    authenticate(req){
        console.log('login');
        return axios.post("http://localhost:3434/login", req,headers);
    }

    sss(){
        return axios.get("https://jsonplaceholder.typicode.com/todos/1",{ headers, mode: 'no-cors', });  
    }
}

export default new APICalls()