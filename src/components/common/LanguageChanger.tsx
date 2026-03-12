"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { LANGUAGES } from '@/lib/const';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (newLocale: string) => {
    if(newLocale === locale) return;

    router.replace(pathname, {locale: newLocale})
  };
  
  // تأمين البحث عن اللغة المختارة
  const selectedLanguage = LANGUAGES.find(lang => lang.locale === locale) ?? LANGUAGES[0];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        <selectedLanguage.flag className="mr-2 size-4" />
        <span className="hidden md:block">{selectedLanguage.name}</span>
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-40 z-[9999] origin-top-right shadow-lg bg-white rounded-xl border border-gray-200 p-1 text-sm text-gray-600 transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {LANGUAGES.map((language) => (
          <MenuItem key={language.locale}>
            <button onClick={() => changeLanguage(language.locale)}
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-gray-100 hover:text-indigo-600 transition"
            >
              <language.flag className="mr-2 size-5" />
              {language.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}