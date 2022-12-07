function check(Component) {
    return !!Component['__elm'];
}

// TODO: This does NO server-side rendering
// I'm perfectly fine with that, but it'd be nice to have
// One implementation could be to use JSDOM and fake everything
// If you want server-side rendering, you're probably better off using elm-pages
async function renderToStaticMarkup() {
    return { html: '<div></div>' }
}

export default {
    check,
    renderToStaticMarkup
}