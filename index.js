const core = require('@actions/core');
const fs = require('fs')

try {
  const changedFiles = core.getInput('changed-files');
  core.info(`Use ${changedFiles} to rertieve the list of changed files.`);
  core.startGroup(`Reading changed files from ${changedFiles}`);
  changedFilesData = fs.readFileSync(changedFiles).toJSON();
  core.info(`Found changed files: ${changedFilesData}`)
  core.endGroup();
  const ownershipRules = core.getInput('ownership-rules');
  core.info(`Use ${ownershipRules} to rertieve the ownership rules.`);
  core.startGroup(`Reading ownership rules from ${ownershipRules}`);
  ownershipRulesData = fs.readFileSync(ownershipRules).toJSON();
  core.info(`Found ownership rules: ${ownershipRulesData}`)
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}