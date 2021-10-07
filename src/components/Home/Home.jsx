import React from 'react'
import Post from './PostsWall/PostsWall.jsx';
import s from './home.module.sass'
import Friends from './Friends/Friends.jsx';


const Home = (props) => {


    let newPostElem = React.createRef();

    let onAddPost = () => props.addPost();

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updatePostOnChange(text);
    }

    return (
        <div className={s.Home}>

            <div className={s.Home__img}></div>
            <div className={s.Home__avatar}>
                <img src="https://mir-s3-cdn-cf.behance.net/user/115/9c0575375122439.5e4d801f59832.png" alt="img" />
            </div>

            <div className={s.Home__userData}>
                <h1 className={s.Home__userData__name}>Ilya Lyskov</h1>
                <span className={s.Home__userData__country}>Moscow, RU</span>
            </div>

            <div className={s['Home-content']}>

                <div className={s.Home__friends}>
                    <h2 className={s.friendWrapper__heading}>Friends</h2>
                    <Friends friends={props.friends}/>
                </div>

                <div className={s.Home__wall}>

                    <div className={s.Home__wall__form}>
                        <textarea className={s.Home__wall__form__text}
                                  onChange={onPostChange}
                                  ref={newPostElem}
                                  value={props.textareaValue}
                        />
                        <button className={s.Home__wall__form__button} onClick={onAddPost}>
                            Send
                        </button>
                    </div>

                    <Post postData={props.postData} likeUp={props.likeUp}/>

                </div>

            </div>
        </div>
    )
}

export default Home;