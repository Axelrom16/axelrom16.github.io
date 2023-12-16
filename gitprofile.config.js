// gitprofile.config.js

const config = {
  github: {
    username: 'axelrom16', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'axelromero16',
    twitter: 'axelrom2',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'romeroaxel16@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1izRGohw2jtLPG-8dvNd0A-EYTMenmdcu/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'PyTorch',
    'TensorFlow', 
    'Generative AI',
    'Data Science',
    'Statistics',
    'SQL',
    'High Performance Computing',
    'Medical Imaging',
    'R',
    'Git',
  ],
  experiences: [
    {
      company: 'High Performance Artificial Intelligence (HPAI) - Barcelona Supercomputing Center (BSC)',
      position: 'Research Assistant at KEMLG (HPAI - BSC - UPC)',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.bsc.es/es/discover-bsc/organisation/scientific-structure/high-performance-artificial-intelligence',
    },
    {
      company: 'Werfen OEM',
      position: 'Systems Development Trainee',
      from: 'November 2021',
      to: 'July 2022',
      companyLink: 'https://www.werfen.com/oem/',
    },
    {
      company: 'IRB Barcelona',
      position: 'Bioinformatics/Biostatistics Trainee',
      from: 'July 2021',
      to: 'September 2021',
      companyLink: 'https://www.irbbarcelona.org/en',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Universitat Poiltècnica de Catalunya (UPC)',
      degree: 'Master"s Degree in Artificial Intelligence',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Universitat Autònoma de Barcelona (UAB)',
      degree: 'Bachelor"s Degree in Applied Statistics',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    /*{
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },*/
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
