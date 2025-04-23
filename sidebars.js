const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '¿Que es el inspector?',  // Icono + nombre intrigante
      className: 'sidebar-icon-intro',
    },
    {
      type: 'category',
      label: 'Herramientas', // Nombre principal (categoría padre)
      className: 'sidebar-icon-basics',
      items: [
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-document',
          label: 'Elements', // Nuevo nombre en español
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-page',
          label: 'Console', 
        },
        {
          type: 'doc',
          id: 'tutorial-basics/create-a-blog-post',
          label: 'Sources',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/deploy-your-site',
          label: 'Network',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/congratulations',
          label: 'Perfomance',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/memory',
          label: 'Memory',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/application',
          label: 'Application',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/Privacy-and-security',
          label: 'Privacy and security',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/Lighthouse',
          label: 'Lighthouse',
        },
        {
          type: 'doc',
          id: 'tutorial-basics/Recorder',
          label: 'Recorder',
        },
      ]
    },
  ],
};

export default sidebars;
