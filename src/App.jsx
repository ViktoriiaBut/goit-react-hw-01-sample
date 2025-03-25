import Profile from "./components/Profile/Profile";
import userData from "./components/Data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./components/Data/friends.json";
import transactions from "./components/Data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
const friends = friendsData; 

const App = () => {
  return (
  <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
     <FriendList friends={friends} /> 
     <TransactionHistory items={transactions.transactions} />
  </>);
  
};

export default App;

