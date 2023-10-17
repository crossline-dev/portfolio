import { Container } from '@mantine/core'
import styles from './Footer.module.css'
import { config } from '@/config'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={styles.copylight}>© 2023 {config.siteName}</p>
      </Container>
    </footer>
  )
}
