import { motion } from 'motion/react';
import { Server, Network, BookOpen, ChevronRight, Terminal, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(24,24,27,0.05)_0%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
              Edukasi & Teknologi
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-8">
              Catatan <span className="italic font-serif text-zinc-500">Guru IT</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-zinc-600 mb-10 leading-relaxed">
              Kumpulan dokumentasi, tutorial, dan pengalaman praktis seputar infrastruktur server, 
              manajemen jaringan, dan dunia pendidikan informatika.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/server/debian"
                className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all flex items-center space-x-2"
              >
                <span>Mulai Belajar</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-xl font-semibold hover:bg-zinc-50 transition-all"
              >
                Tentang Saya
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Server}
            title="Server Administration"
            description="Panduan konfigurasi Debian, Ubuntu, hingga sistem monitoring modern untuk infrastruktur yang stabil."
            link="/server/debian"
            color="bg-blue-50 text-blue-600"
          />
          <FeatureCard
            icon={Network}
            title="Networking"
            description="Dari konsep dasar jaringan hingga implementasi perangkat Cisco dan Mikrotik di lapangan."
            link="/networking/basic"
            color="bg-emerald-50 text-emerald-600"
          />
          <FeatureCard
            icon={BookOpen}
            title="Pengalaman Mengajar"
            description="Catatan harian dan tips mengajar untuk instruktur IT dalam menyampaikan materi teknis dengan mudah."
            link="/experience"
            color="bg-amber-50 text-amber-600"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Materi Terpopuler</h2>
            <p className="text-zinc-600">Topik yang paling sering dicari oleh siswa dan profesional IT.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Terminal, label: 'Linux CLI' },
              { icon: Shield, label: 'Security' },
              { icon: Cpu, label: 'Virtualization' },
              { icon: Network, label: 'Routing' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-zinc-200 flex flex-col items-center text-center space-y-4"
              >
                <item.icon className="w-8 h-8 text-zinc-400" />
                <span className="font-semibold text-zinc-900">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, link, color }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all"
    >
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-6`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-4">{title}</h3>
      <p className="text-zinc-600 mb-6 leading-relaxed">
        {description}
      </p>
      <Link
        to={link}
        className="text-sm font-bold text-zinc-900 flex items-center space-x-1 hover:space-x-2 transition-all"
      >
        <span>Pelajari lebih lanjut</span>
        <ChevronRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
