import React from 'react'
import s from './home.module.sass'
import Preloader from '../common/Preloader/Preloader.jsx';
import ava from '../../img/ava.png'
import HomeStatusWithHooks from './HomeStatusWithHooks.jsx';
import HomeContent from './HomeContent.jsx';

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
                    <HomeStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </span>
            </div>

            <div className={s['Home-content']}>

                <HomeContent 
                    friends={props.friends}
                    addPost={props.addPost}
                    postData={props.postData}
                    likeUp={props.likeUp}
                    postComments={props.postComments}
                />

            </div>

        </div>
    )
}

export default Home;