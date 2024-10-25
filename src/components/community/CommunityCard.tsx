import React from 'react';
import { MessageCircle, UserPlus, Check } from 'lucide-react';

interface CommunityMember {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  level: string;
  interests: string[];
  imageUrl: string;
  isConnected: boolean;
}

interface CommunityCardProps {
  member: CommunityMember;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ member }) => {
  return (
    <div className="bg-dark-surface rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <div className="text-sm text-gray-400 space-y-1">
            <p>{member.age} years • {member.gender}</p>
            <p>{member.level}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {member.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-0.5 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        {member.isConnected ? (
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            <Check className="w-4 h-4" />
            Connected
          </button>
        ) : (
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <UserPlus className="w-4 h-4" />
            Connect
          </button>
        )}
        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-700 transition-colors">
          <MessageCircle className="w-4 h-4" />
          Message
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;