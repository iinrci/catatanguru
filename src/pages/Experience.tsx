import { motion } from 'motion/react';
import { MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    year: '2013 - Sekarang',
    title: 'Assesor Ujikompetensi',
    location: 'PT ForIt Solusindo',
    description: 'Menguji Siswa dalam pelaksanaan Uji Kompetensi di sekolah bada bidang network dan system Administrator cisco/Mikrotik.',
    icon: Award,
  },
  {
    year: '2010 - 2026',
    title: 'Guru Produktif TKJ',
    location: 'SMKN 2 Baleendah',
    description: 'Membimbing siswa dalam praktikum Server dengan debian dan ubuntu, Network cisco dan mikrotik, fiber optik, IOT.',
    icon: GraduationCap,
  },
  {
    year: '2018 - 2020',
    title: 'System Administrator',
    location: 'Tech Solutions Co.',
    description: 'Bertanggung jawab atas pemeliharaan server internal dan infrastruktur jaringan kantor pusat.',
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-zinc-900">Pengalaman Profesional</h1>
          <p className="text-zinc-500">Perjalanan karir dan kontribusi di dunia pendidikan serta industri IT.</p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent">
          {experiences.map((exp, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <exp.icon className="w-5 h-5" />
              </div>
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{exp.year}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{exp.title}</h3>
                <div className="flex items-center text-sm text-zinc-500 mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{exp.location}</span>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
