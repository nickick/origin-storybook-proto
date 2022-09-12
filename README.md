# Origin Protocol Component Library
An Origin Protocol shared component library, using [React](https://reactjs.org/), [Storybook.js](https://storybook.js.org/), and [rollup.js](https://rollupjs.org/guide/en/).

## Install and use components
These components are meant to be used by Originprotocol.com, ousd.com, and story.xyz React frontend apps.

To use in a consuming React app, install the npm package and then import/use the components as you'd expect:
```
npm install origin-storybook
```

In a React component:
```
import { Card, Header, Footer } from 'origin-storybook'
...
<Header webProperty='originprotocol' />

<Card 
  webProperty='originprotocol'
  title="Lucky Ducky NFTs"
  imgSrc="https://placekeanu.com/510/340"
  imgAlt="keanu banner"
  body="7,777 Lucky Duckies have left the pond and are getting into mischief!"
  linkText="Visit luckyducky.xyz/market"
  linkHref="https://google.com"
  thumbnailSrc="https://placekeanu.com/128/128"
  thumbnailAlt="Keanu face"
/>

<Footer />
...
```
---

## Running and developing Storybook locally
To run storybook locally to develop or look at component docs, install and run Storybook:
```
yarn
yarn storybook
```
This will stand up a Storybook server at localhost:6006.

---

### Development notes
* We use [Tailwindcss v2](https://tailwindcss.com/blog/tailwindcss-v2) for styling
* We use [HeadlessUI](https://headlessui.com/) for more complex UI interactions like dropdowns. 
* The build step will compile image and CSS styling, so consuming apps don't need to have Tailwind or HeadlessUI installed.

---

### Building changes
Once the preview of the components with changes look good, you'll want to build the components using Rollup.
```
yarn build
```

### Publishing changes
After commiting changes:
```
yarn build
npm version [major|minor|patch] -m "New version message"
npm publish
```