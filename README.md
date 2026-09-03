# GCSEQuest 2.3 — Global Leaderboard + Friends

This version includes:
- Real Firebase global, weekly and subject leaderboards
- Public GCSEQuest profiles with XP, rank, tests and revision progress
- Friend-name search using public display names
- Friend requests and friends list
- No public email addresses
- Google sign-in and cross-device revision progress

## Important for existing accounts
When an existing Google user signs in to this updated version, GCSEQuest automatically creates/updates their public profile in `publicUsers`. This allows another signed-in user to search their display name (for example, `Rod Horne`) and view their public stats.

If an existing account does not appear immediately, have that person sign in once on the updated site and then search again.

## Firebase
Publish the included `firestore.rules` in Firebase Console. The website cannot publish rules automatically.
