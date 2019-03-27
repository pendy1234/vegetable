export const push = (location) => {
    const { href } = vm.$router.resolve(location);
    window.location.href = href;
};

export const open = (location) => {
    const { href } = vm.$router.resolve(location);
    window.open(href);
};

export const replace = (location) => {
    const { href } = vm.$router.resolve(location);
    window.location.replace(href);
};
