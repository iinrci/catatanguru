import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { Network, Cpu, Globe, ChevronRight, ShieldCheck } from 'lucide-react';

const networkingContent: Record<string, any> = {
  basic: {
    title: 'Jaringan Dasar',
    description: 'Memahami fondasi komunikasi data, model OSI, dan pengalamatan IP.',
    topics: [
      'Model OSI 7 Layer',
      'Topologi Jaringan',
      'Subnetting IPv4 & IPv6',
      'Media Transmisi (Kabel & Wireless)',
      'Protokol TCP/UDP',
    ],
    icon: Globe,
    color: 'text-emerald-600 bg-emerald-50',
  },
  cisco: {
    title: 'Cisco Networking',
    description: 'Implementasi perangkat Cisco untuk jaringan skala menengah hingga besar.',
    topics: [
      'Basic Switch & Router Config',
      'VLAN & Inter-VLAN Routing',
      'Routing Protokol (OSPF/EIGRP)',
      'Access Control List (ACL)',
      'NAT & PAT Configuration',
    ],
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50',
  },
  mikrotik: {
    title: 'Mikrotik RouterOS',
    description: 'Solusi routing fleksibel dan kaya fitur untuk berbagai kebutuhan jaringan.',
    topics: [
      'Mikrotik Basic Setup',
      'Bandwidth Management (Queue)',
      'Hotspot & User Manager',
      'VPN (PPTP/L2TP/OVPN)',
      'Firewall Filter & Mangle',
    ],
    icon: Cpu,
    color: 'text-indigo-600 bg-indigo-50',
  },
};

export default function NetworkingPage() {
  const { type } = useParams();
  const content = networkingContent[type || 'basic'];

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
            <p className="text-zinc-500">Materi Networking</p>
          </div>
        </div>

        <div className="bg-white border-2 border-zinc-900 p-8 rounded-3xl space-y-6 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
          <p className="text-lg text-zinc-600 leading-relaxed">
            {content.description}
          </p>
          <div className="h-px bg-zinc-100" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.topics.map((topic: string, i: number) => (
              <div key={i} className="flex items-center space-x-3 text-zinc-900 font-medium">
                <div className="w-2 h-2 bg-zinc-900 rounded-full" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900">Lab Praktikum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                <h3 className="font-bold text-zinc-900 mb-2">Lab Project #{i}: Implementasi {content.title}</h3>
                <p className="text-sm text-zinc-500 mb-4">Skenario praktikum untuk menguji pemahaman materi secara langsung.</p>
                <div className="flex items-center text-zinc-900 text-sm font-bold">
                  <span>Lihat Lab</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
