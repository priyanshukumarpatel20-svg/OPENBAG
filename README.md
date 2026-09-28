# OPEN द BAG

A responsive bag store front-end built with plain HTML, CSS and JavaScript, using Firebase Authentication and Firestore for sign-in. Product data is currently static demo data.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Homepage with new arrivals |
| `product.html?id=...` | Product details: MRP, price, discount, Set Your Price, Price History |
| `login.html` | Choose Customer Login or Owner Login |
| `customer.html` | Customer login, create account, forgot password |
| `owner.html` | Owner login, create account, forgot password |
| `firebase-config.js` | Firebase setup, shared by the auth pages |
| `firestore.rules` | Firestore security rules |
| `style.css` | All styles |
| `images/` | Logo and placeholder image |

## Run locally

The auth pages use ES modules, which browsers block when a file is opened by double-clicking. Serve the folder instead:

```
python -m http.server 8000
```

Then open http://localhost:8000/index.html

## Firebase setup

1. Create a project in the Firebase console and register a Web app.
2. Paste your web app config into `firebase-config.js`. These values are public identifiers, not secrets.
3. Authentication → Sign-in method → enable **Email/Password**.
4. Firestore Database → create a database.
5. Firestore Database → Rules → paste the contents of `firestore.rules` → **Publish**. Do not leave the database in test mode.
6. Authentication → Settings → Authorized domains → add the domain you host on (for example `yourname.github.io`). `localhost` is normally there already.

## Data stored

One document per user at `users/{uid}`:

```
uid, name, email, role ("customer" or "owner"), createdAt
```

Passwords are handled only by Firebase Authentication and are never stored by this app.

## Known limitations

- **Owner sign-up is open.** Anyone who visits `owner.html` can create an owner account. The rules stop a role from being changed later, but they cannot tell who is allowed to register as owner. After you create your own owner account, remove the "Create Account" tab from `owner.html`, or move owner creation to the Firebase console.
- There are no dashboard pages yet. After sign-in, both roles land on `index.html`.
- Products, prices and price history are demo data inside `product.html` and `index.html`. They are not in Firestore yet.
- "Set My Price" only shows a confirmation message. It does not save anything.

## Deploy on GitHub Pages

Repo → Settings → Pages → choose the `main` branch → Save. Then add the resulting domain to Firebase Authorized domains (step 6 above).
