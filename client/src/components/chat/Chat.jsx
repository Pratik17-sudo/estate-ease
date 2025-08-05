import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const messageEndRef = useRef();
  const decrease = useNotificationStore((state) => state.decrease);

  // Scroll only when a new message is received or sent (not when opening chat)
  useEffect(() => {
    if (chat && chat.messages?.length > 0) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat?.messages?.length]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;

    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({
        ...prev,
        messages: [...prev.messages, res.data],
      }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({
            ...prev,
            messages: [...prev.messages, data],
          }));
          read();
        }
      });
    }
    return () => {
      socket?.off("getMessage");
    };
  }, [socket, chat]);

  return (
    <div className="flex w-full h-[600px] border rounded-lg overflow-hidden bg-[#f9f9f9]">
      {/* Chat List */}
      <div className="w-[30%] border-r overflow-y-auto bg-white">
        <h2 className="text-xl font-semibold p-4 border-b">Messages</h2>
        {chats?.map((c) => (
          <div
            key={c.id}
            className={`flex gap-3 p-3 items-center cursor-pointer hover:bg-gray-100 ${
              !c.seenBy.includes(currentUser.id) && chat?.id !== c.id
                ? "bg-yellow-100"
                : ""
            }`}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img
              src={c.receiver.avatar || "/Noavatar.png"}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-medium">{c.receiver.username}</span>
              <p className="text-sm text-gray-600 truncate max-w-[150px]">
                {c.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      {chat && (
        <div className="w-[70%] flex flex-col">
          {/* Top Bar */}
          <div className="flex justify-between items-center p-4 border-b bg-white">
            <div className="flex items-center gap-3">
              <img
                src={chat.receiver.avatar || "/Noavatar.png"}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">{chat.receiver.username}</span>
            </div>
            <button
              className="text-red-500 font-bold text-lg"
              onClick={() => setChat(null)}
            >
              X
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#f0f2f5]">
            {chat.messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.userId === currentUser.id
                    ? "bg-blue-500 text-white self-end text-right"
                    : "bg-white border self-start text-left"
                }`}
              >
                <p>{message.text}</p>
                <span className="block text-xs mt-1 text-gray-400">
                  {format(message.createdAt)}
                </span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 p-4 border-t bg-white"
          >
            <textarea
              name="text"
              placeholder="Type something..."
              className="flex-1 border rounded-lg p-2 resize-none"
              rows="1"
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
