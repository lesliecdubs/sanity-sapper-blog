export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ecbd7672396fe64a1c2388d',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-u54rhju2',
                  apiId: '772cc30a-d028-4cd4-a1f9-c10468e372fd'
                },
                {
                  buildHookId: '5ecbd7682396fe44b1c239c1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ara8nzza',
                  apiId: '286e5aa8-c7f4-42d0-ab61-ec790361715d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lesliecdubs/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ara8nzza.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
