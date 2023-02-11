import Pages from "@/components/home/Pages";

import styles from "./Home.module.scss";

const Home = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>JOFFI</h1>
        <p>
          Gather your friends & family to engage in different games and
          activities
        </p>
      </div>
      <div className={styles.content}>
        <Pages />
      </div>
    </div>
  );
};

export default Home;
