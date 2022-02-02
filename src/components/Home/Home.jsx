import React from 'react'
import Post from './PostsWall/PostsWall.jsx';
import s from './home.module.sass'
import Friends from './Friends/Friends.jsx';
import Preloader from '../common/Preloader/Preloader.jsx';
import ava from '../../img/ava.png'
import HomeStatus from './HomeStatus.jsx';
import HomeForm from './HomeForm/HomeForm.jsx';

const Home = (props) => {

    if(!props.userProfile) {
        return (
            <Preloader />
        )
    }

    return (
        <div className={s.Home}>
        
            <div className={s.Home__avatar}>
                <img src={props.userProfile.photos.small !== null ? 
                    props.userProfile.photos.small : ava } alt="img" />
            </div>

            <div className={s.Home__userData}>
                <h1 className={s.Home__userData__name}>{props.userProfile.fullName}</h1>
                <span className={s.Home__userData__about}><span>AboutMe:</span> {props.userProfile.aboutMe}</span>
                <span className={s.Home__userData__status}>
                    <span>status</span>
                    <HomeStatus status={props.status} updateStatus={props.updateStatus}/>
                </span>
            </div>

            <div className={s['Home-content']}>

                <div className={s.Home__friends}>
                    <h2 className={s.friendWrapper__heading}>Friends</h2>
                    <Friends friends={props.friends}/>
                </div>

                <div className={s.Home__wall}>

                    <div className={s.Home__wall__form}>
                        <HomeForm addPost={props.addPost} />
                    </div>

                    <Post 
                        postData={props.postData} 
                        likeUp={props.likeUp} 
                        postComments={props.postComments}
                    />

                </div>

            </div>

        </div>
    )
}

export default Home;