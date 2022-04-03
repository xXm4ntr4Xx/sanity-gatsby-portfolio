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
                  buildHookId: '624a0cde4549ff59833c1f15',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2f7qed36',
                  apiId: '61ef7653-15f0-4049-bb38-276dd040c870'
                },
                {
                  buildHookId: '624a0cdf6f4f73050ed8919c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4ehe62au',
                  apiId: '7868a20e-d884-4978-91c9-410cc7bbeb35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xXm4ntr4Xx/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4ehe62au.netlify.app',
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
