import styles from "./Background.module.scss";

interface IBackgroundProps {}

const Background: React.FC<IBackgroundProps> = (): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Background;
