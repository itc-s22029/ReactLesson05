import Logo from 'components/logo'
import styles from 'styles/footer.module.css'

function Footer(){
	return (
		<footer className={styles.wrapper}>
			<div className={styles.flexContainer}>
				<Logo />
					social
			</div>
		</footer>
	)
}
export default Footer
