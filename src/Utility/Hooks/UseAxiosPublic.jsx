import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-xi-six-54.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;