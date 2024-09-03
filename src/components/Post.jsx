import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src='https://github.com/vitor-martini.png'
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Vitor Martini</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time 
          title="02 de Setembro às 21h30"
          dateTime="2024-09-02 21:30:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}> 
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a> {' '}
          <a href="#">#nlw</a> {' '}
          <a href="#">#rocketseat</a> {' '}
        </p>
      </div>
    </article>
  )
}