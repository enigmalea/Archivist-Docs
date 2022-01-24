---
sidebar_position: 2
---

# Permissions
### Requested Permissions ###
**Last Updated:** 23 Jan 2022

On join, **Archivist** requests permissions that it needs to function *at the time it is added*, as well as permissions for planned or potential features. However, these have changed since the bot was first made public. You should review permissions for the bot regularly, watch the [twitter](https://twitter.com/_ArchivistBot_) for announced changes, or [join the support server](https://discord.gg/FzhC9bVFva) for updated information.

![Requested Permissions](/img/permissions.png)
- **Read Messages:** required for Archivist to view channels.
- **Send Messages:** required for Archivist to be able to send messages in channels.
- **Send Messages in Threads:** required for Archivist to be able to reply to links posted in and [redirect](/docs/Commands/redirect) to threads.
- **Manage Messages:** required for Archivist to delete user messages if that setting is used.
- **Manage Threads:** required for Archivist to be able to unarchive threads which are archived in order to [redirect](/docs/Commands/redirect) to threads.
- **Embed Links:** required for Archivist to be able to post embeds.
- **Add Reactions:** required for Archivist to be able to use paginations on `$help` and `$settings show` commands.
- **Use External Emojis:** required for Archivist to be able to use symbols for ratings in embeds and file types for the `$dl` command.
- **Use Application Commands:** required for the future move to slash commands later in 2022.

### Editing Permissions ###
To update these permissions manually go to `Server Settings 🠖 Roles 🠖 Archivist`. You may also reinvite the bot if you invited the bot prior to the January 2022 release.

We recommend that you do not edit permissions at the channel level in channels where you would like Archivist to have access. Only use this feature to restrict the bot from seeing channels. Please see How to Restrict Archivist's Access.

:::caution

If you choose to reinvite the bot without kicking it, this may result in there being two **Archivist** roles. You can delete the one without the below warning, but this will result in seeing **@deleted-role** showing in messages where you've previously mentioned the role.

![Discord Warning concerning managed roles](/img/warning.png)

:::

:::warning

It may be tempting to kick **Archivist** and reinvite it, but be cautious as this will delete any and all server settings that have been established.

:::