# Why use the Inclusiveness Analyzer?
As humans, we hold many unconscious and implicit biases that we rely on to react quickly to our environment and any novel stimuli. However, since the unconscious brain processes and reacts with speed, we sometimes speak quickly without thinking, which may cause us to slip offensive terms and stereotypes although we mean no malice.

In order to confront these biases that we see in ourselves and others, we must rewire ourselves to regularly use inclusive practices (such as the words we speak). If you don't intentionally and proactively include, you will unintentionally exclude.

Join our effort to push out exclusive terms and make inclusive terms a part of our everyday vocabulary!

# How it works

This Azure DevOps extension provides a build task that you can add in your build definition. You'll benefit from the automated detection of non-inclusive terms that could make their way into your application and your docs.

## Add the Inclusive Analyzer task to your build and configure options

![Screenshot showing Inclusiveness Analyzer warning of the work blacklist being used.](images/screenshot0.png)

## The analyzer runs on each build and reminds your devs when non-inclusive terms are found.

![Screenshot showing Inclusiveness Analyzer warning of the work blacklist being used.](images/screenshot1.png)

# Task control options

**`buildStatusOnNonInclusiveTerm`**

Status of the build when non-inclusive terms are found.

Options:

* `warning` (Default) - Build completes with a warning state.
* `failed` -  Breaks the build if non-inclusive terms are found.
* `success` - Build completes successfully

<br/>**`excludeUnchangedFiles`**

If `true` (Default) limits the scan to files changed in the latest commit. If `false` a full scan is run on each commit.

The git checkout step needs to have at least 'with: fetch-depth: 2' configured.|

<br/>**`excludeFromScan`**

Comma separated list of file patterns to exclude from analysis. [Glob patterns](https://github.com/isaacs/node-glob#glob-primer) are supported with a prefix of `**/`

Eg. `**/skipme.txt,**/donotscan/*`

<br/>**`excludeTerms`**

Comma separated list of non-inclusive terms to exclude from analysis.

Eg. `he,she`

# GitHub Action and Visual Studio Extension

Inclusiveness analyzer is also available as a GitHub Action as well as a Visual Studio extension and a nuget package (for C# code). Check out the [Inclusiveness Analyzer site](https://microsoft.github.io/InclusivenessAnalyzer/) for more details.
