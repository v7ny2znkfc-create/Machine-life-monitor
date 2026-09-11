Advance fiber. Machine life monitor V1.4
=============================================

What's new
- Admin can Retire a machine instead of deleting it immediately.
- Retired machines are hidden from the active Dashboard and status counts.
- Admin can Restore a retired machine.
- Permanent Delete is available only after a machine has been retired.
- Supabase shared-database mode added.
- Local/GitHub mode remains available when config.js is blank.

Files to upload to GitHub
- index.html
- config.js
- sw.js
- manifest.webmanifest
- machine-data.json
- icon-192.png
- icon-512.png
- apple-touch-icon.png

Supabase setup
1. Create a Supabase project.
2. Open SQL Editor and run database-setup.sql once. It already contains the current V1.3 machine data.
3. In Authentication > Users, create the Admin user (email + password).
4. In Project Settings / API, copy the Project URL and anon/publishable key.
5. Paste them into config.js. NEVER put service_role / secret keys in config.js.
6. Upload the V1.4 files to GitHub Pages.
7. Open the app, press Sync Data, then Admin Login with the Supabase Admin email/password.

Database security model
- Anonymous users: read-only.
- Authenticated users: update the shared machine state.
For this V1.4 setup, only create Supabase Auth accounts for people who should be allowed to edit data.

Fallback mode
If supabaseUrl and supabaseAnonKey are left blank in config.js, the app works in the previous Local/GitHub mode and Admin Login uses the existing PIN.
