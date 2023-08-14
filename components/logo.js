import Link from 'next/link'
import styles from 'styles/logo.module.css'

function Logo({ boxOn = false }) {
	return  (
		<Link legacyBehavior href="/">
			<a className={boxOn ? styles.box : styles.basic}>Team-b</a>
		</Link>
	)
}

export default Logo
