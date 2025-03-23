import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem"; 
import s from "./FriendList.module.css"; 


const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.ListCardUsers)}>
      {friends.map((friend) => (
        <li key={friend.id} className={clsx(s.FriendListItem)}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
