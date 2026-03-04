import styles from "./PartnerSection.module.scss";
import { PartnerBanner } from "../PartnerBanner/PartnerBanner";

export function PartnerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <PartnerBanner />
          <PartnerBanner />
        </div>
      </div>
    </section>
  );
}
