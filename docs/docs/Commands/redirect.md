---
sidebar_position: 4
---

# Redirect

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import tabs from './tabs.module.css';

*Archivist is capable of redirecting AO3 fic, chapter, series, and user embeds from the channel/thread the user posted the link in to a channel/thread specified by the server owner or roles with* `Manage Server` *permissions.* 

*The below commands will establish the channels or threads for Archivist to redirect to. **You do not** need to use these commands or change anything if you do not want Archivist to redirect embeds.*

:::caution

Archivist must have permissions to **Read Messages** in the channel the link is posted and permissions to **Send Messages** or **Send Messages in Thread** in the redirect channel. For threads, Archivist will also need the **Manage Thread** permission to unarchive a thread that has been archived and post the embed. Please be sure you pay attention to permissions when using this feature.

:::

---

### Setting or Updating Redirects ###

:::tip Tips

<Tabs>
  <TabItem value="channels" label="Channels" attributes={{className: tabs.tablabel}}>We recommend <strong>mentioning</strong> your channel when you use this command. This will help avoid potentional errors with similarly named channels or in case you rename your channel later.</TabItem>
  <TabItem value="threads" label="Threads" attributes={{className: tabs.tablabel}}>In order to use a thread, the thread must be created and unarchived. If the thread is archived, Archivist will not accept the input and will not respond.<br /><br />To mention threads, you will need to use the ID. Please see <a href="/docs/How%20To/threads">How To &#8594; Mention Threads</a> for more info.</TabItem>
</Tabs>

:::

#### `$redirect all [channel/thread]` ####
- sets channel/thread to redirect to for fic, chapter, series, and user embeds.

#### `$redirect fic [channel/thread]` ####
- sets channel/thread to redirect to for fic embeds only.

#### `$redirect ch [channel/thread]` ####
- sets channel/thread to redirect to for chapter embeds only.

#### `$redirect ser [channel/thread]` ####
- sets channel/thread to redirect to for series embeds only.

#### `$redirect user [channel/thread]` ####
- sets channel/thread to redirect to for user embeds only.

:::note

Commands for all individual embeds (fic, chapter, series and user) will ask if you'd like to use this channel for all redirects. Responding **yes** will update all redirects, responding **no** will mean *only* the individual embed redirect was updated.

:::

---

### Clearing Redirects ###
#### `$redirect allclear` ####
- removes all redirects for fic, chapter, series, and user embeds, restoring Archivist back to the default setting.

#### `$redirect ficclear` ####
- removes redirect for fic embeds only.

#### `$redirect chclear` ####
- removes redirect for chapter embeds only.

#### `$redirect serclear` ####
- removes redirect for series embeds only.

#### `$redirect userclear` ####
- removes redirect for user embeds only.

---

### Viewing Current Redirects ###
#### `$redirect show` ####
- shows settings for all redirects.