package stepDefs;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.WalesTestTicketPageElements;

public class WalesTestTicketStepDefs extends BasePage {
	
	@When("^I clear '(.+)' date of birth field$")
	public void iClearDateOfBirthdField(String field) throws Throwable {
		switch (field) {
		case "day":
			clearID(WalesTestTicketPageElements.DayField); // Good practice to always clear fields prior to any testing, to avoid potentially hidden characters existing that may compromise intended results 
			break;
		case "month":
			clearID(WalesTestTicketPageElements.MonthField);
			break;
		case "year":
			clearID(WalesTestTicketPageElements.YearField);
			break;
		default:
		}
	}


	@When("^I enter '(.+)' into '(.+)' date of birth field$")
	public void iEnterIntoDateOfBirthdField(String value, String field) throws Throwable {
		switch (field) {
		case "day":
			clearID(WalesTestTicketPageElements.DayField); // clear best practice
			sendKeys(WalesTestTicketPageElements.DayField, value);
			break;
		case "month":
			clearID(WalesTestTicketPageElements.MonthField);
			sendKeys(WalesTestTicketPageElements.MonthField, value);
			break;
		case "year":
			clearID(WalesTestTicketPageElements.YearField);
			sendKeys(WalesTestTicketPageElements.YearField, value);
			break;
		default:
		}
	}

	

	@Then("^the 'Enter your date of birth' error message is displayed$")
	public void theEnterYourDateOfBirthErrorMessageIsDisplayed() throws Throwable {
		isDisplayed(WalesTestTicketPageElements.EnterYourDateOfBirthErrorMessage);
		assertTrue(displayResult);
	}
	
	@Then("^the 'Check the year you were born is correct' error message is displayed$")
	public void theCheckTheYearYouWereBornIsCorrectIsDisplayed() throws Throwable {
		isDisplayed(WalesTestTicketPageElements.CheckTheYearYouWereBornIsCorrectErrorMessage);
		assertTrue(displayResult);
	}
//
//	@Then("^the new password error message is displayed$")
//	public void theNewPasswordErrorMessageIsDisplayed() throws Throwable {
//		isDisplayed(ChangePasswordPageElements.NewPasswordErrorMessage);
//		assertTrue(displayResult);
//	}
//
//	@Then("^the confirm new password error message is displayed$")
//	public void theConfirmNewPasswordErrorMessageIsDisplayed() throws Throwable {
//		isDisplayed(ChangePasswordPageElements.ConfirmNewPasswordErrorMessage);
//		assertTrue(displayResult);
//	}

}
