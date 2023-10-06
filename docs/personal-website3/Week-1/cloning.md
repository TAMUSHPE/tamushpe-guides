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

After this, we will configure our Git with our GitHub in VSCode.

To access your terminal: You can click on **View** on the top navbar of the screen, then **terminal** on the dropdown menu. Once we open the terminal, let's make sure we're in Powershell. It should say this at the top right of your terminal:

![Powershell](/img/new-pw/powershell.png)

Okay from here, we're going to write either of the following in the terminal:

```
git config –global user.name “YourUserNameOnGithub”
```
```
git config –global user.email “YourEmail”
```

Keep the quotations around your username or email, but make sure to replace each with the respective input. After its written correctly, make sure to press **Enter**.

Niceee, now you've successfully cloned your repository and connected your Git to your GitHub!


