// gitprofile.config.js

const config = {
  github: {
    username: 'krypton-byte', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: 'kryptonbyte.5',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://krypton-byte.com',
    phone: '+6283172366463',
    email: 'krypton@antei.codes',
  },
  skills: [
    'Python',
    'Kotlin',
    'PHP',
    'JavaScript',
    'MySQL',
    'Git',
  ],
  education: [
    {
      institution: 'SMPN 2 DAWUAN',
      degree: 'Junior High School',
      from: '2016',
      to: '2019',
    },
    {
      institution: 'SMKN 1 Panyingkiran',
      degree: 'Vocational High School',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'STKIP YASIKA',
      degree: 'Bachelor of Mathematic Eductaion',
      from: '2022',
      to: 'now',
    }
  ],
  experiences: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn',
    // limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-7YTK94B3WJ', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
