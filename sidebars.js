// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    'calculator',
    'simple-calculator',
    'materials',
    'users',
    'profile',
    'register',
    ...(process.env.DOCUSAURUS_HOSTED_HELP === '1' ? [] : ['deploy'])
  ],
};

module.exports = sidebars;
