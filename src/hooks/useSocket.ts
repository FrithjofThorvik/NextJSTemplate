import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const useSocket = () => {
  const [socket] = useState(io());

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch("/api/socket");
    };
    socketInitializer();
  }, []);

  return socket;
};

export default useSocket;
