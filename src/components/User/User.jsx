import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '5px solid yellow',
        borderRadius: '20px',
        padding: '5px'

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>
                <button>Show details</button>
            </Link>
        </div>
    );
};

export default User;