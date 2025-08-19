import UsersList from "./components/UserList";
import { users } from "../data/mocs";

export default function UsersPage(){
            
    return (
        <div className="container">            
            <UsersList users={users} />            
        </div>
    );
}