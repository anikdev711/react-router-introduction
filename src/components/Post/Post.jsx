import { Link, useNavigate } from "react-router-dom";



const Post = ({post}) => {

    const {id, title} = post;
    const navigate = useNavigate();

    const postStyle = {
        border: '5px solid green',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
    }
    
    return (
        <div style ={postStyle}>
            <h3>Post Id: {id}</h3>
            <h4>Post title: {title}</h4>
            <Link to={`/post/${id}`}>
                <button>See details</button>
            </Link>
            <button onClick={handleShowDetail}>More</button>
        </div>
    );
};

export default Post;