import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Server, Network, BookOpen, User, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  {
    name: 'Server',
    icon: Server,
    children: [
      { name: 'Debian', path: '/server/debian' },
      { name: 'Ubuntu', path: '/server/ubuntu' },
      { name: 'Monitoring', path: '/server/monitoring' },
    ],
  },
  {
    name: 'Networking',
    icon: Network,
    children: [
      { name: 'Jaringan Dasar', path: '/networking/basic' },
      { name: 'Cisco', path: '/networking/cisco' },
      { name: 'Mikrotik', path: '/networking/mikrotik' },
    ],
  },
  { name: 'Pengalaman', path: '/experience', icon: BookOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900">Catatan Guru IT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname.startsWith(item.path || '/none') 
                        ? "text-zinc-900 bg-zinc-100" 
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    )}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-white border border-zinc-200 rounded-xl shadow-xl py-2 mt-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ) : (
                  <Link
                    to={item.path!}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.path 
                        ? "text-zinc-900 bg-zinc-100" 
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path!}
                      className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
