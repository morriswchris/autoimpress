# AutoImpress

Build and deploy an [https://github.com/impress/impress.js](impressjs) style presentation from a markdown file using by [https://github.com/yoshiki/markdown2impress](markdown2impress)

## System Requirements
* `npm install -g gulp`

## Install

1. Clone repo `git clone https://github.com/morriswchris/autoimpress.git <name_of_presentation`
2. `npm install`
3. Modify `document.md`
4. run `gulp` to compile your markdown file to `dist/index.html`

## Modifying the Markdown file

All of the configuration for the impressjs markdown file can be found [https://github.com/yoshiki/markdown2impress#slide-dividing-rule]{here}

## Auto Deployment

In order to setup the `gh-pages` deploy through Travic-CI, you must enable your GitHub repository for Travis-CI here: [Travis-CI](https://travis-ci.org/). Once enabled, you need to setup a GitHub authorization token in order to commit to the `gh-pages` branch.

1. Select `Settings` for your repository on Travis-CI
2. Under `Environment Variables` add `GH_TOKEN`. This is the GitHub Access Token, created [here](https://github.com/blog/1509-personal-api-tokens)
3. Add `GH_REF` as a secondary variable with the url to your repository(`github.com/<user_name>/<repo_name>`). These two environment variables will create the string `http://GH_TOKEN@GH_REF`, and set it as your remote url when committing your changes.
