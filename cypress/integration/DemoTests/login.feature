Feature: Login

A user can login to viewpoint via the login page 

Background: 
	Given A user navigates to the login page 
	And the field '#username' is empty
	And the field '#password' is empty


Scenario: An error message is displayed upon an empty login fields sign-in attempt
	When I click on 'Sign in'
	Then a mandatory fields error message "The fields USERNAME and PASSWORD are required." will be displayed to the user 

Scenario: An error message is displayed upon an empty password login fields sign-in attempt
	And the username field '#username' has been populated
	When I click on 'Sign in'
	Then a mandatory fields error message "The fields USERNAME and PASSWORD are required." will be displayed to the user	
	  
Scenario: An error message is displayed upon an empty username login field sign-in attempt
	And the password field '#password' has been populated
	When I click on 'Sign in'
	Then a mandatory fields error message "The fields USERNAME and PASSWORD are required." will be displayed to the user