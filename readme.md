

# Novel Monkey v3

Vue rewrite of Novel Monkey. Streamlined UI. Faster and much more stable. Novel Monkey v3 focuses on concentrated writing, with visuals, sounds, colors, that help, and tools that help you find what you wrote.

"I think you'd benefit more by shifting your focus away from the Nanowrimo speed writing angle toward being the app that takes the intimidation away from staring at the blank page. If you can get a copy of the first few chapters of Bird by Bird, I think you'll see what I mean. That's the real battle writers have."
https://www.reddit.com/r/nanowrimo/comments/2l67jm/nanowrito_the_speedy_web_app_that_helped_me_write/
u/nanonate https://www.reddit.com/user/nanonate



### Background, Changes, Philosophy

- for producing IDEAS.
- 11 star experience is if it could "hear your thoughts," like writing down thoughts without a screen
  - More difficulty: default is no undo, not a lot of other things
- Remove some of the preset novel/session things. Attach "tags" to every session of writing. Once written, users can go in and edit, remix, duplicate, and delete them.
- Don't go head to head with Novlr. Focus as a mindfulness writing app rather than a full-fledged word processor
- Try to even integrate with Novlr and other writing tools
- Focus on keeping local (firebase? but no sign-in required?)
  - drag and drop your file and save file back to device
  - OR log in to get firebase, syncing and offline access (paid)
- Use Firebase (and its Offline mode) as natural extensions to the Local mode
- Not just writers, but also for academics, note takers, etc, a lighter form of Bear and Evernote


### Design + Dev

- SIMPLIFY from NM2; don't build so much
- Design & build simply. Focus on MVP. 
- Each writing section is a "session," but don't force these into novels 
  - like PhDir internal notes, people can add "Collection" tag (or drag/link) to connect fragments to writing projects (which are collections of fragments; these can be novels, etc.)
- find/render/index #tags and @mentions in the text




### New

- Better workflow
- Email-based no-password sign-in
- Writing modes
- Writing exercises
- Data encryption
- Anonymous user mode (no email sign-in)
  - generated poem keys
- Outline + Remix mode
  - outline sessions, allow moving them around, then expand to read the story
  - idea is that once you've plopped a lot of stuff down, you need to be able to wade through it
  - the linear paper is actually spaced out as a timeline (timeline vs. content vs. content metadata like word count) rather than a text document (which is just content)
- Session Types
  - Free write
  - Timed sessions (you have X minutes to write Y, or just to write)
  - Word per minute sessions (you have X wpm for X minutes)
  - Word limit sessions (you have to write X)
  - Danger Mode — nothing saves until you hit your goal
- https://www.fastcompany.com/90253543/the-most-important-design-tool-youre-not-using



### Planned Features

- Inline #tags and @people/@citations/@whatever
- Grouping and sectioning of content
- Offline mode
- Electron desktop app
- Publication mode
- Live Stream of Consciousness mode
- Writing Games
  - 55phone: you write 55 words, then pass it on and someone else writes 55 words
- Custom color/font/lineheight schemes


### Workflow

- Home > start writing or drag/drop to resume; save or copy to a local file
- Future persistence: login to 
  - connect dropbox?
  - connect firebase?


# Sunsetting v2

Keep the old one around for a few more months, at old.novelmonkey.com



### Inspiration

- [Word Counter](https://wordcounter.io/)
- [Bullet Journal](https://bulletjournal.com/pages/app)
- [Novlr]()
  - Writing Streaks
- [Noisli]()
- [Calm app]()


### Business Model

- Trajectory: bring the best of iA writer, writemonkey and novlr into the cloud
  - Start copying the best, useful features
  - Keep it free as much as you can
  - iA writer has 600,000 purchases at $30 each?! = 18,000,000 holy shit
  - make it 1/10 the cost, and 10x better
  - https://ia.net/writer/blog/ia-writer-5-from-raw-to-cooked-to-sushi
  - Ulysses @ $5/mo is considered expensive (https://www.slant.co/options/6327/alternatives/~ia-writer-alternatives), ppl want a way to use in perpetuity
  - https://caret.io/ 
  - https://writeapp.co/blog/write-is-no-longer-subscription-based
    - $25 for "lifetime"
  - I like the Sketch model of pay every year, but get to keep forever
  - Also, $1/mo works for me — be as good as others and then undercut most of them, since $1/mo vs. $5/mo actually makes very little difference for me if I can't get any customers, and costs are super low anyway
  - https://typora.io/
  - sell skins and themes
  - Bear is very well-done and costs $1.50/mo or $15/yr (wow)
  - Needs to be Bear + ia Writer but Collaborative!!!!!!! (Google Docs)

### Ideas
- Better onboarding: start typing. Your work will be saved automagically. Write something here and press enter.
- Writing Streaks
- Live writing
- Scene change
- Jump start prompt
- get up and walk
- goal setting
- no backspace, mindfulness + calm writing mode
  - cool backgrounds, choice of music, etc, look at the mindfulness app
- daily writing prompts
- Session Intent
  - when starting each writing session, set intent (choose from a couple of modes)
    - (default) flow: like old nanowrimo, just write now, edit later
    - speed writing
    - hard core: completely black screen, can't see what you're writing (except for the next letter)
      - whatever you write is live streamed somewhere else
    - notes (markdown): more like a traditional writing tool but still w/ zen mode and other things
    - journal: bullet-journal style with no undo (like putting words down on paper)
      - daily log (to replace what I've been doing with evernote b/c they're going away)
    - intent setting (tell yourself what you want out of this, 250ch) + turn off features like undo and backspace?, set word goal for the session, or time goal
- what's wattpad? https://www.wattpad.com/ / https://www.quora.com/Why-do-a-lot-of-people-hate-Wattpad
- count most used words
- count wpm
- count # of backspaces used in a session!
- Help card / (?) button / inline help popup module that has all the instructions, hide any time 

### Features

These are things that probably shouldn't be built (as part of MVP), but are fun to think about

- Font-switcher
  - dierent types of serif, sans-serif fonts, or let users side load their own
- Versioning
  - versioning of a section or topic: either preserving old writings or creating alternate ways to say something


### Ambiance

- Noisli or http://horrorli.fps.hu/


### Nano-specific Tools

- Word war
- Word sprints
- Writing prompts
- Ambiance and resource links
- How many days / how many left / how many words should you have written
- 

### Writing Tools

#### 2018 

- https://nanowrimo.org/forums/nano-technology/threads/441252
- iA writer
- Q10
- writemonkey
- Ulysses (ugh)
- sound tools
  - https://asoftmurmur.com/
  - https://harry-potter-sounds.ambient-mixer.com/
  - https://harry-potter-sounds.ambient-mixer.com/storm-on-the-hogwarts-express






# Todo
- Bring color var() and some other systems back to coeur
  - Figure out a better fallback for var()



## Tracked Changes 

### Q4/2018
- Finished working v1 (w/o login)
- Moved everything onto Nuxt 2 + babel7 (lots of system changes)  
  - Added backwards comp to IE11
  - Added a tiny but important change to mutate/update on 'typeof'
  - changed linting 
    - "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  - turned on analyzer



## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
