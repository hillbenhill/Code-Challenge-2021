Feature: Being a plugin handling DataTable scenario

#Web Disclosure (WD) is a public site where our clients can make the votes public.


Background: 
Given user is on the landing page for WD site

	

Scenario: The user can filter the company public votes by account location  
	And the Country filter is available
	When user selects "Belgium" from the Country filter list on left panel
	And clicks on Update button for the country filter list
	Then the grid displays all meetings that are associated with the country "Belgium"
	And no meetings associated with any other country appear on the list


	 







