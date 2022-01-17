
import React, { useState, useEffect } from 'react';
import axios from '../../../../api/sample/axios';
import requeststest from '../../../../api/sample/requeststest';

function App() {

const [posts, setPosts] = useState([])



useEffect(() => {
    axios.get(requeststest.fetchTrending)
    .then(res => {
        setPosts(res.data)
    })
}, [])


return (
<div className='app'>
{
                posts.map(post => <li key={post.id}> {post.director} </li>)
            }
testtestS
</div>

);
}

export default App;