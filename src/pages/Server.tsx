import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { Server, Terminal, Activity, ChevronRight } from 'lucide-react';

const serverContent: Record<string, any> = {
  debian: {
    title: 'Debian Server',
    description: 'Sistem operasi universal yang stabil dan aman untuk kebutuhan server produksi.',
    topics: [
      'Instalasi Debian 12 Bookworm',
      'Konfigurasi IP Static & DNS',
      'Web Server (Apache/Nginx)',
      'Database Server (MariaDB/PostgreSQL)',
      'FTP & SSH Server',
    ],
    icon: Terminal,
    color: 'text-red-600 bg-red-50',
  },
  ubuntu: {
    title: 'Ubuntu Server',
    description: 'Distribusi Linux paling populer dengan dukungan komunitas yang sangat luas.',
    topics: [
      'Ubuntu Server LTS Setup',
      'Manajemen Paket dengan APT',
      'Docker & Containerization',
      'Konfigurasi Firewall UFW',
      'Auto Security Updates',
    ],
    icon: Server,
    color: 'text-orange-600 bg-orange-50',
  },
  monitoring: {
    title: 'System Monitoring',
    description: 'Memastikan performa server tetap optimal dengan alat pemantauan real-time.',
    topics: [
      'Monitoring dengan Netdata',
      'Grafana & Prometheus Setup',
      'Zabbix untuk Enterprise',
      'Log Analysis dengan ELK Stack',
      'Alerting System via Telegram/Email',
    ],
    icon: Activity,
    color: 'text-blue-600 bg-blue-50',
  },
};

export default function ServerPage() {
  const { type } = useParams();
  const content = serverContent[type || 'debian'];

  if (!content) return <div>Content not found</div>;

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="flex items-center space-x-6">
          <div className={`w-16 h-16 ${content.color} rounded-2xl flex items-center justify-center`}>
            <content.icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">{content.title}</h1>
            <p className="text-zinc-500">Materi Administrasi Server</p>
          </div>
        </div>

        <div className="bg-zinc-900 text-zinc-100 p-8 rounded-3xl space-y-6">
          <p className="text-lg text-zinc-300 leading-relaxed">
            {content.description}
          </p>
          <div className="h-px bg-zinc-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.topics.map((topic: string, i: number) => (
              <div key={i} className="flex items-center space-x-3 text-zinc-400">
                <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h2 className="text-2xl font-bold text-zinc-900">Panduan Terbaru</h2>
          {[1, 2, 3].map((i) => (
            <div key={i} className="group p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Tutorial #{i}</span>
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-zinc-600">Cara Konfigurasi Dasar {content.title} Bagian {i}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
