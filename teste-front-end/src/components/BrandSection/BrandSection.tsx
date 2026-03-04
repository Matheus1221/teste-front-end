import styles from "./BrandSection.module.scss";
import brand from "../../assets/brand-placeholder.png";

export function BrandSection() {
  return (
    <section className={styles.section}>
      <h2>Navegue por marcas</h2>

      <div className={styles.row}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className={styles.brand}>
            <img src={brand} alt="Marca" />
          </div>
        ))}
      </div>
    </section>
  );
}
