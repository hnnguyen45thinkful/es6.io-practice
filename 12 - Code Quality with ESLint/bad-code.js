//eslint.org/demo/ for bad-code.js website
//eslint --version
//npm install -g eslint

// Have install
//node -v //version 4 or higher
//npm -v //version 3 or higher
//nodejs.org

//eslint bad-code.js to check code. after npm install -g eslint
//Tell code whats wrong.

//touch .eslintrc to create and open file
//Website eslint.org/docs
//Double quotes.
// {
//   "env": {
//     "es6": true,
//     "browser": true,
//       "node": true,(delelte)
//       "jquery": true (delete)
//   },
//   "extends": "eslint:recommended",
//   "rules": {
//     "no-console": 0,
//   },
//   
// }
var weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then(responses => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => {
    return Promise.all(responses.map(res => res.json()));
  })
  .then(responses => {
    console.log(responses);
  });
