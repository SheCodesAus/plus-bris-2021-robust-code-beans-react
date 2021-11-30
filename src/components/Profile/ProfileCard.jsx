import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profile, featured }) => {
  const formattedDate = new Date(profile.date_created).toLocaleDateString();

  return (
    
    <div className={featured ? "featured-profile-card" : "profile-card"}>
      <div className="feature-column-a">
        {/* <p>{profile.id}</p> */}
      {featured && (
        <p className="featured-profile-title">Meet {profile.first_name}</p>
      )}
        <img className="profile-photo" src={profile.photo} />
        <h2>{profile.first_name}</h2>
        <p>Gender: {profile.gender}</p>
        <p>Company: {profile.company}</p>
        <p>Role: {profile.role}</p>
        <p>Experience: {profile.experience} years</p>
      </div>
      <div>
        <p>{profile.bio}</p>
        <p>Facts! {profile.facts}</p>
        <p>
          <a href={profile.linkedin}>
            <img className="linkedin-icon"
              src={
                "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
              }
              alt="Linkedinlogo"
            />
          </a>
        </p>
        <p className="posted-text">Posted: {formattedDate}</p>
      </div>
      {/* <p>{profile.status}</p> */}
    </div>
  );
};

export default ProfileCard;
