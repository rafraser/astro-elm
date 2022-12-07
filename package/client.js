export default (element) => {
    return (Component, { ...props }) => {
        Component.init({ node: element, flags: props });
    }
}