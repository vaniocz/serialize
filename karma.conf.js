module.exports = function(config) {
    config.set({
        frameworks: ["es6-shim", "jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts" // *.tsx for React Jsx
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["PhantomJS"],
        karmaTypescriptConfig: {
            "tsconfig": "tsconfig.spec.json"
        }
    })
};