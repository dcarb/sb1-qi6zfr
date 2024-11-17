import React from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Update project documentation',
    dueDate: '2024-03-20',
    priority: 'High',
    status: 'In Progress',
    assignee: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
    }
  },
  {
    id: 2,
    title: 'Review pull requests',
    dueDate: '2024-03-21',
    priority: 'Medium',
    status: 'Todo',
    assignee: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces'
    }
  },
  {
    id: 3,
    title: 'Prepare presentation deck',
    dueDate: '2024-03-22',
    priority: 'High',
    status: 'Completed',
    assignee: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces'
    }
  }
];

export default function TaskList() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Recent Tasks</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <button className="mt-1">
                  <CheckCircle2 className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors" />
                </button>
                <div>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{task.dueDate}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{task.status}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.priority === 'High' 
                    ? 'bg-red-100 text-red-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {task.priority}
                </span>
                <img
                  src={task.assignee.avatar}
                  alt={task.assignee.name}
                  className="w-6 h-6 rounded-full"
                  title={task.assignee.name}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}