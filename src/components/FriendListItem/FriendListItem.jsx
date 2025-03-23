import clsx from "clsx";
import s from "../FriendListItem/FrienListItem.module.css";

const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
  return (
    <div className={clsx(s.friendListItemsContainer)}>
    <img src={avatar || "https://via.placeholder.com/150"} alt={name} width="48" />
    <p className={clsx(s.FriendListItemsText)}>{name}</p>
    <p className={clsx(
      isOnline && s.isOnlineGreen,
      !isOnline && s.isOfflineRed
    )}>{isOnline ? "Online" : "Offline"}</p>
  
  </div>
  );
}

export default FriendListItem;

