import React from "react";

const Profile = ({name, tag, location, image, stats}) => {
 return (
    <div className={s.card}>
      <div className={s.cardProfile}>
        <img
          src={image}
          alt="User avatar"
          className={s.avatar}
        />
        <p className={s.userName}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
    
      <ul className={s.stats}>
        <li>
          <span className={s.item}>Followers</span>
          <span className={s.total}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.item}>Views</span>
          <span className={s.total}>{stats.views}</span>
        </li>
        <li>
          <span className={s.item}>Likes</span>
          <span className={s.total}>{stats.likes}</span>
        </li>
      </ul>
    </div>
    
 )
}

export default Profile;