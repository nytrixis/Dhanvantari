import { chat } from "../assets";

const ChatbotNotif = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={chat} alt="Chat" />
      Talk to KiranAI
    </div>
  );
};

export default ChatbotNotif;
