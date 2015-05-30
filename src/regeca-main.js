define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./Messages');

    var SimpleCache = require('./caches/SimpleCache');

    console.log(messages.getHello());
});