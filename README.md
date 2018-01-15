"# App" 


<---Documentation/How to Run the App--->
- Access the gotnext folder in the terminal
- run "npm install" in the terminal
- run "npm run dev" in the terminal
- open a browser and navigate to "localhost:3000" to access the app


<---Git Work FLOW--->
***If you don't already have a feature branch...***
- Ensure that you are in your master branch (git checkout master) (not the no branch)
- git pull --rebase upstream master
- fix any merge conflicts
- git checkout -b newbranchname
- done.

***If you already have a feature branch...***
- Ensure that you are in your master branch (git checkout master) (not the feature branch)
- git pull --rebase upstream master
- fix any merge conflicts
- git checkout feature
- git merge master
- resolve conflicts
- done.

***When you want to make a pull request for a feature branch (when there are no current rebase pending)...***
- git add .
- git commit
- git checkout master
- git merge feature
- resolve merge conflicts (if any)
- git push origin master
- make pull request
- request approval via slack
- wait for approval/rejection

***Upon teammate saying 'I made a pull request', someone approves without making changes***
- EVERYBODY except pull requester must rebase their master branch 
- - and merge with their feature branch if it exists (does not have to be done right away)
- upon acceptance, feel free to delete your feature branch safely
- done.

***Upon pull request change made***
- HiR: changes supposedly only made on Org master
- if true ...
- - follow directions on how to make a rebase to your fork master

***Upon pull request rejection***
- HiR: changes supposedly only made on Org master
- if true ...
- - follow directions on how to make a rebase to your fork master to 'undo' your push (your rejected pull request)