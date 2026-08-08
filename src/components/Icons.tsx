type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 4c-4.6 0-8.4 2.1-8.4 4.7 0 .9.3 1.4.9 1.8.5.4 1.2.5 2 .4.7-.1 1.2-.4 1.5-.8.3-.4.4-.9.3-1.4 1.1-.4 2.4-.6 3.7-.6s2.6.2 3.7.6c-.1.5 0 1 .3 1.4.3.4.8.7 1.5.8.8.1 1.5 0 2-.4.6-.4.9-.9.9-1.8C20.4 6.1 16.6 4 12 4Z" />
      <path d="M8.9 12.6c-.5-.3-1.1-.2-1.4.3l-3.2 4.6c-.4.6-.2 1.3.4 1.6l2.6 1.4c.5.3 1.1.1 1.4-.3l1-1.5c.3-.5.2-1.1-.3-1.4l-.6-.4 1.1-1.6.6.4c.5.3 1.1.2 1.4-.3l1-1.5c.3-.5.2-1.1-.3-1.4l-3.7-.9Z" />
      <path d="M11.2 13.9c.3-.4.9-.5 1.3-.2l4.3 2.9c.4.3.5.9.2 1.3l-1.9 2.8c-.3.4-.9.5-1.3.2l-4.3-2.9c-.4-.3-.5-.9-.2-1.3l1.9-2.8Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 6.2C2 5.54 2.54 5 3.2 5h17.6c.66 0 1.2.54 1.2 1.2v.35l-10 5.62L2 6.55V6.2Z" />
      <path d="M2 8.65v9.15c0 .66.54 1.2 1.2 1.2h17.6c.66 0 1.2-.54 1.2-1.2V8.65l-9.6 5.4a.9.9 0 0 1-.8 0L2 8.65Z" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9.2" />
      <ellipse cx="12" cy="12" rx="4" ry="9.2" />
      <path d="M3.1 9.2h17.8M3.1 14.8h17.8" />
    </svg>
  );
}
