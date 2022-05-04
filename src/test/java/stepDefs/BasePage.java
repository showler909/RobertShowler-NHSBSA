package stepDefs;

import static org.junit.Assert.assertTrue;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import Utils.env.BaseTest;

public class BasePage implements BaseTest {

	public static boolean displayResult = false;
	public boolean selectedResult = false;
	public static int Random_int;
	public static int tableSize;
	public static String displayText;
	public static String displayText2;
	public static String displayValue;
	public static String SavedDate;
	public static String savedText;
	public static String savedText2;
	public static String savedText3;
	public static String SavedEmail;
	public static String SavedReference;
	public static String[] SavedArray;
	public static String savedWorkItemID = null;
	public static String Date;
	public static boolean savedBoolean;
	public static String generatedString;

	public static void sendKeys(String ID, String text) {
		driver.findElement(By.id(ID)).sendKeys(text);
	}

	public static void clickOn(String ID) {

		if (ID.contains("//*")) {
			// wait.until(ExpectedConditions.elementToBeClickable(By.xpath(ID)));
			driver.findElement(By.xpath(ID)).click();
		} else {
			// wait.until(ExpectedConditions.elementToBeClickable(By.id(ID)));
			driver.findElement(By.id(ID)).click();

		}

	}

	public static void clickOnLinkText(String linkText) {

		driver.findElement(By.linkText(linkText)).click();
	}

	public static void clearID(String ID) {
		driver.findElement(By.id(ID)).clear();
	}

	public void clearXpath(String xpath) {
		driver.findElement(By.xpath(xpath)).clear();
	}

	public static void getText(String ID) {

		if (ID.contains("//*")) {
			try {
				displayText = driver.findElement(By.xpath(ID)).getText();

			} catch (Exception e) {
				displayText = null;
			}
		} else {
			try {
				displayText = driver.findElement(By.id(ID)).getText();

			} catch (Exception e) {
				displayText = null;
			}
		}

		System.out.println("the found display text is " + displayText + " for id " + ID);

	}

	public void getText2(String ID) {

		if (ID.contains("//*")) {
			try {
				displayText2 = driver.findElement(By.xpath(ID)).getText();

			} catch (Exception e) {
				displayText2 = null;
			}
		} else {
			try {
				displayText2 = driver.findElement(By.id(ID)).getText();

			} catch (Exception e) {
				displayText2 = null;
			}
		}

		System.out.println("the found display text is " + displayText + " for id " + ID);

	}

	public void getValue(String ID) {

		if (ID.contains("//*")) {
			try {
				displayValue = driver.findElement(By.xpath(ID)).getAttribute("value");
			} catch (Exception e) {
				displayValue = null;
			}
		} else {
			try {
				displayValue = driver.findElement(By.id(ID)).getAttribute("value");

			} catch (Exception e) {
				displayValue = null;
			}
		}

		System.out.println("the found display value is " + displayValue + " for id " + ID);

	}

	public static void isDisplayed(String ID) {

		if (ID.contains("//*")) {

			try {
				displayResult = driver.findElement(By.xpath(ID)).isDisplayed();
			} catch (Exception e) {
				displayResult = false;
			}
		} else {

			try {
				displayResult = driver.findElement(By.id(ID)).isDisplayed();
			} catch (Exception e) {
				displayResult = false;
			}
		}
		System.out.println("the found display result is " + displayResult + " for id " + ID);
	}

	public void isDisplayedbyLinkText(String LinkText) {
		try {
			displayResult = driver.findElement(By.linkText(LinkText)).isDisplayed();
		} catch (Exception e) {

			displayResult = false;
		}

	}

	public void isSelected(String ID) {
		try {
			selectedResult = driver.findElement(By.id(ID)).isSelected();
		} catch (Exception e) {
			selectedResult = false;
		}

		System.out.println(selectedResult + " is selected " + ID);
	}

	public void Tab(String ID) {
		driver.findElement(By.id(ID)).sendKeys(Keys.TAB);
	}

	public void getRandomInteger() {
		Random rand = new Random();
		Random_int = rand.nextInt(1000);
	}

	public void saveDate(String Date) {
		SavedDate = Date;
		return;
	}

	public static String GetSavedDate() {
		return SavedDate;
	}

	public static void saveText(String text) {
		savedText = text;
		return;
	}

	public static void saveText2(String text) {
		savedText2 = text;
		return;
	}

	public static void saveText3(String text) {
		savedText3 = text;
		return;
	}

	public static String getSavedText() {
		return savedText;
	}

