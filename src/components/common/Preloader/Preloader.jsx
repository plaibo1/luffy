import preloaderImg from '../../../img/bart.gif'
import s from './preloader.module.sass';

const Preloader = () => {
    return (
        <div className={s.preloader} role={'main'}>
            <img src={preloaderImg} alt="preloader" />
            loading...
        </div>
    )
}

export default Preloader;