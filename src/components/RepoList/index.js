import React from "react";

export const RepoList = ({repos}) => {

   let counter = 0;

   const renderRepos = () => repos.map( repo => {
      counter++;
      return(
         <div className="card" key={counter}>
            <h3>Name: {repo.name}</h3>
            <p>Language: {repo.language}</p>
            <a href={repo.html_url}><button>See repo</button></a>
         </div>
      )
   })

   return (
      <>
         {renderRepos()}
      </>
      
   )

   

}
