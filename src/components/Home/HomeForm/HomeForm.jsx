import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from '../home.module.sass'


const maxLength30 = maxLengthCreator(30)

const HomeFormATemplate = (props) => {

    const {handleSubmit} = props;

    return(
        <form onSubmit={handleSubmit}>
            <Field className={s.Home__wall__form__text} 
                component={Textarea} 
                name='homeTextarea' placeholder='msg here'
                validate={[required, maxLength30]}
            />
            <button className={s.Home__wall__form__button}>send</button>
        </form>
    )
}

const HomeFormWithReduxForm = reduxForm({
    form: 'homeForm'
})(HomeFormATemplate);


const HomeForm = (props) => {

    const addPostSubmit = (formData) => {
        props.addPost(formData.homeTextarea);
    }

    return (
        <HomeFormWithReduxForm onSubmit={addPostSubmit}/>
    )
}


export default HomeForm;