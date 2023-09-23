import { useLoaderData } from "react-router-dom";


const UserDetail = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h5>{name}</h5>
            <h6>Contact info: {website}</h6>
        </div>
    );
};

export default UserDetail;