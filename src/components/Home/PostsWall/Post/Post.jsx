import React from 'react'
import s from './post.module.sass'
import ava from '../../../../img/ava.png'

const Post = (props) => {

    const like = React.createRef()
  
    const onLikeUp = () => {
        props.likeUp(props.id - 1)
    }

    return (

        <div className={s.post}>
            
            <div className={s.post__wrapper}>

                <div className={s.post__img}>
                    <img src={props.img || ava} alt="img" />
                </div>

                <div className={s.post__text}>
                    {props.message}
                </div>

            </div>

            
            <div className={s.post__likes} onClick={onLikeUp} ref={like}>🖤 {props.likesCounter}</div>
        </div>

    )
}

export default Post;