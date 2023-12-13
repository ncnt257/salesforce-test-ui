window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2022-05-13.q125",
  content: [
    {
      content:
        "Universal Containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered.\nWhat should an app builder recommend to meet this requirement?",
      options: [
        "A. Update the important fields to be required on the page layout",
        "B. Make a formula field to check the format of the important fields",
        "C. Configure a validation to require a field for a specific record type",
        "D. Create a workflow rule to check the fields are formatted correctly",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "A new custom object called invoices needs to have an invoice date for the date and time it was invoiced. What field type should be selected for this?",
      options: ["A. Time", "B. Date/Time", "C. Date", "D. Date/Timestamp"],
      answer: "B",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "If any of the triggered workflow rules result in another field update that's also enabled for workflow rule re- evaluation, a domino effect occurs, and more workflow rules can be re-evaluated as a result of the newly- triggered field update.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 3",
      explanation:
        "Explanation: This cascade of workflow rule re-evaluation and triggering can happen up to five times after the initial field update that started it.",
    },
    {
      content:
        "The VP of Account Management at Universal Containers has requested that all Contacts' mailing postal codes match the associated account's shipping postal code.\nHow can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using a Not Equal operator.",
        "B. Create a validation rule using a Compare operator.",
        "C. Create a validation rule using the DISTANCE() function.",
        "D. Create a validation rule using the GEOLOCATION() function.",
      ],
      answer: "A",
      title: "Question 4",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        "Which two report formats can be used as a source report to configure a reporting snapshot? (Choose two.)",
      options: [
        "A. Summary format",
        "B. Matrix format",
        "C. Joined format",
        "D. Tabular format",
      ],
      answer: "A,D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "An Alexa Skill Builder is creating a skill that requires the user to authenticate by speaking a PIN before an order status can be retrieved.\nAccording to best practices, how should the PIN value be collected?",
      options: [
        "A. Use multiple slots of type AMAZON.NUMBER",
        "B. Use AMAZON.SearchQuery",
        "C. Use AMAZON.FOUR_DIGIT_NUMBER",
        "D. Use a custom slot with zero to nine as values.",
      ],
      answer: "D",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Which two may occur if workflow rules are reevaluated after a field change by a field update? (Choose two.)",
      options: [
        "A. Cross-object workflow rules result in re-evaluation after field change.",
        "B. Workflow rules trigger validation rules on field updates.",
        "C. A recursive loop potentially results in exceeding governor limits.",
        "D. Workflow rules trigger more workflow rules to be re-evaluated.",
      ],
      answer: "C,D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "SERVICE AGENTS ARE REQUIRED TO CONFIRM A USER IDENTITY BEFORE PROVIDING SUPPORT INFORMATION OVER THE PHONE. WHAT FEATURE CAN AN APP BUILDER USE TO HELP AGENTS MEET THIS REQUIREMENT?",
      options: [
        "A. Include Surveys as a Case related list",
        "B. Guided Action Flows on the record page",
        "C. Case Validation Rules",
        "D. Add Path to the top of the Case layout",
      ],
      answer: "B",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "What type of relationships can you create on External Objects? (Choose all that apply.)",
      options: [
        "A. All of the above",
        "B. Direct lookup",
        "C. Lookup",
        "D. External lookup",
        "E. Indirect lookup",
      ],
      answer: "C,D,E",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "An Alexa Skill Builder built a skill with the following interaction model:\nWhich utterance would invoke HelloIntent?",
      options: [
        'A. "Alexa, ask my first skill to say hello to John."',
        'B. "Alexa, use my first skill to say hello."',
        'C. "Alexa, say hello to my first skill."',
        'D. "Alexa, open my first skill."',
      ],
      answer: "C",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, multiple departments utilize the Case object for different purposes. Some users submit cases while other users provide customer support with case records.\nWhat is the minimum required configuration for an app builder to enable different users to see different fields, based on the case type?",
      options: [
        "A. Record Types, Page Layouts, Permission Sets, and Profiles.",
        "B. Record Types, Page Layouts, Field Sets, and Profiles.",
        "C. Record Types, Page Layouts, Support Process, and Profiles.",
        "D. Record Types, Page Layouts, Case Teams, and Profiles.",
      ],
      answer: "A",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "What are the recommendations for unmanaged packages? (Choose 2)",
      options: [
        "A. For move to production",
        "B. For open source",
        "C. For sale in App Ex",
        "D. Should be deployed from Dev Edition",
      ],
      answer: "B,D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up Salesforce for the first time. Management wants the sales and marketing teams to have different navigation menus in the Salesforce Mobile App.\nWhat option is available to an app builder to satisfy this requirement?",
      options: [
        "A. Create sales and marketing profiles and ensure read access to different objects.",
        "B. Create mobile navigation menus for both the sales and marketing profiles.",
        "C. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "D. Create roles for sales and marketing and assign a custom homepage layout for each role.",
      ],
      answer: "A",
      title: "Question 13",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To create a custom visual flow",
        "B. To create a record page",
        "C. To external system using data of salesforce",
        "D. To a process to update current record",
        "E. Navigate to Apex trigger",
      ],
      answer: "B,C,D",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "An app builder at Cloud Kicks created a custom object and related fields in the schema builder.\nWhat next steps should the app build take to ensure users can access the new object and fields7",
      options: [
        "A. Assign data types to the fields on the object.",
        "B. Allow reporting for the object and fields.",
        "C. Create a permission set for access to the object and fields.",
        "D. Add the fields to the page layout on the object.",
      ],
      answer: "D",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      options: [
        "A. Users",
        "B. Profiles",
        "C. Public Groups",
        "D. Permission Sets",
        "E. Roles",
      ],
      answer: "A,C,E",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "UVC has deployed custom tabs to Production via change sets, without including the profiles settings. What is true about the visibility of custom tabs in Enterprise Edition?",
      options: [
        "A. Custom tabs are hidden for all users",
        "B. Custom tabs are default on for all the users",
        "C. Custom tabs are default off for all the users.",
        "D. Custom tabs are not deployed",
      ],
      answer: "A",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Universal Containers conducts evaluations of its sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, their managers, and their manager's executives can view the rep's evaluation record, but the reps should not be able to view the executive comment fields on their review.\nHow can these requirements be met?",
      options: [
        "A. Use a private sharing model granting record access using custom settings; manage field access with page layouts and field-level security.",
        "B. Use a private sharing model granting record access using custom settings; manage field access with record types and page layouts.",
        "C. Use a private sharing model granting record access using hierarchy; manage field access with field-level security.",
        "D. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security.",
      ],
      answer: "C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks works on an annual subscription model. When a sales rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of Salesforce but also needs to be notified about closed deals in order to initiate the contract process with the customer.\nWhich automation solution would meet these requirements?",
      options: [
        "A. Validation Rule",
        "B. Approval Process",
        "C. Workflow Rule",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Which functions are available when creating a Roll-up Summary Field? (Choose four.)",
      options: ["A. MIN", "B. COUNT", "C. AVG", "D. SUM", "E. MAX"],
      answer: "A,B,D,E",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "accounts and a secondary master detail relationship with contacts. The app builder has requirement to change the primary master relationship to lookup. What happens to the master detail relationship with contacts?",
      options: [
        "A. The contacts master detail also converts to lookup",
        "B. The contacts master detail values are cleared from invoice",
        "C. The contacts master detail becomes the primary",
        "D. The contacts master detail field is deleted from the object",
      ],
      answer: "C",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a Contact's \"Preferred Contact Method\" directly on the Contact record. Users need to be able to identify whether a phone number or an e-mail is the Contact's preferred communication method.\nWhat field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Checkboxes", "B. E-mail", "C. Formula", "D. Picklist"],
      answer: "D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create sales and marketing profiles to ensure read access to different objects",
        "B. Create roles for sales and marketing and assign a custom homepage layout for each role.",
        "C. Create mobile navigation menus for both the sales and marketing profiles.",
        "D. Create public groups for sales and marketing and create mobile navigation menus for each group.",
      ],
      answer: "A",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "What sandbox is used for virtually any development, testing, or training purpose?",
      options: [
        "A. Developer",
        "B. Partial Copy",
        "C. Full Sandbox",
        "D. Developer Pro",
      ],
      answer: "B",
      title: "Question 24",
      explanation: "",
    },
    {
      content: "How can you make a field mandatory? (Choose three.)",
      options: [
        "A. Create a Workflow Rule.",
        "B. Check the required field box on the page layout.",
        "C. Check the required field box on the field definition.",
        "D. Creating a validation rule for the field.",
        "E. Check the required field box for the field on the record type.",
      ],
      answer: "B,C,D",
      title: "Question 25",
      explanation:
        "Required while creating: Cannot be bypassed by any way (API/Dataloader/Imports).\n Required on Page Layout: Required only when one works on the UI (inline editing/creating record on page/edit record on page).",
    },
    {
      content:
        "An organization wants to create a field to store manager data on the user object. The manager field is a reference to another user record.\nWhat type of relationship should be used?",
      options: [
        "A. Master-Detail",
        "B. Lookup",
        "C. Many-to-many",
        "D. Hierarchical",
      ],
      answer: "D",
      title: "Question 26",
      explanation:
        "Explanation/Reference:\n Explanation:\n Hierarchical relationship: This type of relationship is a special lookup relationship available only for the user object. It allows users to use a lookup field to associate one user with another that does not directly or indirectly refer to itself. For example, you can create a custom hierarchical relationship field to store each user's direct manager.",
    },
    {
      content:
        "What is true regarding person accounts in Salesforce? (Choose two.)",
      options: [
        "A. Person accounts can have contacts.",
        'B. Person accounts do not have a "Parent Account" field.',
        "C. Person Accounts can be enabled in setup.",
        "D. Leads cannot be converted to Person Accounts.",
        "E. Person accounts do not have the Account Hierarchy feature.",
      ],
      answer: "B,E",
      title: "Question 27",
      explanation: "",
    },
    {
      content: "What is recommended to refresh a fullsandbox?",
      options: [
        "A. Within 3 hours of when it is needed.",
        "B. After a major production release.",
        "C. Whenever a new production used is added.",
        "D. After UAT sign-off.",
      ],
      answer: "D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "An app builder needs to change the data types of a few custom fields. The appbuilder is not able to delete and recreate any of the fields, nor modify any apexcode. Which data type change will require the app builder to perform additionalsteps in order to retain existing functionality?",
      options: [
        "A. Changing the data type of a field used in a report from text to an encrypted field",
        "B. In lead conversion from number to text",
        "C. In an apex class from number to text",
        "D. As an external ID from number to text",
      ],
      answer: "B",
      title: "Question 29",
      explanation:
        "Explanation\n https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types.htm&language=e\n If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. You would have to recreate the field mapping, this satisfies the requirements.",
    },
    {
      content:
        "Universal Containers has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. How can app builder accomplish this requirements?\nChoose 2 answers",
      options: [
        "A. Use a roll-up summary field on the candidate record to show the total number of interviews.",
        "B. Use a master-detail relationship between the Candidate and the Interview objects.",
        "C. Use a formula field on the candidate record to show the total number of interviews",
        "D. Use a lookup relationship between the Candidate and Interview objects",
      ],
      answer: "A,B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "The customer service team at Universal containers uses a custom Project object to track their customer projects. An App builder needs to create a relationship between the project object and the related client Account record. A private sharing model is in place for both Accounts and projects. Which statement is true when creating an Account lookup field on the Project object? Choose 2 answers",
      options: [
        "A. Cross-object field updates between the Project and Account records are not supported",
        "B. The account record can include roll-up summary field with data from the project records",
        "C. The account lookup field on the project record can be made optional.",
        "D. Users can only delete Accounts if they have access to related projects records",
      ],
      answer: "C,D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "The customer service team at Universal containers uses a custom Project object to track their customer projects. An App builder needs to create a relationship between the project object and the related client Account record. A private sharing model is in place for both Accounts and projects. Which statement is true when creating an Account lookup field on the Project object? Choose 2 answers",
      options: [
        "A. The account lookup field on the project record can be made optional.",
        "B. Cross-object field updates between the Project and Account records are not supported",
        "C. The account record can include roll-up summary field with data from the project records",
        "D. Users can only delete Accounts if they have access to related projects records",
      ],
      answer: "A,B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices.\nWhat can be the issue?",
      options: [
        "A. The component has been developed for Desktop Pages.",
        "B. The component needs to be activated.",
        "C. The record page template is unable to support mobile devices.",
        "D. The record page needs to be activated.",
      ],
      answer: "C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
        "B. A master - detail relationship cannot be converted to a look-up relationship",
        "C. Deleting a master record in a master detail relationship deletes all related detail records",
        "D. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
        "E. Standard objects can be on the detail side of the custom object in a master-detail relationship",
      ],
      answer: "A,C,D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Indirect lookup relationship fields can be created on external objects only.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 35",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        'A custom object named assignment has a private sharing setting that grantsaccess using hierarchies. The organization has a role hierarchy where the"Specialist" role reports to a "Manager" role which reports to a "Director" role. TheDirector role is at the top of the role hierarchy. A user who is in the manager rolecreate a new assignment record. Who can see this record?',
      options: [
        "A. The record owner and the specialists in their hierarchy.",
        "B. The record owner and the managers in their hierarchy.",
        "C. The record owner and those above the specialist role in their hierarchy.",
        "D. The record owner and the directors in their Hierarchy.",
      ],
      answer: "D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "When a sales rep submits an account for approval, Universal Containers wants the user to answer additional questions via a popup window to populate additional record fields.\nWhat should an app builder use to achieve the desired result?",
      options: [
        "A. Process Builder and Flow",
        "B. Lightning component and Process Builder",
        "C. Custom button and Flow",
        "D. Custom picklist field and Process Builder",
      ],
      answer: "C",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Universal Container wants to display a message when a case needs follow up. What can be used to display different text on the case record depending on the number of days a case is opened?",
      options: [
        "A. Case Process",
        "B. Lightning Process Builder",
        "C. Workflow Update",
        "D. Formula Field",
      ],
      answer: "D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity Stage? Choose 3 answers",
      options: [
        "A. Type",
        "B. Close Date",
        "C. Forecast Category",
        "D. Probability",
        "E. Amount",
      ],
      answer: "A,C,D",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Which two places can an app builder go to see a list of available Custom Lightning components in their org?\nChoose 2 answers",
      options: [
        "A. Visualforce components in Setup",
        "B. Lightning App Builder",
        "C. Lightning component Generator",
        "D. Lightning components in Setup",
      ],
      answer: "B,D",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Managers at Universal Containers want a quick way to create additional accounts to form a hierarchy from a Parent Account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.\nWhat should the app builder recommend?",
      options: [
        "A. Create a custom action",
        "B. Customize a Global Quick Action",
        "C. Add Path on Account hierarchy",
        "D. Add a custom link on Account",
      ],
      answer: "A",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The record owner and the global marketing public group.",
        "B. The global marketing public group and anyone above the owner in the role hierarchy",
        "C. The record owner and anyone above the owner in the role hierarchy",
        "D. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.\nThe app builder would like to change this to a lookup field, but is not able to do so.\nWhat could be causing this?",
      options: [
        "A. The Account is included in the workflow on the Invoice object.",
        "B. The Invoice records have existing values in the Account.",
        "C. The Invoice must have at least one Master-Detail field for reporting.",
        "D. The Account record includes Invoice roll-up summary fields.",
      ],
      answer: "D",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "What are two reason to create an unmanaged package? Choose 2 answers",
      options: [
        "A. Distributing open-source projects on the AppExchange.",
        "B. Distributing upgradeable components to other Salesforce org (Misse",
        "C. Deploying from a Developer Edition environment",
        "D. Publishing an application for sale on the AppExchange",
      ],
      answer: "A,B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to provide sales console users with an Incredible experience, with the most-used components easily accessible at all times.\nWhat solution can enable reps to see and access these components from anywhere within the app without leaving the pagere where the team is working?",
      options: [
        "A. Home page",
        "B. Favorites",
        "C. Global actions",
        "D. Utility bar",
      ],
      answer: "D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "A sales manager at Cloud Kicks wants the team to spend more time in the field and less time manually entering the information found on the business cards they collect.\nWhat should an app builder do to help achieve this goal without sacrificing data quality?",
      options: [
        "A. Research and evaluate data enrichment products on the AppExchange to automate data entry.",
        "B. Use Flow to create a data entry wizard to automate data entry.",
        "C. Use a combination of workflow rules and formula fields to populate key fields for the sales user.",
        "D. Post daily to the Chatter feed any relevant fields that need to be populated.",
      ],
      answer: "A",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "When testing an Amazon Alexa skill using the Test page in the developer console, the JSON output is null.\nWhat is the MOST likely cause?",
      options: [
        "A. The ASK has not been granted access to trigger the AWS Lambda function",
        "B. The AWS Lambda function is encountering an error and is not returning a result.",
        "C. Skill ID verification has been disabled",
        "D. The endpoint ARN has not been configured",
      ],
      answer: "D",
      title: "Question 47",
      explanation: "",
    },
    {
      content: "What is true about unmanaged packages?",
      options: [
        "A. Once the components are installed from an unmanaged package, the components can be edited in the organization they are installed in.",
        "B. All of the above.",
        "C. The developer who created and uploaded the unmanaged package has no control over the installed components, and can't change or upgrade them.",
        "D. Unmanaged packages should not be used to migrate components from a sandbox to production organization. Instead, use Change Sets.",
      ],
      answer: "B",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on the Salesforce1 mobile application. What is the recommended solution to meet this requirement? Choose 2 answers.",
      options: [
        "A. Create predefined values for most of the fields.",
        "B. Create a global action on Account.",
        "C. Create an object-specific action on Account",
        "D. Create a feedback object as a parent of Account",
      ],
      answer: "A,C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Develop Apex code and Visualforce pages to sendthe emails.",
        "B. Download all contacts to a CSV file and use an email client to send the mails",
        "C. Research and evaluate products available on AppExchange to send mass emails",
        "D. Request Salesforce increase the number of maximum daily mails.",
      ],
      answer: "C",
      title: "Question 50",
      explanation:
        "Check out the following link: MassMailer App Link on AppExchange\n https://appexchange.salesforce.com/listingDetail?listingId=a0N30000005uxj5EAA",
    },
    {
      content:
        "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead.\nWhat should an app builder configure to meet these requirements?",
      options: [
        "A. Create three sections on the lead layout and instruct users to collapse the non-relevant fields",
        "B. Create a partner community and a record type for web and trade show leads",
        "C. Create custom page payouts for each type of lead only containing the relevant fields",
      ],
      answer: "B",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Sales managers want to be automatically notified any time there is a change to an opportunity close date and want these changes to be tracked on the opportunity. Which two configurations should an app builder recommend? Choose 2 answers",
      options: [
        "A. Create an opportunity outbound message",
        "B. Use process builder on opportunities and a chatter post action",
        "C. Activate historical trending for opportunities",
        "D. Enable feed tracking on opportunities",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content: "What can a cross-object formula reference?",
      options: [
        "A. Parent Only",
        "B. Both Parent and Child objects",
        "C. Child Only",
        "D. Records of the same Object",
      ],
      answer: "A",
      title: "Question 53",
      explanation:
        'Cross-object formulas are formulas that span two related objects and reference merge fields on those objects.\n Cross-object formulas can reference merge fields from a master ("parent") object if an object is on the detail side of a master-detail relationship. Cross-object formulas also work with lookup relationships. You can reference fields from objects that are up to 10 relationships away. Cross-object formulas are available anywhere formulas are used except when creating default values.',
    },
    {
      content:
        "The app builder at Universal Containers has been asked to ensure that the Country field on the Account object is captured as the two-letter abbreviation.\nHow can the app builder satisfy this requirement?",
      options: [
        "A. Create a workflow rule that only allows the expected format.",
        "B. Create a workflow rule to set values using an external data source.",
        "C. Create a validation rule to set values using an external data source.",
        "D. Create a validation rule that only allows the expected format.",
      ],
      answer: "D",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce Mobile App.\nWhat could be used to accomplish this?",
      options: [
        "A. Custom URL formula field",
        "B. Custom button",
        "C. Custom quick access link",
        "D. Custom action",
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar's sales team has been struggling to enter data on mobile since rollout; the team dislikes scrolling through all of the fields to input only the necessary data.\nHow could the app builder solve this with minimal impact to desktop users?",
      options: [
        "A. Deselect the phone radio button on the Lightning record page assignment.",
        "B. Reorder the fields to make sense for the reps when in the field.",
        "C. Filter components by device using Form Factor.",
        "D. Update the training documentation with better screenshots.",
      ],
      answer: "B",
      title: "Question 56",
      explanation: "",
    },
    {
      content: "Which two are capabilities of Schema Builder? (Choose two.)",
      options: [
        "A. Viewing page layouts in a new window.",
        "B. Editing custom settings.",
        "C. Showing selected objects on a page.",
        "D. Creating a new record type.",
      ],
      answer: "A,C",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Which statement is true when defining a Create custom action for the Contact object? (Choose two.)",
      options: [
        "A. The create action can pre-define Contact field values.",
        "B. The create action will ignore field requirements.",
        "C. The create action allows a user to select a record type.",
        "D. The create action will respect validation rules.",
      ],
      answer: "C,D",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "the services manager would like to highlight case age. When a case is new, they would like to see a green flag on the case record. The flag should be yellow if the case is still open after one day. Tha flag should be red when cases are open after three days. Which two options should an app builder use to implement this requirements? Choose 2",
      options: [
        "A. Image",
        "B. VLOOKUP",
        "C. Quick action",
        "D. Formula field",
      ],
      answer: "A,B",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won.\nWhich two can satisfy this requirement? (Choose two.)",
      options: [
        "A. Use a flow and an outbound message.",
        "B. Use a workflow rule and an outbound message.",
        "C. Use Process Builder with an outbound message.",
        "D. Use Process Builder and Apex code.",
      ],
      answer: "B,D",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "You have created a workflow rule to send an e-mail in your configuration sandbox.\nFor some reason it's not working, what should you double check? (Choose two.)",
      options: [
        "A. Look at the system audit trail.",
        "B. HTML does not work in sandbox, make sure your e-mail has no HTML.",
        "C. You have the correct e-mail address.",
        "D. Check the deliverability settings.",
      ],
      answer: "C,D",
      title: "Question 61",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        "In which of these scenarios is ETL a better choice than Lightning Connect?",
      options: [
        "A. You need to create or update the external data in addition to reading it.",
        "B. You want to generate reports and charts from the external data.",
        "C. All of the above.",
        "D. You need the external data to follow the sharing rules defined for your organization.",
      ],
      answer: "C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize the salesforce1 mobile app for branding ? Select 3",
      options: [
        "A. Background color on loading page",
        "B. Notification and search icon",
        "C. Header and search bar color",
        "D. The image on loading page",
        "E. Action bar color",
      ],
      answer: "A,C,D",
      title: "Question 63",
      explanation: "",
    },
    {
      content: "Person Accounts ___________. (Choose two.)",
      options: [
        "A. Can only be merged with other person accounts.",
        "B. Have the same icon as Business accounts.",
        "C. Are enabled via feature license.",
        "D. Are enabled by default.",
        "E. Do use space in both account and contacts table.",
      ],
      answer: "A,E",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "Users at Cloud Kicks provided feedback that the time card custom page layout has too many fields on it, and some fields are only needed if other fields are entered.\nWhat should an app builder configure to help with this issue?",
      options: [
        "A. Dynamic forms",
        "B. Dependent picklists",
        "C. Lightning web components",
        "D. Separate page layouts",
      ],
      answer: "A",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup. What happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail also converts to Lookup.",
        "B. The Contacts Master-Detail field is deleted from the object",
        "C. The Contacts Master-Detail becomes the primary.",
        "D. The Contacts Master-Detail values are cleared from invoices.",
      ],
      answer: "C",
      title: "Question 66",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Web to case",
        "B. Related object",
        "C. Record page",
        "D. Personal account",
      ],
      answer: "B,C,D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "What metadata can be made manually in production without deployment? (Choose 2)",
      options: [
        "A. Visualforce",
        "B. Apex class",
        "C. Reports and Dashboards",
        "D. Apex trigger",
      ],
      answer: "A,C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check the report folder sharing settings",
        "B. Check reports filter",
        "C. Check organization-wide defaults",
        "D. Check the user's profile for object settings.",
        "E. Check Sharing rules",
      ],
      answer: "C,D,E",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security to mark fields as read-only on the sales profile",
        "B. Use field-level security on page layouts to restrict editing fields",
        "C. Use multiple record types, page layouts, and profiles",
        "D. Use record types with field sets and restrict editing fields using field-level security",
      ],
      answer: "B",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "The director of marketing has asked the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units.\nWhich function should be used to calculate the difference?",
      options: ["A. Date()", "B. Now()", "C. Datevalue()", "D. Today()"],
      answer: "D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) employees started using company-owned airplanes for work travel after Ursa Major Solar was acquired. DR executives want to automate the submission travel request forms to enforce the Internal policy.\nHow should an app builder automate travel requests based on these criteria?",
      options: [
        "A. Apex",
        "B. Workflow rule",
        "C. Process Builder",
        "D. Approval process",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "When an opportunity close date is delayed by more than 60 days, the manager and the VP sales must approve the change. How can this requirement be met? Choose 2 answers",
      options: [
        "A. Build an approval process that requires unanimous approval from the manager and VP of sales.",
        "B. Create a lightning process builder flow that submits the record for an approval process",
        "C. Build a validation rule that does not allow a user to save the opportunity record.",
        "D. Create a workflow rule that checks for close date less that 60 days and add an email alert.",
      ],
      answer: "A,B",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
        "B. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually ",
        "C. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "D. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "E. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
      ],
      answer: "E",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "What is the maximum number of master-detail lookup relationships allowable per object?",
      options: ["A. 2", "B. 4", "C. 1", "D. 3"],
      answer: "A",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on the Salesforce1 mobile application. What is the recommended solution to meet this requirement? Choose 2 answers.",
      options: [
        "A. Create predefined values for most of the fields.",
        "B. Create a global action on Account.",
        "C. Create a feedback object as a parent of Account",
        "D. Create an object-specific action on Account",
      ],
      answer: "B,D",
      title: "Question 76",
      explanation:
        "Explanation: https://developer.salesforce.com/docs/atlas.enus.salesforce1appadmin.meta/salesforce1appadmin/s1_admin_guide_actions_predef_values.ht m https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_sf1_rollout_overview.htm&la nguage=en_US",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Develop Apex code and Visualforce pages to send the emails.",
        "B. Download all contacts to a CSV file and use an email client to send the mails",
        "C. Research and evaluate products available on AppExchange to send mass emails",
        "D. Request Salesforce increase the number of maximum daily mails.",
      ],
      answer: "C",
      title: "Question 77",
      explanation:
        "Explanation\n Check out the following link: MassMailer App Link on\n AppExchangehttps://appexchange.salesforce.com/listingDetail?listingId=a0N30000005uxj5EAA",
    },
    {
      content:
        "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
      options: [
        "A. Two-step Approval Process.",
        "B. Approval Process with a triggered Flow process.",
        "C. Approval Process with Time-Dependent Workflow action.",
        "D. Process Builder with Submit for Approval action.",
      ],
      answer: "A",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on the Salesforce1 mobile application. What is the recommended solution to meet this requirement? Choose 2 answers.",
      options: [
        "A. Create predefined values for most of the fields.",
        "B. Create a global action on Account.",
        "C. Create a feedback object as a parent of Account",
        "D. Create an object-specific action on Account",
      ],
      answer: "B,D",
      title: "Question 79",
      explanation:
        "Explanation\n https://developer.salesforce.com/docs/atlas.enus.salesforce1appadmin.meta/salesforce1appadmin/s1_admin_guid",
    },
    {
      content:
        "Which use case can be accomplished using a custom link? Choose 3 answers",
      options: [
        "A. Navigate to a create a record page with field pre-populated",
        "B. Navigate to a process to update the current record",
        "C. Navigate to an external system using data in salesforce",
        "D. Navigate to acustom visual flow to update the current record",
        "E. Navigate to an Apex Trigger to update the current record",
      ],
      answer: "A,B,C",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "Which two ways can an app builder grant object-level access to users? (Choose two.)",
      options: [
        "A. Public Groups",
        "B. Roles",
        "C. Profiles",
        "D. Permission Sets",
      ],
      answer: "C,D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Properly installing managed packages helps prevent conflicts with customizations made by customers and partners.\nWhat functionality should be used to set up packages?",
      options: [
        "A. Description",
        "B. Help setting",
        "C. Namespace",
        "D. Allow sharing",
      ],
      answer: "C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are reevaluated after a field change by afield update?",
      options: [
        "A. Cross-object workflow rules result in re-evaluation after field change.",
        "B. Workflow rules trigger validation rules on field updates.",
        "C. A recursive loop potentially results in exceeding organizational limits.",
        "D. Workflow rules trigger more workflow rules to be re-evaluated.",
      ],
      answer: "C,D",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        "A. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
        'B. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
        "C. Field update are not available on currency field if the organization uses multi-currency.",
        "D. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
      ],
      answer: "A,B",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "What is true when a field update is set to re-evaluate the workflow rule? (Choose three.)",
      options: [
        "A. Any workflow rules whose criteria are met as a result of the field update will be ignored.",
        "B. In a batch update, workflow is only re-triggered on the entities where there is a change E.",
        "C. Only workflow rules on the same object as the initial field update will be re-evaluated and triggered.",
        "D. Cascade of workflow rule re-evaluation and triggering can happen up to ten times after the initial field update that started it.",
        "E. Only workflow rules that didn't fire before will be re-triggered.",
      ],
      answer: "B,C,E",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "Universal container has a custom object for shipping information.\nThey have to ship to both businesses and consumers.\nThey need to show additional values in the custom field called insurance type for business shipping records.\nHow can this be set up?",
      options: [
        "A. Use record types with multiple page layout",
        "B. Use Record type with single page layout.",
        "C. Create a multi-select pick-list field.",
        "D. Create multiple picklist fields on the object",
      ],
      answer: "C",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has created a custom object called Interests which is joined to Accounts by way of a junction object called Account Interest.\nWhat is the impact to users attempting to view an Account and the associated Account Interest records if they are without read access to the Interest object?",
      options: [
        "A. Users will be able to view the Account Interest record, but unable to view the field or any information relating back to the Interest record.",
        "B. Users will be unable to view the Account Interest records or the Interest records.",
        "C. Users will be able to view the Account Interest records and will have read-only access to the Interest records.",
        "D. Users will be unable to view Account records that have a related Account Interest record.",
      ],
      answer: "C",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "Universal Containers are doing a deep analysis on their monthly sales data, and would like the sales revenue split as products sold per country.\nWhat would be the ideal report to address this need?",
      options: ["A. Summar", "B. Matric", "C. Tabular", "D. Joined"],
      answer: "B",
      title: "Question 88",
      explanation: "",
    },
    {
      content: "What rules can be used to Opportunity object? (2)",
      options: [
        "A. Auto-response",
        "B. Assignment",
        "C. Validation",
        "D. Workflow",
      ],
      answer: "C,D",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to flag Leads with one or more business areas. They need to add a field to capture these to the Lead Record. There is no need to report on this field.\nWhat is the appropriate field type?",
      options: [
        "A. Text Area",
        "B. Picklist (Multi-Select)",
        "C. Radio Buttons (Multi-Select)",
        "D. Picklist",
      ],
      answer: "B",
      title: "Question 90",
      explanation: "",
    },
    {
      content: "When should you refresh a sandbox?",
      options: [
        "A. 3 Hours before you need it.",
        "B. When you are finished with the current sandbox.",
        "C. 10 Days after an implementation.",
        "D. Anytime.",
      ],
      answer: "B",
      title: "Question 91",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        "You want to use an External Data Object Table from Heroku carrying Product Category information. The data need to be included in Salesforce and searchable. What do you have to do before you can use the connection.\n(Choose 2)",
      options: [
        'A. Choose "include as index field"',
        'B. Choose "include in Salesforce searches" option',
        'C. Press "validate and sync"',
        "D. URL / choose the URL",
      ],
      answer: "B,C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning an admin must ___________.",
      options: [
        "A. Purchase a license for the Lightning App Builder.",
        "B. Contact Salesforce to have the component activated for the Lightning App Builder.",
        "C. Join the pilot Lightning App Builder team.",
        "D. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
      ],
      answer: "B",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "A customer service representative at a call center would like to be able tocollect information from customers using a series of questionprompts.\nWhat could be used to accomplish this?",
      options: [
        "A. Visual Workflow",
        "B. Lightning Connect",
        "C. Workflow Rules",
        "D. Lightning Process Builder",
      ],
      answer: "A",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "Universal Containers allows all employees to submit reviews for leadership using a custom object called Review. These Reviews should only be visible to the HR department and the employee who submitted the record.\nWhich three steps should an app builder take to properly control access to Reviews?\nChoose 3 answers",
      options: [
        "A. Add a Master-Detail(User; field on the Review object.",
        "B. Remove Review Read permission from non-HR Department user Profiles.",
        "C. Disable Grant Access Using Hierarchies.",
        "D. Create a criteria-based Sharing Rule for the HR Department.",
        "E. Set organization-wide default to Private.",
      ],
      answer: "C,D,E",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'B. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif"))), "Priority Flag")',
        'C. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "/s.gif")',
        'D. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif", "/s.gif")))',
      ],
      answer: "A,B",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be overridden with a Visualforce page",
        "B. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "C. Standard buttons that are not available for overrides can still be hidden on page layouts",
        "D. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
      ],
      answer: "A,C",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) has created a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object.\nWhich feature would an app builder use?",
      options: [
        "A. Field Update",
        "B. Dependent Picklist",
        "C. Dynamic Action",
        "D. Global Picklist Value Set",
      ],
      answer: "D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "You have a team of developers who need logins to sandbox.\nWhat's the best way to give them access?",
      options: [
        "A. Create them as inactive users in production.",
        "B. Have them login as one of the users in production.",
        "C. Create them as users in sandbox, then deactivate the same number of users in production.",
        "D. Use Developer Edition to log into sandbox.",
      ],
      answer: "A",
      title: "Question 99",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        'Custom objects on the "detail" side of a master-detail relationship cannot have sharing rules.',
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 100",
      explanation:
        "The Owner field on the detail object is not available and is automatically set to the owner of its associated master record. Custom objects on the detail side of a master-detail relationship cannot have sharing rules, manual sharing, or queues, as these require the Owner field.",
    },
    {
      content:
        "The sandbox copy engine creates an organization as part of each creation and refresh request. So, the organization ID of your sandbox changes each time your sandbox is refreshed.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities.\nWhat can be used to meet these requirements?",
      options: [
        "A. Process Builder with Submit for Approval Action.",
        "B. Approval Process with Apex Trigger.",
        "C. Two-step Approval Process.",
        "D. Approval Process with Time-Dependent Workflow action.",
      ],
      answer: "C",
      title: "Question 102",
      explanation: "",
    },
    {
      content: "Which statement about record types is true? (Select 2)",
      options: [
        "A. Users cannot view records assigned to a record type their profile does not have access to",
        "B. Record types can be used to define picklist values available for a given field",
        "C. Record types can only be assigned to one profile at a time",
        "D. The ability to create records of a specific record type is determined by the profile",
      ],
      answer: "B,D",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link? Choose 3 answers",
      options: [
        "A. Navigate to a process to update the current record",
        "B. Navigate to a create a record page with field pre-populated",
        "C. Navigate to an Apex Trigger to update the current record",
        "D. Navigate to an external system using data in salesforce",
        "E. Navigate to a custom visual flow to update the current record",
      ],
      answer: "A,B,D",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two types of customer support processes: Platinum and Diamond. The app builder created separate record types for each process on the Case object. The customer support team should not be able to create new cases with the Diamond record type.\nHow should this requirement be met?",
      options: [
        "A. Remove the ability for the support team to create new case records.",
        "B. Update the organization-wide defaults to private.",
        "C. Update the profile to remove the Diamond record type from the support team.",
        "D. Make the record type hidden to all users and then use sharing rules to share it.",
      ],
      answer: "C",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) is expanding into subsidized housing by partnering with local government entitles. DR uses Sales Cloud and has enabled field history tracking on the Opportunity object. Due to increased Information requirements, the App Dev team is changing Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better descriptions.\nWhich two considerations should be made by the team?",
      options: [
        "A. Rich text field values of all lengths are displayed fully in reports.",
        "B. Field History Tracking records value changes of 255 characters or less.",
        "C. Data loss may occur when changing custom field types.",
        "D. Audit Trail is available through REST API extracts.",
      ],
      answer: "B,C",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "Cool Air Conditioners has been using Service Cloud to manage cases, but are now considering using it to manage field service jobs. They would like to track field service activity and assignment to technicians. What is the recommended solution to meet these requirements? Choose 1 answer.",
      options: [
        "A. Utilize the standard objects Work Order and Work Order Line Items",
        "B. Install an AppExchange product that provides Field Service functionality",
        "C. Extend the Service Cloud configuration to handle Field Service cases",
        "D. Use real time API integration to connect Salesforce with an external field service application",
      ],
      answer: "A",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "What type of field can be referenced by a Roll-up Summary field using SUM? Choose 3 answers",
      options: [
        "A. Formula",
        "B. Currency",
        "C. Number",
        "D. Percent",
        "E. Date",
      ],
      answer: "B,C,D",
      title: "Question 108",
      explanation:
        "Explanation: https://help.salesforce.com/HTViewHelpDoc?id=fields_about_roll_up_summary_fields.htm",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
        "B. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
        "C. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "D. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
      ],
      answer: "C",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "What happens to user information when a sandbox is created? (Choose two.)",
      options: [
        "A. The sandbox name is appended to the username.",
        "B. All of the above.",
        "C. User e-mail addresses are NOT modified in your sandbox so that production users don't receive automatically generated e-mail messages from the sandbox.",
        "D. If the resulting username is not unique, a second modification is performed in which some characters and digits are prepended to the modified username.",
      ],
      answer: "A,D",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "In which of these scenarios is ETL a better choice than Lightning Connect?",
      options: [
        "A. You need to create or update the external data in addition to reading it.",
        "B. You need the external data to follow the sharing rules defined for your organization.",
        "C. You want to generate reports and charts from the external data.",
        "D. All of the above.",
      ],
      answer: "D",
      title: "Question 111",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        "The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app.\nWhat are three things an app builder should do to optimize mobile experience?\nChoose 3 answers",
      options: [
        "A. Use Global Actions to make it easy to perform vital functionality on mobile.",
        "B. Avoid using default field values so that the user is required to fill in all fields on the screen.",
        "C. Minimize the amount of formula fields and lookup fields to reduce page load time.",
        "D. Put the most important fields in the compact layout so they are easy to find.",
        "E. Create individual customized layouts for different phone operating systems.",
      ],
      answer: "A,C,D",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) tracks the support level of its customers on the account record page. CK wants to show a text notification on a case record page when the related account is a platinum-level customer.\nHow could an app builder meet this requirement?",
      options: [
        "A. Create a text-only Visualforce page > Drag the Visualforce component into the Case page layout > Set its visibility to show when the account support level is platinum.",
        "B. Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce component into the page, and assign the layout to platinum cases.",
        "C. Add a rich text area to the Case Lighting page > Set the component visibility of the rich text area to show when the account support level is platinum.",
        "D. Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to platinum accounts.",
      ],
      answer: "C",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "Launch a troubleshooting wizard from a button, at the end of which a knowledge article is created if it'd be helpful to other users.\nWhich tool would you use for the following use case?",
      options: ["A. Workflow", "B. Flow", "C. Approvals", "D. Process builder"],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses the Asset object to track products that are installed at customer locations. A new object, Asset Inventory, has been created to capture details about the asset.\nWhich approach should the app builder take to show Asset Inventory as a related list on Asset?",
      options: [
        "A. Create a roll-up on Asset. Add the Asset Inventory related list to the Asset page layout.",
        "B. Create a junction object to relate Asset Inventory and Asset. Add the Asset Inventory related list to the Asset page layout.",
        "C. Create a lookup relationship on Asset Inventory to Asset. Add the Asset Inventory related list to the Asset page layout.",
        "D. Create a master-detail relationship on Asset to Asset Inventory Add the Asset Inventory related list to the Asset page layout.",
      ],
      answer: "C",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "In a data model object, A is related to B, B is related to C.\nHow will a developer create a report to include fields of A & C?",
      options: [
        "A. Create a custom report type with A, B and C, and use it in the report.",
        "B. Create a custom report with A and C fields as the relationship already exists.",
        "C. Create lookup relationships between A, B and C.",
        "D. Report cannot be created.",
      ],
      answer: "A",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to make sure that users without the Marketing role are unable to update the Contact Retail Opt In picklist field to Yes.\nWhat validation rule would an app builder use to prevent other users from making this update?",
      options: [
        "A. AND( $UserRole.Name = 'Marketing', ISPICKVAL(Retail_Opt_In_c,\"Yes\") )",
        "B. AND( $UserRole.Name != 'Marketing', ISCHANGED(Retail_Opt_In__c), ISPICKVAL(Retail_0pt_In_c,\"Yes\") )",
        "C. AND( $UserRole.Name = 'Marketing', Retail_Opt_In__c = \"Yes\" )",
        "D. AND( $UserRole.Name != 'Marketing', Retail_Opt_In_c = \"Yes\" )",
      ],
      answer: "B",
      title: "Question 117",
      explanation: "",
    },
    {
      content: "What is a use case for validation rules?",
      options: [
        "A. Ensure zip/postal codes are entered in the correct format",
        "B. Prevent non-managers from joining a private Chatter Group",
        "C. Prevent deals with less than a 10% discount from entering an approval process",
        "D. Restrict partner Lead visibility to the channel sales team",
      ],
      answer: "A",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "The VP of marketing wants to broadcast an emailto 10,000 contacts insalesforce on a regular basis, but realizes salesforce'smass email functionality has alimitation on the number of emails that can besent each day",
      options: [
        "A. Download all contacts to a CSV file and use an email client to send the emails",
        "B. Request salesforce increase the number of maximum daily emails",
        "C. Develop apex code and Visualforce pages to sent the emails",
        "D. Research and evaluate products available on appExchange to send mass emails",
      ],
      answer: "D",
      title: "Question 119",
      explanation:
        "Explanation\n Tabular, Summary, or Matrix to JoinedThe existing report becomes the first block in the joined report, and the report type becomesthe principle report type for the joined report.Joined report blocks are formatted as summary reports, so if you switch from a summary to ajoined report, your groupings stay the same. If you switch from a matrix to a joined report,groupings are converted the same way as when you switch from a matrix to a summary report.The following items aren't supported in joined reports, and aren't converted:Bucket fieldsCross filtersThe Rows to Display filterhttps://help.salesforce.com/htviewhelpdoc?id=reports_changing_format.htm&siteLang=en_US",
    },
    {
      content:
        "What should an app builder do to upgrade an unmanaged package that has been installed into production?",
      options: [
        "A. Click the update link on the Installed Packages page.",
        "B. Uninstall the current version and install the new version.",
        "C. Install the new version in a sandbox then deploy to production",
        "D. Install the new version to a Developer org then deploy to production.",
      ],
      answer: "C",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "Which capability allows an app builder to grant object-level access? Choose 2 answers",
      options: [
        "A. Assigning a user a Profile that allows Read access to an object",
        "B. Assigning a user a Role that allows Read access to an object.",
        "C. Assigning a user a Permission Set that allows for Read and Edit access to an object",
        "D. Assigning a user a Public Group that allows for Read and Edit access to an object",
      ],
      answer: "A,C",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like sales reps to get permission from their managers before deleting Opportunities.\nWhat can be used to meet these requirements?",
      options: [
        "A. Two-step Approval Process.",
        "B. Approval Process with Time-Dependent Workflow action.",
        "C. Process Builder with Submit for Approval Action.",
        "D. Approval Process with Apex Trigger.",
      ],
      answer: "A",
      title: "Question 122",
      explanation: "",
    },
    {
      content: "Use Data Loader when __________. (Choose three.)",
      options: [
        "A. You need to load into an object that is not supported by the Data Import Wizard.",
        "B. You need to load 50,000 to five million records. If you need to load more than 5 million records, we recommend you work with a Salesforce partner or visit the AppExchange for a suitable partner product.",
        "C. You don't need the import process to be automated.",
        "D. You want to schedule regular data loads, such as nightly imports.",
      ],
      answer: "A,B,D",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "What type of field needs to be wrapped in a function (in a formula) to be accessed?",
      options: [
        "A. Long Text Field",
        "B. Currency",
        "C. Date/Time",
        "D. Picklist",
      ],
      answer: "D",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to creating custom report types?",
      options: [
        "A. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually.",
        "B. The detail object in a master- detail relationship cannot be added as a secondary object on a custom report type",
        "C. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for that report type.",
        "D. Any object can be chosen unless the object is no visible to the person creating the report type through security settings",
      ],
      answer: "C",
      title: "Question 125",
      explanation:
        "Explanation: You can choose from all objects-even those you don't have permission to view. This lets you build report types for a variety of users. Once you save a report type, you can't change the primary object. If the primary object on a report type is a custom object, and the custom object is deleted, then the report type and any reports created from it are automatically deleted. If you remove an object from a report type, all references to that object and its associated objects are automatically removed from reports and dashboards based on that type. http://help.salesforce.com/apex/htviewhelpdoc?id=reports_defining_report_types.htm&language=en_us",
    },
  ],
});
