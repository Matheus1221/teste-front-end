import styles from "./Newsletter.module.scss";

export function Newsletter() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div>
          <h1>Inscreva-se na nossa newsletter</h1>
          <p>
            Assine nossa newsletter e receba novidades e conteúdos exclusivos da
            Econverse.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Digite seu nome" />
          <input placeholder="Digite seu e-mail" />
          <button>INSCREVER</button>
        </form>
      </div>
    </section>
  );
}
