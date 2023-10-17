import Link from 'next/link'
import { config } from '@/config'
import styles from './SiteLogo.module.css'

export function SiteLogo() {
  return (
    <Link className={styles.anchor} href="/">
      <span className={styles.sitename}>{config.siteName}</span>
      <span className={styles.place}>AICHI / JAPAN</span>
    </Link>
  )
}
