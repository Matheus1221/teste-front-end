import styles from "./CategoryMenu.module.scss";
import techImg from "../../assets/tecnologia.png";
import marketImg from "../../assets/supermercados.png";
import drinksImg from "../../assets/bebidas.png";
import toolsImg from "../../assets/ferramentas.png";
import healthImg from "../../assets/saude.png";
import sportsImg from "../../assets/corrida.png";
import fashionImg from "../../assets/moda.png";

const categories = [
  { label: "Tecnologia", image: techImg, active: true },
  { label: "Supermercado", image: marketImg },
  { label: "Bebidas", image: drinksImg },
  { label: "Ferramentas", image: toolsImg },
  { label: "Saúde", image: healthImg },
  { label: "Esportes e Fitness", image: sportsImg },
  { label: "Moda", image: fashionImg },
];

export function CategoryMenu() {
  return (
    <section className={styles.wrap}>
      {categories.map((c) => {
        const src =
          typeof c.image === "string" ? c.image : ((c.image as any)?.src ?? "");

        return (
          <div key={c.label} className={styles.item}>
            <div className={`${styles.box} ${c.active ? styles.active : ""}`}>
              <img src={src} alt="" />
            </div>
            <span className={styles.label}>{c.label}</span>
          </div>
        );
      })}
    </section>
  );
}
