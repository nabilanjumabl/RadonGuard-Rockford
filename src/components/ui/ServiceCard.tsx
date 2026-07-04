import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Building2, CheckCircle2, Fan } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  icon: string;
}

const iconMap: Record<string, ReactNode> = {
  'clock': <Clock className="w-8 h-8" />,
  'shield': <Shield className="w-8 h-8" />,
  'building': <Building2 className="w-8 h-8" />,
  'check': <CheckCircle2 className="w-8 h-8" />,
  'fan': <Fan className="w-8 h-8" />,
};

export function ServiceCard({ title, description, path, icon }: ServiceCardProps) {
  return (
    <Link
      to={path}
      className="group block bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {iconMap[icon] || <Shield className="w-8 h-8" />}
        </div>
        <div className="flex-grow">
          <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-end text-primary-600 text-sm font-medium mt-4 group-hover:gap-3 transition-all">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
