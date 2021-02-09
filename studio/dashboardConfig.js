export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6022709a50e5c2b34508fa7f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xcwty89y',
                  apiId: '85d5305d-b3fe-4b97-9da7-a2ee4578c491'
                },
                {
                  buildHookId: '6022709b4ccfa6b9874f4413',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-a66b57ks',
                  apiId: '3ed87e97-ee81-4abe-b9f5-a04207a153e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JerryMatera/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-a66b57ks.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
