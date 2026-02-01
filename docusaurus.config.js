/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tamuSHPE Guides',
  tagline: 'An inclusive environemnt for individuals who are passionate about using technology to improve themselves and the life of others.',
  url: 'https://tech.tamushpe.org/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TAMUSHPE', // Usually your GitHub org/user name.
  projectName: 'tamushpe-guides', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'shpeathon_apply',
    //   content:
    //     'Learn about our upcoming SHPEathon competition <a rel="noopener noreferrer" href="/docs/shpeathon/event-details/event-details">here</a>. <span style="font-weight: bold;">Date: Feb 4th-6th</span>',
    //   backgroundColor: '#FCBB19',
    //   textColor: '#000',
    //   isCloseable: false,
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tech Affairs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        // Ultimate Website Guide
        {
          type: 'doc',
          docId: 'personal-website3/intro/introduction',
          position: 'right',
          label: 'Personal Website',
        },
        // {
        //   type: 'doc',
        //   docId: 'personal-website/Purpose/introduction',
        //   position: 'right',
        //   label: 'Personal Website',
        // },
        // {
        //   type: 'doc',
        //   docId: 'new-personal-website/Week-1/introduction',
        //   position: 'right',
        //   label: 'New Personal Website',
        // },
        {
          type: 'doc',
          docId: 'python/getting-started/course-introduction',
          position: 'right',
          label: 'Python',
        },
        {
          type: 'doc',
          docId: 'chemistry-guide/introduction/course-introduction',
          position: 'right',
          label: 'Chemistry Guide',
        },
        // {
        //   type: 'doc',
        //   docId: 'transfer-of-knowledge/Introduction/introduction',
        //   position: 'right',
        //   label: 'Transfer of Knowledge',
        // },
        // {
        //   label: 'Join Now',
        //   to: 'https://www.tamushpe.org/committees.html',
        //   position: 'right',
        //   className: 'nav-button-blue',
        // },
        {
          type: 'doc',
          docId: 'shpeathon26/event-details/event-details',
          position: 'right',
          className: 'nav-button-orange',
          label: 'SHPEathon',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Personal Website',
              to:'/docs/personal-website3/intro/introduction',
            },
            // {
            //   label: 'Personal Website',
            //   to: '/docs/personal-website/Purpose/introduction',
            // },
            // {
            //   label: 'New Personal Website',
            //   to: '/docs/new-personal-website/Week-1/introduction',
            // },
            {
              label: 'Python',
              to: '/docs/python/getting-started/course-introduction',
            },
            {
              label: 'Chemistry Guide',
              to: '/docs/chemistry-guide/introduction/course-introduction',
            },
            {
              label: 'SHPEathon',
              to: '/docs/shpeathon25/event-details',
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
        // {
        //   title: 'Admin',
        //   items: [
        //     {
        //       label: 'Log In',
        //       to: '/docs/transfer-of-knowledge/introduction',
        //     },
        //   ],
        // },
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
          exclude:[
            // '**/shpeathon26/**',
            // '**/shpeathon26/introPhase',
            // '**/shpeathon26/designPhase',
            // '**/shpeathon26/marketingPhase',
            // '**/shpeathon26/financePhase',
           //'**/shpeathon26/final-presentation',
            '**/shpeathon25/**',
            '**/shpeathon24/**',
            '**/shpeathon23/**',
            '**/shpeathon22/**',
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
