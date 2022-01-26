// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  "title": "Archivist",
  "tagline": "The Most Comprehensive AO3 Embed Bot for Discord",
  "url": "https://enigmalea.github.io/",
  "baseUrl": "/Archivist-Docs/",
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
          "sidebarPath": "C:\\Users\\enigm\\github\\Archivist-Docs\\docs\\sidebars.js",
        },
        "blog": {
          "showReadingTime": true,
        },
        "theme": {
          "customCss": "C:\\Users\\enigm\\github\\Archivist-Docs\\docs\\src\\css\\custom.css",
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
          "label": " Guide",
          "className": "guide"
        },
        { 
          "href": "https://discord.com/api/oauth2/authorize?client_id=812505952959856690&permissions=2148005952&scope=bot",
          "position": "left",
          "label": " Invite",
          "className": "invite"
        },
        { 
          "href": "https://discord.gg/FzhC9bVFva",
          "position": "left",
          "label": " Help",
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
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
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
              "label": "GitHub",
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
        }
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
        "darkIconStyle": {},
        "lightIcon": "\u263C",
        "lightIconStyle": {
          color: 'white',
        }
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
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
