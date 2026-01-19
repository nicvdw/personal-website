import { MapPin, Instagram, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { icon: MapPin, href: '#', label: 'Location' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
}