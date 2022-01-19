import React from 'react'
import s from './post.module.sass'
import PostComment from './PostComment/PostComment'

const Post = (props) => {

    const like = React.createRef()
  
    const onLikeUp = () => {
        props.likeUp()
    }

    return (

        <div className={s.post}>
            <div className={s.post__wrapper}>

                <div className={s.post__img}>
                    <img src={props.img} alt="img" />
                </div>
                <div className={s.post__text}>
                    {props.message}
                </div>

            </div>

            <PostComment postComments={props.postComments} updateCommentOnChange={props.updateCommentOnChange} commentTextareaValue={props.commentTextareaValue}/>
            
            <div className={s.post__likes} onClick={onLikeUp} ref={like}>🖤 {props.likesCounter}</div>
        </div>

    )
}

export default Post;