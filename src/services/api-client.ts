import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
        key :"ea122f674e5148a386f3cd7854ca718b"
    }
})