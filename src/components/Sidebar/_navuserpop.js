export default {

  // delete this class after database connection
  items: [
    {
      name: 'Mein Profil',
      url: '/profilpop',
      icon: 'icon-user',
      children: [
        {
          name: 'Profil anzeigen',
          url: '/profilpop',
          icon: 'icon-note',

        },
        {
          name: 'Profil ändern',
          url: '/adminpop',
          icon: 'icon-note',

        }

        ]
      },
  ]
};