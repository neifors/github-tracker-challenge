import React from "react";
import { IoAccessibilityOutline, IoDocumentTextOutline, IoEllipsisVerticalOutline, IoArrowForwardCircleOutline, IoArrowBackCircleOutline, IoUnlink} from "react-icons/di";

/* Assuming the data it's going to receive will be:
      user = {
         "login": "neifors",
         "id": 11410620,
         "node_id": "MDQ6VXNlcjExNDEwNjIw",
         "avatar_url": "https://avatars.githubusercontent.com/u/11410620?v=4",
         "gravatar_id": "",
         "url": "https://api.github.com/users/neifors",
         "html_url": "https://github.com/neifors",
         "followers_url": "https://api.github.com/users/neifors/followers",
         "following_url": "https://api.github.com/users/neifors/following{/other_user}",
         "gists_url": "https://api.github.com/users/neifors/gists{/gist_id}",
         "starred_url": "https://api.github.com/users/neifors/starred{/owner}{/repo}",
         "subscriptions_url": "https://api.github.com/users/neifors/subscriptions",
         "organizations_url": "https://api.github.com/users/neifors/orgs",
         "repos_url": "https://api.github.com/users/neifors/repos",
         "events_url": "https://api.github.com/users/neifors/events{/privacy}",
         "received_events_url": "https://api.github.com/users/neifors/received_events",
         "type": "User",
         "site_admin": false,
         "name": "Isabel Repetto",
         "company": null,
         "blog": "https://www.linkedin.com/in/isabel-repetto-garcia-plata/",
         "location": "UK",
         "email": null,
         "hireable": null,
         "bio": "My name is Isabel.\r\nEnthusiastic, efficient, hard-working, team worker, organized, selfreliant,\r\nfast and conscientious. I am very creative person.",
         "twitter_username": null,
         "public_repos": 28,
         "public_gists": 0,
         "followers": 4,
         "following": 4,
         "created_at": "2015-03-10T16:13:39Z",
         "updated_at": "2022-02-22T18:10:03Z"
      }
*/

export const DetailsCard = ({user}) => {

   return(
      <div className="card-wrapper">
         <div className="card">
            <IoAccessibilityOutline /> <h3>{user.name}'s GitHub Stats</h3>
            <IoEllipsisVerticalOutline /> <p>{user.bio}</p>
            <IoDocumentTextOutline /> <p>Total repos: <span>{user.public_repos}</span></p>
            <IoArrowForwardCircleOutline /> <p>Followers: <span>{user.followers}</span></p>
            <IoArrowBackCircleOutline /> <p>Following: <span>{user.following}</span></p>
            <a href={user.html_url}><button><IoUnlink /> GitHub</button></a>
         </div>
      </div>
   );
};
