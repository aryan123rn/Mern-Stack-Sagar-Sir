//! github
// use to keep backup file in a cloud like drive in a server

//! config & setup
//* git -v / git --version
//* git config --global --list
//* git config --global user.name "your name" -> set git global user name
//* git config --global user.email "your email" -> set git global user email
//* git config --global init.defaultBranch "main" -> initialize default branch as main


//! initailize git repository
//* git init => initialize git repo locally (project folder) & to track this repository 
//* git clone <remote_repo_url>


//! connect with remote repository
//* git remote -v -> list remote repositories
//* git remote add origin <repo_url> -> connect local and remote repositories
//* git remote origin => removes remote repo


//! Workflow
//TODO: Working directory [WB] -> Local Repository -> Remote Repository


//! git status
//* git status -> <file_path -> add single file to staging area / stage single file
//* git add <file_path> -> add single file to staging area / stage single file
//* git add . -> add all file to staging area / stage all file
//* git commit -m "<commit_message>" ->
//* git push origin <branch_name> -> push local repo to remote repo

//* Branch
//* git branch -> list all branches
//* git branch <branch_name> -> create new branch
//* git checkout <branch_name> -> switch branch
//* git checkout -b <new_branch_name> -> create new branch + switch
//* git checkout -d <branch_name> -> delete branch locally

// !merging
//* git pull <branch_name>
//* git merge <branch_name>


//! Stash
//* git stash -> store current changes to stash (hiden data)
//* git stash pop -> aply stashed changes to WD (to view hidden data)
//* git status list -> list all stash branch
