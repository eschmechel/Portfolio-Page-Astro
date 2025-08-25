// src/islands/MobileMenu.tsx
import { useState, useEffect } from "preact/hooks";
import { Socials as socialAccounts } from "../data/socialData";
import { getSocialIcon } from "../utils/socialIcons";
import type { JSX } from "preact";

interface NavLink {
  href: string;
  label: string;
  current?: boolean;
}

interface Props {
  links: NavLink[];
  currentPath: string;
}


export default function MobileMenu({ links, currentPath }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handle body scroll locking
  //Could potentionally be replaced with react-aria/UsePreventScroll
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.classList.add('overflow-hidden');
    } else {
      // Re-enable scrolling
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <div class="md:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={toggleMenu}
        class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        aria-controls="mobile-navigation"
      >
        {isOpen ? (
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          class="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        id="mobile-navigation"
        class={`fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-secondary-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Menu header */}
        <div class="flex items-center justify-between p-4 border-b border-secondary-200 dark:border-secondary-700">
          <h2 class="text-lg font-semibold text-secondary-900 dark:text-white">
            Menu
          </h2>
          <button
            type="button"
            onClick={closeMenu}
            class="p-2 rounded-lg text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav class="p-4" role="navigation" aria-label="Mobile navigation">
          <ul class="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    currentPath === link.href || link.current
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      : "text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 hover:text-secondary-900 dark:hover:text-white"
                  }`}
                  onClick={closeMenu}
                  aria-current={
                    currentPath === link.href || link.current
                      ? "page"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact/social section (shared logic) */}
        <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-secondary-200 dark:border-secondary-700">
          <div class="space-y-3">
            {/* Email link at top */}
            {socialAccounts
              .filter((s) => s.platform.toLowerCase() === 'email' && s.hidden !== true)
              .map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  class="flex items-center gap-3 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  aria-label="Email Contact"
                  onClick={closeMenu}
                >
                  <span
                    class="w-5 h-5"
                    dangerouslySetInnerHTML={{ __html: getSocialIcon(s.platform) }}
                  />
                  Contact Me
                </a>
              ))}
            {/* Other socials */}
            {socialAccounts
              .filter((s) => s.platform.toLowerCase() !== 'email' && s.hidden !== true)
              .map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  class="flex items-center gap-3 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${s.platform} Profile`}
                  onClick={closeMenu}
                >
                  <span
                    class="w-5 h-5"
                    dangerouslySetInnerHTML={{ __html: getSocialIcon(s.platform) }}
                  />
                  {s.platform}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
