import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bitAvatar from '../assets/images/bitMoji/mainAvatar.png'
import avatar from '../assets/images/me.jpeg'
import brand1 from '../assets/images/brands/brand-1.png';
import brand2 from '../assets/images/brands/brand-2.png';
import brand3 from '../assets/images/brands/brand-3.png';
import booking from '../assets/images/projects/booking.avif'
import cartopia from '../assets/images/projects/cartopia.avif'
import djPapi from '../assets/images/projects/djPapi.avif'
import foodie from '../assets/images/projects/foodie.avif'
import movieHub from '../assets/images/projects/movieHub.avif'
import packdApp from '../assets/images/projects/packdApp.avif'
import salon from '../assets/images/projects/salon.avif'
import weConnect from '../assets/images/projects/we-connect.avif'
import simpleBurger from '../assets/images/projects/simpleBurger.jpeg'
import simpleton from '../assets/images/projects/simpleton.jpeg'
import pageNotFound from '../assets/images/errors/pageNotFound.png'

export const useDataCustomHook = () => {
    const {t} = useTranslation();

    const data = {
        banner: {
            header: t('bannerHeader'),
            subHeader: [
                t('subHeaderText1'),
                t('subHeaderText2'),
                t('subHeaderText3'),
                t('subHeaderText4'),
                t('subHeaderText5'),
            ],
            avatar: bitAvatar,
            buttonText: t('bannerButton')
        },
        sidebar: {
            name: 'DANIEL TAMUNOTONYE',
            avatar: avatar,
            country: t('country'),
            city: t('location'),
            location: [
                {
                    type: t('residence'),
                    place: t('country')
                }, 
                {
                    type: t('city'),
                    place: t('location')
                }
            ],
            profession: [t('fullStack'), t('uiuxDeveloper')],
            skillsSet: [
                {
                    name: 'Javascript',
                    icon: <FontAwesomeIcon icon={['fab', 'js']} />,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'JQuery',
                    icon: <i className="devicon-jquery-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'Sass',
                    icon: <FontAwesomeIcon icon={['fab', 'sass']} />,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'React',
                    icon: <FontAwesomeIcon icon={['fab', 'react']} />,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'Redux',
                    icon: <i className="devicon-redux-original"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'NodeJs',
                    icon: <FontAwesomeIcon icon={['fab', 'node-js']} />,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'MongoDb',
                    icon: <i className="devicon-mongodb-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'MySql',
                    icon: <i className="devicon-mysql-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'Python 3',
                    icon: <FontAwesomeIcon icon={['fab', 'python']} />,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'Django',
                    icon: <i className="devicon-django-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'Asp.Net',
                    icon: <i className="devicon-dotnetcore-plain"></i>,
                    isInProgress: true,
                    percentage: 70
                },
                {
                    name: 'Azure',
                    icon: <i className="devicon-azure-plain"></i>,
                    isInProgress: true,
                    percentage: 90
                },
                {
                    name: 'AWS',
                    icon: <i className="devicon-amazonwebservices-original"></i>,
                    isInProgress: true,
                    percentage: 20
                },
                {
                    name: 'C#',
                    icon: <i className="devicon-csharp-plain"></i>,
                    isInProgress: true,
                    percentage: 70
                },
                {
                    name: 'Git',
                    icon: <FontAwesomeIcon icon={['fab', 'git-alt']} />,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'Webpack',
                    icon: <i className="devicon-webpack-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'TypeScript',
                    icon: <i className="devicon-typescript-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'StoryBook',
                    icon: <i className="devicon-storybook-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                
            ],
            connections:[
                {
                    name: 'github',
                    link: 'https://github.com/thurnye',
                    icon: <FontAwesomeIcon icon={['fab', 'github']} />
    
                },
                {
                    name: 'mail',
                    link: 'mailto:danthurnye@gmail.com',
                    icon: <FontAwesomeIcon icon={['fas', 'envelope']} />
    
                },
                {
                    name: 'linkedIn',
                    link: 'https://www.linkedin.com/in/danieltonyegudi/',
                    icon: <FontAwesomeIcon icon={['fab', 'linkedin']} />
    
                },
                {
                    name: 'twitter',
                    link: 'https://twitter.com/THURNYE',
                    icon: <FontAwesomeIcon icon={['fab', 'twitter']} />
    
                },
                {
                    name: 'download',
                    link: 'https://1drv.ms/w/s!Aup-os93NevNhAyHgS-mrrRHDH74?e=lnirPT',
                    icon: <FontAwesomeIcon icon={['fas', 'download']} />
    
                }
            ],
            
        },
        homePage:{
            services: [
                {
                  "title" : t('webDev'),
                  "description": t('webDev_Desc')
                },
                {
                  "title" : t('uiuxDesign'),
                  "description": t('uiuxDesign_Desc')
                },
                {
                  "title" : t('GameDesign'),
                  "description": t('GameDesign_Desc')
                },
                {
                  "title" : t('soundMix'),
                  "description": t('soundMix_Desc')
                },
                {
                  "title" : t('Advertising'),
                  "description": t('Advertising_Desc')
                },
            ],
            experiences: [
                {
                  name: t('year_experience'),
                  suffix: '+',
                  number: new Date().getFullYear() - 2019
                },
                {
                  name: t('completed_projects'),
                  suffix: '+',
                  number: 10
                },
                {
                  name: t('happy_clients'),
                  suffix: '+',
                  number: 30
                },
                {
                  name: t('awards'),
                  suffix: '+',
                  number: 4
                },
            ],
            recommendations: [
                {
                  name: 'Paul Trueman',
                  avatar: '',
                  profession: 'Software Developer',
                  notes: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi eaque vel similique laboriosam! Voluptas, tempore assumenda fugit nihil, aut dignissimos quod nostrum nulla velit veritatis dolorum. Animi, asperiores vitae maxime mollitia, repellendus beatae in a ut quasi .',
                  stars: 5
                },
                {
                  name: 'Paul Trueman',
                  avatar: '',
                  profession: 'Software Developer',
                  notes: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi eaque vel similique laboriosam! Voluptas, tempore assumenda fugit nihil, aut dignissimos quod nostrum nulla velit veritatis dolorum. Animi, asperiores vitae maxime mollitia, repellendus beatae in a ut quasi .',
                  stars: 5
                },
                {
                  name: 'Paul Trueman',
                  avatar: '',
                  profession: 'Software Developer',
                  notes: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi eaque vel similique laboriosam! Voluptas, tempore assumenda fugit nihil, aut dignissimos quod nostrum nulla velit veritatis dolorum. Animi, asperiores vitae maxime mollitia, repellendus beatae in a ut quasi .',
                  stars: 5
                },
            ],
            brands : [
              {
                name: 'brand1',
                brand: brand1
              },
              {
                name: 'brand2',
                brand: brand2
              },
              {
                name: 'brand3',
                brand: brand3
              },
              {
                name: 'brand4',
                brand: brand3
              }
            ]

        },
        contactPage : {
            header: t('contact_information'),
            formHeader: t('get_in_touch'),
            info:[
                
                {
                  name: 'Socials',
                  data: [
                    {
                      name: t('email'),
                      isLink: false,
                      value: 'danthurnye@gmail.com'
                    },
                    {
                      name: t('linkedIn'),
                      isLink: true,
                      value: 'https://www.linkedin.com/in/danieltonyegudi/'
                    }
                  ]
                },
                {
                  name: 'Telephone',
                  data: [
                    {
                      name: t('support'),
                      isLink: false,
                      value: 'danthurnye@gmail.com'
                    },
                    {
                      name: t('phone'),
                      isLink: false,
                      value: '+1(416)-843-6683'
                    }
                  ]
                }
            ],
            fields: {
                name : t('name'),
                isNameRequired: t('name_required'),
                email: t('email'),
                isEmailRequired: t('email_required'),
                message: t('message'),
                isMessageRequired: t('message_required'),
                buttonText: t('contact_field_buttonText')
            }
            

        },
        projectPage: {
            header: t('portfolio_header'),
            filters:[
                {
                  name: t('portfolio_filter_all'),
                  label: 'all',
                  layouts: [
                    {
                      label: t('portfolio_layout_gallery'),
                      name: 'Gallery'
                  },
                    ]
                },
                {
                  name: t('portfolio_filter_webDesign'),
                  label: 'web',
                  layouts: [
                    {
                        label: t('portfolio_layout_column'),
                        name: 'Column'
                    },
                    {
                        label: t('portfolio_layout_thumbnail'),
                        name: 'Thumbnail'
                    }
                    ]
                },
                {
                    name: t('portfolio_filter_uiElement'),
                    label: 'ui',
                    layouts: [
                        {
                          label: t('portfolio_layout_grid'),
                          name: 'Grid'
                      },
                        {
                            label: t('portfolio_layout_masonry'),
                            name: 'Masonry'
                        }
                    ],
                },
                {
                  name: t('portfolio_filter_photo'),
                  layouts: [
                    {
                      label: t('portfolio_layout_masonry'),
                      name: 'Masonry'
                      }, 
                    {
                      label: t('portfolio_layout_column'),
                      name: 'Column'
                    }
                  ],
                  label: 'photo'
                }
            ],
            defaultFilter: {
                name: t('portfolio_filter_all'),
                layouts: 
                {
                  label: t('portfolio_layout_gallery'),
                  name: 'Gallery'
              },
                label: 'all'
            },
            projectList: [
              {
                // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                // img: 'https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: cartopia,
                title: 'Cartopia',
                author: '@rollelflex_graphy726',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/Cartopia',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                // img: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: foodie,
                title: 'Foodie',
                author: '@helloimnik',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/foodie',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                img: simpleton,
                title: 'Simpleton',
                author: '@tjdragotta',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/Simpleton',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                // img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: booking,
                title: 'Hotel Booking',
                author: '@bkristastucchio',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/Beach-Resort',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                
                // img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                // img: 'https://images.unsplash.com/photo-1543501527-49e855165f73?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: weConnect,
                title: 'We-Connect',
                author: '@katie_wasserman',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/WebCon',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                // img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: djPapi,
                title: 'DJPapi',
                author: '@silverdalex',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/DJPAPI',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  'https://callmedjpapi.com/',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                // img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                img: salon,
                title: 'Salon',
                author: '@arwinneil',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/hairdressing',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                // img: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: movieHub,
                title: 'Movie Hub',
                author: '@nolanissac',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/MovieHub',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                // img: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                img: packdApp,
                title: 'Pack App',
                author: '@hjrc33',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/pack-app',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              },
              {
                // img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                img: simpleBurger,
                title: 'Simple Burger Builder',
                author: '@shelleypauls',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
                links: [
                  {
                  name: 'github',
                  path:  'https://github.com/thurnye/Burger-Builder',
                  icon: <FontAwesomeIcon icon={['fab', 'github']} />
                },
                  {
                  name: 'site',
                  path:  '',
                  icon: <FontAwesomeIcon icon={['fas', 'globe']} />
                }
              ],
              }
            ]

        },
        noMatchPage: {
          header: t('unknown_page_header'),
          subHeader: t('unknown_page_sub_header'),
          buttonText: t('home'),
          bgImg : pageNotFound
        },
        navs:[
            { "id": 0, 
            "title": t('home'), 
            "subMenu": false, 
            "path": "home" 
            },
            {
              "id": 1,
              "title": t('projects'),
              "path":"projects",
              "subMenu": [
                {
                  "title": "Projects",
                  "subtitle": "2 Columns",
                  "path": "/projects-2-col"
                },
                {
                  "title": "Projects",
                  "subtitle": "3 Columns",
                  "path": "/projects-3-col"
                }
              ]
            },
            { "id": 2, "title": t('history'), "subMenu": false, "path": "history" },
            { "id": 3, "title": t('about'), "subMenu": false, "path": "about" },
            { "id": 4, "title": t('contact'), "subMenu": false, "path": "contact" }
        ],
        footer: {
           reserve: `${new Date().getFullYear()} ${t('rights')}`,
           email : {
                type: t('email'),
                email: 'danthurnye@gmail.com',
                link: 'mailto:danthurnye@gmail.com'
           }
        },
        
        translations:[
            {
                name: 'english',
                label:'EN'
              },
              {
                name: 'french',
                label:'FR'
              },
        ]
    }
    return data;
}