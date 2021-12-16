Software QA Engineer - Code Challenge 2021
"stepDefinitions": "cypress/support/step_definitions/",
Question 1 - Requirements
The following workflow describes a very basic navigation workflow on our corporate website.
1.    In a browser navigate to http://www.glasslewis.com 
2.    Navigate to the client login link on the top right of the page here:
3.    From the dialog click on the Viewpoint Voting Platform link here:
4.    That should bring you to the following page https://viewpoint.glasslewis.com/ 
5.    On that page click on the “Sign In” button
6.    An error message should be displayed: The fields USERNAME and PASSWORD are required.
Based on this workflow can you:
•         Write up a clean user story including “description” and “acceptance criteria” to cover the sign in validation functionality on the login page. Please use whatever syntax for the acceptance criteria that you feel is most appropriate.
Question 2 – Automation
Background
Web Disclosure (WD) is a public site where our clients can make the votes public.
The following acceptance criteria has been provided to the team to create some functionality for a client facing website:
User has been giving the URL for the WD landing page
1.    Given user is on the landing page for WD site
And the Country filter is available
When user selects “Belgium” from the Country filter list on left panel
And clicks on Update button for the country filter list
Then the grid displays all meetings that are associated with the country “Belgium”
And no meetings associated with any other country appear on the list
2.    Given user is on the landing page for WD site
When user clicks the Company Name “Activision Blizzard Inc” hyperlink
Then the user lands onto the “Activision Blizzard Inc” vote card page.
And “Activision Blizzard Inc” should appear in the top banner
As a result, the following set of pages was developed by the team:
WD Site URL: https://viewpoint.glasslewis.com/WD/?siteId=DemoClient 
Based on this can you:
1.    Provide a test plan and a set of integration test cases that could be used to test the acceptance criteria.
2.    Provide a full set of automated tests using Selenium Webdriver or Cypress that checks if the actual behavior matches to the acceptance criteria.
3.    Provide instructions on how to run your tests.
4.    Based on what you found difficult or easy from the automation exercise please give some feedback that development team could use to improve the system under test to make it easier to automate.

Technical requirements
•         Write your code in one of the following programming languages: C#, Javascript/Typescript, Java.
•         Include instructions for setting up and running your project.
•         Provide your code in a zip, rar, tar, tar.gz, 7zip file or a link to a public repository such as github or gitlab.
•         In case of choosing selenium, use the testing framework that suits you best, as long as it's free or opensource.
What we are looking for
•         Clean code, easy to understand and maintainable
•         Showing your work through your commit history
•         Test case quality and adequacy
•         How clean and reasonable is the separation of responsibilities
•         Project structure
Extra points (optional):
•         Add support for Cross-Browser Automation Testing (IE, Chrome and Firefox)
•         Tests run heedlessly
•         Tests capture screenshots of failures
•         Containerized project
•         Testing configuration settings are passed as environment variables
•         Tests can be configured to run on various browser

Broken company filter and incomplete list 
 
Many update the default filter by country when more than one selected rather than by account name 
 

