# GCSEQuest 2.0 — AQA

Premium cream/white/silver/black GCSE revision hub for AQA Biology, Chemistry, Physics, Maths and AQA Level 2 Further Maths.

## Included
- Year 10 and Year 11 filtered course views (GCSEQuest suggested split; AQA specifications are linear)
- Revision tracker with Revised / Not revised status
- My Revision dashboard with subject progress, XP and test stats
- Google sign-in through Firebase Authentication
- Firebase-synced progress and personalisation
- Profile personalisation: themes, fonts, light/dark/auto, density, animations, default year
- Browser-generated optional study ambience and volume control
- Tests and scoreboard
- Official AQA past-paper finder links
- Feedback email: 25HorneF@lancing.org.uk
- Fox Horne footer branding

## GitHub Pages
Upload the files in this folder to the root of the `gcsequest` repository. Do not upload the ZIP itself.

## Firebase
`firebase-config.js` is already configured for the Firebase web app used by GCSEQuest. Enable Google under Firebase Authentication and keep `foxhorne-coder.github.io` in Authorized domains.

The Firestore rules allow each signed-in user to read their own user document data and create/update it only when the document is being written by that user. Deploy the rules from `firestore.rules` if your project requires them.

## Note on past papers
GCSEQuest links to AQA's official past-paper resources instead of copying AQA exam PDFs onto the site.
