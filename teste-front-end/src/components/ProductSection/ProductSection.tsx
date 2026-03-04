import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ProductSection.module.scss";
import type { Product } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";

type Props = {
  title: string;
  subtitleLink?: string;
  tabs?: string[];
  showTabs?: boolean;
  showArrows?: boolean;
  products: Product[];
  onSelectProduct: (p: Product) => void;
};

export function ProductSection({
  title,
  subtitleLink,
  tabs,
  showTabs = true,
  showArrows = true,
  products,
  onSelectProduct,
}: Props) {
  const [activeTab, setActiveTab] = useState(tabs?.[0] ?? "");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tabs?.length) setActiveTab(tabs[0]);
  }, [tabs]);

  const shown = useMemo(() => products, [products]);

  function scrollBy(px: number) {
    if (!listRef.current) return;
    listRef.current.scrollBy({ left: px, behavior: "smooth" });
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.line} />
        <div className={styles.center}>
          <h2 className={styles.title}>{title}</h2>
          {subtitleLink && (
            <a className={styles.subtitle} href="#">
              {subtitleLink}
            </a>
          )}
        </div>
        <div className={styles.line} />
      </div>

      {showTabs && tabs?.length ? (
        <div className={styles.tabs}>
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              className={`${styles.tab} ${t === activeTab ? styles.active : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
      ) : null}

      <div className={styles.carousel}>
        {showArrows && (
          <button
            className={styles.arrowLeft}
            onClick={() => scrollBy(-380)}
            aria-label="Anterior"
          >
            ‹
          </button>
        )}

        <div className={styles.list} ref={listRef}>
          {shown.map((p) => (
            <ProductCard
              key={`${p.productName}-${p.price}`}
              product={p}
              onClick={onSelectProduct}
            />
          ))}
        </div>

        {showArrows && (
          <button
            className={styles.arrowRight}
            onClick={() => scrollBy(380)}
            aria-label="Próximo"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
