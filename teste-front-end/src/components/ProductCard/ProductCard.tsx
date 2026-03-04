import type { Product } from "../../types/product";
import styles from "./ProductCard.module.scss";

type Props = {
  product: Product;
  onClick: (p: Product) => void;
};

export function ProductCard({ product, onClick }: Props) {
  const price = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={product.photo} alt={product.productName} />
      </div>

      <p className={styles.desc}>
        {product.descriptionShort ||
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>

      <div className={styles.prices}>
        <span className={styles.old}>R$ 30,90</span>
        <span className={styles.current}>{price}</span>
      </div>

      <div className={styles.meta}>
        <span>ou 2x de R$ 49,95 sem juros</span>
        <span className={styles.free}>Frete grátis</span>
      </div>

      <button
        className={styles.buy}
        onClick={() => onClick(product)}
        type="button"
      >
        COMPRAR
      </button>
    </article>
  );
}
