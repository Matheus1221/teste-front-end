import styles from "./Header.module.scss";
import brand from "../../assets/brand-placeholder.png";
import {
  CreditCardIcon,
  CubeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topItem}>
          <span>
            <ShieldCheckIcon></ShieldCheckIcon>
          </span>
          Compra <b>100% segura</b>
        </div>
        <div className={styles.topItem}>
          <span>
            <TruckIcon></TruckIcon>
          </span>
          <b>Frete grátis</b> acima de R$ 200
        </div>
        <div className={styles.topItem}>
          <span>
            <CreditCardIcon></CreditCardIcon>
          </span>
          <b>Parcele</b> suas compras
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.logo}>
          <img src={brand} alt="Logo" />
        </div>

        <div className={styles.search}>
          <input placeholder="O que você está buscando?" />
          <button aria-label="Pesquisar">
            <MagnifyingGlassIcon />
          </button>
        </div>

        <div className={styles.icons}>
          <button aria-label="Meus Pedidos">
            <CubeIcon></CubeIcon>
          </button>
          <button aria-label="Favoritos">
            <HeartIcon />
          </button>
          <button aria-label="Conta">
            <UserCircleIcon></UserCircleIcon>
          </button>
          <button aria-label="Carrinho">
            <ShoppingCartIcon></ShoppingCartIcon>
          </button>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#">TODAS CATEGORIAS</a>
        <a href="#">SUPERMERCADO</a>
        <a href="#">LIVROS</a>
        <a href="#">MODA</a>
        <a href="#">LANÇAMENTOS</a>
        <a className={styles.active} href="#">
          OFERTAS DO DIA
        </a>
        <a href="#">ASSINATURA</a>
      </nav>
    </header>
  );
}
