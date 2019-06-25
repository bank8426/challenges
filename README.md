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
### Fist, Install using [`npm`](https://www.npmjs.com/):
```bash
npm install
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
