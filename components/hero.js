import styles from 'styles/hero.module.css'

function Hero({title, button1, link1, imageOn = false}){
	return (
		<div className={styles.flexContainer}>
			<div className={styles.text}>
				<h1 className={styles.title}>献立</h1>
				<p className={styles.button1}>ランダム</p>
				<p className={styles.link1}>URL</p>
			</div>
		</div>
	)
}
export default Hero 
