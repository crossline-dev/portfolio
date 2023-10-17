import { Container } from '@mantine/core'
import styles from './Main.module.css'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.common}>
      <Container className={styles.container}>{children}</Container>
    </main>
  )
}
