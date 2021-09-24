import React from 'react'
import s from './post.module.sass'

const Post = (props) => {

    const like = React.createRef()
  
    const likeUp = () => {
        props.dispatch({type: 'POST-LIKE-UP'})
    }

    return (

        <div className={s.post}>
            <div className={s.post__img}>
                <img src={props.img} alt="" />
            </div>
            <div className={s.post__text}>
               {props.message}
            </div>

            <div className={s.post__likes} onClick={likeUp} ref={like}>🖤 {props.likesCounter}</div>
        </div>

    )
}

export default Post;