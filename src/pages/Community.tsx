import React from 'react';
import CommunityCard from '../components/community/CommunityCard';

const communityMembers = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 28,
    gender: 'Female',
    level: 'Advanced',
    interests: ['Yoga', 'CrossFit', 'Meditation'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: false
  },
  {
    id: '2',
    name: 'Arjun Patel',
    age: 32,
    gender: 'Male',
    level: 'Intermediate',
    interests: ['Calisthenics', 'Boxing', 'Martial Arts'],
    imageUrl: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: true
  },
  {
    id: '3',
    name: 'Ananya Desai',
    age: 25,
    gender: 'Female',
    level: 'Beginner',
    interests: ['Yoga', 'Running', 'Pilates'],
    imageUrl: 'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    isConnected: false
  },
  {
    id: '4',
    name: 'Rahul Verma',
    age: 30,
    gender: 'Male',
    level: 'Advanced',
    interests: ['Powerlifting', 'Yoga', 'Swimming'],
    imageUrl: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
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