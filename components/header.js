import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/header.module.css'

function Header() {
	return (
		<header>
			<Container large>
				<div className={styles.flexContainer}>
					<Logo boxOn />
				</div>
			</Container>
		</header>
	)
}

export default Header
