import s from './post.module.sass'

const Post = (props) => {
    return (

        <div className={s.post}>
            <div className={s.post__img}>
                <img src={props.img} alt="" />
            </div>
            <div className={s.post__text}>
               {props.message}
            </div>

            <div className={s.post__likes}>🖤 {props.likesCounter}</div>
        </div>

    )
}

export default Post;