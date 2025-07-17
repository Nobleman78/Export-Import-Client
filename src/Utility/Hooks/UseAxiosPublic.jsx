import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-xi-six-54.vercel.app'
    //baseURL: 'http://localhost:3000'
})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;