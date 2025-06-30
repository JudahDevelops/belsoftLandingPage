import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
  { name: 'Aug', revenue: 2000, expenses: 2400 },
  { name: 'Sep', revenue: 2780, expenses: 1398 },
  { name: 'Oct', revenue: 1890, expenses: 9800 },
  { name: 'Nov', revenue: 2390, expenses: 3908 },
  { name: 'Dec', revenue: 3490, expenses: 4800 },
];

const RevenueChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
        <Tooltip cursor={{ fill: 'rgba(240, 240, 240, 0.5)' }} />
        <Bar dataKey="revenue" fill="#42A5F5" />
        <Bar dataKey="expenses" fill="#FFCA28" />
        {!isMobile && (
          <>
            <ReferenceArea x1="Feb" x2="Mar" y1={7700} y2={9700} strokeOpacity={0.3} label={{ value: 'A fall in revenue', fill: '#E53935', fontSize: 12 }} />
            <ReferenceArea x1="Jun" x2="Jul" y1={7700} y2={9700} strokeOpacity={0.3} label={{ value: 'A rise in revenue', fill: '#2E7D32', fontSize: 12 }} />
          </>
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
