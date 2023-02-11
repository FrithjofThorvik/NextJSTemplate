import { FormEvent, useEffect, useState } from "react";

import styles from "./DrinkingGames.module.scss";
import useSocket from "@/hooks/useSocket";

interface IDrinkingGamesProps {}

const DrinkingGames: React.FC<IDrinkingGamesProps> = (): JSX.Element => {
  const socket = useSocket();
  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [allMessages, setAllMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("receive-message", (data: any) => {
      setAllMessages(() => [...allMessages, data]);
    });
  }, [socket, allMessages]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("send-message", {
      username,
      message,
    });
    setMessage("");
  };

  return (
    <div className={styles.drinkingGames}>
      <h1>🎉</h1>
      <h1>Drinking Games</h1>
      <div className={styles.content}>
        <div>
          <h5>Enter a username</h5>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div>
            {allMessages.map((data: any, index: number) => (
              <div key={index}>
                {data.username}: {data.message}
              </div>
            ))}

            <form onSubmit={handleSubmit}>
              <input
                name="message"
                placeholder="enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete={"off"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkingGames;
