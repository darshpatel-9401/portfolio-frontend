# What changed in your portfolio

Your design, colors, classes and animations are untouched. Only the data source changed:
instead of reading `src/assets/assets.js`, components now fetch from the Flask API.

New files
- `src/lib/api.js`            backend address (`VITE_API_URL`) + one `api()` helper + `assetUrl()`
- `src/lib/icons.js`          turns an icon name from the CMS (e.g. "FaReact") into the real icon
- `src/hooks/useApi.js`       `const { data, loading, error } = useApi('/skills')`
- `src/context/ContentContext.jsx`  loads /about and /settings once for Navbar, Hero, About, Contact, Footer
- `src/components/LoadState.jsx`    shows Loading / error / empty message
- `.env.example`, `Dockerfile`, `nginx.conf`

Edited files
- `App.jsx`, `pages/Home.jsx`   wrap with ContentProvider, page title from the CMS
- `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `ProjectCard`, `Work`, `Contact`, `Footer`
- `index.css`                   typewriter width now follows the title length (`--chars`)

Retired
- `src/assets/assets.js` is now `assets.old.js.txt`. Its content was copied into MongoDB by the backend `seed.py`.
  The .avif images were copied to the backend `uploads` folder.

Behaviour notes
- "View Demo" / "Code" buttons on a project card only show when a URL is saved in the CMS.
- Social icons in Contact only show for links saved in About (the seed leaves them empty).
- The Contact form now posts to `POST /contact` (saved in MongoDB, emailed if SMTP is set).
