const LOGO = import.meta.env.BASE_URL + "brand/logo-cn.png";

// The roadmap SPA is mounted at /roadmap/. Top-bar nav links should lead back
// to the main marketing site (the anchors live at /#home, /#services, etc.),
// so we use absolute "/" URLs to escape both the sub-path and HashRouter.
const HOME_ROOT = "/";

const NAV_LINKS = [
  { label: "首页", href: `${HOME_ROOT}#home` },
  // { label: "业务板块", href: `${HOME_ROOT}#services` },
  // { label: "关于我们", href: `${HOME_ROOT}#about` },
  // { label: "加入我们", href: `${HOME_ROOT}#contact` },
];

export function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white/95 px-[60px] py-5 shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur max-md:px-5">
      <a
        href={HOME_ROOT}
        aria-label="返回大川激流首页"
        className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
      >
        <img
          src={LOGO}
          alt="大川激流 Logo"
          className="block h-9 w-auto select-none transition-opacity duration-300 hover:opacity-85"
          draggable={false}
        />
      </a>

      <ul className="flex list-none items-center gap-10 max-md:hidden">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group relative text-[15px] font-medium text-[#1a1a1a] transition-colors duration-300 hover:text-[#067efd]"
            >
              {link.label}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#067efd] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger placeholder — matches the marketing site's static markup. */}
      <div
        className="hidden cursor-pointer flex-col gap-[5px] max-md:flex"
        aria-hidden="true"
      >
        <span className="block h-0.5 w-6 bg-[#1a1a1a]" />
        <span className="block h-0.5 w-6 bg-[#1a1a1a]" />
        <span className="block h-0.5 w-6 bg-[#1a1a1a]" />
      </div>
    </header>
  );
}
