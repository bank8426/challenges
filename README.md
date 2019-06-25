**Tamboon React** is a code challenge for frontend developer.
<br />
## Online Demo (Netlify + Heroku)
Client site : https://serene-goldberg-d32da8.netlify.com/<br />
API Server site : https://db-heroku-for-challenge.herokuapp.com/

## Sample Screen Shot
<p>-When app loading</p>
<img src="https://drive.google.com/uc?id=1u4hQbkozf-yrSZ3DFUA2M0AbC7uNoQCN" width="600" alt="loading"/>
<br />
<br />
<p>-Select charity and make payment</p>
<img src="https://drive.google.com/uc?id=1fud48W0zLHaZDQV92442EJo7_yARDH1-" width="600" alt="succes-payment"/>
<br />
<p>-When make payment fail</p>
<img src="https://drive.google.com/uc?id=1sW0x6OupvQ6dkastfmqSmsYVndNn0ObH" width="600" alt="fail-payment"/>
<br />

# How to run or test app?
## First, Install using [`npm`](https://www.npmjs.com/):
```bash
npm install
```
## Config Images and API Path
In <code>webpack.config.dev.js</code> and <code>webpack.config.prod.js</code><br/>
There will be <code>IMAGES_PATH</code> and <code>API_PATH</code><br/>
You can set <code>URL</code> there.<br/>
OR <br/>
use these command in commandline<br/>
### Windows
```bash
set IMAGES_PATH='your-image-path';
set API_PATH='your-api-path';
```
### Linux or other unix based system
```bash
export IMAGES_PATH='your-image-path'
export API_PATH='your-api-path'
```

## For development
### Run on local (Default client: localhost:3000, server: localhost:3001)
```bash
npm run start-dev
```

### Run the tests
```bash
jest
```

### Run the tests with coverage report
```bash
jest --coverage
```

## For production
### Build production (Will auto run test before build)
```bash
npm run build
```

## What have done. 
<ul>
  <li>
    Update <code>webpack</code>. Webpack now have config files for <code>Development</code> and <code>Production</code>
  </li>
  <li>
    Update <code>babel</code> and <code>package.json</code> to new version.
  </li>
  <li>
    Design on <code>Figma</code>. ( I know it's not in mission. But i want to have clear design first.)<br />
     Also redesign and add some features. But to make it as same as original, those things didn't get implemented<br />
     You can check out here :<br />
    <ul>
      <li>
        UI : https://www.figma.com/file/PVdrvCyjaNgv5AjKzwyHSESh/Gu-Tamboon?node-id=0%3A1
      </li>
      <li>
        Component , typo , color : https://www.figma.com/file/PVdrvCyjaNgv5AjKzwyHSESh/Gu-Tamboon?node-id=1%3A6
      </li>
    </ul>
  </li>
  <li>
    Fix <code>API</code> part (add API header for handlePay), clean db.json
  </li>
  <li>
    Refactor code ,seperate <code>Redux</code> and <code>Components</code> from <code>App</code>.
  </li>
  <li>
    Add <code>jsDoc</code> and <code>comments</code> for each files.
  </li>
  <li>
    Use <code>Styled-component</code> for styling and make resposive, also has global styles for reuse purpose and add font.<br />
    Some componets has animation.
  </li>
  <li>
    Use <code>Jest, Enzyme, React-test-library and mock data</code> for testing.<br>
    Make test <code>coverage 100%</code> ( Just follow jest coverage report.)<br>
  </li>
  <li>
    Make <code>Message</code> component to handle multiple messages and display like <code>toast</code>
  </li>
  <li>
    <code>Verify production build work</code> by deploy on Netlify and Heroku.
  </li>
</ul>

## What have done by days. 
<ul>
  <li>
    <b>Day 1</b>
    <ul>
      <li>
        Update version package,babelrc. And start design in Figma.(not finish)
      </li>
    </ul>
  </li>
  <li>
    <b>Day 2</b>
    <ul>
      <li>
        Finish design.
      </li>
    </ul>
  </li>
  <li>
    <b>Day 3</b>
    <ul>
      <li>
        Refactor seperate redux, api call from main code to have their own folder.
      </li>
      <li>
        Add API header for handlePay, clean db.json
      </li>
      <li>
        Show charity image
      </li>
      <li>
        Add IMAGES_PATH to webpack.config
      </li>
    </ul>
  </li>
  <li>
    <b>Day 4</b>
    <ul>
      <li>
        Add unit test and mock data for redux
      </li>
      <li>
        jsDoc for redux and api<br>
      </li>
      <li>
        Seperate components from main code
      </li>
    </ul>
  </li>
  <li>
    <b>Day 5</b>
    <ul>
      <li>
        Styled components and make it responsive
      </li>
      <li>
        Add font and GlobalStyles
      </li>
    </ul>
  <li>
    <b>Day 6</b>
    <ul>
      <li>
        Add animation for components.
       </li>
      <li>
        Test coverage 100% for redux, api, helper.
       </li>
      <li>
        Make Message component handle multiple messages also error message.
      </li>
    </ul>
  <li>
    <b>Day 7</b>
    <ul>
      <li>
        Rewatch about testing react in pluralsight again.
      </li>
      <li>
        Add test and propstype for components but not finish yet.
      </li>
    </ul>
  <li>
    <b>Day 8</b>
    <ul>
      <li>
        add test App, CardPayment, now all code coverage 100
      </li>
    </ul>
  <li>
    <b>Day 9</b>
    <ul>
      <li>
        Update webpack config for dev,prod
      </li>
      <li>
        Add comment and clean code, update test
      </li>
      <li>
        Show spinner when CardPayment process
      </li>
      <li>
        Site live on netlify at https://serene-goldberg-d32da8.netlify.com/ 
      </li>
      <li>
        Server on heroku
      </li>
      <li>
        Fix globalstyle not show in production
      </li>
    </ul>
  </li>
  <li>
    <b>Day 10</b>
    <ul>
      <li>
        Update README.md
      </li>
      <li>
        Export git-patch
      </li>
    </ul>
  </li>
</ul>
