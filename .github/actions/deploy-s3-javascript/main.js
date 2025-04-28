const core = require('@actions/core');
// const github = require('@actions/github')
const exec = require('@actions/exec');

function run() {
    // 1) Get some inputs value
    const bucket = core.getInpu