// const AggregateError = require('aggregate-error');

async function verifyConditions(pluginConfig) {
    process.stdout.write("verify conditions\n");
}

async function analyzeCommits() {
    process.stdout.write("analyze commits\n");
    return 'patch';
}

async function verifyRelease() {
    process.stdout.write("verify release\n");
    // throw new AggregateError(["error1", "error2"]);
}

async function generateNotes() {
    process.stdout.write("generate notes\n");
    return "release note here";
}

async function prepare() {
    process.stdout.write("prepare\n");
}

async function publish() {
    process.stdout.write("publish\n");
}

async function success() {
    process.stdout.write("success\n");
}

async function fail() {
    process.stdout.write("fail\n");
}

module.exports = {verifyConditions, analyzeCommits, verifyRelease, generateNotes, prepare, publish, success, fail};
