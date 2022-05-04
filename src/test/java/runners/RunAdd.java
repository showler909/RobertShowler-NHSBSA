package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true,
        format =  {"pretty", "html:target/cucumber","json:target/jsonReports/ExampleTest.json"},
        glue = {"stepDefs"},
        features = {"src/test/resources/features/"},
        tags ={"@add"}
)

public class RunAdd {
}
 