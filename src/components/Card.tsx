import { useRouter } from "next/router";
import styles from "./Card.module.scss";

interface ICardProps {
  title: string;
  emoji: string;
  description: string;
  redirectTo?: string;
  onClick?: () => void;
}

const Card: React.FC<ICardProps> = ({
  title,
  emoji,
  description,
  redirectTo,
  onClick,
}): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    redirectTo && router.push(redirectTo);
    onClick && onClick();
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.top}>
        <div className={styles.emoji}>{emoji}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
