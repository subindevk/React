import axios from 'axios'

const LOGIN_BASE_REST_API_URL = 'http://localhost:8080/api/v1/user';

class loginservice{
    async  getallUser(){
        console.log("Checking")
    const response = await axios.get(LOGIN_BASE_REST_API_URL);
    console.log(response)
    return response.data
}

    createuser(user){
        return axios.post(LOGIN_BASE_REST_API_URL,user)
    }

    getEmployeeById(userId){
        return axios.get(LOGIN_BASE_REST_API_URL + '/' + userId);
    }

    updateUser(userId, user){
        return axios.put(LOGIN_BASE_REST_API_URL + '/' +userId, user);
    }

    deleteEmployee(userId){
        return axios.delete(LOGIN_BASE_REST_API_URL + '/' + userId);
    }
}

export default new loginservice();
