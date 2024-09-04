import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css'
import './global.css'

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/vitor-martini.png',
        name: 'Vitor Martini',
        role: 'Developer',
      },
      content: [
        { type: 'paragraph', content: 'Fala galera!'},
        { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit dolorem quod est aliquid animi architecto reiciendis laudantium in ullam, nostrum nesciunt ut vel magnam, libero quidem porro quis? Tenetur?'},
        { type: 'link', content: '@vitor-martini'},
      ],
      publishedAt: new Date('2024-09-01 21:36:50')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educador',
      },
      content: [
        { type: 'paragraph', content: 'Fala galera!'},
        { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia incidunt atque excepturi consectetur enim, dolorum consequuntur nam porro at earum eum, sapiente quia voluptatem omnis corrupti officiis explicabo totam.'},
        { type: 'link', content: 'www.rocketseat.com.br'},
      ],
      publishedAt: new Date('2024-09-03 20:12:37')
    },
  ]

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(p => {
              return (
                <Post
                  key={p.id}
                  author={p.author}
                  content={p.content}
                  publishedAt={p.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}