import { useEffect, useState } from "react";

export default function Post({ postId }) {
    const [postData, setPostData] = useState();

    useEffect(() => {
        const loadData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const json = await data.json();
            setPostData(json);
        }

        loadData();
    }, [postId])

    return (
        <div>
            <h1>{postData?.title}</h1>
            <p>{postData?.body}</p>
        </div>
    )
}