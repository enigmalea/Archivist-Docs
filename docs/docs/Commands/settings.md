---
sidebar_position: 5
---

# Settings
### Basics ###
#### `$prefix show` ####
- shows the current prefix for the server.

#### `$ignore show` ####
- shows the current ignore symbol for the server (the symbol which tells the bot not to display an embed for a link). For more info see [Ignore](/docs/intro#ignore).

:::note

All commands below this point are usable by the `Server Owner` or roles with `Manage Server` permissions only.

:::


#### `$prefix set [New_Prefix]` ####
- changes the command prefix for the server (replaces `$` with whatever symbol chosen).

#### `$ignore set [New_Ignore_Symbol]` ####
- changes the ignore symbol prefix for the server.

---

### Viewing Current Settings ###
#### `$settings show` ####
- shows the current embed settings for the server as well as all of the subcommands for `$settings`.

---

### General Settings ###
*This setting impacts all embeds which display a word count.*

#### `$settings num [symbol]` ####
- sets a symbol to use for the thousands separator in word count. The command will accept any symbol (i.e. `,` or `.` or `_`) or alphanumeric character.

:::caution

Be careful when you enter your thousands separator choice. Although it's easy to change if you make a mistake, using **any** alphanumberic character may be confusing.

EX: `5,000 words`, `5.000 words`, and `5 000 words` are all clear and easy to read. Although the command will accept `th` or `100` (or any other letters or numbers) as a thousands place separator seeing `5th000 words` or `5100000 words` would be confusing.

:::

:::tip

To separate using a space (i.e. `5 000 words`), enter `$settings num space`.

:::

---

### Fic Embed Settings ###
#### `$settings img [on/off]` ####
- toggles image previews on/off. default is on.

#### `$settings pub [on/off]` ####
- toggles the published date row on/off.

#### `$settings fan [on/off]` ####
- toggles fandoms on/off.

#### `$settings rel [on/off]` ####
- toggles relationships on/off.

#### `$settings cha [on/off]` ####
- toggles characters on/off.

#### `$settings tag [on/off]` ####
- toggles additional tags on/off.

#### `$settings sum [on/off]` ####
- toggles summary display on/off.

#### `$settings len [#_of_characters]` ####
- sets the length of the summary in characters. **Must be between 20 and 700.** 700 is default. To hide the summary completely, use the command above.

---

### Chapter Embed Settings ###
#### `$settings cpub [on/off]` ####
- toggles the published date row on/off for the chapter embed.

#### `$settings cfan [on/off]` ####
- toggles fandoms on/off for the chapter embed.

#### `$settings crel [on/off]` ####
- toggles relationships on/off for the chapter embed.

#### `$settings ccha [on/off]` ####
- toggles characters on/off for the chapter embed.

#### `$settings ctag [on/off]` ####
- toggles additional tags on/off for the chapter embed.

#### `$settings csum [on/off]` ####
- toggles summary display on/off for the chapter embed.

#### `$settings clen [#_of_characters]` ####
- sets the length of the chapter summary in characters. **Must be between 20 and 700.** 700 is default. To hide summary completely, use the command above.

---

### Deletion Settings ###
*These settings deal with deleting messages or commmands automatically.*

#### `$settings del [on/off]` ####
- tells the bot if you would like it to delete the user's original message containing the link.

:::danger

This will delete the **entire** message containing the AO3 link, which will delete any additional information the user posts. If you would like to suppress the default Discord embed consider instructing members to use `< >` around their link.

:::

#### `$settings dcha [on/off]` ####
- tells the bot if you would like it to delete the chapter command after it's been executed.

#### `$settings chdel [on/off]` ####
- this enforces that users MUST use the `$chapter` command for links which include chapter information. The regular fic embed will no longer work if the link contains chapter information and users will be given an error message which tells them that they must use the `$chapter` command.

#### `$settings derr [on/off]` ####
- autodeletes error messages related to the `$chapter` command if users make mistakes with the command. Helps you keep the channel clean.