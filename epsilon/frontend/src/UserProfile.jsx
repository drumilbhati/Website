import './App.css';
import User from './models/user.models';
import Navbar from './Navbar';
import { List } from '@mui/joy';

export default function UserProfile() {
    return (
        <div className="user-profile">
        <List sx={{width:"5%", paddingLeft: 5}}>
            <Navbar/>
        </List>
            <Image src/>
        </div>
    );
}