import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import styles from "./ProductModal.module.scss";

type Props = {
  product: Product;
  onClose: () => void;
  onBuy: () => void;
};

export function ProductModal({ product, onClose, onBuy }: Props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const price = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className={styles.content}>
          <div className={styles.left}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.right}>
            <h2 className={styles.title}>
              {product.productName.toUpperCase()}
            </h2>
            <div className={styles.price}>{price}</div>

            <p className={styles.text}>
              {product.descriptionShort ||
                "Many desktop publishing packages and web page editors now many desktop publishing"}
            </p>

            <a
              className={styles.more}
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.actions}>
              <div className={styles.qty}>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Diminuir"
                >
                  –
                </button>
                <span>{String(qty).padStart(2, "0")}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>

              <button className={styles.buy} type="button" onClick={onBuy}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
