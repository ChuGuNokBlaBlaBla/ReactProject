import React from 'react'; 
import s from './Post.module.css'

const Post = (props)=> {
    return (
        props.state.dataPosts.map((f)=> {
            return(
                <div className={s.wrapPost}>
                    <div className={s.wrapIcon}>
                        <img src={f.src} />
                    </div>
                    <div className={s.sendPost}>{f.message}</div>
                </div>
                
            )
        })
        
    )
}

export default Post;