const REGISTER_URL = 'https://4yaarwin.com/#/register?invitationCode=64747166955';

export default function CtaButton({ label = 'Play Now', variant = 'primary', size = 'md', className = '' }) {
  const sizeClass = {
    sm: 'px-5 py-2 text-sm rounded-lg',
    md: 'px-7 py-3 text-base rounded-xl',
    lg: 'px-10 py-4 text-lg rounded-2xl',
  }[size];

  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${variant === 'primary' ? 'btn-primary shadow-glow-sm' : 'btn-outline'} ${sizeClass} ${className}`}
    >
      {label}
    </a>
  );
}
