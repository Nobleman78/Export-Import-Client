import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import AuthContext from "../../ContextApi/AuthContext";

const UseAdmin = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email,  // only run if user.email is valid
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    });
    return [isAdmin];
};


export default UseAdmin;