package hooks;


import java.io.IOException;

import Utils.env.BaseTest;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks implements BaseTest
{
	@Before("@smoke")
	public void beforeScenario2(Scenario scenario) throws IOException
	{
		System.out.println("***** START of Scenario: " + scenario.getName() + " *****");
		System.out.println("Test setup - insert any test setup here");
	}


	@After
	public void tearDown1(Scenario scenario) throws Exception
	{
		driver.navigate().refresh();
		driver.manage().deleteAllCookies();
						
		System.out.println("***** END of Scenario: " + scenario.getName() + " *****");
		System.out.println("Test teardown - insert any post test activities here");

	}

}	
