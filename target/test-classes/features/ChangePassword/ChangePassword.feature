

Feature: Change Password

Background:
	Given I open the timeman login page
	Then I am on the 'Sign in to TimeMan' page
	When I enter 'TESTA' username 
	And I enter 'EP5oC2l8FdOE3o!999' password
	And I click sign in
	Then I am on the 'TimeMan - Manage your timesheets' page
	Then I click on 'Change Password' tab
  And I am on the 'TimeMan - Change your password' page
  
  
Scenario: Change Password Unsuccessful
  When I enter 'mouse' into 'oldPassword' change password field
	And I enter 'goose' into 'newPassword' change password field
	And I enter 'moose' into 'confirmNewPassword' change password field
	And I click on 'Change Password' button
	Then the old password error message is displayed
	Then the new password error message is displayed
	Then the confirm new password error message is displayed
	
  
Scenario: Change Password Successful
  When I enter 'EP5oC2l8FdOE3o!999' into 'oldPassword' change password field
	And I enter 'EP5oC2l8FdOE3o!123' into 'newPassword' change password field
	
	And I enter 'EP5oC2l8FdOE3o!123' into 'confirmNewPassword' change password field
	And I click on 'Change Password' button
  Then I am on the 'TimeMan - Manage your timesheets' page
	Then I click on 'Sign Out' link
	And I am on the 'Sign in to TimeMan' page
  Then I enter 'TESTA' username 
	And I enter 'EP5oC2l8FdOE3o!123' password
	And I click sign in
	Then I am on the 'TimeMan - Manage your timesheets' page
	Then I click on 'Change Password' tab
  And I am on the 'TimeMan - Change your password' page
  When I enter 'EP5oC2l8FdOE3o!123' into 'oldPassword' change password field
	And I enter 'EP5oC2l8FdOE3o!999' into 'newPassword' change password field
	And I enter 'EP5oC2l8FdOE3o!999' into 'confirmNewPassword' change password field
	And I click on 'Change Password' button
  Then I am on the 'TimeMan - Manage your timesheets' page
	Then I click on 'Sign Out' link
	And I am on the 'Sign in to TimeMan' page
  Then I enter 'TESTA' username 
	And I enter 'EP5oC2l8FdOE3o!999' password
	And I click sign in
	Then I am on the 'TimeMan - Manage your timesheets' page

  
  
  
  
  
  