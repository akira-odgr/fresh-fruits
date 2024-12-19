// COMMON
export const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const FadeLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

export const FadeRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: delay,
            },
        },
    };
};

// HERO
export const HeroFruit = () => {
    return {
        hidden: {
            opacity: 0,
            x: 200,
            rotate: 75,
        },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                duration: 1,
                delay: 0.2,
            },
        },
    };
};

export const HeroLeaf = () => {
    return {
        hidden: {
            opacity: 0,
            y: -200,
            rotate: 75,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,

            transition: {
                duration: 1,
                delay: 1.5,
            },
        },
    };
};
