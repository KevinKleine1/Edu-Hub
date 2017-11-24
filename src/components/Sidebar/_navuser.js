export default {
  items: [

    {
      title: true,
      name: 'Menü',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Mein Profil',
      url: '/profil',
      icon: 'icon-user',
      children: [
        {
          name: 'Profil anzeigen',
          url: '/profil',
          icon: 'icon-note',

        },
        {
          name: 'Profil ändern',
          url: '/admin',
          icon: 'icon-note',

        },
      ]},

        {
          name: 'Neues Projekt',
          url: '/neuesprojekt',
          icon: 'icon-puzzle',
    
        },
        {
          name: 'Meine Projekte',
          url: '/MyProjects',
          icon: 'icon-folder',
        },
        {
          name: 'Favoriten',
          url: '/Favs',
          icon: 'icon-heart',
      },
      {
          name: 'Entdecken',
          url: '/discover',
          icon: 'icon-compass',
      }     
  ]
};