- created with create-react-app.
- images not uploaded from MongoDB due to time constraints.
- an earlier issue with MongoDB that couldn't resolve .populate, so I instead manually added the result. This issue has been fixed with the other model that requires .populate, but I didn't have time to change the initial one back.
- async call with redux interfered with retrieving user projects in a meaningful manner; console.log will show that it exists but I cannot manipulate/display it.
- data written into and loaded from MongoDB.
- design layout may have been "backwards". Can fix at a later point if necessary; this has more of an emphasis on projects (what interesting projects are there) rather than users' profiles.
- relating to above, but all projects' description/name/etc all on main page instead.