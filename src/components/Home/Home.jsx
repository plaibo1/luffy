import React, {useState} from 'react'
import s from './home.module.sass'
import Preloader from '../common/Preloader/Preloader.jsx';
import ava from '../../img/ava.png'
import HomeStatusWithHooks from './HomeStatusWithHooks.jsx';
import HomeContent from './HomeContent.jsx';
import ProfileDataFormWithReduxForm from './ProfileDataForm';

const Home = ({userProfile, updateProfile, ...props}) => {

    const [editMode, setEditMode] = useState(false);

    if (!userProfile) {
        return (
            <Preloader />
        )
    }

    console.log(userProfile)

    const onSubmit = (formData) => {
        updateProfile(formData).then(()=> {
            setEditMode(false)
        })
    }

    const onAvaChange = (e) => {
        if (e.target.files.length) {
            const photo = e.target.files[0]
            props.updatePhoto(photo)
        }
    }

    return (
        <div className={s.Home}>
        
            <div className={s.Home__avatar}>
                <img src={userProfile.photos.small !== null ? 
                    userProfile.photos.small : ava } alt="img" />
            </div>

            {   
                props.isOwner &&

                <div className={s.Home__avatar__chooseAva}>
                    <input type="file" onChange={onAvaChange}/>
                </div>
            }

            <div className={s.Home__userData}>
                {
                    !editMode
                    ? <ProfileData userProfile={userProfile} {...props} isOwner={props.isOwner} 
                    goToEditMode={() => setEditMode(true)} />
                    : <ProfileDataFormWithReduxForm 
                        initialValues={userProfile}
                        userProfile={userProfile}
                        onSubmit={onSubmit} 
                    />
                }
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

const ContactsData = ({contactValue, link}) => {
    return (
        <div>
            <a href={link} target='_blank'>{contactValue}</a>
        </div>
    )
}

const ProfileData = ({userProfile, isOwner, goToEditMode, ...props}) => {
    return (
        <>
            {isOwner && <button onClick={goToEditMode}>edit mode</button>}

            <h1 className={s.Home__userData__name}>{userProfile.fullName}</h1>
            <span className={s.Home__userData__about}><span>AboutMe:</span> {userProfile.aboutMe}</span>
            <span className={s.Home__userData__status}>
                <span>status</span>
                <HomeStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </span>
            <span>
                <strong>lookingForAJob:</strong>
                {userProfile.lookingForAJob ? 'yes' : 'no'}
            </span>
            <span>
                <strong>skills: </strong>
                {userProfile.lookingForAJobDescription}
            </span>
            <span>
                <strong>Contacts</strong>
                {Object.keys(userProfile.contacts).map(item =>
                    <ContactsData key={item} contactValue={item} link={userProfile.contacts[item]} />)}
            </span>
        </>
    )
}


export default Home;