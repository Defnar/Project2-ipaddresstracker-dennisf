# deployment link
- https://ipaddresstracker-dennisf.netlify.app/

# Readme instructions
## Reflection Document:

- Write a 200-300 word reflection discussing your development process, challenges faced, solutions implemented, and potential improvements.
- Include this reflection in your GitHub repository.


## Readme Reflection
- As always, the first part of the process is planning.  Taking into consideration the data I will need to display the information needed.  With this methodology, I first created the context that would hold the information grabbed from the api, and wrap the app in the provider for this context.  Even though I considered this would probably be the only provider I would need, I still created an AppProviders to provide this, and any other context I might need in a single wrapper for app.
- To help with layout, and understanding how I wanted data to flow between components (such as search), I created all of the main components as empty pieces and rendered them on the page.  I chose to use prop drilling to bring search information up to app.tsx, and use an async fetch hook to grab the search and push it through an async useFetch hook.  fetch grabs the api key from .env, and returns data as needed.  This let me centralize data management to app, while keeping search purely for managing the search bar.
- the biggest hurdle layout-wise was figuring out how to render the info display in the middle of the page.  I opted to make a child of header along with search, and set it's positioning up to be relative with header as absolute, and use tailwind features to center it at the bottom and translate half of its height down.  this ensures it's always centered between the 2, and with z-indexing, always on top of components.
- I used leaflet react (https://react-leaflet.js.org/) to simplify using leaflet with react.  This allowed me to just use their mapcontainer instead of creating my own.

- the biggest non-layout hurdle was client-side ip and domain validation.  I used is-IP (https://www.npmjs.com/package/is-ip) to validate ip addresses (as opposed to the half page regex I found msyelf trying to construct for ipv4 and ipv6).  I still used a regex for domain name validation.

- Images were broken on netlify.  After some research I came across importing images and using the import name as the src variable instead of the url.
