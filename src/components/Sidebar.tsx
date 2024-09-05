import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        className={styles.cover}  
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/vitor-martini.png"/>
        <strong>Vitor Martini</strong>
        <span>FullStack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}