$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WalesTestTicket.feature");
formatter.feature({
  "line": 2,
  "name": "Wales Test Ticket",
  "description": "",
  "id": "wales-test-ticket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 7247429800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 101987600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 232385000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 74856500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 68902500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 221050100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 85703800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 56967600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 280677800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 79303200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 68239400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 223049400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86691700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Blank Fields",
  "description": "",
  "id": "wales-test-ticket;blank-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I clear \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I clear \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I clear \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "day",
      "offset": 9
    }
  ],
  "location": "WalesTestTicketStepDefs.iClearDateOfBirthdField(String)"
});
formatter.result({
  "duration": 32091800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "month",
      "offset": 9
    }
  ],
  "location": "WalesTestTicketStepDefs.iClearDateOfBirthdField(String)"
});
formatter.result({
  "duration": 48959700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "year",
      "offset": 9
    }
  ],
  "location": "WalesTestTicketStepDefs.iClearDateOfBirthdField(String)"
});
formatter.result({
  "duration": 55676800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 214676300,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theEnterYourDateOfBirthErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 40683500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Invalid date of birth",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 35,
      "id": "wales-test-ticket;invalid-date-of-birth;;1"
    },
    {
      "cells": [
        "35",
        "13",
        "2026"
      ],
      "line": 36,
      "id": "wales-test-ticket;invalid-date-of-birth;;2"
    },
    {
      "cells": [
        "28",
        "13",
        "2025"
      ],
      "line": 37,
      "id": "wales-test-ticket;invalid-date-of-birth;;3"
    },
    {
      "cells": [
        "28",
        "12",
        "2024"
      ],
      "line": 38,
      "id": "wales-test-ticket;invalid-date-of-birth;;4"
    },
    {
      "cells": [
        "34",
        "14",
        "1990"
      ],
      "line": 39,
      "id": "wales-test-ticket;invalid-date-of-birth;;5"
    },
    {
      "cells": [
        "30",
        "15",
        "1991"
      ],
      "line": 40,
      "id": "wales-test-ticket;invalid-date-of-birth;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 120251700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 80166500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 228767600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 121201300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 93651100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 325069300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 108929800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 105569300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 312073500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 125444200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 76010900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 343957700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 131506300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Invalid date of birth",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u002735\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u002713\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00272026\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 165258100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 151802600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2026",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 118973200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 252256800,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theEnterYourDateOfBirthErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 37907800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 125928900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103144200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 260099200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100831800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 96508100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 248963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 94516500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 74854600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 297642600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 82559900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 84410300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 320916000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 101366300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Invalid date of birth",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u002728\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u002713\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00272025\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 157921100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 119877300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 147989900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 261693900,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theEnterYourDateOfBirthErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 37964700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 132301800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 105509100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 296891300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 147910900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 100470600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 270531700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 118786000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 86667300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 268934500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 110865700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 84783500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 333672400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 120558400,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Invalid date of birth",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u002728\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u002712\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00272024\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 162795500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 190367400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2024",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 166393800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 301896700,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theEnterYourDateOfBirthErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 63407800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 138594200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103077800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 310815900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92981200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 106605800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 329855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 144223400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 111102100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 277144200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 107423300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 151504000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 376882700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 145513600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Invalid date of birth",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u002734\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u002714\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00271990\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 132903900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 130390200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 135112200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 267097400,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theEnterYourDateOfBirthErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 45175600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 289922800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 153016300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 319696200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 105369300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 89030800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 300391500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98124900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 97745500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 303639400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97830900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 94041600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 352297900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 160304200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Invalid date of birth",
  "description": "",
  "id": "wales-test-ticket;invalid-date-of-birth;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u002730\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \u002715\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00271991\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the \u0027Enter your date of birth\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 224019800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 122160200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1991",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 123427700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 361591700,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theEnterYourDateOfBirthErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 75326700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "0-15 years old",
  "description": "",
  "id": "wales-test-ticket;0-15-years-old",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I am on the \u0027Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;0-15-years-old;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 52,
      "id": "wales-test-ticket;0-15-years-old;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "2022"
      ],
      "line": 53,
      "id": "wales-test-ticket;0-15-years-old;;2"
    },
    {
      "cells": [
        "12",
        "11",
        "2012"
      ],
      "line": 54,
      "id": "wales-test-ticket;0-15-years-old;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "2006"
      ],
      "line": 55,
      "id": "wales-test-ticket;0-15-years-old;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 154347200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 142790300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 295811300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 88197000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 89583100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 270734200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86683000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 89545000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 387076900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 120932000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 97040100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 355354200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 157006300,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "0-15 years old",
  "description": "",
  "id": "wales-test-ticket;0-15-years-old;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \u00272022\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I am on the \u0027Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 226590700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 173510700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 123205900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 355703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 116125800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 212229600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100698400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 328122200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 153639000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 140951600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 348454200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 117848100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 139551900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 303886800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 93647500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 94400200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 290170600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 108923800,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "0-15 years old",
  "description": "",
  "id": "wales-test-ticket;0-15-years-old;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I enter \u002712\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I enter \u002711\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \u00272012\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I am on the \u0027Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 122883100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 102811000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2012",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 124352600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 333282300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 116379300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 161278800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 95153700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 260248400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97999900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 59309500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 288063500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 74416000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 75377800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 355055200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 151148200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 132089800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 366643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 102747000,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "0-15 years old",
  "description": "",
  "id": "wales-test-ticket;0-15-years-old;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \u00272006\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I am on the \u0027Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 149561300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 153795600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2006",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 169185500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 238521100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Because you\u0027re under 16 you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 112186400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "16-18 years old and in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I am on the \u0027Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 70,
      "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "2006"
      ],
      "line": 71,
      "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "2005"
      ],
      "line": 72,
      "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "2003"
      ],
      "line": 73,
      "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 160320100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87439600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 305404000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 133990900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 106118200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 349760700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96459200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 83373300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 242272500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 84574800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 79356800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 282501600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 122696800,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "16-18 years old and in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \u00272006\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I am on the \u0027Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 179712800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 214740800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2006",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 127764900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 267487300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 99246400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 98021300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 296296500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 108930600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 168315500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87863800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 336467800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 120174400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 86369400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 230746000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 93776800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 104273600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 276926900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 89665500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 93241700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 251272300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 101059000,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "16-18 years old and in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I enter \u002710\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter \u002710\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \u00272005\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I am on the \u0027Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 110420200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 131148300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2005",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 121120300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 298725500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96140000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 84923000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 347697400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 168724300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 228075900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 141362600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 386025000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 81209500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 98199500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 347829800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 147431700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 155196300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 337598500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103976000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 102002300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 341667300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 150668800,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "16-18 years old and in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-in-full-time-education;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \u00272003\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I am on the \u0027Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 189882300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 181481500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2003",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 137634400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 267600000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 114852200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 103168400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 250031300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Because you\u0027re under 19 and in full time education you get help paying NHS costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 111607400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "16-18 years old and not in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 113,
      "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "2006"
      ],
      "line": 114,
      "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "2005"
      ],
      "line": 115,
      "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "2003"
      ],
      "line": 116,
      "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 203752400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97054000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 328009400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 129988900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 115909000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 366840400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 108591400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 79016800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 288692500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 80936400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 75294600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 263995800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 99799100,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "16-18 years old and not in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter \u00272006\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 127938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 105805300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2006",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 130679500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 254789200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92134100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 95376400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 278189300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 89278200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 93263100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 312924900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96593800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 158459300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 321356500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 85016300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 112935200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 241700700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98058100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 82429200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 255964800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 108649300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 78781200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 239024700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96303500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 79813400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 284636800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96924400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 106416500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 301025400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92298900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 91293900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 283101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 118373900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 128870500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92662700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 252810100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 106472400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 110172900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 232766900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92466300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 107825300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 298676700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87425300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 94008400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 282821600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 109762700,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "16-18 years old and not in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "I enter \u002710\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I enter \u002710\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter \u00272005\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 178276300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 128521600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2005",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 136113400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 250894300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 102474400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 78258200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 278654800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 88100300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 90236400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 324785800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 165285900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 118581300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 291153800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92019100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 81599000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 275807000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86003900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 99908200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 243363800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 94188100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 92917400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 360101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 99437900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 86939000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 318786500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 93531600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 84964700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 363202800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 133115900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 134907800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 375354500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 139840200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 162701900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 91766300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 317945500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 146549900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 166280900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 327012100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 133862300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 140792100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 338162500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 94594700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 84880100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 300101900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 155558400,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "16-18 years old and not in full time education",
  "description": "",
  "id": "wales-test-ticket;16-18-years-old-and-not-in-full-time-education;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter \u00272003\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I am on the \u0027Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 128503500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 122154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2003",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 127422400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 302010100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you in full time education? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 85954200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 66145200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 330939600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 128408600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 159161800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 290339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 147297500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 98913800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 278821500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98886400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 106939700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 276150100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 76217600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 130071300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 377531100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 111950600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 104633200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 357788200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 137012900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 129939800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 291755400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 81330300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 61192500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 275924000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97227000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 79601200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 342421300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 138366500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 121,
  "name": "19-39 years old",
  "description": "",
  "id": "wales-test-ticket;19-39-years-old",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 153,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;19-39-years-old;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 154,
      "id": "wales-test-ticket;19-39-years-old;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "2003"
      ],
      "line": 155,
      "id": "wales-test-ticket;19-39-years-old;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "1992"
      ],
      "line": 156,
      "id": "wales-test-ticket;19-39-years-old;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "1982"
      ],
      "line": 157,
      "id": "wales-test-ticket;19-39-years-old;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 128489600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 95326600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 302238000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 153177100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 111792900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 281218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 134139600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 104670500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 306223900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 153068200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 138613500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 257928100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96249000,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "19-39 years old",
  "description": "",
  "id": "wales-test-ticket;19-39-years-old;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I enter \u00272003\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 129518900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 149618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2003",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 125663600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 269467900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 93058600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 81534700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 250381400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 84342800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 77231800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 285988700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96728500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 107678100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 333376000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 85520400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 167272800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 391680900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 158520200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 142971200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 363090800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 89088900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 134417300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 272748500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 91074300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 69412800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 239623300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 91063300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 101745700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 285692000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 146110400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 118703700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97332100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 258584700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100279300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 107168400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 320346800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 84651500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 103591700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 304423700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 125497600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 85208800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 330154900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 109189700,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "19-39 years old",
  "description": "",
  "id": "wales-test-ticket;19-39-years-old;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "I enter \u002710\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "I enter \u002710\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I enter \u00271992\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 158472600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 138692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1992",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 128775500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 233431500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 89392900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 87693700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 311826700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98000300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 83270000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 274817000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 95524700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 72158900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 290756900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103847700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 81454300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 283047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 74584300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 54143000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 249242600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 109315100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 129724200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 340455500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96380200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 88564200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 343205000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 104801100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 112238700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 246969900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 136390200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 125526900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 135942200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 287659800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 102597000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 113753900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 305710200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 80554600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 110351500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 263645000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 110543400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 103321600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 265033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 144947100,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "19-39 years old",
  "description": "",
  "id": "wales-test-ticket;19-39-years-old;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I enter \u00271982\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I am on the \u0027Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 196219100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 131991200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1982",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 142153600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 318559900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 129210900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 119478500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 289113300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 80393600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 91552500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 252036700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 101455500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 82937800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 299709000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 95533900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 78542100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 289115600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 89516700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 83607900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 333681700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 108587100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 85989400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 257121600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 80994600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 81808500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 350111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 137560000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 107277300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 347249300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 141048600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 162,
  "name": "40-59 years old",
  "description": "",
  "id": "wales-test-ticket;40-59-years-old",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 164,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I am on the \u0027Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 195,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;40-59-years-old;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 196,
      "id": "wales-test-ticket;40-59-years-old;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "1982"
      ],
      "line": 197,
      "id": "wales-test-ticket;40-59-years-old;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "1971"
      ],
      "line": 198,
      "id": "wales-test-ticket;40-59-years-old;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "1962"
      ],
      "line": 199,
      "id": "wales-test-ticket;40-59-years-old;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 237206700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 139305400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 219618900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86629600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 90881100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 270694600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 75775300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 59003900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 380203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 151651500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 140574100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 343350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 91108200,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "40-59 years old",
  "description": "",
  "id": "wales-test-ticket;40-59-years-old;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 164,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I enter \u00271982\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I am on the \u0027Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 145461600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 151842700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1982",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 147148200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 308257900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100738200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 95446300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 319426900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87090400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 86072800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 240895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 90266800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 60266900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 335075400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 135581600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 113038900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 368382900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 126891700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 158172900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 297220700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 151296300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 121141300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 270437700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100012700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 78088900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 297140700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96504900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 66940500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 292354400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 107385200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 227034300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 131687000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 284320200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 149532600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 120593300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 265491000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96436500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 100188300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 262394800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 93380500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 102662100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 317494600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 99324600,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "40-59 years old",
  "description": "",
  "id": "wales-test-ticket;40-59-years-old;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 164,
  "name": "I enter \u002710\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "I enter \u002710\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I enter \u00271971\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I am on the \u0027Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 145457000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 147442700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1971",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 116581800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 313670600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 89404800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 76947700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 281386200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 106673800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 95427100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 242630700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97114500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 104481800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 268346600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 93856200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 108964900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 260783300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87801500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 78790700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 331487400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 152766000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 130022900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 359153600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 83751300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 68631800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 336311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 135771700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 136529000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 399751500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 180124500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 196057800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 145677500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 356801900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 146296700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 124405000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 252806000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98049800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 107619000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 249457300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 95435900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 87122900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 359541200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 109463400,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "40-59 years old",
  "description": "",
  "id": "wales-test-ticket;40-59-years-old;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 164,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I enter \u00271962\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I am on the \u0027Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 182,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I am on the \u0027Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 184,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 209551600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 202840100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1962",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 152524700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 271778900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 88596900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 94777700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 261393300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 106975700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 91627600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 260693700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86200000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 80163800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 265777100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 80107400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 73174400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 321032600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have diabetes? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100093600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 105090200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 325578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you or a family member have glaucoma? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 104301000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 91481400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 314240800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 141860100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 85662000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 263276500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 156058800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 102549900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 386562000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 132566600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 163054900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98703000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 296315200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 99270600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 98265300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 256156200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97120800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 104835000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 233863100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92572400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 96530600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 237445400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87870800,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "60 years old",
  "description": "",
  "id": "wales-test-ticket;60-years-old",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 203,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I enter \u00271962\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 208,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 209,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 212,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I am on the \u0027Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 217,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 220,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 123427400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 111163900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1962",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 90555500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 237857800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 94754000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 99048000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 299926100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 105267300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 88772900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 251280100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Are you pregnant or have you given birth in the last 12 months? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 78831000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 80481000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 244317900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87478200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 68826400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 342909800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103557200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 156408500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 327353100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 102302600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 77463400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 286893100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97009600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 228,
  "name": "61-120 years old",
  "description": "",
  "id": "wales-test-ticket;61-120-years-old",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 229,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 241,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 244,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.examples({
  "line": 250,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;61-120-years-old;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 251,
      "id": "wales-test-ticket;61-120-years-old;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "1961"
      ],
      "line": 252,
      "id": "wales-test-ticket;61-120-years-old;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "1935"
      ],
      "line": 253,
      "id": "wales-test-ticket;61-120-years-old;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "1901"
      ],
      "line": 254,
      "id": "wales-test-ticket;61-120-years-old;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 125300800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 105387700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 287682600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98348200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 82559300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 322718800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92453900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 94270800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 265839400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 95569000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 76669200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 235719900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 87207100,
  "status": "passed"
});
formatter.scenario({
  "line": 252,
  "name": "61-120 years old",
  "description": "",
  "id": "wales-test-ticket;61-120-years-old;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 229,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I enter \u00271961\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 241,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 244,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 166523800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 122649300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1961",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 158366300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 286206200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 106592100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 78482000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 223298700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 99449600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 91232900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 235549000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 88785400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 71925400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 348143400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96927000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 93246000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 359164100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 118433500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 131242700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 337742300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 105033700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 120677100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 82160100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 210717400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 123073600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 113284500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 296015400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 90557100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 108579400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 348488900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 122471800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 97282400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 251210000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 120557700,
  "status": "passed"
});
formatter.scenario({
  "line": 253,
  "name": "61-120 years old",
  "description": "",
  "id": "wales-test-ticket;61-120-years-old;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 229,
  "name": "I enter \u002710\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I enter \u002710\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I enter \u00271935\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 241,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 244,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 153013400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 139082500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1935",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 127187100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 269910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 85181600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 95775000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 311384600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92260200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 87633400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 256791100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92994100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 91546600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 291977600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 109745700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 117390800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 245096700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 92975700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 67810600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 284584400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103486400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 136065600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 75470100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 260172000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 94947400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 93862700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 250481900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 96617000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 95645200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 277493100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 100819300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 100571300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 359409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 139628700,
  "status": "passed"
});
formatter.scenario({
  "line": 254,
  "name": "61-120 years old",
  "description": "",
  "id": "wales-test-ticket;61-120-years-old;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 229,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I enter \u00271901\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I am on the \u0027Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I am on the \u0027Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I am on the \u0027Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 241,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I am on the \u0027Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 244,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I am on the \u0027Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "I select the \u0027No\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I am on the \u0027You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 149040100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 201947000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1901",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 188298000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 322662100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live with a partner? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 131714800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 132748900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 261148200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you claim any benefits or tax credits? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86104700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 96659900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 255375000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have an injury or illness caused by serving in the armed forces? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 91560100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 65968500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 235925900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you live permanently in a care home? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 105187300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 88199500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 358228000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you have more than £16,000 in savings, investments or property? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 143917900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheNoRadio()"
});
formatter.result({
  "duration": 141348900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 370453900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You get help with health costs - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 134919800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 257,
  "name": "121+ years old",
  "description": "",
  "id": "wales-test-ticket;121+-years-old",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 258,
  "name": "I enter \u0027\u003cday\u003e\u0027 into \u0027day\u0027 date of birth field",
  "keyword": "When "
});
formatter.step({
  "line": 259,
  "name": "I enter \u0027\u003cmonth\u003e\u0027 into \u0027month\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter \u0027\u003cyear\u003e\u0027 into \u0027year\u0027 date of birth field",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the \u0027Check the year you were born is correct\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 264,
  "name": "",
  "description": "",
  "id": "wales-test-ticket;121+-years-old;",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ],
      "line": 265,
      "id": "wales-test-ticket;121+-years-old;;1"
    },
    {
      "cells": [
        "03",
        "05",
        "1901"
      ],
      "line": 266,
      "id": "wales-test-ticket;121+-years-old;;2"
    },
    {
      "cells": [
        "10",
        "10",
        "1030"
      ],
      "line": 267,
      "id": "wales-test-ticket;121+-years-old;;3"
    },
    {
      "cells": [
        "06",
        "05",
        "0001"
      ],
      "line": 268,
      "id": "wales-test-ticket;121+-years-old;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 210418100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 143131000,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 283998700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 128481800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 75196500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 255325000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98662700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 91177300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 257825000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 102831800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 67518300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 274545500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98517000,
  "status": "passed"
});
formatter.scenario({
  "line": 266,
  "name": "121+ years old",
  "description": "",
  "id": "wales-test-ticket;121+-years-old;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 258,
  "name": "I enter \u002703\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 259,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter \u00271901\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the \u0027Check the year you were born is correct\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 133920800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 121426300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1901",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 131156900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 238845700,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theCheckTheYearYouWereBornIsCorrectIsDisplayed()"
});
formatter.result({
  "duration": 66862400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 172979000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 84199800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 301298900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 109584900,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 91426600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 256774000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 86826300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 91148400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 279032500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 98649500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 77748700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 233544300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 133224800,
  "status": "passed"
});
formatter.scenario({
  "line": 267,
  "name": "121+ years old",
  "description": "",
  "id": "wales-test-ticket;121+-years-old;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 258,
  "name": "I enter \u002710\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 259,
  "name": "I enter \u002710\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter \u00271030\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the \u0027Check the year you were born is correct\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 132645900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 125387700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1030",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 141443700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 277015800,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theCheckTheYearYouWereBornIsCorrectIsDisplayed()"
});
formatter.result({
  "duration": 61733700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the \u0027NHS Costs\u0027 page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the \u0027Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the \u0027Start now\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am on the \u0027Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am on the \u0027Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select the \u0027Yes\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am on the \u0027Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select the \u0027Wales\u0027 radio",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the \u0027What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IOpenTheNHSCostsPage()"
});
formatter.result({
  "duration": 133308800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 88590500,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheStartNowButton()"
});
formatter.result({
  "duration": 245730400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country do you live in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 103070200,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 80174800,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 271015500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Is your GP practice in Scotland or Wales? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 97156700,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheYesRadio()"
});
formatter.result({
  "duration": 75122600,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 343299000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which country is your dental practice in? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 145880300,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.ISelectTheWalesRadio()"
});
formatter.result({
  "duration": 83368100,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 336030200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What is your date of birth? - Check what help you could get to pay for NHS costs - NHSBSA",
      "offset": 13
    }
  ],
  "location": "CommonFunctionsStepDefs.IAmOnThePage(String)"
});
formatter.result({
  "duration": 162439000,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "121+ years old",
  "description": "",
  "id": "wales-test-ticket;121+-years-old;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 258,
  "name": "I enter \u002706\u0027 into \u0027day\u0027 date of birth field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 259,
  "name": "I enter \u002705\u0027 into \u0027month\u0027 date of birth field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter \u00270001\u0027 into \u0027year\u0027 date of birth field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I click the \u0027Next\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the \u0027Check the year you were born is correct\u0027 error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 9
    },
    {
      "val": "day",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 140573800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 9
    },
    {
      "val": "month",
      "offset": 19
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 119353900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0001",
      "offset": 9
    },
    {
      "val": "year",
      "offset": 21
    }
  ],
  "location": "WalesTestTicketStepDefs.iEnterIntoDateOfBirthdField(String,String)"
});
formatter.result({
  "duration": 117464400,
  "status": "passed"
});
formatter.match({
  "location": "CommonFunctionsStepDefs.IClickTheNexButton()"
});
formatter.result({
  "duration": 360445900,
  "status": "passed"
});
formatter.match({
  "location": "WalesTestTicketStepDefs.theCheckTheYearYouWereBornIsCorrectIsDisplayed()"
});
formatter.result({
  "duration": 51723400,
  "status": "passed"
});
});