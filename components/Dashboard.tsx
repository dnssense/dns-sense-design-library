import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, Users, Shield, Activity } from 'lucide-react';

interface DashboardMetric {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

interface DashboardProps {
  theme?: 'light' | 'dark';
}

const Dashboard: React.FC<DashboardProps> = ({ theme = 'dark' }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const metrics: DashboardMetric[] = [
    {
      title: 'Total Queries',
      value: '2.4M',
      change: 12.5,
      icon: <Activity className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Blocked Threats',
      value: '1,234',
      change: 8.2,
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Active Users',
      value: '456',
      change: 5.1,
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'System Health',
      value: '99.9%',
      change: 0.2,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const chartData = [
    { name: 'Mon', queries: 4000, blocked: 240, legitimate: 3760 },
    { name: 'Tue', queries: 3000, blocked: 221, legitimate: 2779 },
    { name: 'Wed', queries: 2000, blocked: 229, legitimate: 1771 },
    { name: 'Thu', queries: 2780, blocked: 200, legitimate: 2580 },
    { name: 'Fri', queries: 1890, blocked: 229, legitimate: 1661 },
    { name: 'Sat', queries: 2390, blocked: 220, legitimate: 2170 },
    { name: 'Sun', queries: 3490, blocked: 229, legitimate: 3261 },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      {/* Header */}
      <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} border-b ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} p-6`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              DNS Dashboard
            </h1>
            <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Real-time DNS security monitoring
            </p>
          </div>
          
          {/* Period Selector */}
          <div className="flex gap-2">
            {['24h', '7d', '30d', '90d'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 border ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} hover:shadow-lg transition-shadow`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${metric.color} text-white`}>
                  {metric.icon}
                </div>
                <span className={`text-sm font-semibold ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {metric.title}
              </p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Queries Chart */}
          <div className={`lg:col-span-2 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 border ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              DNS Queries Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#475569' : '#e2e8f0'} />
                <XAxis stroke={theme === 'dark' ? '#94a3b8' : '#64748b'} />
                <YAxis stroke={theme === 'dark' ? '#94a3b8' : '#64748b'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
                    border: `1px solid ${theme === 'dark' ? '#475569' : '#e2e8f0'}`,
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: theme === 'dark' ? '#e2e8f0' : '#1e293b' }}
                />
                <Legend />
                <Line type="monotone" dataKey="queries" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="legitimate" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Threat Distribution */}
          <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 border ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Threat Types
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Malware', count: 342, color: 'bg-red-500' },
                { name: 'Phishing', count: 218, color: 'bg-orange-500' },
                { name: 'Botnet', count: 156, color: 'bg-purple-500' },
                { name: 'C2', count: 98, color: 'bg-pink-500' },
              ].map((threat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                      {threat.name}
                    </span>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {threat.count}
                    </span>
                  </div>
                  <div className={`h-2 rounded-full ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}`}>
                    <div className={`h-full rounded-full ${threat.color}`} style={{ width: `${(threat.count / 342) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-white'} rounded-xl p-6 border ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Recent Alerts
          </h3>
          <div className="space-y-3">
            {[
              { type: 'High', message: 'Suspicious domain detected', time: '2 min ago' },
              { type: 'Medium', message: 'Multiple failed lookups from subnet', time: '15 min ago' },
              { type: 'Low', message: 'Cache hit rate improved', time: '1 hour ago' },
            ].map((alert, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-50'}`}
              >
                <AlertCircle className={`w-5 h-5 ${alert.type === 'High' ? 'text-red-500' : alert.type === 'Medium' ? 'text-orange-500' : 'text-blue-500'}`} />
                <div className="flex-1">
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {alert.message}
                  </p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
