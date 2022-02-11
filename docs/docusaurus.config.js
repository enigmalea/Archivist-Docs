// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  "title": "Archivist",
  "tagline":  "The Most Comprehensive AO3 Embed Bot for Discord",
  "url": "https://www.archivistbot.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logo.png",
  "organizationName": "enigmalea",
  "projectName": "Archivist-Docs",
  "trailingSlash": false,
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": require.resolve("./sidebars.js"),
        },
      "blog": {
          "path": "blog",
          "blogTitle": "Archivist Development Blog",
          "blogDescription": "Stay up-to-date on the development of the Discord bot Archivist.",
          "blogSidebarCount": 5,
          "blogSidebarTitle": "Recent",
          "routeBasePath": "blog",
          "postsPerPage": 10,
          "showReadingTime": true,
          "feedOptions": {
            "type": "rss",
            "title": "Archivist Development Blog",
            "description": "Stay up-to-date on the development of the Discord bot Archivist."
          },
        },
        "theme": {
          "customCss": require.resolve("./src/css/custom.css"),
        }
      }
    ]
  ],
  "themeConfig": {
    "image": 'img/logo.png',
    "navbar": {
      "title": "Archivist",
      "logo": {
        "alt": "Archivist Logo",
        "src": "img/logo.png",
      },
      "items": [
        { 
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Guide",
          "className": "guide"
        },
        { 
          "href": "https://discord.com/api/oauth2/authorize?client_id=812505952959856690&permissions=2148005952&scope=bot",
          "position": "left",
          "label": "Invite",
          "className": "invite"
        },
        { 
          "href": "https://discord.gg/FzhC9bVFva",
          "position": "left",
          "label": "Help",
          "className": "help"
        },
        { 
          "href": "https://twitter.com/_ArchivistBot_",
          "position": "right",
          "label": "\u200B",
          "className": "twitter"
        },
        { 
          "href": "https://github.com/enigmalea/Archivist-Docs",
          "position": "right",
          "label": "\u200B",
          "className": "github"
        },
        { 
          "href": "https://enigmalea.github.io/Archivist-Docs/blog/rss.xml",
          "position": "right",
          "label": "\u200B",
          "className": "rss"
        },
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Blog",
              "href": "/blog",
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/FzhC9bVFva",
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/_ArchivistBot_",
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Release Notes",
              "href": "/releases",
            },
            {
              "label": "Support",
              "href": "/support",
            },
            {
              "label": "Docs GitHub",
              "href": "https://github.com/enigmalea/Archivist-Docs",
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Privacy Policy",
              "href": "/privacy"
            }
          ]
        },
        {
          "items": [
            {
             "html": `<a href="https://top.gg/bot/812505952959856690"><img src="https://top.gg/api/widget/812505952959856690.svg"></a>`,
             "className": "topgg",
            }
          ]
        },
      ],
      "copyright": `Copyright © ${new Date().getFullYear()} enigmalea. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "\u263E",
        "darkIconStyle": {
          color: 'white',
        },
        "lightIcon": "\u263C",
        "lightIconStyle": {
          color: 'white',
        }
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [
      {name: 'theme-color', content: '#990000'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:creator', content: '_ArchivistBot_'}
    ],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "\u2606",
  "noIndex": false
};

module.exports = config;
