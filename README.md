# Inclusiveness Analyzer

> Make your code inclusive!

The Inclusiveness Analyzer is a GitHub action that checks your repository for offensive / exclusive terms.

It also provides context on why a word is exclusive and suggests alternate terms that can be used instead.

## Install Guide

Please view the [Inclusiveness Analyzer Install Guide](https://microsoft.github.io/InclusivenessAnalyzer/azuredevopsextension) for installation and configuration instructions.

## Inclusiveness Analyzer for other Platforms

* [Inclusiveness Analyzer GitHub Action](https://github.com/microsoft/InclusivenessAnalyzer)
* [Inclusiveness Analyzer Visual Studio Extension](https://github.com/microsoft/InclusivenessAnalyzerVisualStudio)

## About the project

As humans, we hold many unconscious and implicit biases that we rely on to react quickly to our environment and any novel stimuli. However, since the unconscious brain processes and reacts with speed, we sometimes speak quickly without thinking, which may cause us to slip offensive terms and stereotypes although we mean no malice.

In order to confront these biases that we see in ourselves and others, we must rewire ourselves to regularly use inclusive practices (such as the words we speak). If you don't intentionally and proactively include, you will unintentionally exclude.

> Join our effort to push out exclusive terms and make inclusive terms a part of our everyday vocabulary!

Help us confront these biases by pushing out exclusive terms and making inclusive terms a part of our everyday vocabulary!

## Developer Guide

### Local Development

* Clone the repository
* Run `yarn install` to install all dependencies.
* Run `yarn run dev` to run locally with sample data. See package.json for dev config and params.

> Tip: In VSCode, open package.json, hover over 'Scripts' (line 6) and click on Debug and select Dev to interactively debug the code.

### Manual Publishing to Visual Studio Marketplace

Run the following commands when you are in the /src folder. The extension packaging does not work when running from the root of the repository.

* Increment build number in `package.json`, `task.json` and 'vss-extension.json'
* Run `yarn run prepare`
* Run `yarn run build`
* Run `tfx extension create --manifest-globs vss-extension.json`
* Upload the file to the VS Marketplace.

Note: If you make changes to the task.json, you might need to delete and re-install the extension on the Azure DevOps Organization to see updates.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
