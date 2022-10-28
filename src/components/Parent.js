import { Message } from './Message';
import { UserList } from './UserList';

export const Parent = ()=>{
        const great = (childName)=>{
                alert(`HI Parent ${childName}`)
        }
    return (
        <div>
            <h1>Parent comp</h1>
            <div>
            <Message greetHandler={great} />
            <UserList />
            </div>
        </div>
    )
}