import React from 'react';
import { GanttChart, Users, Clock, BarChart2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    progress: 75,
    team: 6,
    dueDate: '2024-04-15',
    status: 'In Progress'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    progress: 45,
    team: 4,
    dueDate: '2024-05-01',
    status: 'In Progress'
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    progress: 90,
    team: 3,
    dueDate: '2024-03-30',
    status: 'Almost Done'
  }
];

export default function ProjectList() {
  return (
    <div className="bg-white rounded-lg border border-gray-100">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Active Projects</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {projects.map((project) => (
          <div key={project.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">{project.name}</h3>
              <span className={`px-3 py-1 text-sm rounded-full ${
                project.status === 'Almost Done' 
                  ? 'bg-green-100 text-green-600'
                  : 'bg-blue-100 text-blue-600'
              }`}>
                {project.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="w-full max-w-xs">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{project.team} members</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Due {project.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}