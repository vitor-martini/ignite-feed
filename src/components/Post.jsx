import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText("");
  }

  function deleteComment(content) {
    const commentsWithoutDeletedOne = comments.filter(c => c !== content);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString() }
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}> 
        {
          content.map((line, i) => {
            if (line.type === 'paragraph') {
              return <p key={i}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={i}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder='Deixe um comentário'
        />
        <footer>
          <button 
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      {
        comments.length > 0 && (
          <div className={styles.commentList}>
            {
              comments.map((c, i) => {
                return (
                  <Comment
                    key={i}
                    content={c}
                    onDeleteComment={deleteComment}
                  />
                )
              })
            }
          </div>
        )
      }
    </article>
  )
}