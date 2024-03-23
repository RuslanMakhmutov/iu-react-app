import {MyCard} from "./MyCard";

export default {
    title: 'My/Card',
    component: MyCard,
    argTypes: {
        title: {
            type: 'string',
            description: 'Заголовок карточки',
            defaultValue: 'Разверни меня',
        },
        type: {
            type: 'string',
            description: 'Тип внешнего вида',
            defaultValue: 'primary',
            control: {
                type: 'radio',
            },
            options: ['primary', 'secondary']
        },
        expanded: {
            control: 'boolean',
            description: 'Развернута ли карточка по умолчанию',
            defaultValue: false,
        },
        children: {
            type: 'string',
            description: 'Текст карточки',
            defaultValue: ''
        },
    },
}

const Template = ({children, ...arg}) => <MyCard {...arg}>{children}</MyCard>

export const Primary = Template.bind({})
Primary.args = {
    title: 'Кликни, я и развернусь',
    type: 'primary',
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ut!'
}

export const Secondary = Template.bind({})
Secondary.args = {
    title: 'Я уже развернута, но могу свернуться',
    type: 'secondary',
    expanded: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ut!'
}