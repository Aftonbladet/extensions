export default {
    settings: {
        dev: {
            // We define this here since this is something that several packages might want to use.
            debug: 'roc:*',
        },

        build: {
            targets: undefined,
            input: undefined,
            output: undefined,
        },
    },
};
