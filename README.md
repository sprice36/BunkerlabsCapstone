## BunkerLabs Marketplace

## <a href=""> BunkerLabs Marketplace Demo</a>

BunkerLabs Marketplace represents not only the capstone project for Digital Crafts, for which the team members employed their development skills learned during the duration of the cohort, but also a platform the veterans seeking support when starting a business, can use to help in their journey.

## Team Members
* <a href="https://github.com/stephenjarrett"> Stephen Jarrett</a>
* <a href="https://github.com/sprice36"> Sebastian Price</a>
* <a href="https://github.com/Dsande41"> Delia Sanders</a>
* <a href="https://github.com/Dmckinney821"> Daniel McKinney</a>

## Technologies Used
* HTML5
* CSS3
* React
* Node.js
* MongoDB
* Express
* Robo3T/ MongoCompass
* Postman

## Site walkthrough 
The BunkerLabs Marketplace Atlanta website serves as a launching platform for veterans to present their startup businesses and elicit support in order to have a healthy growth and be successful in a competitive market.


### Landing Page
The Landing Page displays the Logo of the companies and their names.The user can both search a company by name and also sort by industry type and by stage of the bussiness. After all the previous steps are executed, the user is presented with a grid of logos that match the selected criterias.

<img src="readme/landingPage.png">

### Company Detail Page
The user can click on the Company Logo and it will be redirected to a Company Detail Page. On this page, one can find more information about the startup ranging from Logo and company name, to the  image of the entrepreneur.Also, the top three needs of the business are displayed and the social network addresses for the respective company.

<img src="readme/Company.png">


### Admin Page
The Admin Page has two main components: the Admin Panel Login Page and the Admin Home Panel Page. The Admin Page was created having both security and ease of use  in mind. On this page, the admin can enter data for a company, edit the information of the business or delete a company profile.

<img src="readme/AdminPage">
          

#### Admin Panel Login Page
On the Admin Panel Login Page, the administrator must enter a username and password to be granted access to the Admin Home Panel.Only after the login credentials are valided, the Admin can access the page and start making changes.

<img src="readme/Login">

#### Admin Home Panel Page
Once granted login priviledges, the administrator can access the Admin Home Panel Page and choose from a dropdown to perform tasks such as: add a new company, update an existing  or be removed from the database.

## About Page 
The About Bunker Labs Marketplace, displayed as an icon, redirects the user to a new page that explains the purpose of this application, its intended users and outcome.

## Challenges
* Even thoght the team considered features for the application that will make the Marketplace better, we had to settle on delivering a product that serves the  needs of the stakeholder, due to time constraints.
* Using Json Web Tokens for server authentification of admin login was a new concept we first tackled for this project and it was challenging at first. 
* We wanted to ensure that the login and the stored personal information will be safe so we decided to used a SSL Certification. This process was a task that any of the team members have performed before,so it was time consuming.Some the steps involed are:
 * The stakeholder purchased a domain so we can point it at the IP address hosted on Linode. 
 * For the documentation of the process, in order to automatically enable HTTPS on the website, certbot was used.
 * Edit the root and SSH profiles to point the domain at the right IP address.



## Phase Two
Future iterations of this application will be able to have a user login page  Upon receiving login credentioals, the company owner can upload relevant information about their startup, edit their accounts as the business evolves and even delete it if they so desire.





