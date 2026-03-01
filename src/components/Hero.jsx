import SocialLinks from './SocialLinks';
import styles from './Hero.module.css';

const heroImage = '/back%201.jpg';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroBg} style={{ backgroundImage: `url(${heroImage})` }} />
			<div className={styles.verticalText}>
				<span>nike / adidas / puma</span>
			</div>
			<p className={styles.heroTitle}>Nike React Element 55</p>
			<SocialLinks className={`${styles.socialWrap} ${styles.socialLarge}`} />
		</section>
	);
}
