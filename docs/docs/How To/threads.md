---
sidebar_position: 1
---

# Mention Threads
Although threads behave very similarly to channels, Discord does not provide a context pop up to mention them when we type `#` in our text input. However, they can be mentioned and therefore used in commands and specifically, for our [redirect settings](/docs/Commands/redirect). In order to do this we must have the `Thread ID`.

**What is a `Thread ID`?**

In short, the way Discord is programmed every element (user, role, message, channel, thread, etc) is provided a randomly generated ID number. This allows the app to continue working after some bit of information is edited. For example, you can rename a channel and it still keeps working; this is because all references to it on the backend use this random ID.

Because these IDs are essential to interacting with Discord, developers of applications and bots need to have access to them. This is good news for us, because Discord has made them easy to get.

#### 1. If you don't have it on already, **turn on Developer Mode**. ####
- Start by going to `User Settings` &#8594; `Advanced`.
- Tick on the `Developer Mode` toggle.

![Developer Mode](/img/devmode.png)

#### 2. Create a new thread or unarchive a thread you would like to use. ####

#### 3. Right click on the thread, and click on `Copy ID`. ####
![Copy ID](/img/copyid.png)

#### 4. In your text input type `<#`, paste the ID you copied, and then type `>`. Discord should resolve the ID (update it to a thread mention) immediately. ####
![Mention GIF](/img/mention.gif)

#### 5. If you want to, turn off Developer Mode. ###