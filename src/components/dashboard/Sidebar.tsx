import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  ListTodo, 
  GanttChart,
  Users,
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: ListTodo, label: 'Tasks', href: '/tasks' },
  { icon: GanttChart, label: 'Projects', href: '/projects' },
  { icon: Users, label: 'Team', href: '/team' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">T</span>
          </div>
          <span className="text-xl font-bold">TaskMind</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-100">
        <ul className="space-y-2">
          <li>
            <a
              href="/settings"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <button
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}