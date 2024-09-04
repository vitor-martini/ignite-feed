import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/vitor-martini.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Martini</strong>
              <time 
                title="02 de Setembro às 21h30"
                dateTime="2024-09-02 21:30:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Excluir comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Top demais!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}