import { Avatar } from '@mui/material';
import './Profile.css';
const Profile = () => {
  return (
    <section className="profile">
       <Avatar
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf0Wx4wmsKfLYsiLdBx6H4D8bwQBurWhx5g&s"
       alt="AV"
       className="profile-image"
       />
       <div className="profile-info">
        <h2 className="profile-name">Jad Davis</h2>
        <p className="profile-bio">
        Full Stack Developer | Passionate about building modern web applications.
        </p>
       </div>
    </section>
  )
}

export default Profile