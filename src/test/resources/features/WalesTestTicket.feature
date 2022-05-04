@wip
Feature: Wales Test Ticket

Background:
	Given I open the 'NHS Costs' page
	Then I am on the 'Check what help you could get to pay for NHS costs - NHSBSA' page
	When I click the 'Start now' button 
	Then I am on the 'Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA' page
	When I select the 'Wales' radio
	And I click the 'Next' button
	Then I am on the 'Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA' page
	When I select the 'Yes' radio
	And I click the 'Next' button
  Then I am on the 'Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA' page
  When I select the 'Wales' radio
  And I click the 'Next' button
  Then I am on the 'What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA' page

Scenario: Blank Fields
	When I clear 'day' date of birth field
	And I clear 'month' date of birth field
	And I clear 'year' date of birth field
	And I click the 'Next' button
	Then the 'Enter your date of birth' error message is displayed


Scenario Outline: Invalid date of birth
	When I enter '<day>' into 'day' date of birth field
	And I enter '<month>' into 'month' date of birth field
	And I enter '<year>' into 'year' date of birth field
	And I click the 'Next' button
	Then the 'Enter your date of birth' error message is displayed

Examples:
|day | month | year|
|35  | 13    | 2026|
|28  | 13    | 2025|
|28  | 12    | 2024|
|34  | 14    | 1990|
|30  | 15    | 1991|

  
Scenario Outline: 0-15 years old
When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Because you're under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA' page
	
	
Examples:
|day | month | year|
|03  | 05    |2022 |
|12  | 11    |2012 |
|06  | 05    |2006 |



Scenario Outline: 16-18 years old and in full time education
When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'Yes' radio
And I click the 'Next' button
Then I am on the 'Because you're under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA' page
	
Examples:
|day | month | year|
|03  | 05    |2006 |
|10  | 10    |2005 |
|06  | 05    |2003 |
	
	
	

Scenario Outline: 16-18 years old and not in full time education
When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA' page

Examples:
|day | month | year|
|03  | 05    |2006 |
|10  | 10    |2005 |
|06  | 05    |2003 |




Scenario Outline: 19-39 years old
When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA' page


Examples:
|day | month | year|
|03  | 05    |2003 |
|10  | 10    |1992 |
|06  | 05    |1982 |




Scenario Outline: 40-59 years old

When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA' page


Examples:
|day | month | year|
|03  | 05    |1982 |
|10  | 10    |1971 |
|06  | 05    |1962 |

	
Scenario: 60 years old
When I enter '03' into 'day' date of birth field
And I enter '05' into 'month' date of birth field
And I enter '1962' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA' page


Scenario Outline: 61-120 years old
When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then I am on the 'Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA' page
When I select the 'No' radio
And I click the 'Next' button
Then I am on the 'You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA' page

Examples:
|day | month | year|
|03  | 05    |1961 |
|10  | 10    |1935 |
|06  | 05    |1901 |
  
  
Scenario Outline: 121+ years old
When I enter '<day>' into 'day' date of birth field
And I enter '<month>' into 'month' date of birth field
And I enter '<year>' into 'year' date of birth field
And I click the 'Next' button
Then the 'Check the year you were born is correct' error message is displayed
 
Examples:
|day | month | year|
|03  | 05    |1901 |
|10  | 10    |1030 |
|06  | 05    |0001 |