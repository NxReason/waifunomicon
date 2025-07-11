import { Link } from 'react-router';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={`${styles.pageNotFound} page`}>
      <h1 className={styles.pageHeader}>This page doesn't exist</h1>
      <Link to="/" className={styles.btnGoBack}>
        Go back to main
      </Link>
    </div>
  );
}
