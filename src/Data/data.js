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
                    icon: <i class="devicon-dotnetcore-plain"></i>,
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
                    icon: <i class="devicon-amazonwebservices-original"></i>,
                    isInProgress: true,
                    percentage: 20
                },
                {
                    name: 'C#',
                    icon: <i class="devicon-csharp-plain"></i>,
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
                    icon: <i class="devicon-webpack-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'TypeScript',
                    icon: <i class="devicon-typescript-plain"></i>,
                    isInProgress: false,
                    percentage: 0
                },
                {
                    name: 'StoryBook',
                    icon: <i class="devicon-storybook-plain"></i>,
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
                      value: 'danthurnye@gmail.com'
                    },
                    {
                      name: t('linkedIn'),
                      value: 'https://www.linkedin.com/in/danieltonyegudi/'
                    }
                  ]
                },
                {
                  name: 'Telephone',
                  data: [
                    {
                      name: t('support'),
                      value: 'danthurnye@gmail.com'
                    },
                    {
                      name: t('phone'),
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
                  layouts: [t('portfolio_layout_grid')],
                  label: 'all'
                },
                {
                  name: t('portfolio_filter_webDesign'),
                  layouts: [t('portfolio_layout_column'),t('portfolio_layout_thumbnail')],
                  label: 'web'
                },
                {
                  name: t('portfolio_filter_uiElement'),
                  layouts: [t('portfolio_layout_gallery'), t('portfolio_layout_masonry')],
                  label: 'ui'
                },
                {
                  name: t('portfolio_filter_photo'),
                  layouts: PortfolioLayout(t),
                  label: 'photo'
                }
            ],
            defaultFilter: {
                name: t('portfolio_filter_all'),
                layouts: t('portfolio_layout_grid'),
                label: 'all'
              },

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