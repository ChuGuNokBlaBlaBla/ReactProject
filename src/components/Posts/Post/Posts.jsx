import React from 'react';
import PostsRender from './PostsRender';

const Posts = (props) => props.dataSentPost.map((f) => <PostsRender key={f.id} src={f.src} message={f.message} />)

export default Posts;