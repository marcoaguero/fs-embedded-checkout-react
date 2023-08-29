To speed things up this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## FastSpring Effects Lab

This project was built in order to test the SBL (Store Builder Library), APIs and Webhooks.

The webshop includes simple functionality based on the productId.

Every content will be displayed depending on the productId. All directives will point towards that productId once defined in the component ProductCard.
This could have also be done using state management via the `https://api.fastspring.com/products/` API. I wanted to test first SBL directives in React so I hardcoded them in the Grid component. I will do this.

### WIP and doubts

- As mentioned above, will move from hardcoded IDs to dinamically updated with the products list API and map them through the ProductCard component
- When adding a bundle all other product information coming from directives gets removed
- Improve UI and pick better colors
- Working on finishing the order.completed triggers account creating. Will make a video explaining this and all the other features.
