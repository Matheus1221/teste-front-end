import { useEffect, useMemo, useState } from "react";
import styles from "./Home.module.scss";
import { fetchProducts } from "../../services/products";
import type { Product } from "../../types/product";

import { Header } from "../../components/Header/Header";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { CategoryMenu } from "../../components/CategoryMenu/CategoryMenu";
import { ProductSection } from "../../components/ProductSection/ProductSection";

import { BrandSection } from "../../components/BrandSection/BrandSection";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Footer } from "../../components/Footer/Footer";
import { ProductModal } from "../../components/ProductModal/ProductModal";
import { PartnerSection } from "../../components/PartnerSection/PartnerSection";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Erro"))
      .finally(() => setLoading(false));
  }, []);

  // Reaproveita produtos em todas seções (igual ao layout)
  const shelfProducts = useMemo(() => products.slice(0, 8), [products]);

  return (
    <div className={styles.page}>
      <Header />
      <HeroBanner />
      <CategoryMenu />
      <div className={styles.container}>
        {loading && <p>Carregando…</p>}
        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          <>
            <ProductSection
              title="Produtos relacionados"
              tabs={[
                "CELULAR",
                "ACESSÓRIOS",
                "TABLETS",
                "NOTEBOOKS",
                "TVS",
                "VER TODOS",
              ]}
              products={shelfProducts}
              onSelectProduct={setSelected}
              showTabs
              showArrows
            />

            <PartnerSection />

            <ProductSection
              title="Produtos relacionados"
              subtitleLink="Ver todos"
              products={shelfProducts}
              onSelectProduct={setSelected}
              showTabs={false}
              showArrows
            />

            <PartnerSection />

            <BrandSection />

            <ProductSection
              title="Produtos relacionados"
              subtitleLink="Ver todos"
              products={shelfProducts}
              onSelectProduct={setSelected}
              showTabs={false}
              showArrows
            />
          </>
        )}
      </div>

      <Newsletter />
      <Footer />

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onBuy={() => alert(`Comprar: ${selected.productName}`)}
        />
      )}
    </div>
  );
}
