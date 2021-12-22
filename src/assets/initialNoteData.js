export const initialNoteData = {
    boards: [
        {
            id: 'board-1',
            lastUpdate: '7/10/2021',
            title: 'Assassination classroom',
            isFavorited: false,
            columnOrder: ['column-2', 'column-3', 'column-1', 'column-4'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    isFavorite: false,
                    title: 'To do column',
                    cardOrder: ['card-3', 'card-2', 'card-1', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Material ui v5',
                            content: 'You should have installed @mui/styles by now. It includes JSS, which duplicate with emotion. Its meant to allow a gradual migration to v5. You should be able to remove the dependency following these steps. ',
                            cover: null
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            cover: 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/05/koro-sensei-naruto-headband-e1621421828692.jpg'
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Carefully when use styles',
                            content: ' should have installed @mui/styles by now. It includes JSS, which duplicate with emotion. Its meant to allow a gradual migration to v5. You should be able to remo',
                            cover: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 4',
                            cover: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'You should NOT use this codemod if you have already defined default variant: "outlined" in the theme.',
                            cover: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 6',
                            cover: null
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 7',
                            cover: 'https://external-preview.redd.it/3eG63cvRhkdp5oRRIrSmBKTHFCLJvJSO_40c2XwTq8c.jpg?width=640&crop=smart&auto=webp&s=43cb988b10cd384bb0012ad02a444afc2b025860'
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-2',
                    isFavorite: false,
                    title: 'To do column 2',
                    cardOrder: ['card-8', 'card-9', 'card-10', 'card-11', 'card-12'],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                            cover: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            cover: null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: '',
                            content: 'Support for non-ref-forwarding class components in the component prop or as immediate children has been dropped. If you were using ',
                            cover: null
                        },
                        {
                            id: 'card-11',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 4',
                            cover: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/01/Featured-Koro-Sensei-Carrying-A-Missle.jpg'
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 5',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-3',
                    isFavorite: true,
                    title: 'To do column 3',
                    cardOrder: ['card-13', 'card-14'],
                    cards: [
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                            cover: 'https://animemotivation.com/wp-content/uploads/2017/05/Koro-Sensei-school-teacher.jpg'
                        },
                        {
                            id: 'card-14',
                            boardId: 'board-3',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-4',
                    boardId: 'board-1',
                    isFavorite: true,
                    title: 'To do column 3',
                    cardOrder: ['card-13', 'card-14'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: ' to allow a gradual migration to v5. You should be able to remove the dependency following these steps. ',
                            cover: null
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            cover: 'https://www.mediascrolls.com/wp-content/uploads/2021/07/Assassination-Classroom-Season-3-770x403.jpeg'
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: ' should ha duplicate with emotion. Its meant to allow a gradual migration to v5. You should be able to remo',
                            cover: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 4',
                            cover: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'You should NOT use this codemod if you have already defined default variant: "outlined" in the theme.',
                            cover: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 6',
                            cover: null
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 7',
                            cover: 'https://external-preview.redd.it/3eG63cvRhkdp5oRRIrSmBKTHFCLJvJSO_40c2XwTq8c.jpg?width=640&crop=smart&auto=webp&s=43cb988b10cd384bb0012ad02a444afc2b025860'
                        }
                    ]
                }
            ]
        },
        {
            id: 'board-2',
            lastUpdate: '5/10/2021',
            title: 'Material UI v5 Material UI v5Material UI v5Material UI v5Material UI v5Material UI v5Material UI v5',
            isFavorited: true,
            columnOrder: ['column-2', 'column-3', 'column-1', 'column-4'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-2',
                    isFavorite: true,
                    title: 'Button',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Button Text',
                            content: 'Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.',
                            cover: null
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Outlined button',
                            content: 'Outlined buttons are medium-emphasis buttons. They contain actions that are important but arent the primary action in an app. Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.',
                            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmaiVmN8eR5hwblt5FCxDOC86YkoVuElQLw&usqp=CAU'
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Sizes',
                            content: 'For larger or smaller buttons, use the size prop.',
                            cover: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 4',
                            cover: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Upload button',
                            cover: 'https://5ly.co/blog/content/images/2021/01/5.png'
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 6',
                            cover: null
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Using MUI\'s breakpoint helpers',
                            cover: 'https://themes-backend.material-ui.com/wp-content/uploads/2019/08/tabler-react.com_-min-e1565617941333.png'
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-2',
                    isFavorite: true,
                    title: 'Text Field',
                    cardOrder: ['card-8', 'card-9', 'card-10', 'card-11', 'card-12'],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Basic TextField',
                            content: 'The TextField wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.',
                            cover: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Form props',
                            content: 'Standard form attributes are supported e.g. required, disabled, type, etc. as well as a helperText which is used to give context about a field\'s input, such as how the input will be used.',
                            cover: null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: '',
                            content: 'Support for non-ref-forwarding class components in the component prop or as immediate children has been dropped. If you were using ',
                            cover: 'https://res.cloudinary.com/practicaldev/image/fetch/s--e8VPb0rs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/txmsevpbeqzmgw240w5i.png'
                        },
                        {
                            id: 'card-11',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Validation',
                            cover: 'https://craftercms.org/static-assets/images/blog/what-is-material-ui-mobile-hero.png'
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Icons',
                            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzJ698J2t1E45tzgK1S9ICd5uc6tZkjP3Og&usqp=CAU'
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-2',
                    isFavorite: true,
                    title: 'Lists',
                    cardOrder: ['card-13', 'card-14'],
                    cards: [
                        {
                            id: 'card-13',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Basic List',
                            content: 'The last item of the previous demo shows how you can render a link',
                            cover: 'https://images.viblo.asia/2780ae4f-94b7-4686-87cf-b56badbb7a03.png'
                        },
                        {
                            id: 'card-14',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Nested List',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-4',
                    boardId: 'board-2',
                    isFavorite: false,
                    title: 'To do column 3',
                    cardOrder: ['card-13', 'card-14'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: ' to allow a gradual migration to v5. You should be able to remove the dependency following these steps. ',
                            cover: null
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            cover: 'https://www.boorje.com/static/4ef36311a8554c3be5ae5c923eacdc8a/4b39a/react-sample-app.png'
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: ' should ha duplicate with emotion. Its meant to allow a gradual migration to v5. You should be able to remo',
                            cover: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Sticky subheader',
                            content: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.',
                            cover: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Inset List Item',
                            content: 'You should NOT use this codemod if you have already defined default variant: "outlined" in the theme.',
                            cover: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Gutterless list',
                            content: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the alignItems="flex-start" prop to align the avatar at the top, following the Material Design guidelines',
                            cover: null
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-2',
                            columnId: 'column-1',
                            title: 'Title of card 7',
                            cover: 'https://img.stackshare.io/stackup/6353771/material-ui-vs-nodejs.png'
                        }
                    ]
                }
            ]
        },
        {
            id: 'board-3',
            lastUpdate: '2/3/2021',
            title: 'Tiền đi chợ',
            isFavorited: false,
            columnOrder: ['column-1', 'column-2'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-3',
                    isFavorite: false,
                    title: 'To do column 3',
                    cardOrder: [],
                    cards: []
                },
                {
                    id: 'column-2',
                    boardId: 'board-3',
                    isFavorite: false,
                    title: 'To do column 3',
                    cardOrder: [],
                    cards: []
                }
            ]
        },
        {
            id: 'board-4',
            lastUpdate: '3/9/2021',
            title: 'Đóng tiền học phí',
            isFavorited: true,
            columnOrder: [],
            columns: []
        },
        {
            id: 'board-5',
            lastUpdate: '15/10/2021',
            title: 'Học NodeJS Express',
            isFavorited: true,
            columnOrder: [],
            columns: []
        },
        {
            id: 'board-6',
            lastUpdate: '12/10/2021',
            title: 'Học Typescript và NextJS',
            isFavorited: true,
            columnOrder: [],
            columns: []
        }
    ]
};