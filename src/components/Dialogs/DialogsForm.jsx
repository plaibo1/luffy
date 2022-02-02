import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validator';
import { Textarea } from '../common/FormsControls/FormsControls';


const maxLength50 = maxLengthCreator(50)


const DialogsFormATemplate = (props) => {

    const {handleSubmit} = props;

    return(
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} name='dialogTextarea'
            validate={[required, maxLength50]}
            placeholder='msg here'/>
            <button>send</button>
        </form>
    )
}

const DialogsFormWithReduxForm = reduxForm({
    form: 'dialogsForm'
})(DialogsFormATemplate);


const DialogsForm = (props) => {

    const addNewMsg = (formData) => {
        props.sendMsg(formData.dialogTextarea);
    }

    return (
        <DialogsFormWithReduxForm onSubmit={addNewMsg}/>
    )
}


export default DialogsForm;