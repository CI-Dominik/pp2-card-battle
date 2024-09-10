# Steampunk Struggle
Steampunk Struggle is a fantasy card game that takes place in a fictional steampunk world. It features different cards, enemies and combat phases. Strategic combat planning is one of the key aspects of the game.

The live page can be viewed here: [Link to Steampunk Struggle](https://ci-dominik.github.io/pp2-card-battle/ "Link to the live website")

![Mockup image of Steampunk Struggle](docs/mockup.jpg)

## **TABLE OF CONTENTS**

[**USER EXPERIENCE**](#user-experience)
  * [----------](#----------)
    
<br>

[**FEATURES**](#features)
  * [----------](#----------)

<br>

[**FEATURES EXPLAINED**](#features-explained)
  * [----------](#----------)
    
<br>

[**DESIGN**](#design)
  * [----------](#----------)
    
<br>

[**TECHNOLOGIES**](#technologies)
  * [HTML](#html)
  * [CSS](#css)
  * [JavaScript](#javascript)
  * [Visual Studio Code](#visual-studio-code)
  * [GitHub](#github)
  * [Adobe Photoshop](#adobe-photoshop)
  * [Fontawesome](#fontawesome)
    
<br>

[**TESTING**](#testing)
  * [----------](#----------)
    
<br>

[**VALIDATOR TESTING**](#validator-testing)
  * [----------](#----------)

<br>

[**ACCESSIBILTIY**](#accessibility)
  * [Lighthouse testing](#lighthouse-testing)
  * [WAVE extension](#wave-extension)
  * [Use of font sizes](#use-of-font-sizes)
  * [Goal of accessibility measures](#goal-of-accessibility-measures)
    
<br>

[**DEPLOYMENT**](#deployment)
  * [Visual Studio Code connection](#visual-studio-code-connection)
  * [Cloning, commitig and pushing via Visual Studio Code](#cloning-commiting-and-pushing-via-visual-studio-code)
  * [Deployment via GitHub Pages](#deployment-via-github-pages)
    
<br>

[**CREDITS**](#credits)
  * [Fontawesome](#fontawesome-1)
  * [Techsini](#techsini)
  * [HTML validator](#html-validator-1)
  * [CSS validator](#css-validator-1)
  * [JavaScript validator](#javascript-validator-1)
  * [W3Schools](#w3schools)
  * [YouTube](#youtube)
  * [Adobe Firefly](#adobe-firefly)
  * [Visual Studio Code](#visual-studio-code-1)

## **USER EXPERIENCE**

## Target audience
* PH

## User's journey
* PH

## Intuitive and consistent design
* PH

---

## **FEATURES**

## FEATURE X
* PH

<br>

![----------](docs/----------.jpg)

<br>

![---------- in mobile view](docs/----------.jpg)

## 404 page
* PH

<br>

![Screenshot of the site's 404 page](docs/404.jpg)

---

## **FEATURES EXPLAINED**

## Existing

### FEATURE 1
* PH

### FEATURE 2
* PH

## Upcoming

### FEATURE 1
* PH

### FEATURE 2
* PH

---

## **DESIGN**

## Colour choice
* The overarching colour is #FFC52F, as steampunk architecture and steam-powered machines commonly get associated with a darker yellow. It fits nicely to the background that supports the battlefield for the player's cards and the enemies.<br>
The white background delivers enough contrast to the machinery and is itself contrasted with the black letters used in the battlefield area. <br>Mint green and Tea rose (red) are used for displaying the current combat phase as red gets associated with conflict and the green colour represents defense and restraint.

<br>

![Colour palette of the homepage](docs/colour-palette.jpg)

## Wireframes

### WIREFRAME 1

![---------- in mobile view](docs/wireframes/-----------mobile-wireframe.jpg)

<br>

![----------](docs/wireframes/-----------wireframe.jpg)

### WIREFRAME 2

![---------- in mobile view](docs/wireframes/-----------mobile-wireframe.jpg)

<br>

![----------](docs/wireframes/-----------wireframe.jpg)

---

## **TECHNOLOGIES**

### HTML
* HTML (HyperText Markup Language) was used to create the structure of the homepage.

### CSS
* All styled were applied by using and linking a CSS (Cascading Style Sheet) file.

### JavaScript
* JavaScript was used to create the functionality of the homepage.

### Visual Studio Code
* Visual Studio Code was used to clone the GitHub repository, edit the homepage's code and commit / push the results to GitHub.

### GitHub
* GitHub was used to store the homepage's files. Everything was deployed using GitHub Pages.

### Adobe Photoshop
* Adobe Photoshop was used to create content images and wireframes.

### Fontawesome
* Fontawesome was linked in the homepage's code to include icon files.

---

## **TESTING**

## Responsiveness

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
| TEXT1	| TEXT2 | TEXT 3 |

## Functionality

|Testing method | Expected result | Actual result |
|:-------------:|:---------------:|:-------------:|
| TEXT1	| TEXT2 | TEXT 3 |

---

## **Validator testing**

### HTML validator
* All pages were checked for their HTML structure by the W3C Markup Validation Service. No document showed any errors.

<br>

![Screenshot of the HTML validation](docs/html-validation.jpg)

### CSS validator
* The stylesheet file was checked via the W3C CSS Validation Service. No errors were found.

<br>

![Screenshot of the CSS validation](docs/css-validation.jpg)

### JavaScript validator (scripts.js)
* The JavaScript validator caught errors which are almost exclusively related to usage in another document like in a HTML button with an onclick event. Variable i used in line 48 just got used to iterate over an array as long as the player's hand is not filled with cards.

![Screenshot of the JavaScript validation for scripts.js](docs/javascript-validation.jpg)

### JavaScript validator (Card.js)
* The JavaScript validator caught one error related to the usage of the function loadAvailableCards(). This was called in scripts.js.

![Screenshot of the JavaScript validation for Card.js](docs/javascript-validation2.jpg)

### JavaScript validator (Enemy.js)
* The JavaScript validator caught one error related to the usage of the function loadEnemies(). This was called in scripts.js.

![Screenshot of the JavaScript validation for Enemy.js](docs/javascript-validation3.jpg)

### JavaScript validator (Skill.js)
* The JavaScript validator caught three errors related to the usage of the classes Dot, Stun and Hot. Those were called in scripts.js.

![Screenshot of the JavaScript validation for Skill.js](docs/javascript-validation4.jpg)

---

## **Used platforms and devices**

### Browsers
* Google Chrome
* Mozilla Firefox
* Microsoft Edge

### Smartphones
* Poco F5 Pro
* Samsung S21
* Samsung S23
* iPhone XS

## Bugs

### Unfixed bugs
* When adding cards to the attack or defense stack, Mozilla Firefox sometimes increases the height of the battlefield. This bug was recreateable but not fixable for the author at the time of deployment.

### Fixed bugs
* PH

---

## **ACCESSIBILITY**

### Lighthouse testing
* Lighthouse testing was used to determine the site's performance, accessibility, best practices and SEO. Special emphasis was layed on performance and accessibility to provide a great user experience for every visitor, no matter the device or conditions.<br>
The performance rating on mobile devices gave varying results between 84% and 99%, depending on the run. This is because of the largest contentful paint and needs to be addressed in the future for more stable results.<br>
The results for desktop view were perfect in every category.

**HOMEPAGE**

![First screenshot of page results in mobile view](docs/benchmarks/page-benchmark-mobile-01.jpg)
<br><br>
![Second screenshot of page results in mobile view](docs/benchmarks/page-benchmark-mobile-02.jpg)
<br><br>
![Screenshot of page results in desktop view](docs/benchmarks/page-benchmark-desktop.jpg)

**404 page**

![404 page in mobile view](docs/benchmarks/404-mobile.jpg)
<br><br>
![404 page in desktop view](docs/benchmarks/404-desktop.jpg)

### WAVE extension
* The WAVE extension was used to determine errors on the homepage that could lead to a worse user experience. Only some alerts were found stating that some elements may be potential headings. This is due to the usage of a big font-sizes on some elements that are buttons or other non-heading elements.

<br>

![Screenshot of the WAVE extension validator](docs/wave-extension.jpg)

### Use of font sizes
* Throughout the whole homepage, every element was sized using the rem unit. This way, it is ensured that the experience is the same on any font size setting of the browser. The unit was used to give people who cannot read small texts a better time and feel included.

### Goal of accessibility measures

* Everyone should be able to enjoy the website content, so an alt tag was added to every picture to describe it.<br>
In addition to this, aria labels were added to all buttons to describe their behaviour.<br>
This way, every screen reader should be able to pick of the provided content.<br>
Lastly, the colours of the homepage were chosen to ensure enough contrast for visually impaired users.

---

## **DEPLOYMENT**

### Visual Studio Code connection
* A connection between Visual Studio Code and GitHub was established using the built-in function to include the ability to clone, stage, commit and push content directly to GitHub.
Once you start Visual Studio Code with no connection, you simply need to click on the person icon in the lower left corner and select "GitHub". From there, you can connect your existing account to Visual Studio Code.

<br>

![Screenshot of the menu to connect Visual Studio Code with GitHub](docs/vscode-connection.jpg)

### Cloning, commiting and pushing via Visual Studio Code
* Visual Studio code was used to stage all changed files and commit them with an included message directly to GitHub.

<br>

![Screenshot of the menu to commit changes to GitHub](docs/vscode-commit.jpg)

### Deployment via GitHub Pages
* Once a version that should be visible on the internet has been established, to deploy a page, one needs to visit the GitHub repository that is used to store all data of the project.

<br>

![Screenshot of the settings menu in GitHub](docs/deployment4.jpg)

On the top, there is an option that says *Settings*. In this menu, it is possible to deploy the page using the *Pages* sub-menu.

<br>

![Screenshot of the settings list with Pages circled](docs/deployment2.jpg)

Once one clicks on the *Pages* sub-menu, a new page will appear. On this one, one can select the branch of the project which contains the main data to deploy to GitHub Pages. In this case, the branch *Main* was used.

<br>

![Screenshot of the branch selection in GitHub Pages](docs/deployment3.jpg)

With the right branch selected, the input needs to be saved via the *Save* button.

<br>

![Screenshot of the deployed homepage menu](docs/deployment1.jpg)

After the deployment, a link to the deployed page can be found on the frontpage of the GitHub repository. With a click on it to reveal the link that takes the visitor to the live page.

<br>

![Screenshot of the live view link](docs/deployment5.jpg)

---

## **Credits**

### [Fontawesome](https://fontawesome.com/)
* Used to implement website icons.

### [Techsini](https://techsini.com/multi-mockup/index.php)
* Used to create the mockup in the readme file.

### [HTML validator](https://validator.w3.org/)
* Used to verify HTML code.

### [CSS validator](https://jigsaw.w3.org/css-validator/)
* Used to verify CSS code.

### [JavaScript validator](https://jshint.com/)
* Used to verify JavaScript code.

### [W3Schools](https://www.w3schools.com/)
* Used to lookup tips for the code.

### [Favicon Generator](https://realfavicongenerator.net/)
* Used to generate favicons for the homepage.

### [YouTube](https://youtube.com)
* Videos for understanding some code areas.

### [Adobe Firefly](https://firefly.adobe.com/)
* Used to generate the images for the game's cards and enemies.

### Visual Studio Code
* Used to generate HTML boilerplate code.