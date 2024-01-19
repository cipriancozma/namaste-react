# Namaste React

## 1. What is package.json?

R: Package.json is a configuration for NPM.

## 2. What is NPM?

R: NPM is everything but not Node Package Manager. NPM manages the packages your app needs.

## 3. What is a bundler?

R: A bundler it bundles your app in order to be prepared for production. (e.g. Webpack, Vite, Parcel)

## 4. What is the difference between 'dependencies' and 'devDependencies'?

R: DevDependencies are required only in development mode and dependencies are required in the production mode.

## 5. What is package-lock.json?

R: Package-lock.json keeps the exact version that it is installed on the dependencies.

## 6. What is the difference between async vs defer in JavaScript?

R: Async and Defer are boolean attributes on the script tags.

With defer attribute, the script is running only after the html parser is complete. The scripts are fetched but it will be run only if the html parser is completed.

With async attribute, the script is fetched at the same time with html parsing phase but at soon is fetched, the html parser is paused and the script is starting to be executed. Only after the script is finished, then the html parser will continue.

Without these attributes the html parser will be paused when it will encounter a script that it will be fetched and run, and only after the script is completely fetched and executed, the html parser will continue to run.

## 7. What does Parcel do?

- Dev Build,
- Local Server,
- Hot Module Replacement (Automatically refreshing the changed file),
- File Watching Algorithm,
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Error Handling
- HTTPs
- Tree Shaking - remove unused code

## 8. What is browserslist?

R: Browserslist is a NPM package used for compatibility with the old browsers. (which browsers your app should support)

## 9. What is JSX?

R: JSX is javascript syntax to create React elements. (HTML like syntax)

## 10. What is a functional component in React?

R: A functional component in React is a Javascript function which returns JSX.

## 11. What is the role of type="module" in script tag?

R: This value causes the code to be treated as JavaScript module.

## 12. What is config driven UI?

R: The app is driven by configs. The config driven UI means that the UI is driven by a config (all the data, configs are coming from the backend).

## 13. Why do we need keys on mapping over an array of elements?

R: It is important that React knows the keys which should be unique in order to not re-render the entire list. If the keys are unique, React will render only the item that is removed or added.

If the keys are not present, then a warning will be thrown and React doesn't know how to unique identify the elements and in case of removing or adding elements, will re-render all of them.

## 14. What is the Virtual DOM?

R: The Virtual DOM is a programming concept where an ideal or virtual representation of the UI is kept in the memory and synced with the real DOM by a library named ReactDOM. This process is called reconciliation.

## 15. What is the Diff Algorithm?

R: The Diff Algorithm makes a comparison between the modified Virtual DOM and the previous Virtual DOM.

## 16. Why React is fast?

R: Because it has Virtual DOM, because it has Diff Algorithm, because it has React Fiber, the whole core react algorithm updates the DOM smoother and fast, it finds out the differences between the two virtual doms and updates the UI.

## 17. What is Monolith Architecture?

R: Everything is inside the same project. All the code is part of the same project.

## 18. What is a Microservices Architecture?

R: Different services for every functionality of the app. All these services combine together forms a big app.
Each and every services has its own job.

## 19. What approach is React using in rendering the data?

R: Loads the app -> Render -> API fetch -> Render

This approach is for a better UX.

## 20. What is a Shimmer UI?

R: Shimmer UI is good for a better UX. If the data takes too much to be rendered on the page, we can use Shimmer UI in order to render a fake data until everything loads.

e.g. For a page where there are a lot of cards, we can load fake cards until the real ones are available. This can be a good solution instead the loading spinner.

## 21. What happens when state variables update?

R: Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)

## 22. How useEffect hook works?

R: If no dependency array => useEffect is called on every render

If dependency array is empty = [] => useEffect is called on initial render (just once)

If dependency array is not empty =[something here] => useEffect is called when the variable inside the array changes

## 23. How many types of routing are in the web apps?

R: Client Side Routing and Server Side Routing

Server Side Routing means -> make a call to the server to bring some data -> server sends the data -> data is loaded and the page is refreshed.

Client Side Routing means -> change the routing pages without refreshing the page.

# 24. What is reconciliation?

R: The algo React uses to diff one tree with another to determine which parts need to be changed.
