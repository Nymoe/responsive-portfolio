# responsive-portfolio
A responsive web portfolio

To deploy your code in github
- Run : npm install gh-pages --save -dev
-  go into the package.json
-  Add above name: "homepage" : "https://username.github.io/nameOfRepo/"
-  Under Scripts: Add:
-  "predeploy": "npm run build"
-  "deploy": "gh-pages -d build"
- To complete: just run npm run deploy to publish your website

