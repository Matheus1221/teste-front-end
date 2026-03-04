import styles from "./PartnerBanner.module.scss";
import parceirosImg from "../../assets/parceiros.jpg";

export function PartnerBanner() {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${parceirosImg})` }}
    >
      <div className={styles.overlay}>
        <h1>Parceiros</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>CONFIRA</button>
      </div>
    </section>
  );
}
