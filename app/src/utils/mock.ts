interface tab {
  url: string;
  title: string;
}

interface group {
  name: string;
  tabs: tab[];
}

interface category {
  name: string;
  groups: group[];
}

const data: category[] = [
  {
    name: 'Education',
    groups: [
      {
        name: 'Coding',
        tabs: [
          {
            url: 'https://leetcode.com/problemset/all/',
            title: 'leetcode',
          },
          {
            url: 'https://www.codechef.com/ide',
            title: 'codechef',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
        ],
      },
      {
        name: 'Tabify-MLH',
        tabs: [
          {
            url: 'chrome://extension',
            title: 'Extensions|Tabify',
          },
          {
            url: 'https://material-ui.com/components/',
            title: 'Material-UI',
          },
          {
            url: 'https://dev.to/bayardlouis470/create-chrome-extension-in-react-3pna',
            title:
              'React Chrome Extension: Create Chrome Extension in React - DEV Community',
          },
        ],
      },
      {
        name: 'Portfolio-MLH',
        tabs: [
          {
            url: 'https://css-tricks.com/',
            title: 'CSS-Trics',
          },
          {
            url: 'https://www.railstutorial.org/book',
            title: 'Ruby on Rails Tutorial |  Learn Enough to Be Dangerous',
          },
        ],
      },
    ],
  },
  {
    name: 'Entertainment',
    groups: [
      {
        name: 'Coding',
        tabs: [
          {
            url: 'https://leetcode.com/problemset/all/',
            title: 'leetcode',
          },
          {
            url: 'https://www.codechef.com/ide',
            title: 'codechef',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
        ],
      },
      {
        name: 'Tabify-MLH',
        tabs: [
          {
            url: 'chrome://extension',
            title: 'Extensions|Tabify',
          },
          {
            url: 'https://material-ui.com/components/',
            title: 'Material-UI',
          },
          {
            url: 'https://dev.to/bayardlouis470/create-chrome-extension-in-react-3pna',
            title:
              'React Chrome Extension: Create Chrome Extension in React - DEV Community',
          },
        ],
      },
      {
        name: 'Portfolio-MLH',
        tabs: [
          {
            url: 'https://css-tricks.com/',
            title: 'CSS-Trics',
          },
          {
            url: 'https://www.railstutorial.org/book',
            title: 'Ruby on Rails Tutorial |  Learn Enough to Be Dangerous',
          },
        ],
      },
    ],
  },
  {
    name: 'Foodie',
    groups: [
      {
        name: 'Coding',
        tabs: [
          {
            url: 'https://leetcode.com/problemset/all/',
            title: 'leetcode',
          },
          {
            url: 'https://www.codechef.com/ide',
            title: 'codechef',
          },
          {
            url: 'https://practice.geeksforgeeks.org/',
            title:
              'Practice | GeeksforGeeks | A computer science portal for geeks',
          },
        ],
      },
      {
        name: 'Tabify-MLH',
        tabs: [
          {
            url: 'chrome://extension',
            title: 'Extensions|Tabify',
          },
          {
            url: 'https://material-ui.com/components/',
            title: 'Material-UI',
          },
          {
            url: 'https://dev.to/bayardlouis470/create-chrome-extension-in-react-3pna',
            title:
              'React Chrome Extension: Create Chrome Extension in React - DEV Community',
          },
        ],
      },
      {
        name: 'Portfolio-MLH',
        tabs: [
          {
            url: 'https://css-tricks.com/',
            title: 'CSS-Trics',
          },
          {
            url: 'https://www.railstutorial.org/book',
            title: 'Ruby on Rails Tutorial |  Learn Enough to Be Dangerous',
          },
        ],
      },
    ],
  },
];

export default data;
