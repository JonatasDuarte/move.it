import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer} >
      <img src="https://github.com/JonatasDuarte.png" alt="Jonatas Duarte"/>
      <div>
        <strong>Jonatas Duarte</strong>
        <p>Level 1</p>
      </div>
    
    </div>
  )
}