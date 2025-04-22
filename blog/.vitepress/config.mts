import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
  title: "Quentin Maillard",
  description: "Capt'aine web",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  srcDir: './src',
  lang: 'fr',
  locales: {
    root: {
      label: 'French',
      lang: 'fr'
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher sur le site',
            buttonAriaLabel: 'Rechercher'
          },
          modal: {
            noResultsText: 'Aucun résultat trouvé',
            resetButtonTitle: 'Réinitialiser la recherche',
            footer: {
              selectText: 'Sélectionner',
              navigateText: 'Naviguer'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Offres pédagogiques 📖', link: '/offres' },
      { text: 'Jardin (blog) 🪴', link: '/jardin' },
      { text: 'Qui suis-je 💫', link: '/about' }
    ],
    logo: '/logo.png',
    sidebar: {
      '/offres/': [
        {
          text: 'Offres pédagogiques',
          link: '/offres/',
          items: [
            { text: 'Interventions : Compétences transmissibles', link: '/offres/competences' },
            { text: 'Projets : Temps forts', link: '/offres/projets' },
            { text: 'Ingénierie : Création de programmes', link: '/offres/ingenierie' }
          ]
        }
      ],
      // '/jardin/': [
      //   {
      //     text: 'Jardin',
      //     link: "/jardin/",
      //     items: [
      //       { text: 'Fleurs (Sujets)', link: '/jardin/sujets/' },
      //       { text: 'Promenades (Thèmes)', link: '/jardin/themes/' },
      //       { text: 'Ressources', link: '/jardin/ressources/' },
      //     ]
      //   }
      // ]
    },
    docFooter: {
      prev: "Revenir vers",
      next: "Découvrir la suite"
    },
    socialLinks: [
      { icon: 'bluesky', link: 'https://bsky.app/profile/quentinmaillard.bsky.social'},
      { icon: 'github', link: 'https://github.com/QuentinMaillard'}
    ]
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
})