	public static String getSavedText2() {
		return savedText2;
	}

	public void saveArray(String[] Array) {
		SavedArray = Array;
		return;
	}

	public static String[] GetArray() {
		return SavedArray;
	}

	public void getTableSize(String tableID) {
		WebElement table = null;

		if (tableID.contains("//*")) {
			try {
				table = driver.findElement(By.xpath(tableID));
			} catch (Exception e) {
				table = null;
			}
		} else {
			try {
				table = driver.findElement(By.id(tableID));
			} catch (Exception e) {
				table = null;
			}
		}
		List<WebElement> rows = table.findElements(By.tagName("tr"));

		tableSize = rows.size();
		System.out.println("the table size is " + tableSize);

	}

	public boolean isFileDownloaded(String downloadPath, String fileName) {
		File dir = new File(downloadPath);
		File[] dirContents = dir.listFiles();

		for (int i = 0; i < dirContents.length; i++) {
			if (dirContents[i].getName().equals(fileName)) {
				// File has been found, it can now be deleted:
				dirContents[i].delete();
				return true;
			}
		}
		return false;
	}

	public static void getDate(String option, String format) {

		// This gets either todays, tomorrow or yesterdays date
		int i = 0;

		if (isNumeric(option)) {
			i = Integer.parseInt(option);
			option = "other";
		}

		// get a calendar instance, which defaults to "now"
		Calendar calendar = Calendar.getInstance();

		// add one day to the date/calendar

		switch (option.toLowerCase()) {
		case "tomorrow":
			calendar.add(Calendar.DAY_OF_YEAR, 1);
			break;
		case "yesterday":
			calendar.add(Calendar.DAY_OF_YEAR, -1);
			break;
		case "today":
			calendar.add(Calendar.DAY_OF_YEAR, 0);
			break;
		case "other":
			calendar.add(Calendar.DAY_OF_YEAR, i);
			break;
		default:
			throw new IllegalArgumentException("Invalid selection: getDate " + option);
		}

		// now get date
		Date date = calendar.getTime();
		DateFormat dateFormat = new SimpleDateFormat(format);
		Date = dateFormat.format(date);
		System.out.println("the requested date format is " + Date);

	}

	public static void saveBoolean(boolean genericBoolean) {
		savedBoolean = genericBoolean;
		return;
	}

	public boolean getBoolean() {
		return savedBoolean;
	}

	public static void stringBuilder(int length) {

		if (length > 0) {
			int leftLimit = 48; // numeral '0'
			int rightLimit = 122; // letter 'z'
			Random random = new Random();

			generatedString = random.ints(leftLimit, rightLimit + 1)
					.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(length)
					.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();
			System.out.println(generatedString);
		} else {
			System.out.println("no text length selected");
		}

	}

	public static void addProduct(String product) {

		WebElement table = driver.findElement(By.xpath("//*[@id=\"maincontent\"]/div/div/div/div[2]/table"));
		List<WebElement> productList = table.findElements(By.tagName("tr"));
		int totalRows = productList.size();
		totalRows = totalRows - 2;
		boolean found = false;
		for (int i = 0; i <= totalRows; i++) {
			isDisplayed("nextButton");
			getText("productDetails" + i);
			if (displayText.contains(product)) {
				clickOn("addId" + i);
				found = true;
				if (found) {
					break;
				}
			} else if (displayResult && i == totalRows) {
				i = 0;
				clickOn("nextButton");
			}

		}

	}

	public void productFound(String productnames) {

		String[] ProductArray = productnames.split(";");
		System.out.print(ProductArray[0]);
		WebElement table = driver.findElement(By.xpath("//*[@id=\"maincontent\"]/div/div/div/div[2]/table"));
		List<WebElement> productItems = table.findElements(By.tagName("td"));

		int totalItems = productItems.size();

		// search the list for the passed variable.
		boolean found = false;
		for (String select : ProductArray) {
			for (int i = 0; i <= totalItems; i++) {
				System.out.println("the product being looked for is: " + select);
				if (totalItems == i) {
					assertTrue("productFound: product not found", found);
				}
				if (productItems.get(i).getText().contains(select)) {
					assertTrue("productFound: products match", productItems.get(i).getText().contains(select));
					break;
				}
			}
		}

	}

	public static boolean isNumeric(String str) {
		return str != null && str.matches("[-+]?\\d*\\.?\\d+");
	}

	public void ClearBrowserCasher() {
		driver.manage().deleteAllCookies(); // delete all cookies
		// Thread.sleep(7000); //wait 7 seconds to clear cookies.

	}

}
