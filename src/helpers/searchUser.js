import trimText from "./trimText";

const searchUser = (str) => {

  const result = fetch(`https://api.github.com/users/${trimText(str)}`)
    .then((res) => (res.status < 299 ? res.json() : res.statusText))
    .catch((err) => err.message);
    //The sweetness of jason:)))

  return result;
};

export default searchUser;

//Here i trim the string and make the search
