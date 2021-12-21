Feature: Company filter 

Background: 
Given user is on the landing page for WD site

Scenario: The user can filter the company public votes by account name  

	When user clicks the Company Name "Activision Blizzard Inc" hyper-link
	Then the user lands onto the "Activision Blizzard Inc" vote card page.
	And "Activision Blizzard Inc" should appear in the top banner