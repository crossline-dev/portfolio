import { Container } from '@mantine/core'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <div>
          <p>test</p>
        </div>
      </Container>
    </header>
  )
}
