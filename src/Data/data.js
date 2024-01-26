import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bitAvatar from '../public/images/bitMoji/mainAvatar.png'
import avatar from '../public/images/me.jpeg'
import { PortfolioLayout } from './PortfolioLayout';


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
                    link: 'https://docs.google.com/document/d/1RQxexr20rhBa_ZSb_L6q6FMxIodg-5gW3XMmYM4X0bI/edit?tab=t.0#heading=h.gjdgxs',
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
            brandLogos: [
                '../public/images/brand-1.png',
                '../public/images/brand-2.png',
                '../public/images/brand-3.png',
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
                        label: t('portfolio_layout_grid'),
                        name: 'Grid'
                    }
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
                            label: t('portfolio_layout_gallery'),
                            name: 'Gallery'
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
                        label: t('portfolio_layout_grid'),
                        name: 'Grid'
                    },
                label: 'all'
            },
            projectList: [
                {
                  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                  title: 'Breakfast',
                  author: '@bkristastucchio',
                  featured: true,
                },
                {
                  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                  title: 'Burger',
                  author: '@rollelflex_graphy726',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                  title: 'Camera',
                  author: '@helloimnik',
                },
                {
                  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                  title: 'Coffee',
                  author: '@nolanissac',
                },
                {
                  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                  title: 'Hats',
                  author: '@hjrc33',
                },
                {
                  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                  title: 'Honey',
                  author: '@arwinneil',
                  featured: true,
                },
                {
                  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                  title: 'Basketball',
                  author: '@tjdragotta',
                },
                {
                  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                  title: 'Fern',
                  author: '@katie_wasserman',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                  title: 'Mushrooms',
                  author: '@silverdalex',
                },
                {
                  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                  title: 'Tomato basil',
                  author: '@shelleypauls',
                },
                {
                  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                  title: 'Sea star',
                  author: '@peterlaster',
                },
                {
                  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                  title: 'Bike',
                  author: '@southside_customs',
                },
                {
                    img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-1.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-2.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-3.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-4.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-5.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-6.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-7.jpg",
                    title: "widelife",
                    author: "@me"
                },
                {
                    img: "https://swiperjs.com/demos/images/nature-8.jpg",
                    title: "widelife",
                    author: "@me"
                }
              ],

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