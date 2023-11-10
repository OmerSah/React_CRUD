import axios from "axios"

export default axios.create({
    baseURL : "https://654778f9902874dff3ac59e5.mockapi.io",
    headers : {
        "Content-type" : "application/json"
    }
});