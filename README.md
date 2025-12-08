# Obsidian Squire Plugin

[![Release Obsidian plugin](https://github.com/choonkending/obsidian-squire/actions/workflows/release.yml/badge.svg)](https://github.com/choonkending/obsidian-squire/actions/workflows/release.yml) ![GitHub Release](https://img.shields.io/github/v/release/choonkending/obsidian-squire)

Your faithful note-taking companion. Automatically provides capability like incremental file naming so you can stay in the flow.

Duplicate your notes from current ones seamlessly with preset rules! 

This plugin adds commands and context menu options to duplicate a note, automatically updating the new note's name using smart logic.

The goal of this plugin is remove friction when creating new notes while adhering to your note-taking identification system. 

## What does this plugin do?

- Adds commands and right-click menu options to duplicate your current note.
- Lets you choose how the new note's name is generated using "title transformers". 

https://github.com/user-attachments/assets/49f91986-7b20-4a31-848e-2bd6bd77bf3a

## Problem

If you use a note-taking system such as [Zettelkasten](https://www.atlassian.com/blog/productivity/zettelkasten-method), you will probably have adopted identification system. 

Creating new notes within this system means they should adhere to your identification system. 

I use a simple numbering system to index my notes.

**Example**

Below is my current folder structure:

```
/Literature_Notes
  - 1 - Biology.md
```

If I have a new note _unrelated_ to Biology, e.g. Physics, then I would _increment_ the number 1.

```
/Literature_Notes
  - 1 - Biology.md
  - 2 - Physics.md
```

If I have a new note under the sphere of Biology, e.g. Anatomy, then I would _nest_, i.e. make it 1.1

```
/Literature_Notes
  - 1 - Biology.md
  - 1.1 - Anatomy.md
```

As the size of your vault increases, copying/pasting and formatting your new note to adhere to your identification system can _get in the way of your actual note taking_.

This plugin aims to remove those barriers just by making your note taking _slightly_ more pleasing. 

## Existing Transformers

> [!TIP]
> Please feel free to contribute/raise an issue for your use case.

### 1. Increment Last Number
- This mode finds the last number in your note's name and increases it by 1.
- If there is no number, it adds ` 1` to the end.

**Examples:**
- `1 - Biology.md` → `2 - .md`
- `100 - Artificial Intelligence` → `101 - .md`

### 2. Nest Last Number
- This mode adds a new number after the last decimal at the end of the note's index, nesting it each time.

**Examples:**
- `1 - Biology.md` → `1.1 - .md`
- `1.1 - Anatomy.md` → `1.1.1 - .md`

## How to use
- Right-click a note in the file explorer and choose a duplication mode.
- Or use the command palette to run a duplication command.
- The new note will appear in the same folder, with the name updated by the selected transformer.

## Customizing content extraction
- In the plugin settings, you can set a regular expression to extract part of the note's content for the duplicate.
- Only the first match will be used in the new note.

## Funding

If you find this plugin useful, just let me know! 

If you have a use case, please look at contributing to help!

## Contributing

I accept Pull Requests, Git Issues and feedback for this plugin.
