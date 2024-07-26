import styles from "../styles/Menu.module.css";

function Menu() {
  return (
    <div className={styles.Menu_container}>
      <ul className={styles.Menu}>
        <li className={styles.Menu_items}>About</li>
        <li className={styles.Menu_items}>Projects</li>
      </ul>
    </div>
  );
}

export default Menu;
