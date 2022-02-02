import s from './formControls.module.sass'

const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>

            {props.children}

            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl { ...props }><textarea {...input} {...restProps} ></textarea></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl { ...props } ><input {...input} {...restProps} /></FormControl>
}