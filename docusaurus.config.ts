// @ts-check
// ИМПОРТЫ ← ДОБАВЬ ЭТО
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const isHostedHelp = process.env.DOCUSAURUS_HOSTED_HELP === '1';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация ДомЛайка',
  tagline: 'Калькулятор стоимости строительства',
  favicon: 'img/domlike-mark.png',

  url: isHostedHelp ? 'https://domlike.vkrasiv.online' : 'https://docs.vkrasiv.ru',
  baseUrl: isHostedHelp ? '/help/' : '/',

  organizationName: 'vadimkrasiff',
  projectName: 'calc-estimator-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          ...(isHostedHelp ? { exclude: ['deploy.md'] } : {}),
          editUrl: 'https://github.com/vadimkrasiff/calc-estimator-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'ДомЛайк',
        src: 'img/domlike-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://domlike.vkrasiv.online/',
          label: 'Открыть калькулятор',
          position: 'right',
          target: '_self',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} ДомЛайк`,
    },
    prism: {
      theme: lightCodeTheme,      // ← ИСПОЛЬЗУЙ ПЕРЕМЕННЫЕ
      darkTheme: darkCodeTheme,   // ← ИСПОЛЬЗУЙ ПЕРЕМЕННЫЕ
    },
  },

  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},
};

module.exports = config;
