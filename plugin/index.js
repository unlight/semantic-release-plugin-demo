// const AggregateError = require('aggregate-error');

debugger;

async function verifyConditions(pluginConfig) {
	debugger;
    process.stdout.write("verify conditions\n");
}

async function analyzeCommits() {
	debugger;
    process.stdout.write("analyze commits\n");
    return 'patch';
}

async function verifyRelease() {
	debugger;
    process.stdout.write("verify release\n");
    // throw new AggregateError(["error1", "error2"]);
}

async function generateNotes() {
	debugger;
    process.stdout.write("generate notes\n");
    return "release note here";
}

async function prepare() {
	debugger;
    process.stdout.write("prepare\n");
}

async function publish() {
	debugger;
    process.stdout.write("publish\n");
}

async function success() {
	debugger;
    process.stdout.write("success\n");
}

async function fail() {
	debugger;
    process.stdout.write("fail\n");
}

module.exports = {verifyConditions, analyzeCommits, verifyRelease, generateNotes, prepare, publish, success, fail};
