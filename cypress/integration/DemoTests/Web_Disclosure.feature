Feature: Being a plugin handling DataTable scenario

#Web Disclosure (WD) is a public site where our clients can make the votes public.


Background: 
Given user is on the landing page for WD site

	Rule: The country filter will only return and display the selected options

Scenario: The user can filter the company public votes by account location  
	Given user is on the landing page for WD site
	And the Country filter is available
	When user selects “Belgium” from the Country filter list on left panel
	And clicks on Update button for the country filter list
	Then the grid displays all meetings that are associated with the country “Belgium”
	And no meetings associated with any other country appear on the list


	Rule: The company filter when applied will only shows vote cards specicifc to the 

Scenario: The user can filter the company public votes by account name  

	When user clicks the Company Name “Activision Blizzard Inc” hyperlink
	Then the user lands onto the “Activision Blizzard Inc” vote card page.
	And “Activision Blizzard Inc” should appear in the top banner


https://viewpoint.glasslewis.com/WD/MeetingDetail/?siteId=DemoClient&securityId=17453&meetingId=958156


