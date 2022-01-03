<h1 align="center"><a href="https://venturecapitol.de/" target="_blank" noopener>Venture Capitol</a></h1>

Script to add an admin Firebase Custom Claim and view those.

## Installing & Running

### Prerequisites:

- Node v16 or later (check version using `node -v`)

### Installation:

1. Install initial dependencies using `npm i`
2. To get firebase in the backend working, you'll need a firebase service account key. You can either get it yourself following [this](https://firebase.google.com/docs/admin/setup) guide if you have access to the firebase project, or ask in slack for it (It can be the same file you use in the vc-backend or vc-utr-backend)
3. Put the firebase.json file in the root folder

### Running:

You can set an admin Firebase Custom Claim using `npm add-admin <users-uid-here>` and can view that admin Custom Claim using `npm view-claim <users-uid-here>`

## Folder Structure

```
.
├─ *.js             # Source Files
├─ firebase.json    # Your firebase.json file
└─ README.md        # This file :)
```
