import React, {useEffect, useState} from 'react';

function ChatRoom(props) {
    const [chatroom, setChatroom] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
            .then(json => {console.log(json);setPosts(json)})
        let config = {
            method: 'get',
            maxBodyLenght: Infinity,
            url: 'https://jsonplaceholder.typicode.com/posts', headers: {}
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setPosts(response.data);
        })
        .catch((error) => {
        console.log(error);
});
    }, []);
    return (
        <div>
            <h1>ChatRoom</h1>
        </div>
    );
}

export default ChatRoom;