window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2021-11-18.q112",
  content: [
    {
      content:
        'A user receives the generic "An internal server error has occurred" while interacting with a custom Lightning Component. What should the developer do to ensure a more meaningful message?',
      options: [
        "A. Add an error-view component to the markup.",
        "B. Add an onerror event handler to the tag.",
        "C. Use ProcessBuilder to catch the error.",
        "D. Use an AuraHandledException in a try/catch block.",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "A company exposes a REST web service and wants to establish two-way SSL between Salesforce and the REST web service. A certificate signed by an appropriate certificate authority has been provided to the developer.What modification is necessary on the Salesforce side? (Choose two.)",
      options: [
        "A. Update the code to use HttpRequest.setClientCertificateName()",
        "B. Create an entry for the certificate in Certificate and Key Management",
        "C. Update the code to use HttpRequest.setHeaderQ to set an Authorization header.",
        "D. Configure two-factor authentication with the provided certificate",
      ],
      answer: "A,B",
      title: "Question 2",
    },
    {
      content:
        "Customer billing data must be added and updated into Salesforce from a remote system on a weekly basis. Additionally, customer activity information must be extracted from Salesforce and put it into an on-premises data warehouse on a weekly basis.Which approach should be used to import data into Salesforce and export data out of Salesforce, taking into consideration that these imports and exports can interfere with end-user operations during business hours and involve large amounts of data?",
      options: [
        "A. Replication via third-party ETL to push data into Salesforce and pull data out in batches",
        "B. Batch Apex, where Salesforce pushes data to and pulls data from the remote systems",
        "C. Call-in directly from each remote system to Salesforce APIs to push and pull the data",
        "D. Salesforce Connect to push data to and pull data from the remote systems",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "A developer created three Rollup Summary fields: Total_timesheets_c, Total_Approved_timesheet_c and Total_project_Timesheet_c in the custom object, project _c Now, the developer is tasked with created a new field to show the ratio between and approved",
      options: [
        "A. A test class that validates the formula field is needed for deployment.",
        "B. Using a formula field reduces maintenance overhead.",
        "C. No test methods will be executed during deployment.",
        "D. A formula field will calculate the value retroactively for existing records.",
      ],
      answer: "B,D",
      title: "Question 4",
    },
    {
      content:
        "During the order of execution of a Visualforce page GET request, what happens after this step? Evaluate constructors on controllers and extensions",
      options: [
        "A. Create view state if <apex: form> exists",
        "B. Evaluate expressions, action attributes, and method calls",
        "C. Evaluate constructors and expressions on custom components",
        "D. Send the HTML response to the browser",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        'A developer needs to implement a system audit feature that allows users, assigned to a custom profile named "Auditors", to perform searches against the historical records in the Account object. The developer must ensure the search is able to return history records that are between 12 and 24 months old.Given the code below, which select statement should be inserted below as a valid way to retrieve the Account History records ranging from 12 to 24 month old?A)B)C)D)',
      options: ["A. Option B", "B. Option D", "C. Option A", "D. Option C"],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Move the web service callout into an @future method",
        "B. Use Database.insert (order, true) to immediately commit any database changes",
        "C. Use the asyncSend() method of the HTTP class to send the request in async context",
        "D. Ensure all callouts are completed prior to executing DML statements",
      ],
      answer: "A,D",
      title: "Question 7",
    },
    {
      content:
        "A developer is writing a Visualforce page that queries accounts in the system and presents a data table with the results. The users want to be able to filter the results based on up to five fields. However, the users want to pick the five fields to use as filter fields when they run the page.Which Apex code feature is required to facilitate this solution'",
      options: [
        "A. Dynamic variable binding",
        "B. Streaming API",
        "C. Report API",
        "D. Dynamic SOQL",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "A developer has created a Team Member sObject that has a Master-Detail relationship to a Project sObject and a Lookup relationship to the User sObject. The developer must ensure that a User listed on a Team Member record has Read-Write access to the parent Project record.How can the developer accomplish this if the Project sObject has a Private sharing model and thousands of Project records?",
      options: [
        "A. Create a Criteria-Based Sharing Rule on the Project sObject",
        "B. Create a Controller that uses the Without Sharing keyword",
        "C. Create a Project Sharing Rule that shares to the Team Member Group",
        "D. Create a Team Member Trigger that inserts Project_Share records",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "A company has the Lightning Component above that allows users to dick a button to save their changes and redirects them to a different page. Currently, when the user hits the Save button the records are getting saved, but they are not redirected.Which three techniques can a developer use to debug the JavaScript? Choose 3 answers",
      options: [
        "A. Use Developer Console to view the debug log.",
        "B. Use Developer Console to view checkpoints.",
        "C. Use consde.log() messages in the JavaScript.",
        "D. Use the browser's dev tools to debug the JavaScript.",
        "E. Enable Debug Mode for Lightning components for the user.",
      ],
      answer: "C,D,E",
      title: "Question 10",
    },
    {
      content:
        "How should a developer verify that a specific Account record is being tested in a test class for a visualforce controller?",
      options: [
        "A. Instantiate the page reference in the test class, insert the Account in the test class, then use seeAHData-true to view the Account.",
        "B. Insert the Account in the test class, instantiate the page reference in the test class, then use System.currentPageReference().getParameters{}.put() to set the Account ID.",
        "C. Instantiate the page reference in the test class, insert the Account in the test class, then use System.setParentRecordld().get() to set the Account ID.",
        "D. Insert the Account into Salesforce, instantiate the page reference in the test class, then use System.setParentRecordId().get() to set the Account ID.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content: "Which statement is true regarding savepoints?",
      options: [
        "A. You can roll back to any savepoint variable created In any order",
        "B. Savepoints are not limited by DML statement governor limits",
        "C. Reference to savepoints can cross trigger invocations.",
        "D. Static variables are not reverted during a rollback.",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content: "Exhibit.What must be added to get the data?",
      options: [
        "A. Add @wire(getData, (name: $name')} to the account field and this, account = getData ( ) ; to t loadData ( ) function.",
        "B. Add getData ({ name; this,name}) , then (result=> { this.account = result}) to the LeadData ( ) function.",
        "C. Add this, account = getData (this,name); to the loadData ( ) function.",
        "D. Add @wire(getData, {name: $name'}) to the account field and delete loadData ( ) because it is not needed.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A company recently deployed a Visualforce page with a custom controller that has a data grid of information about Opportunities in the org.Users report that they receive a ''Maximum view state size limit'' error message under certain conditions.According to Visualforce best practice, which three actions should the developer take to reduce the view state? Choose 3 answers",
      options: [
        "A. Use the transient keyword in the Apex controller for variables that do not maintain state.",
        "B. Use the private keyword in the controller for variables",
        "C. Use filters and pagination to reduce the amount of data.",
        "D. Refine any SQQL queries to return only data relevant to the page.",
        "E. Use the final keyword In the controller for variables that will not change.",
      ],
      answer: "A,C,D",
      title: "Question 14",
    },
    {
      content:
        "Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.The developer verified that the Queries return a single record each and there is error handing in the Lightning component, but the component is not getting anything back when calling the controller getSomeData().What is wrong?",
      options: [
        "A. The member's Name and Option should not have getter and setter.",
        "B. The member's Name and Option of the class MyDataWrapper should be annotated with @AuraEnabled too.",
        "C. Instances of Apex classes such as MyDataWrapper cannot be returned to a Lightning component.",
        "D. The member's Name and Option should not be declared public.",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "What is the optimal syntax for adding a link to a case in a Visualforce page? (Choose two.)",
      options: [
        'A. <apex:outputLink value="{$URLFOR($Action.Case.Open, case)}" target="blank"> {lease.Name} </apex:outputLink>',
        'B. <apex:outputLink value="/{!case.Id}" target="blank"> {lease.Name}</ apex:outputLink>',
        'C. <apex:outputLink value="{!URLFOR($Action.Case.View,case.Id)}" target="blank">(LIE{!case.Name}</apex:outputLink>',
        'D. <apex:outputLink value="!viewCase(case.Id)}" target="_blank">{lease.Name} </apex:outputLink>',
      ],
      answer: "B,C",
      title: "Question 16",
    },
    {
      content:
        "A developer encounters an error that states that the Apex heap size is exceeded. Which technique may reduce heap size?",
      options: [
        "A. Use static variables instead of instance variables",
        "B. Add the transient keyword to the variable definition",
        "C. Use SOQL for loops instead of standard SOQL queries",
        "D. Move the variable definition inside the scope of the function",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A developer is writing unit tests for the following method:Which assertion would be used in a negative test case?",
      options: [
        "A. System.assertEquals(true, isFreezing(null))",
        "B. System.assertEquals (true, isFreezing('O')",
        "C. System.assertEquals(null, isFreezing('asdf))",
        "D. System.assertEquals(true, isFreezingClOO'))",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "What Visualforce tag can be used to display custom messages in pages using the Salesforce Ul styling for errors, warnings, and other types of messages?",
      options: [
        "A. <apex:pageMessage>",
        "B. <apex:message>",
        "C. <apex:customMessage>",
        "D. <apex:error>",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "A developer has a test class that creates test data before making a mock call-out, but now receives a you have uncommitted work pending. Please commit or callout before calling out error.What step should be taken to resolve the error?",
      options: [
        "A. Ensure both the insertion and mock callout occur after the Test.startTest().",
        "B. Ensure the records are inserted before the Test.startTest() statement and the mock callout after the Test.startTest().",
        "C. Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs within a method annotated with StestSetup.",
        "D. Ensure both the insertion and mock callout occur after the Test.stopTest().",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity.What should the developer use to implement this?",
      options: [
        "A. A trigger on Sales_Help_Request__c",
        "B. A workflow rule on the Sales_Help_Request__c object",
        "C. A roll-up summary field on the Opportunity object",
        "D. A trigger on the Opportunity object",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer is developing a reuseable Aura Component that will reside on an sObject Lightning Page with the following HTML snippet:<aura:component implements=\"force:hasRecordId,flexipage:availableForAIIPageTypesM><div>Hello!</div></aura:component>How can the component's Controller get the context of the Lightning Page that the sObject is on without requiring additional test coverage?",
      options: [
        "A. Use the getSObjectTypeQ method in an Apex class.",
        "B. Add force:hasSobjectName to the implements.",
        "C. Create a design attribute and configure via App builder.",
        "D. Set the sObject type as a component attribute.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "Example 1: AggregateResult[] groupedResults = [SELECT Campaignid, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResuits) { System.debug ('Campaign ID' + ar.get('CampaignId'-); System.debug ('Average amount' + ar.get('exprd')); } Example 2: AggregateResult[] groupedResults = [SELECT Campaignid, AVG(Amount) theAverage FROM Opportunity GROUP BY Campaignid]; for (AggregateResult ar : groupedResuits) { System.debug(*Campaign ID' + ar.get('CampaignId')); System.debug ('Average amount' + ar.get('theAverage')); } Example 3: AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResuits) System.debug(*Campaign ID' + ar.get('CampaignId')); System.debug('Average amount' + ar.get.AVG(-); } Example 4:AggregateResult[] groupedResults = [SELECT CampaigniId, AVG(Amount) theAverage FROM Opportunity GROUP BY Campaignid]; for (AggregateResult ar : groupedResults) { System.debug('Campaign ID' + ar.get('CampaignId')); System.debug ('Average amount' + ar.theAverage-; } Which two of the examples above have correct System.debug statements? Choose 2 answers",
      options: ["A. Example 3", "B. Example 1", "C. Example 4", "D. Example 2"],
      answer: "B,D",
      title: "Question 23",
    },
    {
      content:
        'What is the correct order of execution for Visualforce Page "get" requests (initial page visit)?',
      options: [
        "A. Evaluate constructors on controller and extensions2) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
        "B. Evaluate constructors on controller and extensions2) If there's a <apex:form> element, create the view state3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present5) Send HTML to Browser",
        "C. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present2) Evaluate constructors on controller and extensions3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers implements a private sharing model for the Convention_Attendence_c custom object. As part of a new quality assurance effort, the company created an Event___Reviewer__c user lookup field on the object. Management wants the event reviewer to automatically gain Read/write access to every record they are assigned to.What is the best approach to ensure the assigned reviewer obtains Read/Write access to the record?",
      options: [
        "A. Create criteria-based sharing rules on the Convention Attendee custom object to share the records with the Event Reviewers.",
        "B. Create an After Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "C. Create a criteria-based sharing rule on the Convention Attendee custom object to share the records the a group of Event Reviewers.",
        "D. Create a Before Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "A company requires an external system to be notified whenever an account is updated.What LimitException could the following code trigger?",
      options: [
        "A. System.LimitException: Too many future calls",
        "B. System.LimitException: Too many callouts",
        "C. System.CalloutException: Callout from triggers are currently not supported",
        "D. System.LimitException: Too many SOQL queries",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        'The Contact object has a custom field called "Zone." Its data type is "Text" and field length is 3. What is the outcome after executing the following code snippet in the org?',
      options: [
        "A. Both inserts succeed and the contact record that has the Zone value of 'PI'IT is set to NULL",
        "B. An unhandled DML exception is thrown and no contact records are inserted",
        "C. Both inserts succeed and the contact record that has the Zone value of PITT is truncated",
        "D. A partial insert succeeds and the contact record that has the Zone value 'IAD1 is inserted",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Which use case is an appropriate fit for the @future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has long-running methods and needs to prevent delaying an Apex transaction",
        "B. A developer has long-running jobs with large data volumes that need to be performed in batches",
        "C. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "D. A developer has jobs that need larger query results than regular transactions allow",
      ],
      answer: "A,C",
      title: "Question 28",
    },
    {
      content:
        "Which tag should a developer use to display different text while an <apex:commandButton> is executing versus not executing?",
      options: [
        "A. <ApexpageMessages>",
        "B. <ApexactionSupper>",
        "C. <apexactionPoller>",
        "D. <ApexactionStatus>",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "What is a valid request for the following REST method? (Choose two.)@HttpPost global static void myPostMethod(String si, Integer il, Boolean bl, String 52)",
      options: [
        'A. il" : 123, "SI" : "my first string", "S2" : "my second string", "bl" : false',
        'B. si" : "my first string", 11" : "123", "bl" : "false", "S2" : "my second string"',
        "C. <request> <sl>my first string</sl> <ll>123</il> <32>my second string</32> <bl>false</bl> </request>",
        'D. <request> <sl>"my first string"</sl> <il>123</il> <sZ>!,my second string"</32> <bl>false</bl> </request>',
      ],
      answer: "A,D",
      title: "Question 30",
    },
    {
      content:
        "A developer created a Lightning web component that uses a Lightning-record-edit-form to collect information about Leads. Users complain that they only see one error message at a time when they save a Lead record.Which best practice should the developer use to perform the validations, and allow more than one error message to be displayed simultaneously?",
      options: [
        "A. Custom validation rules",
        "B. Apex REST",
        "C. Process Builder",
        "D. Client-side validation",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        "Which statement is true regarding both Flow and Lightning Process? (Choose two.)",
      options: [
        "A. Are both server-side considerations in the Order of Execution",
        "B. Can use Apex that implements the Process.Plugin interface",
        "C. Can use Apex methods with the @lnvocableMethod annotation",
        "D. Are able to be embedded directly into Visualforce pages",
      ],
      answer: "B,C",
      title: "Question 32",
    },
    {
      content:
        "The head of recruiting at Universal Containers wants to provide all internal users the ability to search for open positions by role, department, and location via a new recruiting app, In addition to search, users of the app should be able to refer a fried, apply for a position, and review the status of their current submissions. The app should be made available in Salesforce Mobile, but offline access is not required.Given these requirements, what is the recommended approach to developer the app?",
      options: [
        "A. Lightning Experience Builder",
        "B. Salesforce SDK",
        "C. Lightning Web Components",
        "D. Visualforce",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?A)B)C)D)",
      options: ["A. Option C", "B. Option A", "C. Option D", "D. Option B"],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "A company has a custom object, Sales Demo Request, that has a lookup to an Opportunity. It is required that a Sales Demo Request record be created when an Opportunity's Probability is greater than 50%. What is the optimal way to automate this?",
      options: [
        "A. Use an Apex Trigger on Opportunity.",
        "B. Build a Flow on Opportunity.",
        "C. Create a Workflow on Opportunity.",
        "D. Build a Process on Opportunity",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "Just prior to a new deployment, the Salesforce Administrator who configured a new order fulfillment process in a developer sandbox suddenly left the company. The users had fully tested all of the changes in the sandbox and signed off on them.Unfortunately, although a Change Set was started, it was not complete. A developer is brought in to help finish the deployment.What should the developer do to identify the configuration changes that need to be moved into production?",
      options: [
        "A. Leverage the Setup Audit Trail to review the changes made by the departed Administrator and identify which changes should be added to the Change Set.",
        "B. In Salesforce setup, look at the last modified date for every object to determine which should be added to the Change Set.",
        "C. Use the Metadata API and a supported development IDE to push all of the configuration from the sandbox into production to ensure no changes are lost.",
        "D. Set up Continuous Integration and a Git repository to automatically merge all changes from the sandbox metadata with the production metadata.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        'What is the correct order of execution for Visualforce Page "postback" requests (when user interaction requires a page update)?',
      options: [
        "A. 1) Decode View State2) Evaluate expressions and method calls for the main page and custom components3) Upon successful completion, Update data and redirect user/update view state4) Upon successful completion, Evaluate the action that triggered the postback5) HTML sent to browser",
        "B. 1) Decode View State2) Evaluate expressions and method calls for the main page and custom components3) Upon successful completion, Evaluate the action that triggered the postback4) Upon successful completion, Update data and redirect user/update view state5) HTML sent to browser",
        "C. 1) Evaluate expressions and method calls for the main page and custom components2) Decode View State3) Upon successful completion, Update data and redirect user/update view state4) Upon successful completion, Evaluate the action that triggered the postback5) HTML sent to browser",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. The page refreshes, showing the Contact's details.",
        "B. The outputPanel refreshes, showing the Contacts details.",
        "C. A new page opens, showing the Contact's details.",
        "D. Nothing happens: the commandLink is missing an action attribute.",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content: 'When should you use the "transient" property on variables?',
      options: [
        "A. Variables that you don't want transmitted as part of the view state. Static variables also don't get transmitted",
        "B. Large variables in order to save space",
        "C. Variables that you want transmitted as part of the view state. Static variables also don't get transmitted",
        "D. Static variables that you want transmitted as part of the view state to save space",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Which of the following annotations is the right way jto invoke a single apex method?",
      options: [
        "A. @lnvokableApex()",
        "B. @lnvokableAction()",
        "C. @lnvokableMethod()",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "When developing a Lightning web component, which setting displays lightning-layout-items in one column on small devices, such as mobile phones, and in two columns on tablet-size and desktop-size screens?",
      options: [
        'A. Set size=M6" mobile-device-size="12"',
        'B. Set size-"12" medium-device-size="6"',
        'C. Set size-"6" small-device-size="12"',
        'D. Set size-"12" tablet-device-size="6"',
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired. What is the optimal way to accomplish this?",
      options: [
        "A. Use a SingleEmailMessage() with an Apex Trigger.",
        "B. Usea MassEmailMessage() with an Apex Trigger.",
        "C. Use a Workflow Email Alert.",
        "D. Use an Email Alert with Process Builder.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content: 'The "Webservice" keyword___________.',
      options: [
        "A. All of the above",
        "B. Can be used on all classes",
        "C. Method must be static, and class must be global",
        "D. Used for any member variables included",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A developer receives complaints that the component loads slowly.Which change can the developer implement to make the component perform faster?",
      options: [
        "A. Move the contents of <c: concacclnfo into the component.",
        'B. Change the default for showContacrlnfo to "false".',
        'C. Change the type of contactlnfo to "Map".',
        "D. Add a change event handler for showContactinfo",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "Which are relevant practices while analyzing the timeline of different types of transactions in the execution overview panel? (Choose two.)",
      options: [
        "A. The execution tree can be used with the execution log to filter and get specific information about events",
        "B. Log lines in the execution log panel can be analyzed for details about specific events",
        "C. Multiple short bursts of Apex events should be analyzed since they can add up to a significant amount of time",
        "D. The performance tree should be use to analyze events further starting from the one that take the least amount of time",
      ],
      answer: "B,C",
      title: "Question 45",
    },
    {
      content:
        "A developer is inserting, updating, and deleting multiple lists of records in a Single transaction and wants to ensure that any error prevents all execution.How should the developer implement error exception handling in their code to handle this?",
      options: [
        "A. Use a Try/Catch and use sObject.addError() on any failures.",
        "B. Use Database.setSavepoint() and Database.rollBack() with a Try/Catch statement.",
        "C. Use Database methods to obtain lists of Database.SaveResults.",
        "D. Use a Try/Catch statement and handle DML cleanup in the catch statement.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? Choose 2 answers",
      options: [
        "A. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
        "B. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
        "C. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
        "D. SELECT Id, Name, Account __r.Name FROM Contact WHERE Account r.Industry = 'Media'",
      ],
      answer: "B,C",
      title: "Question 47",
    },
    {
      content:
        "After a Platform Event is defined in a Salesforce org, events can be published via which two mechanisms? Choose 2 answers",
      options: [
        "A. External Apps can use the standard Streaming API.",
        "B. internal Apps can use Outbound Messages",
        "C. External Apps require a custom Apex web service.",
        "D. Internal Apps can use Process Builder.",
      ],
      answer: "B,D",
      title: "Question 48",
    },
    {
      content:
        "A company has many different unit test methods that create Account records as part of their data setup. A new required field was added to the Account and now all of the unit tests fail. What is the optimal way for a developer to fix the issue?",
      options: [
        "A. Change the required field to be a validation rule that excludes the System Administrator profile.",
        "B. Add the required field to the data setup for all of the unit tests.",
        "C. Add a before insert trigger on Account to set the value of the required field.",
        "D. Create a TestDataFactory class that serves as the single place to create Accounts for unit tests and set the required field there.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "A developer has created a Visualforce page that uses a third-party JavaScript framework. The developer has decided to supply data to the JavaScript functions using JavaScript Remoting for Apex Controllers.What is the correct syntax to declare a remote method in Apex? (Choose two.)",
      options: [
        "A. @RemoteAction public static String getTable()",
        "B. @RemoteAction global static String getTable()",
        "C. @RemoteAction global String getTable()",
        "D. @RemoteObject global static String getTableQ",
      ],
      answer: "A,B",
      title: "Question 50",
    },
    {
      content:
        "A lead developer is creating tests for a Lightning web component. The component re-renders when a property called bypassSelection. changes its value.What should the developer use to the test that the component re-renders successfully when the property changes?",
      options: [
        "A. dispatchEvent (new CustomEvent (' bypassSelection'))",
        "B. Windows, set State ( )",
        "C. Promise. resolve ( )",
        "D. Windows, Setinterval ( )",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "A developer has been asked to create code that will meet the following requirements:Receives input of: Map<ld, Project_c), List<Account>Performs a potentially long-running callout to an outside web serviceProvides a way to confirm that the process executed successfullyWhich asynchronous feature should be used?",
      options: [
        "A. Schedulable interface",
        "B. @future (callout=true)",
        "C. Database.AllowCallouts interface",
        "D. Queueable interface",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "What is the transaction limit for the number of DML statements allowed?",
      options: [
        "A. 20",
        "B. 2,000",
        "C. 100 (synchronous), 200 (async)",
        "D. 200 (synchronous), 100 (async)",
        "E. 150",
      ],
      answer:
        "E  Explanation Explanation/Reference: Explanation: Includes Approval functions, rollbacks/savepoints, and System.runAs ",
      title: "Question 53",
    },
    {
      content:
        "A developer has written an After Update trigger on Account. A workflow rule and field update cause the trigger to repeatedly update the Account records.How should the developer handle the recursive trigger?",
      options: [
        "A. Use a static variable to prevent the trigger from executing more than once",
        "B. Deactivate the workflow rule to prevent the field update from executing",
        "C. Use a global variable to prevent the trigger from executing more than once",
        "D. Deactivate the trigger and move the logic into a Process or Flow",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "Which three actions must be completed in a Lightning web component for a JavaScript file in a static resource to be loaded?Choose 3 answers",
      options: [
        "A. Import a method from the platformftesourceLoader,",
        "B. Import the static resource.",
        "C. Call loadscript.",
        "D. Append the static resource to the DOM.",
        "E. Reference the static resource in a <script> tag.",
      ],
      answer: "A,B,C",
      title: "Question 55",
    },
    {
      content: "What is the transaction limit on the recursive trigger depth?",
      options: ["A. There is no limit", "B. 16", "C. 10", "D. 3", "E. 17"],
      answer: "B",
      title: "Question 56",
    },
    {
      content:
        "A developer created a new trigger that inserts a Task when a new Lead is created. After deploying to production, an outside integration is periodically reporting errors.Which change should the developer make to ensure the integration is not affected with minimal impact to business logic?",
      options: [
        "A. Remove the Apex Class from the Integration User's Profile.",
        "B. Use a Try/Catch block after the insert statement.",
        "C. Use the Database method with allOrNone set to False.",
        "D. Deactivate the Trigger before the Integration runs.",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "Where in a query can you use Geolocation and Distance? (Choose two.)",
      options: [
        "A. Select clause",
        "B. Filter clause",
        "C. Group By clause",
        "D. Order By clause",
      ],
      answer: "B,D",
      title: "Question 58",
    },
    {
      content:
        "Which of the following variables are not transmitted in the view state? (Choose two.)",
      options: ["A. Public", "B. Static", "C. Transient", "D. Private"],
      answer: "B,C",
      title: "Question 59",
    },
    {
      content:
        "Employee_c is a Child object of Company_c. The Company_c object has an external Id field Company_ld_c.How can a developer insert an Employee_c record linked to Company_c with a Company_ld_c of '999'?",
      options: [
        "A. Employee_c emp = new Employee_c(Name=fDeveloperT); emp. Company_c = new Company_c(Company_Id_c=f 999 T) insert emp;",
        "B. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_c = f999f insert emp;",
        "C. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = f999f insert emp;",
        "D. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = new Company _ r(Company Id c=f999f) insert emp;",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content: "Choose the correct definition for <apex:pageMessage>.",
      options: [
        "A. A single message, without formatting, that can be associated with a specific component on the page",
        'B. Standard Salesforce formatting, shows all errors that occur on page. Can add more messages through the "ApexPages.addMessage" function',
        "C. No formatting; displays all errors on a page",
        "D. Standard Salesforce formatting, throws a specific message on a page",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "What is the correct syntax for calling a controller action from a Visualforce page and updating part of the page once the action is completed? (Choose two.)",
      options: [
        'A. <apex: actionFunction action=" { ! Save} " name=!,Save" rerender=l,thePageBlock1\'/>',
        'B. <apex : commandFunction action=?l { ! Save} " value="Save" rendered^"thePageBlock"/>',
        'C. <apex: actionSupport action="{ ISave} " event=llonchange1\' rerender="thePageBlock"/>',
        'D. <apex:commandButton action="{!Save}" value="Save" redraw="thePageBlock"/>',
      ],
      answer: "A,C",
      title: "Question 62",
    },
    {
      content:
        "The test method above calls an @future method that increments the Number_of_Times_Viewed__c value. The assertion is failing because the Number_of_Times_Viewed__c equals 0. What is the optimal way to fix this?",
      options: [
        "A. Change the initialization to acct.Number_Of_Times_Viewed__c = 1.",
        "B. Add Test.startTest() before and Test.stopTest() after AuditUtil.incrementViewed.",
        "C. Change the assertion to System.assertEquals(0, acctAfter.Number_Of_Times_Viewed__c).",
        "D. Add Test.startTest() before and Test.stopTest() after insert acct",
      ],
      answer: "B",
      title: "Question 63",
    },
    {
      content:
        "A company uses a custom-built enterprise resource planning (ERP) system to handle order management. The company wants Sales Reps to know the status of orders so that if a customer calls to ask about their shipment, the Sales Rep can advise the customer about the order's status and tracking number if it is already shipped.Which two methods can make this ERP order data visible in Salesforce? Choose 2 answers",
      options: [
        "A. Have the ERP system push the data into Salesforce using the SOAP API.",
        "B. Use Salesforce Connect to view real-time Order data in the ERP system.",
        "C. Write a cron job In Salesforce to poll the ERP system for order updates.",
        "D. Ensure real-time order data is in Salesforce using the Streaming API.",
      ],
      answer: "A,B",
      title: "Question 64",
    },
    {
      content:
        "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. Which feature should be used to implement these requirements?",
      options: [
        "A. Queueable",
        "B. workflow",
        "C. @future",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 65",
    },
    {
      content:
        "What is a best practice when unit testing a controller? (Choose two.)",
      options: [
        "A. Simulate user interaction by leveraging Test.setMock()",
        "B. Access test data by using seeAIIData=true",
        "C. Set query parameters by using getParameters().put",
        "D. Verify correct references by using getURL()",
      ],
      answer: "C,D",
      title: "Question 66",
    },
    {
      content:
        "Line 1 public class AttributeTypes Line 2 { Line 3 private final String[] arrayItems; Line 4 Line 5 @AuraEnabled Line 6 public List<String> getStringArray() { Line 7 Strings+ arrayItems = new String*+, 'red', 'green', 'blue' -; Line 8 return arrayItems; Line 9 } Line 10 } Consider the Apex controller above that is called from a Lightning Aura Component. What is wrong with it?",
      options: [
        "A. Line 6: method must be static",
        "B. Line 1: class must be global",
        "C. Lines 1 and 6: class and method must be global",
        "D. Line 8: method must first serialize the list to JSON before returning",
      ],
      answer: "A",
      title: "Question 67",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page and want to include multiple records?",
      options: [
        "A. Standard Controller",
        "B. Controller Extensions",
        "C. Standard List/Set Controller",
        "D. Custom Controller",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        'If the "PageReference.setRedirect" Apex function is set to True, what type of request is made?',
      options: [
        "A. Postback request",
        "B. Get request",
        "C. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "Part of a custom Lightning Component displays the total number of Opportunities in the org, which is in the millions. The Lightning Component uses an Apex Controller to get the data it needs. What is the optimal way for a developer to get the total number of Opportunities for the Lightning Component?",
      options: [
        "A. SOQL for loop that counts the number of Opportunities records",
        "B. SUM() SOQL aggregate query on the Opportunity object",
        "C. COUNT() SOQL aggregate query on the Opportunity object",
        "D. Apex Batch job that counts the number of Opportunity records",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "A developer is building a Visualforce page that interacts with external services.Which interface should the developer implement to test this functionality? (Choose two.)",
      options: [
        "A. HTTPCalloutMock",
        "B. HTTPResponseMock",
        "C. StaticResourceCalloutMock",
        "D. HTTPRequestMock",
      ],
      answer: "A,C",
      title: "Question 71",
    },
    {
      content:
        "A developer is trying to access org data from within a test class. Which sObject type requires the test class to have the (seeAllData=true) annotation?",
      options: ["A. Report", "B. Profile", "C. RecordType", "D. User"],
      answer: "A",
      title: "Question 72",
    },
    {
      content: "The SOAP API_________.",
      options: [
        "A. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to allows you to maintain passwords, perform searches, and much more",
        "B. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "C. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "D. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
      ],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "A developer must create a way for external partners to submit millions of leads into Salesforce per day-How should the developer meet this requirement?",
      options: [
        "A. Create a web service on Heroku that uses Heroku Connect",
        "B. Publicly expose a Visualforce page via Force.com Sites",
        "C. Publicly expose an Apex Web Service via Force.com Sites",
        "D. Host a Web-to-Lead form on the company website",
      ],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "Within the System.Limit class, what would you call to get the total limit you can call in a single transaction?",
      options: [
        "A. getLimit [typeOfLirr.it] -> (Ex. getLin~.it DY.LSt aterr.ents () )",
        "B. get[typeOfLimit] -> (Ex. getDMLStatements())",
      ],
      answer: "A",
      title: "Question 75",
    },
    {
      content:
        "What is the transaction limit on the number of Apex jobs added to the queue?",
      options: ["A. 50", "B. 150", "C. 200", "D. 100", "E. There is no limit"],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "What is the transaction limit for the number of records per DML statement?",
      options: [
        "A. 10,000",
        "B. 20,000",
        "C. 5,000",
        "D. 50,000",
        "E. There is no limit",
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        "A company accepts orders for customers in their enterprise resource planning (ERP) crder__c records with a lookup field to Account. The Account object has an External ID field, ERP_Customer_ID__c.What should the integration use to create new Order__c records that will automatically be related to the correct Account?",
      options: [
        "A. Upsert on the Order__c object and specify the ERP_Customer_ID__c.",
        "B. Merge on the Order__c object and specify the ERP_Customer_ID__c.",
        "C. Insert on the Order__c object followed by an update on the Order__c object.",
        "D. Upsert on the Account and specify the ERP_Customer_ID__c.",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A Visualforce Page throws an Attempt to dereference a null object error for a Contact. What change In the controller will fix the error?",
      options: [
        "A. Declare a static final Contact at the top of the controller.",
        "B. Change the setters signature to return a Contact.",
        "C. Use a condition in the getter to return a new Contact if it is null.",
        "D. Change the getter's signature to be static Contact.",
      ],
      answer: "C",
      title: "Question 79",
    },
    {
      content:
        "A developer is writing a complex application involving triggers, workflow rules, Apex classes, and processes. The developer needs to carefully consider the order of execution when developing the application.1. Before Triggers2. After Triggers3. Post commit logic such as sending email4. DML committed to the database5. Workflow rules6. Roll-up summary calculationsIn what order do the following operations execute?",
      options: [
        "A. 1,6,5,2,4,3",
        "B. 1,5,6,2,4,3",
        "C. 1,2,5,6,4,3",
        "D. 1,2,4,5,6,3",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content: "How would you test a web service?",
      options: [
        "A. Create a class that implements the WebServiceMock interface",
        "B. Call the WebService interface",
        "C. Web Services do not need to be tested",
        "D. Use the @future annotation on the method",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?A)B)C)D)",
      options: ["A. Option C", "B. Option B", "C. Option D", "D. Option A"],
      answer: "A",
      title: "Question 82",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated.What is the optimal way to automate this?",
      options: [
        "A. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
        "B. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
        "C. Use System.enqueueJob>() to Invoke a Queueable class.",
        "D. Use Database.executeBatch() to invoke a Queueable dass.",
      ],
      answer: "A",
      title: "Question 83",
    },
    {
      content:
        "A company uses an external system to manage its custom account territory assignments. Every quarter, millions of Accounts may be updated in Salesforce with new Owners when the territory assignments are completed in the external system. What is the optimal way to update the Accounts from the external system?",
      options: [
        "A. Bulk API",
        "B. SOAP API",
        "C. Apex REST Web Service",
        "D. Composite REST API",
      ],
      answer: "C",
      title: "Question 84",
    },
    {
      content:
        "A company has a custom object. Request__c. that has a field, Completed__c. and a Lookup to Opportunity, Opportunity__c.Which SOQL query will get a unique list of all of the Opportunity records that have a Completed Request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 85",
    },
    {
      content:
        "A company has a native iOS app for placing orders that needs to connect to Salesforce to retrieve consolidated information from many different objects in a JSON format. Which is the optimal method to implement this in Salesforce?",
      options: [
        "A. Apex SOAP Web Service",
        "B. Apex SOAP Callout",
        "C. Apex REST Callout",
        "D. Apex REST Web Service",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "A developer must create a custom pagination solution. While users navigate through pages, if the data is changed from elsewhere, users should still see the cached results first accessed.How can the developer meet these requirements?",
      options: [
        "A. Use a StandardSetController",
        "B. Use OFFSET in SOQL queries",
        "C. Use @Cache annotation",
        "D. Use OFFSET WITH CACHE in SOQL queries",
      ],
      answer: "A",
      title: "Question 87",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
        "B. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "C. The code will result in a System.DmException:Entity_is_Deleted error",
        "D. The code will result in a System.LimitException : Too many script statements error",
      ],
      answer: "A",
      title: "Question 88",
    },
    {
      content:
        "An Apex class does not achieve expected code coverage. The testSetup method explicitly calls a method in the Apex class. How can the developer generate the code coverage?",
      options: [
        "A. Use system.assert() in testSetup to verify the values are being returned.",
        "B. Add @testVisible to the method in the class the developer is testing.",
        "C. Call the Apex class method from a testMethod instead of the testSetup method.",
        "D. Verify the user has permissions passing a user into System.runAs().",
      ],
      answer: "C",
      title: "Question 89",
    },
    {
      content:
        'If you have a method "doStuff(List<sObject> records)", which is a valid call?',
      options: [
        "A. doStuff(List<Account> records);",
        "B. doStuff(Account acct);",
        "C. doStuff(sObject obj);",
        "D. doStuff([Select Id From Account]);",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "@isTest static void testAccountUpdate() { Account acct = new Account({Name = 'Test'); acct.Integration Updated_c = false; insert acct; CalloutUtil.sendAccountUpdate (acct.Id); Account acctAfter = [SELECT Id, Integration Updated_c FROM Account WHERE Id = :acct.Id] [0]; System.assert(true, acctAfter.Integration_Updated_c); } The test method above calls a web service that updates an external system with Account information and sets the Account's Integration_Updated__c checkbox to True when it completes. The test fails to execute and exits with an error: \"Methods defined as TestMethod do not support Web service callouts.\" What is the optimal way to fix this?",
      options: [
        "A. Add if (!Test.isRunningTest()) around CalloutUtil.sendAccountUpdate.",
        "B. Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "C. Add Test.startTest() before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "D. Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
      ],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
      options: [
        "A. Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic.",
        "B. write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
        "C. write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "D. write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "A developer sees test failures in the sandbox but not in production. No code or metadata changes have been actively made to either environment since the sandbox was created.Which consideration should be checked to resolve the issue?",
      options: [
        "A. Ensure the sandbox is on the same release as production.",
        "B. Ensure Process Builder processes are inactive.",
        "C. Ensure Workflow Rules are inactive.",
        "D. Ensure the Apex Classes are on the same API version.",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "What is a consideration when using bind variables with dynamic SOQL? (Choose two.)",
      options: [
        "A. Dynamic SOQL cannot reference fields on bind variables",
        "B. Bind variables must be public or global",
        "C. Dynamic SOQL cannot use bind variables",
        "D. Bind variables must be in local scope",
      ],
      answer: "A,D",
      title: "Question 94",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  Explanation Explanation/Reference: Explanation: The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 95",
    },
    {
      content:
        "What is a recommended practice with regard to the Apex CPU limit? (Choose two.)",
      options: [
        "A. Optimize SOQL query performance",
        "B. Reduce view state in Visualforce pages",
        "C. Use Map collections to cache sObjects",
        "D. Avoid nested Apex iterations",
      ],
      answer: "C,D",
      title: "Question 96",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale.What is the most effective approach to ensure values displayed respect the users locale settings?",
      options: [
        "A. Use the FORMAT() function in the SOQL query.",
        "B. Use a wrapper class to format the values retrieved via SOQL.",
        "C. Use REGEX expressions to format the values retrieved via SOQL.",
        "D. Use the FOR VIEW clause in the SOQL Query.",
      ],
      answer: "D",
      title: "Question 97",
    },
    {
      content:
        "1 Contact con = new Contact ( LastName =fSmith', Department = fAdminT)2 insert con;3 Contact insertedContact=[select Name from Contact where id=icon.Id];4 Savepoint sp_admin = Database.setSavepoint();5 con.Department = fHRf;6 update con;7 Database.rollback(sp_admin);8 System.debug(Limits.getDmlStatements 0);Given the following code, what value will be output in the logs by line #8?",
      options: ["A. 3", "B. 2", "C. 4", "D. 5"],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "A developer 15 tasked with creating an application-centric feature on which end-users can access and update information. This feature must be available in lightning Experience while working seamlessly in multiple device form factors, such as desktops, phones, and tablets. Additionally, the feature must support Addressable URL Tabs and interact with the Salesforce Console APIs.What arm two approaches a developer can take to build the application and support the business requirements ^ Choose 2 answers",
      options: [
        "A. Create the application using Lightning Experience Builder.",
        "B. Create the application using Lightning web Components wrapped in Aura Components.",
        "C. Create application using Aura Components.",
        "D. Create the application using Aura Components wrapped in Lightning Web Components.",
      ],
      answer: "B,C",
      title: "Question 99",
    },
    {
      content:
        'During the Visualforce Page execution, what step follows immediately after "Evaluate constructors on controller and extensions"?',
      options: [
        "A. Create the view state",
        "B. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present",
        "C. Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page",
        "D. Send HTML to Browser",
      ],
      answer: "B",
      title: "Question 100",
    },
    {
      content: "What is a benefit of using a WSDL with Apex?",
      options: [
        "A. Allows for classes to be imported into Salesforce",
        "B. Reduces the number of callouts to third-party web services",
        "C. Enables the user to not pass a Session ID where it is not necessary",
        "D. Allows for web services to be tested and achieve code coverage",
      ],
      answer: "A",
      title: "Question 101",
    },
    {
      content:
        "Consider the following queries. For these queries, assume that there are more than 200,000 Account records. These records include soft-deleted records; that is, deleted records that are still in the Recycle Bin. Note that there are two fields that are marked as External Id on the Account. These fields are Customer_Number__c and ERP_Key__c.Which two queries are optimized for large data volumes? Choose 2 answers",
      options: [
        "A. SELECT Id FROM Account WHERE Name != ' ' AND Customer Number c = 'ValueA'",
        "B. SELECT Id FROM Account WHERE Id IN : aListVariable",
        "C. SELECT Id FROM Account WHERE Name != ' ' AND IsDeleted = false",
        "D. SELECT Id FROM Account WHERE Name != NULL",
      ],
      answer: "A,B",
      title: "Question 102",
    },
    {
      content:
        "An org contains two custom objects; Building__c and Office__c. Office__c has a Lookup field to Building__c.A developer is asked to automatically populate the Number_of_Offices__c field on the Building__c object with the count of related Office__c records anytime an Office__c record s created or deleted. The developer cannot modify the field types.Which solution meets the requirements?",
      options: [
        "A. Workflow",
        "B. Flow",
        "C. Process Builder",
        "D. Apex Trigger",
      ],
      answer: "D",
      title: "Question 103",
    },
    {
      content:
        "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed end Won. This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance.When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created.What is the most extendable way to update the Apex trigger to accomplish this?",
      options: [
        "A. Use a Hierarchy Custom Setting to skip executing the logic inside the trigger for the user who loads the data.",
        "B. Use a List Custom Setting to disable the trigger for the user who loads the data.",
        "C. Add a Validation Rule to the Contract to prevent Contract creation by the user who loads the data.",
        "D. Add the Profile ID of the user who loads the data to the trigger so the trigger will not fire for this user.",
      ],
      answer: "A",
      title: "Question 104",
    },
    {
      content:
        "A managed package uses a list of country ISO codes and country names as references data in many different places.. managed package Apex code.What is the optimal way to store and retrieve the list?",
      options: [
        "A. Store the information in Custom Metadata and query it with SOQL.",
        "B. Store the information in Custom Metadata and access it with the getAll() method.",
        "C. Store the information in a List Custom Setting and query it with SOQL.",
        "D. Store the information in a list Custom Setting and access it with the getAll() method",
      ],
      answer: "C",
      title: "Question 105",
    },
    {
      content:
        "A customer has a single Visualforce page that allows each user to input up to 1500 sales forecasts and instantly view pivoted forecast calculations. Users are complaining that the page is loading slowly, and they are seeing error messages regarding heap and view state limits.What are three recommendations to optimize page performance? (Choose three.)",
      options: [
        "A. Use JavaScript Remoting instead of controller actions",
        "B. Specify the list of sales forecasts as transient",
        "C. Segregate calculation functionality from input functionality",
        "D. Implement pagination and reduce records per page",
        "E. Create formula fields to compute pivoted forecast calculations",
      ],
      answer: "A,C,D",
      title: "Question 106",
    },
    {
      content:
        "What are three benefits of using static resources in Visualforce and Lightning Components? Choose 3 answers",
      options: [
        "A. Relative paths can be used in files in static resource archives to refer to other content within the archive.",
        "B. Static resource files are automatically minified.",
        "C. Static resource files do not count against an organization's quota of data storage.",
        "D. Static resource files can be referenced by using the $Resource global variable instead of hardcoded IDs.",
        "E. Static resource files can be packaged into a collection of related files in a zip or jar archive.",
      ],
      answer: "A,D,E",
      title: "Question 107",
    },
    {
      content:
        "If you wanted to create a record following the update of another (with data from the source object), what is the most customizable approach?",
      options: [
        "A. Workflow Rule",
        "B. After update Trigger",
        "C. Flow",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 108",
    },
    {
      content:
        "A customer requires that when the billing address field on an Account gets updated, the address field on all its related contact records should reflect the same update.How can this requirement be met with minimal customizations?",
      options: [
        "A. Create a Workflow Rule on Account to update related child Contact records",
        "B. Create a scheduled batch job that updates all contact address fields based on the related account record.",
        "C. Create a Lightning Process on Account to update related child Contact records",
        "D. Create an After Trigger on Account to upd|ate its related contact records on update",
      ],
      answer: "C",
      title: "Question 109",
    },
    {
      content:
        "A company has reference data stored in multiple Custom Metadata records that represent default information for certain.When a Contact is inserted, the default information should be set on the Contact from the Custom Metadata records .. Address information.What is the optimal way to automate this?",
      options: [
        "A. Process Builder",
        "B. Apex Trigger",
        "C. Workflow Rule",
        "D. Visual Flow",
      ],
      answer: "A",
      title: "Question 110",
    },
    {
      content:
        "A company has a custom component that allows users to search for records of a certain object type by invoking an Apex Controller that returns a list of results based on the user's input, when the search Is completed, a searchComplete event is fired, with the results put in a results attribute of the event. The component is designed to be used within other components and may appear on a single page more than once.What is the optimal code that should be added to fire the event when the search has completed?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 111",
    },
    {
      content:
        "A developer has working business logic code, but sees the following error in the test class:You have uncommitted work pending. Please commit or rollback before calling out. What is a possible solution?",
      options: [
        'A. Set seeAIIData to "true" at the top of the test class, since the code does not fail in practice.',
        "B. Call support for help with the target endpoint, as it is likely an external code error.",
        "C. Rewrite the business logic and test classes with @TestVisible set on the callout.",
        "D. Use test.IsRunningTest() before making the callout to bypass it in test execution.",
      ],
      answer: "D",
      title: "Question 112",
    },
  ],
});