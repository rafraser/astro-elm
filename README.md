# Astro Elm Integration

Lightweight implementation of Elm component support for [Astro](https://astro.build/); powered by [vite-plugin-elm](https://github.com/hmsk/vite-plugin-elm).

This integration currently performs **no** server-side rendering. If you're looking for a SSR solution for Elm, I'd recommend [elm-pages](https://github.com/dillonkearns/elm-pages).

## Installation

This package is still a little rough around the edges, and isn't published yet.
If you're desperate to use it, I'd copy it into your project and use it similarly to the example.

## Example

The example/ directory has a basic example site with a couple of Elm components. To try it out:

```sh
cd example
npm install
npm run dev
```

## Known Issues

- Elm imports need to suffixed with `?import` to work in development mode.
- `Cannot read properties of undefined (reading 'url')`
  - yeah i'm not sure what causes that one
  - sometimes just reloading a couple times does the trick
