import { motion } from 'motion/react';
import { User, Mail, Github, Linkedin, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <div className="w-32 h-32 bg-zinc-200 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://picsum.photos/seed/teacher/400/400" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-4xl font-bold text-zinc-900">Tentang Guru IT</h1>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Seorang pendidik yang antusias dengan teknologi infrastruktur dan jaringan, 
            berbagi ilmu untuk mencetak generasi IT yang kompeten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="space-y-6">
            <div className="flex items-center space-x-3 text-zinc-900">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Visi & Misi</h2>
            </div>
            <p className="text-zinc-600 leading-relaxed">
              Membangun platform belajar yang mudah dipahami bagi pemula namun tetap memiliki kedalaman teknis bagi mereka yang ingin mendalami dunia Server dan Networking.
            </p>
            <ul className="space-y-3 text-zinc-600">
              <li className="flex items-start space-x-2">
                <span className="text-zinc-900 font-bold">•</span>
                <span>Menyederhanakan konsep teknis yang rumit.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-zinc-900 font-bold">•</span>
                <span>Memberikan panduan praktis berbasis lapangan.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-zinc-900 font-bold">•</span>
                <span>Mendorong budaya dokumentasi bagi teknisi IT.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-3 text-zinc-900">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Kontak & Media</h2>
            </div>
            <div className="space-y-4">
              <SocialLink icon={Mail} label="Email" value="guru@it-catatan.com" />
              <SocialLink icon={Github} label="GitHub" value="github.com/guruit" />
              <SocialLink icon={Linkedin} label="LinkedIn" value="linkedin.com/in/guruit" />
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-zinc-100">
        <Icon className="w-5 h-5 text-zinc-600" />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-bold text-zinc-900">{value}</p>
      </div>
    </div>
  );
}
