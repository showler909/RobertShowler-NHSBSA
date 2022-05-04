package stepDefs;

import static org.junit.Assert.assertEquals;
import Utils.env.BaseTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.CommonFunctionPageElements;

public class CommonFunctionsStepDefs extends BasePage implements BaseTest {

	@Given("^I open the 'NHS Costs' page$")
	public void IOpenTheNHSCostsPage() {
		driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
	}

	@When("^I select the 'Wales' radio$")
	public void ISelectTheWalesRadio() {
		clickOn(CommonFunctionPageElements.WalesRadio);
	}

	@When("^I select the 'Yes' radio$")
	public void ISelectTheYesRadio() {
		clickOn(CommonFunctionPageElements.YesRadio);
	}

	@When("^I select the 'No' radio$")
	public void ISelectTheNoRadio() {
		clickOn(CommonFunctionPageElements.NoRadio);
	}

	@And("^I click the 'Start now' button$")
	public void IClickTheStartNowButton() {
		clickOn(CommonFunctionPageElements.startNowButton);
	}

	@And("^I click the 'Next' button$")
	public void IClickTheNexButton() {
		clickOn(CommonFunctionPageElements.nextButton);
	}

	@Then("^I am on the '(.+)' page$")
	public void IAmOnThePage(String ExpectedPageTitle) {
		String ActualPageTitle = driver.getTitle();

		System.out.println("the actual page title is: " + ActualPageTitle);
		System.out.println("the url I am on is: " + driver.getCurrentUrl());

		System.out.println("the expected page title is: " + ExpectedPageTitle);
		getText("content");
		assertEquals(ExpectedPageTitle, ActualPageTitle);
	}

}
