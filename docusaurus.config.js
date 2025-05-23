// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/detective.png',

  // Set the production url of your site here
  url: 'https://alexsandraroldan.github.io',
  baseUrl: '/Docusaurus/',
  organizationName: 'AlexsandraRoldan',
  projectName: 'Docusaurus',
  deploymentBranch: 'gh-pages',
  

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/detective.png',
      navbar: {
        title: 'Inspector',
        logo: {
          alt: 'My Site Logo',
          src: 'img/detective.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Informacion',
          },

          {
            href: 'https://github.com/AlexsandraRoldan/Docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub', // Título de la sección
            items: [
              {
                label: 'Inspector',
                href: 'https://github.com/AlexsandraRoldan/Docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Alexsandra Roldan. Todos los derechos reservados.`, // Texto personalizado
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
