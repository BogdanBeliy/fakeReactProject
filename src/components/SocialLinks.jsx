import vkIcon from '../assets/icons/vk.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import styles from './SocialLinks.module.css';

const links = [
  { href: '#', label: 'ВКонтакте', icon: vkIcon },
  { href: '#', label: 'Instagram', icon: instagramIcon },
  { href: '#', label: 'Facebook', icon: facebookIcon },
];

export default function SocialLinks({ className }) {
  return (
    <div className={`${styles.social} ${className ?? ''}`.trim()} role="list">
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label={label}
        >
          <img src={icon} alt="" width={24} height={24} className={styles.icon} />
        </a>
      ))}
    </div>
  );
}
