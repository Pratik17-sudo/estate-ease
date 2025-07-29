import { useLoaderData } from "react-router-dom";
import Chat from  "../../components/chat/Chat"

const ChatPage = () => {
    const chats = useLoaderData();

    return <Chat chats={chats} />;
};

export default ChatPage;
