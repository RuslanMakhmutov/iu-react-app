import {deleteUserById} from "../store/usersSlice";
import {useDispatch} from "react-redux";
import {memo} from 'react'

const Card = (props) => {
    const {user} = props
    const dispatch = useDispatch()
    const deleteUserByIdHandler = (id) => () => {
        dispatch(deleteUserById({id: id}))
    }
    return (
        <li>
            <h5 style={{margin: '0.5rem 0'}}>
                <img
                    src={`https://ui-avatars.com/api/?size=32&background=random&name=${user.name}`}
                    alt={user.id}
                    width={32}
                    height={32}
                    style={{verticalAlign: "middle", marginRight: '0.5rem'}}
                />
                <span style={{verticalAlign: "middle"}}>{user.name}</span>
            </h5>
            <p style={{margin: 0}}>
                <a
                    style={{color: 'darkred'}}
                    href={`mailto:${user.email}`}
                >{user.email}</a>
            </p>
            <p style={{margin: 0}}>
                <a
                    style={{color: 'navy'}}
                    href={user.website}
                >{user.website}</a>
            </p>
            <button onClick={deleteUserByIdHandler(user.id)}>Удалить</button>
        </li>
    );
}

export default memo(Card);
