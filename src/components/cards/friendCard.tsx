import { MessageCircle, Settings } from "lucide-react";

import { Friend } from "@/utils/types.ts";

type FriendCardProps = {
  friend: Friend;
  handleBlockFriend: (args: string) => Promise<void>;
  isBlocking: boolean;
};

const FriendCard = ({
  friend,
  handleBlockFriend,
  isBlocking,
}: FriendCardProps) => {
  return (
    <div className="group relative overflow-hidden p-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 border border-transparent hover:border-purple-800">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center overflow-hidden">
              <img
                src="/api/placeholder/40/40"
                alt={friend.username}
                className="w-10 h-10 rounded-md object-cover"
              />
            </div>
            <div
              className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                friend.status === "online"
                  ? "bg-green-500"
                  : friend.status === "away"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
              }`}
            ></div>
          </div>
          <div>
            <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">
              {friend.username}
            </h3>
            <div className="flex items-center text-xs">
              <span className="text-gray-400">{friend.noxId}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-purple-800/50 text-purple-300 hover:bg-purple-700 hover:text-white rounded-md transition-colors">
            <MessageCircle className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button className="p-2 bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

export default FriendCard;
