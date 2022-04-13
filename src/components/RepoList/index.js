import React from "react";
import './index.css'

export const RepoList = ({repos}) => {

   let counter = 0;

   const renderRepos = () => {
      try{
         return (
            repos.map( repo => {
               counter++;
               const date = repo.created_at.split('T')[0]
               return(
                  <div className="card" key={counter}>
                     <h2 className="title">{repo.name}</h2>
                     <p className="language">Language: {repo.language}</p>
                     <p className="date">Created at: {date}</p>
                     <p className="forks">Forks: {repo.forks}</p>
                     <a href={repo.html_url}><button className="see-repo-bttn">See repo</button></a>
                  </div>)
            } ) )
      } catch(e) {
         console.warn(e.message)
      }
   }

   return (
      <div id="repos-wrapper">
         <h1 id="repos-main-title">REPOSITORIES</h1>
         {renderRepos()}
      </div>
      
   )
}
