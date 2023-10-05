---
sidebar_position: 1
---

# 🤖 Cloning Your Repository

First of all, what is a *repository*? In simple terms, it's a place where you keep all your files for project and that also keeps all the versions of your project. Meaning that if you update it but later want to access what it was like a year ago you can! 

![pretty cool](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamtyNGJjaWhjNGp6b3M0dTJrbm02bWRreXF3Nzk0M3VhOXhkb2s2dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OyDFFr0YAkeS3yBVJy/giphy-downsized-large.gif)

That either sounded mad cool or wack, but either way it's important for a personal website as we are going to display our websites using GitHub. 

First order of business, let's make a repository. Remember, **DO NOT USE GITHUB DESKTOP**. Go to GitHub website and log into your account. From there, on the top right corner of the screen look for a plus sign (+). Click that and then click 'New Repository'. Name the repository however you want that makes sense with your project. For instance, something like personal-website. **Make sure there are no spaces in your name**. 

![GitHub Cloning Image](/img/new-pw/githubCloning.png)

Once the repository is made, there should be something in the middle that seems like a link. This is an HTTPS link that you can copy by clicking the copy button at the very right of the bar.

![Git Clone in VSCode](/img/new-pw/gitCloneVSCode.png)

Now, open **Visual Studio Code** and click on the button which says "Clone Git Repository" and put the same link you copied in this menu and press **Clone from GitHub**.

After this, we will perform a **very** important step: set upstream branch on git! Basically, this is saying we're creating a link from this *local* branch on your device to that of the *remote* branch in GitHub. 

To access your terminal: You can click on **View** on the top navbar of the screen, then **terminal** on the dropdown menu. Once we open the terminal, let's make sure we're in Git Bash, to do this we can click on the dropdown symbol and select **Git Bash**. This is going to be at the top right corner of the terminal we just opened.

![Powershell](/img/new-pw/powershell.png)

After clicking that down arrow, and selecting **Git Bash** your terminal should look something like this:

![Git Bash](/img/new-pw/git-bash.png)

Okay from here, we're going to write the following in the terminal:

```
git push --set-upstream origin <branch name>
```

Make sure to delete all of <branch name\> including <\> and put **main**. This should be the name of your branch unless you have created another branch.

Niceee, now you've successfully cloned your repository!


