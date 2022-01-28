# Release Notes #
### Version 1.2.0 - Jan 27, 2022
**New Features**

- *Redirect Support* Archivist can now redirect chapter, fic, user, and series embeds to specific channels chosen by server owners or roles with `Manage Server` permissions.
- `$redirect` command (with lots of subcommands) added to support selection and update of channels and clearing those selections. Please see [Redirect](/docs/Commands/redirect) for more information.

**Fixes & Improvements**

- Found a way to have Archivist stop responding to links which lead to filtered lists of works (i.e. from a collection or user's work list)
- Updated links in commands to privacy policy to reflect new website.
- Updated links in commands to invite bot to server to reflect new invite link with updated permissions requests.

**Technical Stuff**

- Sharding added to help support bot's growth as it peaks over 1200 servers!
- Database updated to support new redirect command.

---

### Version 1.1.7 -  Nov 7, 2021 ###
**New Features**

- `$about` command added to display importan links and information about the bot.

**Fixes**

- various fixes deployed to squash bugs.

**Technical Stuff**

- bot moved to a new host.

---

### Version 1.1.4 -  Oct 21, 2021 ###
**Fixes**

- Squashed a bug that was created when multilink support was added: wrapping your links in `< >` to suppress the Discord embed should be functional again!

---

### Version 1.1.3 - Aug 10, 2021 ###
**Fixes & Improvements**

- Tracked down and squashed a bug causing Archivist to respond to non-AO3 links under certain circumstances.
- Archivist now responds to more than one AO3 fic or series link in a message and produces an embed for each one.

---

### Version 1.1.2 - Aug 4, 2021 ###
**Fixes**

- Correction to the chapter embed so that chapter summary would display instead of work summary.

---

### Version 1.1.1 - July 30, 2021 ###
**Fixes & Improvements**

- Added an error message for if the series or work does not exist.
- Added support to fic and chapter embeds for multiple series.
- Added support for a separator for the thousands place on word count (i.e. , or .). You can also use a space. Please see the commands page for more details.

---

### Version 1.1 - July 14, 2021 ###
**New Features**
- *CHAPTER SUPPORT IS HERE!* A new command has been added with an abbreviated embed for chapter updates.
- New settings added for chapter support to customize bot behavior.
- Added a setting to turn off image previews.
- Added a download command which links to the AO3 downloads for a fic. (may be temporary based on community feedback) 
- Support command added with info on how to support the bot.

**Fixes & Improvements**

- Identified an issue in the API which caused some works to fail due to AO3 image tag issues. API has been updated and a fix is in place just in case.
- Added controls for tags, ships, and character info of a length that would break the embed.
- Visual improvements: tags, ships and character info will now end at the last whole word instead of cutting off in the middle of a word; updated the ratings to icons which match AO3s, series in fic embeds is now linked.

**Technical Stuff**

- Database updated to support new settings.
- Deployed a new method for determining the work which should reduce some errors.

---

### Version 1.0 - May 2021 ###
#### The Rewrite Is Here ####
Version 1.0 is a massive rewrite from the original including new features and backend optimization.

**New Features**

- Per server custom prefix
- Per server custom ignore symbol
- Control over fic embed settings (add or remove various rows, set summary length)
- Filtered help command which only shows the user the commands users can use (members cannot see mod only commands)
- Help command added links to the twitter account and website
- Updated aesthetics for some embeds

**Fixes**

- Works command is back online

**Known Issues**

- User reactions to help command do not autoremove and the menu responds to both react and unreact. The package I used to create the help command will not support autoremove and the command needs to be completely reprogrammed. Since it's more annoying than breaking I decided to release the new features publicly while I tackle looking for another solution.

**Technical Stuff**

- Bot code has been documented and organized. Yay for dev sanity!
- Bot has a new database to support the settings system.
- New, more secure host!