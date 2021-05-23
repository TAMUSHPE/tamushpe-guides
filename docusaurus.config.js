/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tamuSHPE Guides',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
          docId: 'python/getting-started/what-is-programming',
          position: 'right',
          label: 'Python',
        },
        {
          type: 'doc',
          docId: 'personal-website/tutorial-basics/create-a-page',
          position: 'right',
          label: 'Personal Website',
        },
        {
          label: 'Join Now',
          href: 'https://www.tamushpe.org/committees.html',
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
              label: 'Python',
              to: '/docs/python/getting-started/what-is-programming',
            },
            {
              label: 'Personal Website',
              to: '/docs/personal-website/tutorial-basics/create-a-page',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'TikTok',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              href: 'https://tamushpe.org',
            },
            {
              label: 'Join Tech Affairs',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
