import styles from 'styles/hero.module.css'

function Hero({title, button1, link1, imageOn = false}){
	return (
		<div className={styles.flexContainer}>
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.center}>
					<p className={styles.button1}>{button1}</p>
					<p className={styles.link1}>{link1}</p>
				</div>
			</div>
		</div>
	)
}
export default Hero 
