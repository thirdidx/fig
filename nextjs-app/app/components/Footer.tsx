const socialLinks = [
  {
    name: 'email',
    href: 'mailto:figbuffalo@gmail.com',
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/fig-buffalo-103771272333385',
  },
  {
    name: 'instagram',
    href: 'https://instagram.com/figbuffalo',
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container py-12">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="text-sm mb-10 text-center font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left">
            © 2025 fig, inc.
          </div>
          <div className="flex justify-center md:justify-end space-x-2 lg:w-1/2 lg:pl-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black text-sm font-bold hover:text-blue-800 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
