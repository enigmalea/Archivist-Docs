// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archivist',
  tagline:  'The Most Comprehensive AO3 Embed Bot for Discord',
  url: 'https://www.archivistbot.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'enigmalea',
  projectName: 'Archivist-Docs',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
      blog: {
          path: 'blog',
          blogTitle: 'Archivist Development Blog',
          blogDescription: 'Stay up-to-date on the development of the Discord bot Archivist.',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent',
          routeBasePath: 'blog',
          postsPerPage: 10,
          showReadingTime: true,
          feedOptions: {
            type: 'rss',
            title: 'Archivist Development Blog',
            description: 'Stay up-to-date on the development of the Discord bot Archivist.'
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ],
  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'Archivist',
      logo: {
        alt: 'Archivist Logo',
        src: 'img/logo.png',
      },
      items: [
        { 
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guide',
          className: 'guide'
        },
        { 
          href: 'https://discord.com/api/oauth2/authorize?client_id=812505952959856690&permissions=2148005952&scope=bot',
          position: 'left',
          label: 'Invite',
          className: 'invite'
        },
        { 
          href: 'https://discord.gg/FzhC9bVFva',
          position: 'left',
          label: 'Help',
          className: 'help'
        },
        { 
          href: 'https://twitter.com/_ArchivistBot_',
          position: 'right',
          label: '\u200B',
          className: 'twitter'
        },
        { 
          href: 'https://github.com/enigmalea/Archivist-Docs',
          position: 'right',
          label: '\u200B',
          className: 'github'
        },
        { 
          href: 'https://enigmalea.github.io/Archivist-Docs/blog/rss.xml',
          position: 'right',
          label: '\u200B',
          className: 'rss'
        },
      ],
      hideOnScroll: false
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: '/blog',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/FzhC9bVFva',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/_ArchivistBot_',
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Release Notes',
              href: '/releases',
            },
            {
              label: 'Support',
              href: '/support',
            },
            {
              label: 'Docs GitHub',
              href: 'https://github.com/enigmalea/Archivist-Docs',
            }
          ]
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: '/privacy'
            }
          ]
        },
        {
          items: [
            {
             html: `<a href="https://top.gg/bot/812505952959856690"><img src="https://top.gg/api/widget/812505952959856690.svg"></a>`,
             'className': 'topgg',
            }
          ]
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} enigmalea. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    metadata: [
      {name: 'theme-color', content: '#990000'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:creator', content: '_ArchivistBot_'}
    ],
    hideableSidebar: false,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3
    }
  },
  baseUrlIssueBanner: true,
  onDuplicateRoutes: 'warn',
  staticDirectories: [
    'static'
  ],
  customFields: {},
  plugins: [],
  themes: [],
  titleDelimiter: '\u2606',
  noIndex: false
};

module.exports = config;
