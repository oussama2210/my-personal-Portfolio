'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      router.push('/auth/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { label: 'Total Projects', value: '12', icon: '📊', color: 'from-blue-500 to-cyan-500' },
    { label: 'Messages', value: '24', icon: '💬', color: 'from-purple-500 to-pink-500' },
    { label: 'Page Views', value: '1.2K', icon: '👁️', color: 'from-green-500 to-teal-500' },
    { label: 'Total Skills', value: '15', icon: '⚙️', color: 'from-orange-500 to-red-500' },
  ];

  const quickActions = [
    { title: 'Manage Projects', description: 'Add, edit or remove projects', icon: '🚀', link: '/admin/projects' },
    { title: 'View Messages', description: 'Check contact form submissions', icon: '📧', link: '/admin/messages' },
    { title: 'Edit Skills', description: 'Update your tech stack', icon: '💻', link: '/admin/skills' },
    { title: 'Settings', description: 'Configure site settings', icon: '⚙️', link: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Header */}
      <header className="bg-black-100 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-white-50 text-sm mt-1">Welcome back! Here's what's happening.</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black-200 text-white-50 rounded-lg hover:bg-black-50 transition-colors text-sm"
              >
                View Site
              </a>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm disabled:opacity-50"
              >
                {loading ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black-100 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg mb-4 text-2xl`}>
                {stat.icon}
              </div>
              <p className="text-white-50 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => router.push(action.link)}
                className="bg-black-100 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-black-200 transition-all text-left group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                <p className="text-white-50 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black-100 border border-purple-500/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New contact message received', time: '2 hours ago', icon: '📧' },
              { action: 'Portfolio project updated', time: '5 hours ago', icon: '🚀' },
              { action: 'Skills section modified', time: '1 day ago', icon: '💻' },
              { action: 'New visitor from France', time: '2 days ago', icon: '🌍' },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-black-200 rounded-lg hover:bg-black-50 transition-colors"
              >
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-white-50 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
