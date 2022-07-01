# Chapter 3: Directories 
Folders, also known as **Directories**, is a space on your computer where you can store **files**, other **folders** (often called subfolders), and other things such as shortcuts.

A **file** can refer to a lot of things, but is a general term for anything that is not in a **folder**. 
- Images 
- PDFs
- Executables
- Text Files 
- Code Files
- etc.

These all have **extensions**, such as: 
- .txt
- .pdf
- .html
- .png 
- .css
- .md
- .html
- .cs
- etc.

---
# Chapter 4: Terminal Interactions

- When typing " cd " you start the name of the directory you want to go into, press **Tab**, and the terminal should auto complete the directory you want to go into
- A single period " . " indicates the current directory
- A double period " .. " indicates the parent directory, or one directory higher

## Windows Termial Cheatsheet

cls - Clears the terminal screen

dir - Stands for directory: Lists all files and directories inside the current director

cd [directory] - Changes directories to the target directory

cd .. - Changes directories to the parent directory (move up/back one directory)

mkdir [directoryName] - Changes a directory with the given name

rmdir [directoryName] - Deletes a directory targeted by the given name

code . = Open VSCode within the terminal

---
# Chapter 5: GIT Basics

Git is a version control software that will help you maintain clarity in changes that happen to software over time. It's predominantly used through the terminal and focuses on different projects called repositories. Each respository will track it's own content and changes

All of the commands below will have variations and will be proceeded by the word **git**
- Status ( **git status** ): will show you more info on what is currently happening, can be used at any time to see the current changes
- Init ( **git init** ): used to initialize a repository, you should only need it once per repository
- Add ( **git add .** ): command used to track changes made inside a git repository and tells the repository to track all changes in the current directory
- Commit ( **git commit -m "Initial Commit"** ): Commits are made after changes are added and trakced, the general flow is that you'll make the changes, add them, and then commit them
    - **-m** : message
- Push / Pull ( **git push** / **git pull** ): Used when working with remote repositories. "Push" commits from you to the remote. "Pull" comits that exist in the remote but not in your local repository. 
