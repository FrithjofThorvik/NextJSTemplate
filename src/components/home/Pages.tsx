import Card from "@/components/Card";

import styles from "./Pages.module.scss";

interface IPagesProps {}

const Pages: React.FC<IPagesProps> = (): JSX.Element => {
  return (
    <div className={styles.pages}>
      <Card
        title="Drinking games"
        emoji="🎉"
        description="A collection of drinking games for you and your friends"
        redirectTo="/drinking-games"
      />
    </div>
  );
};

export default Pages;
