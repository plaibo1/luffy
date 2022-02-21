import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../common/FormsControls/FormsControls';
import s from './home.module.sass'
import React from 'react';


const ProfileDataForm = ({ userProfile, handleSubmit, error }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>

                {error && <div className={s.errorBox}>
                    {error}
                </div>}

                <span className={s.Home__userData__about}>
                    <span>fullName:</span>
                    <Field
                        name="fullName"
                        component={Input}
                        type="text"
                        placeholder="ur name"
                        validate={[]}
                    />
                </span>
                <span className={s.Home__userData__about}>
                    <span>AboutMe:</span>
                    <Field
                        name="aboutMe"
                        component={Input}
                        type="text"
                        placeholder="say smtng about u"
                        validate={[]}
                    />
                </span>
                <span>
                    <strong>lookingForAJob:</strong>
                    <Field
                        name="lookingForAJob"
                        component={Input}
                        type="checkbox"
                        validate={[]}
                    />
                </span>
                <span>
                    <strong>skills: </strong>
                    <Field
                        name="lookingForAJobDescription"
                        component={Textarea}
                        type="text"
                        placeholder="ur skills"
                        validate={[]}
                    />
                </span>

                <span>
                    <strong>Contacts</strong>
                    {Object.keys(userProfile.contacts).map(item => {
                        return (
                            <div key={item}>
                                <span>{item}</span>
                                <Field name={'contacts.' + item} component={Input} placeholder={item} validate={[]} />
                            </div>
                        )
                    })}
                </span>

                <button>save</button>
            </form>
        </>
    )
}


const ProfileDataFormWithReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataFormWithReduxForm;