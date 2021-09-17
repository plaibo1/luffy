import s from './music.module.sass'

const MusicPage = (props) => {



  let musicData = props.state.musicData.map( (m) => {
      
    return (
        <div className={s.musicCard}>
            <div className={s.musicCard__img}>
                <img src={m.img} alt="img" />
            </div>
            <div className={s.musicCard__info}>
                <div className={s.musicCard__info__name}>{m.artist}</div>
                <div className={s.musicCard__info__song}>{m.song}</div>
            </div>
        </div>
    )
  })

  return (
      <div className={s.musicPage}>
          <h2>Music Page</h2>
          {musicData}
      </div>
  )   
}

export default MusicPage;