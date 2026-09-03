# GCSEQuest — AQA GCSE Revision Website

This is a clean, responsive static website starter for AQA GCSE Biology, Chemistry, Physics and Mathematics.

## What is included

- Biology 8461 topic/subtopic structure
- Chemistry 8462 topic/subtopic structure
- Physics 8463 topic/subtopic structure
- Mathematics 8300 topic/subtopic structure
- Learn/revision checklist pages
- Topic tests
- Whole-subject tests
- Mixed GCSE tests
- Test builder: number of questions, timer and difficulty selector
- XP, test count, best score and local progress
- Scoreboard UI
- Responsive design for iPad, iPhone and desktop
- Optional Firebase files for accounts + shared online scores

## Important

The current question bank is a STARTER bank. The topic map is much broader than the supplied questions. To turn this into a complete revision course, expand `questions` and add proper lesson notes/flashcards for each subtopic.

Do not claim it is an official AQA website. It is an independent revision tool based on the AQA course structure. Check your school's current specification.

## Put it on GitHub Pages

### Easiest method — GitHub website

1. Sign in to GitHub.
2. Create a new repository. A name such as `gcsequest` is fine.
3. Set it to Public if you are using GitHub Free and want GitHub Pages.
4. Open the repository.
5. Choose **Add file → Upload files**.
6. Upload:
   - `index.html`
   - `style.css`
   - `firebase.js`
   - `firebase-config.js`
   - `firestore.rules`
7. Commit the files to `main`.
8. Open **Settings → Pages**.
9. Under **Build and deployment**, choose **Deploy from a branch**.
10. Select `main` and `/ (root)`, then Save.
11. GitHub will give you the Pages URL. Publishing can take a few minutes.

GitHub's official docs explain that Pages can publish directly from a branch and that the source can be the repository root. See:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Updating the site

Whenever you change `index.html` or `style.css`:
1. Upload the changed file to the same repository.
2. Commit the change.
3. GitHub Pages automatically republishes it.

## Make the scoreboard genuinely shared

GitHub Pages is static hosting. For real accounts and a shared scoreboard, use Firebase Authentication + Cloud Firestore.

1. Create a Firebase project.
2. Add a Web App.
3. Copy its web config into `firebase-config.js`.
4. Enable Authentication and choose a sign-in provider.
5. Create a Firestore database.
6. Add the rules from `firestore.rules`.
7. The `firebase.js` file contains starter login, logout, score saving and leaderboard functions.

Firebase's official setup docs:
https://firebase.google.com/docs/web/setup
https://firebase.google.com/docs/auth/web/start
https://firebase.google.com/docs/firestore/quickstart

### Security

Do not put passwords, service-account JSON, private API keys or admin credentials into GitHub. The Firebase Web App config is designed to be public; access is controlled by Authentication and Firestore Security Rules.

## Suggested next content expansion

Add a content object for every subtopic:
- `summary`
- `keyFacts`
- `equations`
- `requiredPractical`
- `commonMistakes`
- `flashcards`
- `questions`

Then the same UI can automatically generate complete lesson pages, flashcards and larger tests.


## Interactive + Google update
Every subtopic now has Learn, Diagram, Interactive, Flashcards and Quick Check sections. Google sign-in is wired to Firebase Authentication using the Google provider. Enable Google in Firebase Authentication. Redirect sign-in is used for mobile. Fox Horne is in the footer.
