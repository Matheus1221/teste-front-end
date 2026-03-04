import styles from "./Footer.module.scss";
import brand from "../../assets/brand-placeholder.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.about}>
          <div className={styles.logo}>
            <img src={brand} alt="Logo" />
          </div>
          <p className={styles.small}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.social}>
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>

        <div>
          <h4>Institucional</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Movimento</a>
          <a href="#">Trabalhe conosco</a>
        </div>

        <div>
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">Fale conosco</a>
          <a href="#">Perguntas frequentes</a>
        </div>

        <div>
          <h4>Termos</h4>
          <a href="#">Termos e condições</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Troca e devolução</a>
        </div>
      </div>

      <div className={styles.copy}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
}
