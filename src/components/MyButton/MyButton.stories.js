import {MyButton} from "./MyButton";

export default {
    title: 'My/Button',
    component: MyButton,
    argTypes: {
        type: {
            type: 'string',
            description: 'Тип внешнего вида',
            defaultValue: 'primary',
            control: {
                type: 'radio',
            },
            options: ['primary', 'secondary']
        },
        isDisabled: {
            control: 'boolean',
            description: 'Включен/Выключен',
            defaultValue: false,
        },
        children: {
            type: 'string',
            description: 'Текст кнопки',
            defaultValue: 'Кнопка'
        },
    },
}

const Template = ({children, ...arg}) => <MyButton {...arg}>{children}</MyButton>

export const Default = Template.bind({})

Default.args = {
    type: 'primary',
    children: 'Кнопка'
}