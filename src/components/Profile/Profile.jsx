import profilePic from '../../assets/profile_picture.jpg';
import './Profile.css'

export default function Profile() {
  const profileInfo = {
    name: "Dang Minh Nguyen",
    alter: 24,
    ort: "Darmstadt",
    bio: "Ein Informatik Student an der HDa, interssiere mich an FrontEnd und Webentwicklung"
  };

  return (
      <section className="profile">
        <img src={profilePic} alt="Profile" id="profile_image" />
        <div className="profile-info">
          <h2>{profileInfo.name}</h2>
          <p>Age: {profileInfo.alter}</p>
          <p>Location: {profileInfo.ort}</p>
          <p>Bio: {profileInfo.bio}</p>
        </div>
      </section>
    );
}