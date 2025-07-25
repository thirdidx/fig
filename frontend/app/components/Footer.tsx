const socialLinks = [
  {
    name: "email",
    href: "mailto:figbuffalo@gmail.com",
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/fig-buffalo-103771272333385",
  },
  {
    name: "instagram",
    href: "https://instagram.com/figbuffalo",
  },
];

export default function Footer() {
  return (
    <footer className="bg-light border-gray-100 border-t font-accent uppercase text-taupe">
      <div className="py-12 px-4 container max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="text-sm mb-10 text-center lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left">
            © 2025 fig, inc.
          </div>
          <div className="flex justify-center md:justify-end space-x-2 lg:w-1/2 lg:pl-4">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-taupe hover:text-ochre transition-colors duration-200"  >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
