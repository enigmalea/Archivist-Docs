---
sidebar_position: 1
---

# Common Issues
#### 1. **Archivist** isn't responding to links. ####
The most common cause for this is a problem with permissions. **Archivist** requires at least the abilities to `Read Messages`, `Send Messages`, and `Embed Links`. Discord has two places for permissions and issues with permissions are easily missed if you don't check both places.

➔ **Under Server Settings** 🠖 Roles 🠖 Archivist
- make sure the above permissions are turned on. These are added automatically if you did not change the requested permissions when you added the bot to your server. A full reasoning for all permissions requested is outlined in [Permissions](./permissions).

➔ **Under Individual Channels**
- If you have private channels this can be an issue. First, check the members list to the right of the chat window (on desktop) to see if **Archivist** is listed as a member who has access to that channel and that it is showing online. If it does not have acccess, go to: `Edit Channel 🠖 Permissions 🠖 Archivist`. You may need to add Archivist to the list if it isn't there. Make sure the above permissions are turned on.

#### 2. **Archivist** isn't responding to commands. ####
- Check permissions. Even with commands, **Archivist** must be able to `Read Messages`, `Send Messages`, and `Embed Links`.

- Check the **Commands** portion of the website to make sure you are formatting the command correctly. Please keep in mind there are spaces between each component of a command.

- Make sure you are using the correct prefix. Although the default is `$` the server owner or a role with `Manage Server` permissions may have changed the prefix.

:::tip

If you don't know your server's prefix, the bot will respond to a mention. You can use `@Archivist prefix show` to see the current prefix.

:::

:::warning

It may be tempting to kick **Archivist** and reinvite it if it isn't responding. Please use this as a last resort, as this will delete any and all server settings that have been established. If you have tried the above and are still having problems, feel free to swing by the [Support Server](https://discord.gg/FzhC9bVFva) so we can help!

:::

#### 3. **Archivist** isn't working in threads. ####
Threads require different permissions than channels. Please double check the following permissions:
- `View Channel` on the **channel the thread is branched from**. A user or bot cannot participate in a thread that comes off of a channel they cannot see.
- `Read Messages` under **Server Settings 🠖 Roles 🠖 Archivist**.
- `Send Messages in Threads` under **Server Settings 🠖 Roles 🠖 Archivist**.
- `Manage Threads` under **Server Settings 🠖 Roles 🠖 Archivist**. (Important for redirecting to a thread which has been archived.)
- `Embed Links` under **Server Settings 🠖 Roles 🠖 Archivist**.

If you have checked all of the above, you may want to double check the last four under the channel as well.