---
title: 'How I "live" in the terminal and why you should too'
date: 2022-11-15
---

When i first started using Linux, Most of the tools I used were GUI based
(Graphical User Interface). But the idea of linux is about owning your os and
your computer, to do so, you have to understand it.

### Why "live" in a ascii textbox
The terminal is an interface for your system. It usually manages it by
interpreting a shell (like bash or zsh) to execute programs or moving files
around.

By choosing the terminal to work, you have one less level between you and your
computer. A gui is more code, which mean more performance overhead. But today's
CPU and GPU are powerful enough an well optimized for these tools and the
simplicity of use of these gui seems to be worth it.

To me the true gain of using the terminal is the knowledge that it brings you.
When you are editing a file, you know what executable is runned because you
explicitly named it inside your prompt, sometime you even know where it is 
(if you dont, i recommand using the which command: **which mkdir** for example).
You feel like you own your system more as you undersand it more.

The other nice feature that CLI (Command Line Interface) software brings you is
that most of them are well designed. By well designed I mean that open source is
a norm and tools that should be expected are mostly present. For example, to
make a tool easily reproducible, a config file is a must and is almost always
present in CLI software (I have yet to see a CLI tool that does not use one).

### The tools for the job
To really understand that last part, I should elaborate with a few example. To
"live" in an environment, you have to determine your needs. To me, I need to be
able to edit and consult content, both locally and on the internet.

#### Editing files
To edit the locations of files or edit there content, multiple options are
available. To edit files, you can use linux builtins commands (**nano** if you
dont want to change your habits too much, or **vim** if you want a
[more adapted experience](/posts/useVimMotionRightNow/)).

To move around the
file tree, you also could use linux builtin, but if you want a more
user-friendly interface, there are TUI (Terminal User Interface) solutions
([ranger](https://en.wikipedia.org/wiki/Ranger_(file_manager))
is a good solution but [nnn](https://en.wikipedia.org/wiki/Nnn_(file_manager))
is more ressource-friendly and performant as it is written in C
(against python) for ranger).

#### Consult content
The good thing about terminal software is that it mostly uses technologies that
have endured the tests of time. Even if Corporations dont wish for these to be
used (try to get a youtube channel rss feed and find out) You still can use
them as they are the basis of our network infrastructures.

If you simply want to brows the world wide web, they are CLI browsers like
[lynx](https://en.wikipedia.org/wiki/Lynx_(web_browser)) or
[w3m](https://en.wikipedia.org/wiki/W3m) but they wont support javascript. You
might want to stay in touch with the world another way.

The tool that worked for me is [newsboat](https://newsboat.org/), a RSS feed
manager. It is a highly configurable way to follow people, blog or channels
using rss (that means no account and very limited tracking), you can pair it
with [mpv](https://mpv.io/) a light video client linked to
[youtube-dl](https://youtube-dl.org/) to stream online video content.
You could even listen to radio using
[mplayer](https://en.wikipedia.org/wiki/MPlayer).

### Where to get started
All this can be overwhelming, here are a few tutorials to get you started:
- bash linux shell commands:
[geekforgeeks tutorial](https://www.geeksforgeeks.org/basic-shell-commands-in-linux/)
- newsboat configuration:
	- [managing and styling content](https://wiki.archlinux.org/title/Newsboat)
	- [newsboat with mpv macro](https://newsboat.org/releases/2.28/docs/newsboat.html#_streaming_audio_content_with_a_media_player)
	- [cool config](https://viniciusmuller.github.io/blog/Workflow/newsboat_plus_mpv.html)

### Is it really possible ?
I used quotes aroung living this whole time because I dont. The web browsing
experience, although ressource-friendly (basic styling, just text) does not
provide access to a lot of pages using a javascript framework.

The system management side is also difficult. whereas you can easily use
[htop](https://htop.dev/) to monitor your system process or
[bluetoothctl](https://linuxcommandlibrary.com/man/bluetoothctl) for bluetooth,
it is to me counter intuitive to not use a slider or the mouse wheel to manage
sound.

Sadly, as of right now, the terminal is not always the good tool for the job.
