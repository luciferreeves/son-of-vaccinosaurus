# Son of Vaccinosaurus

Helper API for Vaccinosaurus

## What is this?

[Vaccinosaurus](https://github.com/luciferreeves/vaccinosaurus) uses the [CoWIN APIs](https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2) which are not available outside India and the Vaccinosaurus server is in Europe region (Heroku), so we had to pull through by creating a middle man server in Mumbai, India and this Express NodeJS App would live there and Vaccinosaurus will continue to hit our own servers which will then fetch the from CoWIN and send back to Vaccinosaurus.

The IP of the machine present in Mumbai is kept private to prevent misuse. You can continue to use [Vaccinosaurus](https://github.com/luciferreeves/vaccinosaurus) web app if you would like to utlise the services or you can clone this repository to setup your own servers.

## Local Development

[Fork](https://github.com/luciferreeves/son-of-vaccinosaurus/fork) the repository and clone it to your local machine. cd into the folder and install the dependencies:

````
cd son-of-vaccinosaurus && npm install
````

Finally start the server:

````
npm start
````

You can also use [PM2](https://pm2.keymetrics.io) to handle the server process.

## Issues and Pull Requests

If you found any issues or want to make any suggestions, please feel free to [open an Issue](https://github.com/luciferreeves/son-of-vaccinosaurus/issues).

If you have fixed an issue and want to merge your code with us, then please [open a Pull Request](https://github.com/luciferreeves/son-of-vaccinosaurus/pulls) and add necessary description along with the issue that your pull request fixes.

> _If you like the work, then please add your name to the [Stargazers list](https://github.com/luciferreeves/son-of-vaccinosaurus/stargazers) by starring the repository._

## License

This work is available under the MIT license. Please see the [LICENSE](LICENSE) file for details.
