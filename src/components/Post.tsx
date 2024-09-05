import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { FormEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText("");
  }

  function deleteComment(content: string) {
    const commentsWithoutDeletedOne = comments.filter(c => c !== content);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString() }
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}> 
        {
          post.content.map((line, i) => {
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