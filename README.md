# Sudoku Heaven

### A website for a Sudoku game for users to play for fun


## Table of Contents

1. [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Stories](#user-stories)
3. [User Interface](#user-interface)
    - [Design Philosophy](#design-philosophy)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
4. [Features](#features)
5. [Validation](#validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
6. [Testing](#testing)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Device Testing](#device-testing)
    - [Browser Compatibility](#browser-compatability)
    - [Testing User Stories](#testing-user-stories)
7. [Bugs](#bugs)
8. [Future Updates](#future-updates)
9. [Deployment](#deployment)
10. [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks & Tools](#frameworks-&-tools)
11. [Credits](#credits)
12. [Acknowledgements](#acknowledgements)

## Project Goals

The aim of this project was to create a game that involves an element of chance. The aim is to design a simple page with a clear set of instructions for
the user to follow and to enjoy a game of sudoku. 
This page is to be created to a standard of acceptability for my second code institute project, which includes a high standard of user accessibility,
design and high functionality.

### User Goals

- Play a fun game of sudoku
- Engage their minds with a maths puzzle
- Challenge themselves with a higher difficulty or lower amount of time
- Use an easily navigated and accessible page to enjoy themselves


### Site Owner Goals

- Provide a platform that can be expanded on in the future
- Provide a fun and clear experience for the user
- Provide a free puzzle game to help engage the users mind
- Give the user a challenging game with the option of a more relaxed puzzle experience
- Create a page with hight functionality using html, css and javasript
- Make the website responsive for mobile devices for easy on-the-go gaming

[Back to Top &uarr;](#victory-fitness)
<hr>

## User Experience 

### Target Audience

- People who want to easily engage in a puzzle
- People who enjoy maths or paper puzzles
- People who like to use their mobile devices to play sudoku
- People who want a free gaming experience
- People who are looking for a challenging puzzle

### User Stories

#### First Time Visitors

1. As a first-time visitor, I want to easily understand the aim of this page
2. As a first-time visitor, I want to easily navigate the page to create a sudoku game


#### Returning Visitors

3. As a returning visitor, I want to challenge myself with some tougher difficulties
4. As a returning visitor, I want to engage in different puzzles
5. As a returning visitor, I want to easily access my favourite game on my mobile device

#### Site Owner

6. As the site owner, I want to allow access to a game of sudoku as easily as possible
7. As the site owner, I want users to be able to navigate the website smoothly and easily
8. As the site owner, I want to give a variety of difficulty setting for the users
9. As the site owner, I want to allow for the possibility of expansion of the sudoku games

[Back to Top &uarr;](#victory-fitness)
<hr>

## User Interface

### Design Philosophy

My idea for a sudoku design came from a puzzle game that my grandmother enjoys playing. I thought it would be an interesting way to design a page and figuring out how to actually build the game board. I wanted a single page site, that is easy to navigate and the main focus is the game controls and the game board itself. The real challenge would be the functionality provided by the javascript. Originally I had planned to use nested divs to create the game board, but after researching some tutorials and ideas, I decided that I would use javascript loops to build 'new games' every time the control panel button was pressed.

The header is a simple logo and title. I found a cool font that suited the style I was looking for, which is typewriter-like. It reminded me of the fonts used in my grandmother's puzzle book.

For responsiveness, I simply scaled down the game board size to allow for gaming on smaller viewports.


### Colors 

I used a rgb value for the background color of the entire page. I wanted an off-white color that would almost look like the color of an old newspaper where you would find a game of sudoku. The font color is black like standard ink that would be used to print the paper, the only real stand-out colors used are red coloring for the 'new game' button and the flashing text that appears when it is pressed. I used the red coloring to make it clear to the user that the game is on!

### Fonts

The font that was used for the entire page is the 'Courier New' font style. It did not need to be downloaded or added from google fonts. I chose this font because it gave me the feeling that it had been typed on a newspaper or puzzle book, so I felt like it fitted right in with the design. It is an added bonus that the font did not need additional code to use.


[Back to top &uarr;](#victory-fitness)
<hr>

## Features

### Navigation Bar

![Navigation Bar](docs/features/navigation-bar.png)

The header of the page shows the page title and logo let the user know what the page is all about. There is no navigation bar added to the header. I wanted this page to be all about the game board and the game of sudoku itself. The header consists of a the title of the page along with a puzzle piece logo icon.


![Footer](docs/features/footer.png)
The footer is a sign off for the game, again I designed the page to show and play a game of sudoku and wanted to display a simple and easy design for the user.

![Favicon](docs/features/favicon.png)

As with all websites, this one also has a favicon that is displayed beside the title of the page. A user can discern what pages they have opened or are currently viewing by simply glancing at the tabs and titles.

![game-controls]()
The game controls contain the different elements to control the difficulty and duration of the game. There are 3 difficulties starting at easy and 3 time settings to give the user a better chance to complete the game. I created two buttons, a start button to create a new board depending on the difficulty of the game. When this button is pressed, "new game" will flash on the board to show the user the board has been set. There is also a help button that will display a window with rules for sudoku and how to play. This can then be closed to continue the game.


[Back to top &uarr;](#victory-fitness)
<hr>

## Validation

### HTML Validation

[W3C Markup Validation Service](https://validator.w3.org/nu/) was used to validate HTML code. No errors were found. Please see the summaries below for the results.



### CSS Validation

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate CSS code. No errors were found. 



[Back to top &uarr;](#victory-fitness)
<hr>

## Testing

### Accessibility

[WAVE WebAIM](https://wave.webaim.org/report#/https://ryael.github.io/victory-fitness) was used to validate CSS code. One error was found, and this related to the hamburger menu having an empty label. This was fixed and is covered in the bugs section. Otherwise, there were some contrast errors that came up and they were simply fixed by increasing the colour of the fonts used. One such example was changing #777 to #575757, which now passes all accessibility checks.

Additionally, the address below the text-logo as well as the button on the Home page are flagged as contrast errors. This also concerns any text on an image-background on other pages. However, attempting to follow the suggestions provided by the tool seemed to impact actual accessibility negatively, despite satisfying the actual tool. Please find a screenshot example of the colour suggestion for said area. As such, these contrast errors will be disregarded as they are not picked up by Lighthouse.

<details>
    <summary>Contrast Error Example</summary>
    <img src="docs/testing/contrast-error.png" alt="Contrast error via the WAVE tool colour suggestion">
</details>

Below are the results for every page, with no errors present (aside from the disregarded contrast ones):


### Performance

Google Lighthouse was used to assess the performance of the webpage. Initially it scored an 84 in accessibility, on inspection I found a missing label for a radio button so I rectified that.

The results can be seen below.



### Device Testing

The website was tested on many different devices, such as:

- Samsung Galaxy S10
- Samsung Galaxy S21
- MSI GE72 6QF Apache Pro
- iPhone 10
- iPhone 12
- iPad Mini (Landscape and Portrait)
- iPad (Landscape and Portrait)
- Vivo S1 Pro

### Browser Compatibility

- Mozilla Firefox
- Google Chrome
- Opera
- Safari
- Microsoft Edge

### Testing User Stories

1. As a first-time visitor, I want to easily understand the main purpose and ethos of the gym.
    - Upon navigating to the website, the user is automatically greeted with a clean and easily readable Navigation Bar to go to their page of choice. The Hero Image and ‘Call to Action’ button draws the user's attention and starts to establish the gym's brand and purpose.
    - At this point, users can navigate to another page, in this case About, or scroll down, both of which will delve into the ethos of the gym.

2. As a first-time visitor, I want to easily navigate the page to find all the relevant information.
    - The website was designed to be easy to navigate and fluid. The top of each page has a Navigation Bar, with clearly described links so the user has an idea of where they'll end up upon interaction.
    - There are ‘Call to Action’ buttons present throughout the website that help with funnelling the user into any topic they might be interested in.
    - Upon successful submitting of the form on the Contact page, the user is brough to a Thank You page. They then have the option to interact with the links on the Navigation Bar or the button below the thank you text.

3. As a first-time visitor, I want to learn about the gym and its history.
    - Upon reading the "Strive for Greatness" section on the home page, or even after they finish reading the home page, they can then navigate to the About page via the navigation links. Here, they can find more information on the gym, its ethos, and its history.

4. As a first-time visitor, I want to learn where the gym is located.
    - The user is instantly introduced to where the gym is located based on the title text present on under the Victory Fitness text logo on the home page.
    - Furthermore, there is a detailed Google map on the Contact page, allowing a solid understanding of the location.

5. As a first-time visitor, I want to know when I can book my session.
    - Due to the fluidic nature of the home page, the user will arrive at the Why Choose Us section which will provide details for session booking.
    - Additionally, through the About and Coaching pages, information is laid out in a way that makes the user understand that clients are put first and a time that suits them can be agreed upon.

6. As a first-time visitor, I want to know how to best contact the gym.
    - Once the user has read any page, they will find icons in the footer that link to the gym's social media accounts and email.
    - Additionally, if the user has navigated to the Contact page via the navigation links or the ‘Call to Action’ button on the Home page, they can find a form to fill out for a 7-day free trial.

7. As a returning visitor, I want to quickly check the coaching services offered and the differences between them.
    - Upon returning to the website, this information can be found via a ‘Call to Action’ button on the Home page, which directs the user to the Coaching page.
    - Here, the user is told about all the coaching services provided in great detail.

8. As a returning visitor, I want to quickly access all of the social media to find any changes in opening times.
    - This is made very easy by the inclusion of the Footer, which is present across all pages.
    - Here, the user may find links to the gym's Instagram and Facebook, which are their main social media accounts.

9. As a returning visitor, I want to check if the 7-day free trial offer is still available.
    - Returning to the website, all the user has to do is interact with the "Join Now" button on the Hero Image of the Home page, scroll down to see the Contact section which lists the current offer, or navigate to the Contact page which has the full details regarding the current ongoing offer.

10. As a returning visitor, I want to see if there are any new promotions available.
    - The newest promotions are always linked to with the ‘Call to Action’ button on the Hero Image of the Home page.
    - Alternatively, users are incentivised to contact the gym via the form on the Contact page. As such, there is always an offer present there to encourage this.

11. As a returning visitor, I want to easily find the location of the gym via the Google Map section.
    - This can be accomplished by navigating to the Contact page via the ‘Call to Action’ button portion of the Free Trial section on the Home page, or by interacting with the Contact navigation link.
    - Here, the user can find a detailed Google Map detailing where the gym is located.

12. As a returning visitor, I want to see if any professional photoshoots have been uploaded to the gallery since my last visit.
    - All new professional competitions and photoshoots will be uploaded to the Gallery page, which the user can easily navigate to using the links on the Navigation Bar.

13. As the site owner, I want to clearly showcase the different coaching services available and the differences between them.
    - This is easily accomplished by the Coaching page, which can be quickly accessed via ‘Call to Action’ button under the Coaching section, or simply navigated to using the Navigation Bar links.

14. As the site owner, I want users to navigate the website smoothly and easily.
    - The website has a very clear Navigation Bar, with easily seen links due to the contrast of the background and the colour of the links. This allows for a smooth navigation experience.
    - Each section is built to be fluidic and flow in a coherent manner where the user learns relevant information as they go through each section of each page.

15. As the site owner, I want to provide photographs of the inside of the gym and the facilities available.
    - The Gallery page accomplishes this, allowing the site owner to display whichever photos they may like to their userbase.
    - The Gallery page is also easily accessible due to the easy-to-use navigation links.

16. As the site owner, I want to provide contact details for users.
    - Users can find contact details through the address on the Home page, the social media accounts in the icons in the footer, and an online form on the Contact page.
    - Additionally, a Google Map is also present should the users want to make a trip to the gym in person.

17. As the site owner, I want to provide links to the gym's social media accounts.
    - The links to the gym's social media accounts are easily found and accessed through the footer, which is present throughout every page on the website. 
    - No matter where the user is, they are always just a short scroll away from accessing the social media accounts.

18. As the site owner, I want to provide users with a free, no commitment, 7-day trial upon filling out the online form.
    - Often it can be difficult to convince users to fill out forms as other communication can be easier and more readily available. However, a free trial is sufficient incentive for this.
    - This free trial can be viewed via the Home page in one of two ways: it can be accessed via the ‘Call to Action’ Join Now button on top of the Hero Image and/or it can be found in the Free Trial section, which also has its own ‘Call to Action’ button.
    - Lastly, the users can navigate to the Contact page via the Navigation Bar links, where they can find all the details regarding the free trial and the form.

[Back to top &uarr;](#victory-fitness)
<hr>

## Bugs

1. Accessibility Error - Empty Label detected as part of the hamburger navigation menu. 
    - Fix: Add <span> with text inside the label, and attach a CSS class to this span that uses "display: none;".
    - This satisfies the error as the label is no longer empty, even if the content is never displayed.

2. Font Awesome Icons Displayed Incorrectly on Mobile - Icons seem to have been nudged slightly to the right and downwards.  This is a very minor visual bug. This issue only exists on mobile, specifically the Samsung Galaxy S10. I have been unable to recreate it with other mobile phones. This could have something to do with the OS of the S10. This display issue is the same with FA icons on all websites.
    - Fix: None. I have researched the Internet extensively and there is no documentation of this issue or any similar issues.
    - [Here](docs/screenshots/icon-bug.jpg) is a link to a screenshot of the issue. The icons are slightly off-center.

Otherwise, all bugs were due to my own code and were usually fixed as soon as identified due to the fact that they originated from my own mistake. No pervasive bugs, aside from the accessibility error described above.

[Back to top &uarr;](#victory-fitness)
<hr>

## Future Updates

1. Sticky Navigation Bar - This was part of my vision for the website but I was unable to find a solution to this without relying on JavaScript. My vision is as follows: I wanted the Navigation Bar to be transparent when it was resting above the Hero Images, but once it left those regions, it would become an opaque black colour as it follows the user down the page.

2. Fullscreen Hamburger Menu - This is very difficult to accomplish without JavaScript and I found myself struggling with the current hamburger menu as is. My vision for this was to have the entire screen to be covered in white with links in black structured in a column appearing the middle.

3. Coaching Pricing Plan Comparisons - This was part of the plan for the website but I found myself not having the time necessary to bring this idea to light. Hence, I plan to work on it in the future and put it at the top of Coaching page, so users are available to compare plans with just a single glance.

4. Google Map - This was originally a part of the website but it caused major performance issues and hence was removed and instead replaced by an image.

5. Testimonials - This was originally a part of the plan for this project but unfortunately, Google Reviews aren't too easy to embed without having to pay for the service. The alternatives are well over my head but it's definitely something I'd like to look into in the future.

I'd like to revisit this project in the future after having learned more about JavaScript, especially if Ronan Kiely of Victory Fitness would be interested in using this website.

## Deployment

This project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the repository: [Victory Fitness](https://github.com/Ryael/victory-fitness).
2. Locate the Settings button, and then click it.
3. Scroll down to the Pages section, which is found under "Code and automation".
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will then automatically refresh.
6. Scroll back to the top of the page to locate the now published website link.

It can also be forked via the following steps:

1. Log in to GitHub and locate the repository again, as described above.
2. At the top right corner of the repository, you will see a "Fork" button. Click on it.
3. You will then be asked where you want to save it, so choose a location.
4. You now should have a copy of this repository in your own GitHub account.

[Back to top &uarr;](#victory-fitness)
<hr>

## Technologies Used

### Languages

- HTML 5
- CSS 3

### Frameworks & Tools

- [GitPod](https://gitpod.io) - IDE used to code and build this project.
- [GitHub](https://github.com/) - The repository was created here, is currently stored here, and was deployed via the GitHub Pages features.
- [Balsamiq](https://balsamiq.com) - Used to create wireframes.
- [Obsidian](https://obsidian.md/) - Used to take notes and create to-do lists.
- [Adope Photoshop](https://www.adobe.com/products/photoshop.html) - Used to crop, resize, and edit images.
- [W3C HTML Validator](https://validator.w3.org/) - Used to validate HTML code.
- [W3C JigSaw Validator](https://jigsaw.w3.org/css-validator/) - Used to Validate CSS code.
- [WAVE WebAIM](https://wave.webaim.org/) - Used to check accessibility.
- [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) - Used to check performance, SEO, accessibility, and best practices.
- [Mozilla Firefox Developer Tools](https://www.mozilla.org/en-US/firefox/new/) - Used to check and test the project.
- [AmIResponsive](https://ui.dev/amiresponsive) - Used to create the Am I Responsive image mock-up.
- [FreeConvert](https://www.freeconvert.com/jpg-to-webp) - Used to convert .PNG to .WEBP.
- [TinyPNG](https://tinypng.com/) - Used to compress images.
- [Google Fonts](https://fonts.google.com/) - Fonts were imported from here.
- [Font Awesome](https://fontawesome.com/) - Icons are used from here.
- [Favicon.io](https://favicon.io/) - Used to create a favicon out of a .PNG.
- [ShareX](https://getsharex.com/) - Used to take screenshots.
- [Color-Name](https://www.color-name.com/) - Used to find complementary shades of colours used.
- [CoralNodes](https://www.coralnodes.com/best-google-font-combinations/) - Used to find Google Font combinations.

## Credits

1. [Victory Fitness](https://victoryfitnesstraining.com/?ad=ie) - This project was only possible due to Ronan Kiely letting me base this website on his business. He helped provide me with information, text, photographs, logos, advice, and direxction. All of the content belongs to Victory Fitness.
2. [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template) - This project was first based off the repository created by Code Institute. This template made it very easy to work with in GitPod.
3. [Alvaro Trigo](https://codepen.io/alvarotrigo/pen/MWEJEWG) - This codepen is what my own hamburger menu was based on due to me running into so many issues with trying to do it alone. Their code helped me understand how animations function with smaller icons in CSS, as well as how to use media queries to manipulate the navigation bar. The code has partially modified but otherwise the idea is taken from this codepen.
4. [Stack Overflow](https://stackoverflow.com/) & [W3Schools](https://www.w3schools.com/) - These two website were instrumental in me furthering my understanding of HTML and CSS.
5. [Code Institute](https://codeinstitute.net/ie/) - Last but certainly not least, this project wouldn't have been possible without the course and material presented there.


## Acknowledgements 

- Akshat Garg - Akshat is an absolutely amazing mentor that's friendly, knowledgeable, and helpful. He's been super helpful in providing me with suggestions and advice.
- My family and friends, who have been incredibly supportive and have been instrumental in keeping me motivated throughout this project. Thank you all so much! All of you who helped proofread, test, provide feedback on the UI, code, and etc... I couldn't have done it without you all!
- The Code Institute community on Slack - Easy, straightforward, and always willing to help and provide advice.
- Love Running - Ultimately, it wasn't until we went through this project that I realised that this was something I could do. A lot of the website is loosely based on it, too.