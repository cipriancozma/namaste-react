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
