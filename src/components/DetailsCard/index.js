import React from "react";
import { GiConqueror, GiMugShot, GiPlayerNext, GiPlayerPrevious } from "react-icons/gi";
import { RiGitRepositoryFill } from "react-icons/ri"
import "./index.css"

export const DetailsCard = ({user}) => {

   const renderCard = () => {
      if (user.login){
         return(
            <div id="card-wrapper">
               <img src={user.avatar_url}/>
               <div id="card">
                  <h3><GiConqueror /> {user.name}'s GitHub Stats</h3>
                  <p><GiMugShot/> {user.bio}</p>
                  <p><RiGitRepositoryFill/> Total repos: <span>{user.public_repos}</span></p>
                  <p><GiPlayerPrevious/> Followers: <span>{user.followers}</span></p>
                  <p><GiPlayerNext/> Following: <span>{user.following}</span></p>
                  <a href={user.html_url}><button>GitHub</button></a>
               </div>
            </div>)
      }else {
         return( <div id="not-found-wrapper"><h1 id="not-found">User not found</h1></div>)
      }
   }

   return(
      <div>
         {renderCard()}
      </div>
   );
};
