import preloaders from '../../../assets/img/preloaders.svg';
import s from './preloader.module.css'


let Preloader = (props) => {
    return <img className={s.preloader} src={preloaders} />
}

export default Preloader;