import styles from "./HeroBanner.module.scss";
import heroImg from "../../assets/hero.jpg";

export function HeroBanner() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <span className={styles.highlight}>50% Off</span> nos produtos
          </p>
          <button>Ver produto</button>
        </div>
      </div>
    </section>
  );
}
