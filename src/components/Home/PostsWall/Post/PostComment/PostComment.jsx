import React from 'react';
import s from './postCommnet.module.sass'

class PostComment extends React.Component {

    render() {

        const commentOnChange = (e) => {
            this.props.updateCommentOnChange(e.target.value)
        }

        let comments = this.props.postComments.map(comment => {
            return (
                <div className={s.comment} key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.comment}</p>
                </div>
            )
        })

        return (
            <div className={s.commentSection}>
            
            {comments}

            <div className={s.commentSection__sendingTools}>
                <input ref='inp' value={this.props.commentTextareaValue} onChange={commentOnChange} type="text" className={s.commentSection__sendingTools__input}/>
                <button className={s.commentSection__sendingTools__button}>Send</button>
            </div>
        </div>
        )
    }
}

export default PostComment;