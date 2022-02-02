import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {required } from '../../utils/validators/validator';
import { Input } from '../common/FormsControls/FormsControls';
import {login, logout} from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/formControls.module.sass'

const LoginForm = (props) => {

  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit} > 
      <Field
            name="name"
            component={Input}
            type="text"
            placeholder="Your name"
            validate={[required]}
          />
      <Field
            name="password"
            component={Input}
            type="password"
            placeholder="Password"
            validate={[required]}
          />
      <label className={s.rememberMe}>
            <Field name="rememberMe" component="input" type="checkbox" value="false" />{'Remember me'}
      </label>

      <button className={s['btn-loginSubmit']}>Login</button>

      {props.error && <div className={s.errorBox}>
        {props.error}
      </div>}

    </form>
  )
}

const LoginWithReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.name, formData.password, formData.rememberMe)
  }

  if(props.isAuth) {
    return <Redirect to='/home' />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginWithReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mstp = (state) => ({
  isAuth: state.auth.isAuthorized
})

export default connect(mstp, {login, logout})(Login);