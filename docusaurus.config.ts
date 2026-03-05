// @ts-check
// ИМПОРТЫ ← ДОБАВЬ ЭТО
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация проекта',
  tagline: 'Калькулятор стоимости строительства',
  favicon: 'img/favicon.ico',

  url: 'https://docs.vkrasiv.ru',
  baseUrl: '/',

  organizationName: 'vadimkrasiff',
  projectName: 'vkrasiv-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/ТВОЙ_USERNAME/vkrasiv-docs/tree/main/',
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
      title: 'Документация',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} vkrasiv.ru`,
    },
    prism: {
      theme: lightCodeTheme,      // ← ИСПОЛЬЗУЙ ПЕРЕМЕННЫЕ
      darkTheme: darkCodeTheme,   // ← ИСПОЛЬЗУЙ ПЕРЕМЕННЫЕ
    },
  },
};

module.exports = config;