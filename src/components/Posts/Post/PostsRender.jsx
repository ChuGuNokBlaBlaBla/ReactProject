import s from './Post.module.css'

const PostsRender = (props) => {
    return (
        <div className={s.wrapPost}>
            <div className={s.wrapIcon}>
                <img src={props.src} />
            </div>
            <div className={s.sendPost}>{props.message}</div>
        </div>
    )
}

export default PostsRender