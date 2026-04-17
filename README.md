# Web Development Project 7 - Crewmates App

Submitted by: **Mim Dey**

This web app: **A React-based CRUD application that allows users to create, view, update, and delete crewmates. Each crewmate has attributes such as name, speed, color, and role. The app uses Supabase as a backend database and React Router for navigation between pages.**

Time spent: **8 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes (speed, color, role)

- [x] **The web app includes a summary page of all the user’s added crewmates**
  - The web app contains a summary page displaying all created crewmates
  - Newly created crewmates appear dynamically after insertion

- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button
  - Users can see current attributes in the edit form
  - Updates are reflected immediately after submission

- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Users can delete a crewmate from the edit page
  - Deleted crewmates are removed from the summary page

- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - Clicking a crewmate name navigates to a detail page
  - The detail page shows more information
  - Users can navigate to edit from the detail page

---

## Optional Features

The following **optional** features are implemented:

- [ ] Category-based attribute filtering
- [ ] Summary statistics
- [ ] Success metric visualization

---

## Additional Features

- [x] Clean UI layout with centered components
- [x] Navigation using React Router
- [x] Supabase integration for real-time database operations

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<div>
    <a href="https://www.loom.com/share/12ac0d4df80f46d1ba822e17fba15251">
      <p>crewmates-app - 16 April 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/12ac0d4df80f46d1ba822e17fba15251">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/12ac0d4df80f46d1ba822e17fba15251-29bef5b508f7766b-full-play.gif#t=0.1">
    </a>
  </div>

GIF created with *Loom*

---

## Notes

One challenge encountered was handling Supabase Row-Level Security (RLS), which initially prevented data from being inserted into the database. This was resolved by creating appropriate policies to allow insert, update, and delete operations. Additionally, managing routing and ensuring correct dynamic paths for editing and viewing crewmates required careful debugging.

---

## License

Copyright [2026] [Mim Dey]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
