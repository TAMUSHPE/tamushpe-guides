/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tamuSHPE Guides',
  tagline: 'An inclusive environemnt for individuals who are passionate about using technology to improve themselves and the life of others.',
  url: 'https://TAMUSHPE.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TAMUSHPE', // Usually your GitHub org/user name.
  projectName: 'tamushpe-guides', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        lightIcon: '☀️',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Tech Affairs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'personal-website/Purpose/introduction',
          position: 'right',
          label: 'Personal Website',
        },
        {
          type: 'doc',
          docId: 'python/getting-started/course-introduction',
          position: 'right',
          label: 'Python',
        },
        {
          label: 'Join Now',
          to: 'https://www.tamushpe.org/committees.html',
          position: 'right',
          className: 'nav-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Personal Website',
              to: '/docs/personal-website/Purpose/introduction',
            },
            {
              label: 'Python',
              to: '/docs/python/getting-started/course-introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/tamushpe/?hl=en',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/tamushpe/',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/tamushpe?lang=en',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              to: 'https://www.tamushpe.org',
            },
            {
              label: 'MemberSHPE Portal',
              to: 'https://www.membershpe.org',
            },
            {
              label: 'Join Tech Affairs',
              to: 'https://www.tamushpe.org/committees.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TAMU SHPE`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
