import React from 'react';
import CommunityCard from '../components/community/CommunityCard';

const communityMembers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 28,
    gender: 'Female',
    level: 'Advanced',
    interests: ['Powerlifting', 'CrossFit', 'Yoga'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: false
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 32,
    gender: 'Male',
    level: 'Intermediate',
    interests: ['Bodybuilding', 'Nutrition', 'Boxing'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: true
  },
  {
    id: '3',
    name: 'Emma Wilson',
    age: 25,
    gender: 'Female',
    level: 'Beginner',
    interests: ['HIIT', 'Running', 'Pilates'],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: false
  },
  {
    id: '4',
    name: 'David Kim',
    age: 30,
    gender: 'Male',
    level: 'Advanced',
    interests: ['Calisthenics', 'Martial Arts', 'Swimming'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: false
  }
] as const;

const Community: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityMembers.map(member => (
          <CommunityCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Community;