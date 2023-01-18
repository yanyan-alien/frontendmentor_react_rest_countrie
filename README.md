# React App - Rest Countries API with Color Theme Switcher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries Used
- Bootstrap
- React Dom Router
- Create React App

## Scripts Used
- `npm start` which runs the app in development mode
- `npm run build` when deploying on Netlify

## Learning Points

- `useEffect()` when fetching data or sending data via API. When the variable in the second parameter (optional parameter) changes, the effect activates. Before setting the second parameter, the function kept calling itself, resulting in a run time error. 
- Learn to use `<Routes/>` and `<Route/>`, which creates the navigation framework of the website. 
- More comfortable with using `useState()`. It is used in mainly these 2 features:
    1. Storing fetched data and setting loading state to false
    2. Passing theme state from parent component to child component

## Continued Development 
- To use a skeleton when componenets are still loading
- To have a delay and thus require skeleton initially as border buttons take more time to render 
- Theme transition to become smoother