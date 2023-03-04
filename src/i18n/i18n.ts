import { nextTick } from 'vue';
import { createI18n, type I18n, type I18nOptions } from 'vue-i18n';

export const LOCALES: string[] = [];
export const SUPPORT_LOCALES = ['es', 'en'];
export const defaultLocale = 'en';

export function setupI18n(options: I18nOptions) {
  const i18n = createI18n(options) as I18n;
  setI18nLanguage(i18n, options.locale as string);
  return i18n;
}

export function setI18nLanguage(i18n: I18n, locale: string) {
  i18n.global.locale = locale;
  loadLocaleMessages(i18n, locale);
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  // load locale messages with dynamic import
  const messages = await import(/* webpackChunkName: "locale-[request]" */ `./locales/${locale}.js`);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);
  return nextTick();
}

function checkDefaultLanguage(): string {
  let matched;
  const languages = SUPPORT_LOCALES;
  languages.forEach((lang) => {
    if (lang === navigator.language) {
      matched = lang;
    }
  });

  if (!matched) {
    languages.forEach((lang) => {
      let languagePartials = navigator.language.split('-')[0];
      if (lang === languagePartials) {
        matched = lang;
      }
    });
  }
  return matched || defaultLocale;
}

const instance = setupI18n({
  legacy: false,
  globalInjection: true,
  locale: checkDefaultLanguage(),
});

export const i18n = instance.global;
export default instance;
