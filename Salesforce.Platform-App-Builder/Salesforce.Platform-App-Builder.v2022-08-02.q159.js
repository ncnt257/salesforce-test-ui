window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2022-08-02.q159",
  content: [
    {
      content:
        "Which setting is available to customize the salesforce1 mobile app for branding ? Select 3",
      options: [
        "A. Background color on loading page",
        "B. Action bar color",
        "C. Header and search bar color",
        "D. The image on loading page",
        "E. Notification and search icon",
      ],
      answer: "A,C,D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses the Asset object to track products that are installed at customer locations. A new object, Asset Inventory, has been created to capture details about the asset.\nWhich approach should the app builder take to show Asset Inventory as a related list on Asset?",
      options: [
        "A. Create a roll-up on Asset. Add the Asset Inventory related list to the Asset page layout.",
        "B. Create a lookup relationship on Asset Inventory to Asset. Add the Asset Inventory related list to the Asset page layout.",
        "C. Create a master-detail relationship on Asset to Asset Inventory Add the Asset Inventory related list to the Asset page layout.",
        "D. Create a junction object to relate Asset Inventory and Asset. Add the Asset Inventory related list to the Asset page layout.",
      ],
      answer: "B",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
      options: [
        "A. Process Builder with Submit for Approval action.",
        "B. Two-step Approval Process.",
        "C. Approval Process with a triggered Flow process.",
        "D. Approval Process with Time-Dependent Workflow action.",
      ],
      answer: "B",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "What is true when changing the following field types? (Choose 3)",
      options: [
        "A. Rollup summary fields will stop calculate if Master Detail is changed to lookup",
        "B. No data is lost when converting Text to auto number",
        "C. No data is lost when changing Picklist to Multipicklist",
        "D. Data is lost when changing Number to Currency",
        "E. Data can be lost when changing from Rich Text to Long Text",
      ],
      answer: "B,C,E",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks recently implemented the application lifecycle management process to its release management strategy.\nWhich category handles bug fixes and simple changes?",
      options: ["A. Rollback", "B. Major", "C. Minor", "D. Patch"],
      answer: "D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "B. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "C. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "D. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
      ],
      answer: "C",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A new custom object called Invoices need to have an invoice date for the date and time itwas invoiced.\nWhich field type should be selected for this?",
      options: ["A. Date/Timestamp", "B. Time", "C. Date/Time", "D. Date"],
      answer: "C",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a Report Chart that has been added to a Page Layout?",
      options: [
        "A. Formula Field",
        "B. Name Field",
        "C. Matching ID Field",
        "D. Standard Field",
      ],
      answer: "C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal Containers implemented an application process that uses custom objects Internships and Applications. The organization-wide default for Internships has been set to private and is the master in the master-detail relationship with Applications. The VP of HR wants to allow edit access to Applications to recruiters.\nHow should an app builder configure the proper access?",
      options: [
        "A. Create a sharing rule that grants the users Read/Write access to the Application records.",
        "B. Add a sharing rule that grants the users Read/Write access to the Internship records.",
        "C. Set the organization-wide default on the Applications object to Read/Write.",
        "D. Create a queue for the web applications and assign access to the users who will be editing the records.",
      ],
      answer: "B",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "The App Builder at Universal Containers has been asked to ensure that the Amount field is populated when the stage is set to Closed Won. What can be used to meet this requirement?",
      options: [
        "A. Approval Process",
        "B. Lightning Process Builder",
        "C. Workflow",
        "D. Validation Rule",
      ],
      answer: "C",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Which statements are true regarding Roll-Up Summary fields? (select all thatapply)",
      options: [
        "A. Because roll-up summary fields are not displayed on edit pages, you can use them in validation rules.",
        "B. Validation errors can display when saving either the detail or master record.",
        "C. Once created, you cannot change the detail object selected or delete any field referenced in your roll-up summary definition.",
        "D. Advanced currency management has no affect on roll-up summary fields.",
      ],
      answer: "A,B,C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to display the real time stock price for each account on the account record page. How should an app builder implement this request?",
      options: [
        "A. Build a visual flow that users API calls",
        "B. Install a solution from the appexchange",
        "C. Add a dynamic report to the page layout",
        "D. Create a lightning web component",
      ],
      answer: "B",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) is finding sales reps are inconsistent in data entry when deals are won. CK requires that custom shoes are shipped within two weeks after the close date. A custom field called Scheduled Ship Date on the opportunity records the ship date.\nHow should the app builder ensure this field is properly filled out before setting the opportunity to closed won?",
      options: [
        'A. ISPICKVAL( StageName ="Closed Won") && ( CloseDate-Scheduled_Ship_Date__c ) > 14',
        "B. OR(ISPICKVAL( StageName /'Closed Won\") && ( Scheduled_Ship_Date__c - CloseDate ) > 14, ISBLANK(Scheduled_Ship_Date__c))",
        'C. OR(ISPICKVAL( StageName ="Closed Won") && ( Scheduled_Ship_Date__c - CloseDate ) > 14, ISBLANK(Scheduled_Ship_Date__c))',
        "D. ISPICKVAL( StageName /'Closed Won\") && ( Scheduled_Ship_Date_c - CloseDate ) > 14",
      ],
      answer: "B",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to automate a welcome email to new clients and include a customized survey about their buying experience. An app builder is tasked with this project and has very little time to build the solution from scratch.\nWhat should the app builder do to meet the deadline and custom requirements?",
      options: [
        "A. Choose a managed package from AppExchange that closely meets the requirements of the project And restricts programmatic development.",
        "B. Work with a developer to create custom apex code and a Visualforce survey to meet criteria.",
        "C. Build the survey declaratively and use a workflow rule to send it to the customer as an external message to meet criteria.",
        "D. Select an unmanaged package from AppExchange that closely meets the requirements of the project that allows programmatic development.",
      ],
      answer: "C",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) tracks the support level of its customers on the account record page. CK wants to show a text notification on a case record page when the related account is a platinum-level customer.\nHow could an app builder meet this requirement?",
      options: [
        "A. Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce component into the page, and assign the layout to platinum cases.",
        "B. Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to platinum accounts.",
        "C. Add a rich text area to the Case Lighting page > Set the component visibility of the rich text area to show when the account support level is platinum.",
        "D. Create a text-only Visualforce page > Drag the Visualforce component into the Case page layout > Set its visibility to show when the account support level is platinum.",
      ],
      answer: "C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Universal Con conducts evaluations of their sales reps using a custom objectconsisting of numerical scores and executive comments. The company wants toensure that only the sales reps, their managers,and their managers' executives canview the rep's evaluation record, but the reps should not be able to view the executive comment field on their review.",
      options: [
        "A. Hierarchy, manage field access with field-level security",
        "B. Use a private sharing model granting access using customer settings, managefield access with page layouts and field-level security",
        "C. Use a private sharing model granting record across using hierarchy, managefield access with record types and field-level security",
        "D. Using custom settings, manage field access with record types and pagelayouts",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers create multiple quotes per opportunity.\nWhat automation tool should an app builder recommend to delete rejected quotes?",
      options: [
        "A. Flow",
        "B. Approval process",
        "C. Validation rule",
        "D. Workflow rule",
      ],
      answer: "A",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be out at each of the opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Add the path component to the lightning record type",
        "B. Set page layout required fields based on the current stage",
        "C. Define record type and page payouts for each stage",
        "D. Create a process builder to prompt the user for filed information",
      ],
      answer: "A",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom picklist called Account_Region__c on the Account object. The vice president of sales has asked that the value of this field is visible on Opportunities.\nHow should an app builder create this solution?",
      options: [
        "A. Lookup field",
        "B. Field history tacking",
        "C. Cross-object formula field",
        "D. Field-level security",
      ],
      answer: "B",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for those objects have been set to private. Universal Containers wants to set up a new junction object between these objects. A select group of users should be able to edit records in the junction object.\nWhich two steps should an app builder take to configure the proper security?",
      options: [
        "A. Create an owner-based sharing rule that gives Read access to the junction object.",
        "B. Set lookup filters on both junction object relationship fields.",
        "C. Create owner-based sharing rules that give Read access to the master objects.",
        "D. Set Sharing Settings to Read Only on both master-detail relationship fields.",
      ],
      answer: "B,C",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "universal containers is migrating its sales operations from a legacy system that was used. opportunities need to be imported with the proper country currency. Which two steps should an app builder configure to meet these requirements ?\nChoose 2 answers.",
      options: [
        "A. Use Data Loader to import the records.",
        "B. Include the currency ISO Code Column in the import file.",
        "C. Use Import Wizard to import the records.",
        "D. Use import the currency ISO Code Column in the import file.",
        "E. Include the currency ISO code in all currency fields in the import file.",
      ],
      answer: "A,E",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks asked the app builder to insert a list of 25,000 records using deduplication for the Race_Track__c custom object.\nWhich tool should be used?",
      options: [
        "A. Data Loader",
        "B. Schema Builder",
        "C. Import Wizard",
        "D. Lightning Object Creator",
      ],
      answer: "C",
      title: "Question 22",
      explanation: "",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On the User Object",
        "B. On a Web-to-Case form",
        "C. On a related list",
        "D. On a Person Account",
        "E. On the Custom List View",
      ],
      answer: "C,D,E",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "The previous administrator of Cloud Kicks' (CK) Salesforce Organization used text as the field type when creating new custom fields. CK's current roadmap requires a project that will clean this up during the Lightning migration.\nWhich three field types should be considered to keep better track of contact information in fields?\nChoose 3 answers",
      options: ["A. Date", "B. Number", "C. Email", "D. Phone", "E. Time"],
      answer: "B,C,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content: "What is recommended to refresh a full sandbox?",
      options: [
        "A. Within 3 hours of when it is needed.",
        "B. Whenever a new production user is added.",
        "C. After a UAT sign-off",
        "D. After a major production release.",
      ],
      answer: "D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Which of these actions are executed after a re-evaluated workflow? (Choose 3 answers)",
      options: [
        "A. Active Validation rules",
        "B. Previously fired workflow rules",
        "C. Criteria-based sharing rules",
        "D. Cross-object workflow rules",
        "E. Active Escalation rules",
      ],
      answer: "B,C,E",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated.\nWhat is recommended feature to meet this requirement?",
      options: [
        "A. Lightning Connect",
        "B. Process Builder",
        "C. Visual Workflow",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "At UVC, multiple departments utilize the Case object for different purposes. Some users submit cases while other users provide customer support with case records. What is the minimum required configuration for an App Builder to enable different users to see different fields, based on the case type?",
      options: [
        "A. Record Types, Page Layouts, Field Sets and Profiles",
        "B. Record Types, Page Layouts, Permission Sets and Profiles",
        "C. Record Types, Page Layouts, Case Teams and Profiles",
        "D. Record Types, Page Layouts, Support Process and Profiles",
      ],
      answer: "A",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to deliver purchased containers to remote construction address. In these cases the customers will supply UC with the coordinates to the location.\nWhat type of field should the app builder use to capture this information?",
      options: ["A. Number", "B. External Lookup", "C. Goelocation", "D. Text"],
      answer: "C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers and acquisitions team to collaborate on potential new projects. This project should not be visible for non-members to see or join, and can be accessed by invites only.",
      options: [
        "A. Private group",
        "B. Member group",
        "C. Public group",
        "D. Unlisted group",
      ],
      answer: "D",
      title: "Question 30",
      explanation: "",
    },
    {
      content: "What rules can be used to Opportunity object? (2)",
      options: [
        "A. Auto-response",
        "B. Validation",
        "C. Assignment",
        "D. Workflow",
      ],
      answer: "B,D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Forecast Category",
        "B. Stage",
        "C. Type",
        "D. Lead Source",
      ],
      answer: "C,D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "the services manager would like to highlight case age. When a case is new, they would like to see a green flag on the case record. The flag should be yellow if the case is still open after one day. Tha flag should be red when cases are open after three days. Which two options should an app builder use to implement this requirements? Choose 2",
      options: [
        "A. Quick action",
        "B. Image",
        "C. Formula field",
        "D. VLOOKUP",
      ],
      answer: "B,C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "The recruiters at Universal Containers have requested that the candidate list view match the look and feel of the employee referral web page. What can be used to accomplish this?",
      options: [
        "A. Record Types",
        "B. Publisher Actions",
        "C. Page Layouts",
        "D. Visualforce",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content: "What can be done after the workflow field re-evaluation?",
      options: [
        "A. Trigger another rule",
        "B. Invalid data",
        "C. Out of hour limit (loop)",
        "D. Option 1",
      ],
      answer: "C",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks received a new requirement to calculate summaries from child objects of a standard object. The team would prefer to solve this declaratively.\nWhat are two considerations an app builder should evaluate?\nChoose 2 answers",
      options: [
        "A. A value is required in all records of the lookup field prior to converting to a master-detail relationship.",
        "B. An object can have up to two master-detail relationships.",
        "C. An app builder is unable to change a lookup to a master-detail relationship.",
        "D. A trigger on save or update can kick off calculations.",
      ],
      answer: "B,C",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Which two features can be used to allow users to access Visual Workflows? Choose 2 answers",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. Invoked by Process",
      ],
      answer: "A,B",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "An app builder is creating a Lightning record page and has added Mobile & Lightning Actions to the page layout.\nWhat two components could be included on the layout to display the actions?\nChoose 2 answers",
      options: [
        "A. Activities",
        "B. Chatter",
        "C. Path",
        "D. Highlights panel",
      ],
      answer: "A,D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) has created a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object.\nWhich feature would an app builder use?",
      options: [
        "A. Dynamic Action",
        "B. Field Update",
        "C. Global Picklist Value Set",
        "D. Dependent Picklist",
      ],
      answer: "C",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. A master - detail relationship cannot be converted to a look-up relationship",
        "B. Standard objects can be on the detail side of the custom object in a master-detail relationship",
        "C. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
        "D. Deleting a master record in a master detail relationship deletes all related detail records",
        "E. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
      ],
      answer: "C,D,E",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Which statement is true about converting a lead? Choose 3 answers",
      options: [
        "A. Administrators may choose whether to enforce validation rules & triggers",
        'B. The lead\'s most recent campaign record is automatically applied to the "PRIMARY campaign source" field on the opportunity',
        "C. Users can convert leads that are associated with an active approval process.",
        "D. Multi-select picklist values on lead records overwrite values on the contact's corresponding field.",
        "E. The system automatically maps standard lead fields to standard account, contact, and opportunity fields.",
      ],
      answer: "A,B,E",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Universal Container wants customers to be able to open cases from a public-facing website.\nWhat should the app builder use to enable visitors to the website?",
      options: [
        "A. Web-to-case",
        "B. Outbound message",
        "C. Email-to-case",
        "D. Screen flow",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Which capability allows an app builder to grant object-level access? Choose 2 answers",
      options: [
        "A. Assigning a user a Profile that allows Read access to an object",
        "B. Assigning a user a Permission Set that allows for Read and Edit access to an object",
        "C. Assigning a user a Role that allows Read access to an object.",
        "D. Assigning a user a Public Group that allows for Read and Edit access to an object",
      ],
      answer: "A,B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Which two field types can be referenced by a Roll-Up Summary field using MIN or MAX?\nChoose 2 answers",
      options: ["A. Date/time", "B. Formula", "C. Percent", "D. Checkbox"],
      answer: "A,C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "The VP of sales at Universal Containers wants to have a set of screens to guide the inside sales team through collecting and updating data for leads. How can the App Builder accomplish this?",
      options: [
        "A. Lightning Connect",
        "B. Visual workflow",
        "C. Workflow",
        "D. Lightning Process Builder",
      ],
      answer: "B",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "UVC needs to update a field on an Account when an Opportunity Stage is changed to Closed-Lost. Which two should be used to accomplish this requirement? Choose two answers",
      options: [
        "A. Workflow Rule",
        "B. Assignment Rule",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Universal container needs to update a field on an account when an opportunity stage is changed to close lost. What can be used to accomplish this requirement? Choose 2",
      options: [
        "A. Lightning Process Builder",
        "B. Approval Process",
        "C. Assignment Rules",
        "D. Workflow Rule",
      ],
      answer: "A,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this? Choose 3 answers",
      options: [
        "A. Currency",
        "B. Date",
        "C. Checkbox",
        "D. Percent",
        "E. Time",
      ],
      answer: "A,B,D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "universal containers has several large customers that sell their products through dealers. Each customer and dealer has an individual rep who works directly with uc and each is billed separately. How can an app builder implement these requirements?",
      options: [
        "A. Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy.",
        "B. Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record",
        "C. Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.",
        "D. Create a single account record, add each rep as a contact and create a custom dealer object",
      ],
      answer: "A",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create a lightning process on the user object to launch a flow.",
        "B. Create a flow on the user object to assign a permission set.",
        "C. Create an approval process on the User object to assign a permission set",
        "D. Create a workflow rule on the User object to assign a permission set.",
      ],
      answer: "A,D",
      title: "Question 50",
      explanation: "",
    },
    {
      content: "Need to change ownership when field of custom object changed.",
      options: [
        "A. Validation Rule",
        "B. Visual Workflow",
        "C. Assignment Rule",
        "D. Apex trigger",
      ],
      answer: "C",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "User at Universal Containers needs to be able to quickly create a contact record from the Account record's Chatter feed. How should the App Builder enable the functionality?",
      options: [
        'A. By creating a custom "Detail Page" Button on the Account.',
        'B. By creating a custom "Detail Page" Button on the Contract.',
        'C. By creating a custom "Create a Record" Action on the Contract',
        'D. By creating a custom "Create a Record" Action on the Account.',
      ],
      answer: "D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Page Layout",
        "B. Record Types",
        "C. Permission sets",
        "D. Field-level security",
      ],
      answer: "B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "What are the recommendations for unmanaged packages? (Choose 2)",
      options: [
        "A. Should be deployed from Dev Edition",
        "B. For open source",
        "C. For move to production",
        "D. For sale in App Ex",
      ],
      answer: "A,B",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a custom object called Component to capture details about products sold.\nWhat approach should an app builder take to show Component as a related list on Product?",
      options: [
        "A. Create a junction object to relate Component and Product. Add the Component related list to the Product page layout.",
        "B. Create a roll-up on Product. Add the Component related list to the Product page layout.",
        "C. Create a lookup relationship on Component to Product. Add the Component related list to the Product page layout.",
        "D. Create a master-detail relationship on Product to Component. Add the Component related list to the Product page layout.",
      ],
      answer: "C",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox?",
      options: [
        "A. Apex classes",
        "B. Validation rules",
        "C. Apex triggers",
        "D. Visualforce pages",
      ],
      answer: "B,D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model on Accounts. User A and User B both own Accounts of their own and have both been sent a new Account record in an email owned by User C to take a look at. User A is able to open and view the record but User B receives an insufficient privileges error. User A and User B have the same role in the Role Hierarchy as User C.\nWhat are the three reasons User A has access but User 8 is unable to access the record?\nChoose 3 answers",
      options: [
        "A. User A was granted an additional permission set",
        "B. User A is in a Public Group that has access via a Sharing Rule",
        "C. User A and User B have different profiles",
        "D. User C has manually shared the record with user A",
        "E. User A is on the same Account Team as User C",
      ],
      answer: "B,D,E",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
      options: [
        "A. Workflow",
        "B. Apex",
        "C. Formula field",
        "D. Roll-up summary field",
      ],
      answer: "A",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Universal Containers introduces a custom object called Service, which has a lookup to Account. Field enter Service using the Salesforce1 mobile app. Operators create new Service records when viewing Account name which needs to automatically display the current Account. How can this be accomplished?",
      options: [
        "A. Create an action in the Account object and add it to the Service page layout.",
        "B. Create an action in the Account object and add it to the Account page layout.",
        "C. Create an action in the Service object and add it to the Account page layout",
        "D. Create an action in the Service object and add it to the Service page layout",
      ],
      answer: "B",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Sales manager at universal containers would like to standardize what information sales rep are gathering. Sales rep want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. What feature should an app builder use to provide this functionally?",
      options: [
        "A. Global Action",
        "B. Chatter feed",
        "C. Path",
        "D. Workflow",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a Contact's \"Preferred Contact Method\" direction on Contact record. Users need to be able to identify whether a phone number or an email, is the Contact's preferred communication method. Which filed type will allow the App Builder to accomplish this with the fewest fields possible?",
      options: ["A. Email", "B. Checkboxes", "C. Formula", "D. Picklist"],
      answer: "B,D",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        'Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the "Allow Customer Invitations" Chatter setting. What permission is granted to Customers when invited to Chatter Group?',
      options: [
        "A. The ability to request access to public groups",
        "B. The ability to @mention accounts of which they are a contact.",
        "C. The ability to invite members to groups of which they are a member",
        "D. The ability to interact with members of their groups",
      ],
      answer: "D",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "An app builder wants to streamline the user experience by reflecting summarized calculation of specific fields on various objects.\nWhich three fields types should be used in roll-up summary fields to accomplish this?\nChoose 3 answer",
      options: [
        "A. Date",
        "B. Currency",
        "C. Percent",
        "D. Checkbox",
        "E. Time",
      ],
      answer: "A,B,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
        "B. Join the pilot Lightning App Builder team.",
        "C. Contact Salesforce to have the component activated for the Lightning App Builder.",
        "D. Purchase a license for the Lightning App Builder.",
      ],
      answer: "C",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "The organization wide defaults for a custom object is set to private. The Supervisor profile grants view access to the same object. A user with the Supervisor profile is also listed as the Manager on the user detail records for access. However, the supervisor still cannot view records owned by the subordinate. What is preventing the Supervisor from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. The Supervisor requires a permission set in order to view the subordinate's record",
        "B. The Supervisor's role is not above the subordinate's role in hierarchy",
        "C. Organization wide settings for the custom object grant access to other users with the same role",
        "D. Organization wide settings for the custom object do not grant access using hierarchy",
      ],
      answer: "B,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "The DreamHouse Realty (DR) service manager has asked for some improvements in case management to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met.\nWhat solution should an app builder implement to meet these requirements?",
      options: [
        "A. Process Builder",
        "B. Workflow Rules",
        "C. Activities Component",
        "D. A Validation Rules",
      ],
      answer: "D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "What the true statement is in regards to converting a tabular, summary, or matrix report to a joined report? Choose 3 answers",
      options: [
        "A. Joined report blocks are formatted as matrix reports.",
        "B. Bucket fields are not supported in joined reports.",
        "C. The rows to display filter is not supported in Joined reports",
        "D. Cross filters are not supported in joined reports",
        "E. Report formula fields are nor supported in Joined reports",
      ],
      answer: "B,C,D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to build a recruiting app that allows for multiple positions to appear on custom objects websites and postings. UC requires a report that shows the related custom objects of postings. Which two items should an app builder configure to implement this?",
      options: [
        "A. Utilize the standard report type",
        "B. Create two new custom report type",
        "C. Configure a postings object with lookup field to both positions and websites",
        "D. Configure a postings object with master detail field to both positions and websites",
      ],
      answer: "B",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 69",
      explanation:
        "You can have two report charts per page.\n You can only add report charts from the enhanced page layout editor. The mini console and the original page layout editor are not supported.\n On detail pages, users can refresh up to 100 report charts every 60 minutes.\n Your organization can refresh up to 3,000 report charts every 60 minutes.\n https://help.salesforce.com/HTViewHelpDoc?id=reports_embed_limits.htm&language=en_US",
    },
    {
      content:
        "An app builder wants to deploy a new version of an auto launched flow production in an active state so that the new functionality is immediately available to users.\nWhat should the app builder take into consideration when planning the deployment?",
      options: [
        "A. Include the profile that access the flow in the deployment",
        "B. Include the process builder calling the flow in the deployment",
        "C. Verify there is an apex test that provides test coverage for the flow",
        "D. Verify there is a static resource that provides test coverage for the flow",
      ],
      answer: "C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Which type of relationships can be defined with external objects? Choose 2 answers",
      options: [
        "A. Indirect Lookup",
        "B. Cross-Ogranization Lookup",
        "C. External Lookup",
        "D. External Master-Detail",
      ],
      answer: "A,C",
      title: "Question 71",
      explanation: "",
    },
    {
      content: "What is a use case for validation rules?",
      options: [
        "A. Ensure zip/postal codes are entered in the correct format",
        "B. Restrict partner Lead visibility to the channel sales team",
        "C. Prevent deals with less than a 10% discount from entering an approval process",
        "D. Prevent non-managers from joining a private Chatter Group",
      ],
      answer: "A",
      title: "Question 72",
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
      title: "Question 73",
      explanation:
        "https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types.htm&language=en_US If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. You would have to recreate the field mapping, this satisfies the requirements.",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services users use three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. One profile, two record types, one page layout",
        "B. Two profiles, two record types, two page layouts",
        "C. One profile, one record type, one page layout.",
        "D. Two profiles, one record type, two page layouts",
      ],
      answer: "B",
      title: "Question 74",
      explanation:
        "Explanation- Record types allow you to offer different business processes, picklist values, and page layouts to different users based on their profiles.",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "B. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
        "C. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
        "D. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
      ],
      answer: "A",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Which statement is true when a new full sandbox is created? Choose 2 answers",
      options: [
        "A. Usernames will be modified uniquely for that sandbox",
        "B. Default email deliverability is set to system email only",
        "C. Chatter data will be copied to the sandbox by default",
        "D. User's email addresses will not be modified.",
      ],
      answer: "B,D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Universal Containers has requested that Sales reps be given access to view all Accounts in Salesforce. However, they've also requested that sales reps only be allowed to create new Opportunities on Accounts they own. How can this requirement be met?",
      options: [
        "A. Set the Organization-Wide Defaults sharing on Opportunities to Controlled by Parent.",
        "B. Create an Opportunity Validation Rule that compares the Opportunity and Account Owners",
        "C. Create a new Opportunity Quick Action that validates Account ownership.",
        "D. Set the Organization-Wide Defaults sharing on Opportunities to Private and recalculate sharing.",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        "A. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
        "B. Set the Manger field for each User Record on the Manager's team.",
        'C. Create a Manager profile and select the "View My Teams Data" option.',
        'D. Create a Manager Permission set and select the "View All Data" option',
      ],
      answer: "D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Universal Containers is expecting impacts to operations due to increased demand. The executive team will be reaching out to current customers and want to see the number of open cases for the account and parent account.\nWhich two tools could an app builder combine to display the number of open cases on the account page?\nChoose 2 answers",
      options: [
        "A. Process Builder",
        "B. Approval Process",
        "C. Flow",
        "D. Workflow",
      ],
      answer: "A,D",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "To synchronize accounts, orders, and shipments in real time, a developer hasbuilt a custom interface between an external system and salesforce. Prior todeployment, the developer needs to confirm that the interface can sustain thesyncing of thousands of records at a time. Which sandbox environment isrecommended to complete performance and load testing?",
      options: [
        "A. Developer pro sandbox",
        "B. Full sandbox",
        "C. Developer sandbox",
        "D. Partial sandbox",
      ],
      answer: "C",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Configure Territory hierarchy and rules for routes based on territory",
        "B. Configure routing options in a custom object",
        "C. Use geolocation fields with Distance and Geolocation formulas",
        "D. Use an AppExchange partner product",
      ],
      answer: "D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "What is a feature that can extend record access beyond the organization-wide defaults? Choose 2 Answers",
      options: [
        "A. Criteria-based sharing rules.",
        "B. Dynamic role hierarchy",
        "C. Owner-based sharing rules.",
        "D. Public or private groups.",
      ],
      answer: "A,C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) maintains information for over 2 million assets in an external system. UC needs to access these assets in real-time data in Salesforce and is nearing the data storage limits.\nWhat feature could an app builder recommend UC use?",
      options: [
        "A. Data Export Wizard",
        "B. Salesforce Connect",
        "C. Salesforce to Salesforce",
        "D. Data Loader",
      ],
      answer: "D",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object to track expense reports. UC wants to automatically post updates on a record's feed whenever an expense report has been approved Which social feature can be used to accomplish this?",
      options: [
        "A. Auto-response rule",
        "B. Feed tracking",
        "C. Feed Quick action",
        "D. Approval process",
      ],
      answer: "B",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs the ability to generate contract documents. All the data required for a contract resides in a custom object. What is the recommended solutions?",
      options: [
        "A. Store a template in the static resources and configure the Action Link Template to use it.",
        "B. Select and install an AppExchange product to meet the contract generation needs.",
        "C. Create the HTML template for contracts and store it in the Public Folder.",
        "D. Enable the contract feature and create a custom Contract template based on the Standard template.",
      ],
      answer: "B",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should a app builder look at so address this?",
      options: [
        "A. Workflows on other objects that are being re triggered",
        "B. Workflows that cause each other to fire back and forth recursively",
        "C. Number of workflows per object limits",
        "D. Talk to a developer about apex code issues",
      ],
      answer: "B",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "An App Builder is loading the data into salesforce. To link the new records back to the legacy system, a field will be used to track the legacy ID on the account object. For future data loads this ID will be used when upserting records. Which field attribute should be selected? Choose 2 answers",
      options: [
        "A. Required",
        "B. Text (encrypted)",
        "C. External ID",
        "D. Unique",
      ],
      answer: "C,D",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        'A. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
        "B. Field update are not available on currency field if the organization uses multi-currency.",
        "C. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
        "D. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
      ],
      answer: "A,C",
      title: "Question 88",
      explanation:
        "Explanation: https://help.salesforce.com/apex/HTViewHelpDoc?id=workflow_field_update_considerations.h tm&language=en",
    },
    {
      content:
        'A custom object named assignment has a private sharing setting that grantsaccess using hierarchies. The organization has a role hierarchy where the"Specialist" role reports to a "Manager" role which reports to a "Director" role. TheDirector role is at the top of the role hierarchy. A user who is in the manager rolecreate a new assignment record. Who can see this record?',
      options: [
        "A. The record owner and the managers in their hierarchy.",
        "B. The record owner q in their hierarchy.",
        "C. The record owner and the specialists in their hierarchy.",
        "D. The record owner and the directors in their Hierarchy.",
      ],
      answer: "D",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "When an opportunity is closed date is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process.\nHow can an app builder ensure that these opportunities are submitted into the approval process?",
      options: [
        "A. Change the entry criteria on the approval process to criteria are met and lock the record on initial submission.",
        'B. Give the manager the "API Enabled" permission to permit approval responses by email.',
        "C. Use a validation rule and an email alert to the manager requesting approval.",
        "D. Submit the record for approval from an automated process.",
      ],
      answer: "D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom picklist called Support Level on the Account object. They would like to show the real-time value of Support Level on all case records.\nHow should an app builder implement this requirement?",
      options: [
        "A. Create a formula field on the Account object using the ISPICKVAL function.",
        "B. Create a roll-up summary field using Support Level on the Account object.",
        "C. Create a formula field on the Case object using the TEXT function.",
        "D. Create a Process Builder and use a field update on the Case object.",
      ],
      answer: "D",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Cloud Kicks wants to have a set of screens to guide the inside sales team through collecting and updating data for leads. Once the leads are updated, the leads should be entered into a marketing journey activated by the sales rep checking the marketing checkbox.\nHow should the app builder accomplish this?",
      options: [
        "A. Process Builder",
        "B. Path",
        "C. Lighting Flow",
        "D. Workflow",
      ],
      answer: "B,C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a custom called reviews to capture information generated by interviews during the candidate process. The review records are visible to any user that has access to the related custom candidate record. The VP of human resources wants the comment field on the review to be private to anyone outside of the HR department.",
      options: [
        "A. Create a page layout with the field and use field level security to hide the from all others users",
        "B. Create a sharing rule to share the filed with the VP of HR with role and subordinates",
        "C. Create a page layout with the field for HR users and another page layout without the field for all other users",
        "D. Create an apex sharing rule to share the field with users that have HR in their role",
      ],
      answer: "A",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "Universal Containers has purchased a Lightning Component on the Apple exchange.\nIn which two areas should Components be utilized?",
      options: [
        "A. Standalone Lightning App",
        "B. Flow Builder",
        "C. Salesforce Mobile App",
        "D. Process Builder",
      ],
      answer: "C",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom picklist field Account Region on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account.\nHow should an app builder meet this requirement?",
      options: [
        "A. Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c).",
        "B. Create a picklist field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "C. Create a text field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "D. Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c).",
      ],
      answer: "D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "An app builder needs to deploy a new account detail page layout from sandbox to production.\nWhich three components should an app builder include in the Change Set to ensure it deploys successfully and visually as expected?\nChoose 3 answers",
      options: [
        "A. System administrator profile",
        "B. Lightning App Builder",
        "C. Custom fields",
        "D. Detail page layout",
        "E. Custom actions",
      ],
      answer: "C,D,E",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Universal containers requires that all users specify a contract is sent on each opportunity prior to marking it as closed won. uc wants to be able to report on how many opportunities have sent contracts compared to how many have a missing contract when the opportunities closed. what type of field should an app builder configure to fulfill this requirement ?",
      options: ["A. Picklist", "B. Text Area", "C. Text", "D. Checkbox"],
      answer: "D",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. How can app builder accomplish this requirements? Choose 2 answers",
      options: [
        "A. Use a formula field on the candidate record to show the total number of interviews",
        "B. Use a lookup relationship between the Candidate and Interview objects",
        "C. Use a roll-up summary field on the candidate record to show the total number of interviews.",
        "D. Use a master-detail relationship between the Candidate and the Interview objects.",
      ],
      answer: "C,D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to quickly insert a list of over 60,000 net new Accounts. The template based on CK's data model was used to populate the list.\nWhich tool should be used?",
      options: [
        "A. Import Wizard",
        "B. Schema Builder",
        "C. A Lightning Object Creator",
        "D. Data Loader",
      ],
      answer: "D",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Roll-up-summary field",
        "B. Apex",
        "C. Workflow",
        "D. Formula Field",
      ],
      answer: "C",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a new custom object for Invoices that includes an InvoiceNumber field, Before the Invoice object can be used, invoices will be migrated from an external system maintaining their current InvoiceNumber. After the migration, salesforce will be the system of record and each new Invoice created in Salesforce must have a unique InvoiceNumber.\nHow should the app builder configure the InvoiceNumber field?",
      options: [
        "A. Create an AutoNumber field and migrate the Invoices",
        "B. Create a Text field, then change it to AutoNumber after the migration.",
        "C. Create a Text filed for the original InvoiceNumber and an AutoNumber field for the Salesforce InvoiceNumber.",
        "D. Create a Text field and mark it as a unique external ID field.",
      ],
      answer: "D",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "Which rule can be configured for the Opportunity object? Choose 2 answers",
      options: [
        "A. Validation Rule",
        "B. Workflow Rule",
        "C. Escalation Rule",
        "D. Assignment Rule",
      ],
      answer: "A,B",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Number",
        "B. Date",
        "C. Currency",
        "D. Formula",
        "E. Percent",
      ],
      answer: "A,C,E",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "What Is true statement regarding roll up summary fields. Select 2.",
      options: [
        "A. Roll up summary fields can only be created on the master of master-detail relationship",
        "B. Changes to the value of a roll up summary field can trigger assignment rules to run",
        "C. Multi select picklist files can be used in the field column of the field column of roll up summary filters.",
        "D. The roll up summary field inherits the field level security of the child object.",
      ],
      answer: "A,B",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to begin socializing and collaborating within Salesforce around customer accounts to discuss various topics. CK would like all company employees to see these conversations.\nWhich two features of Chatter would meet CK's business needs?\nChoose 2 answers",
      options: [
        "A. Set up new public Chatter groups.",
        "B. Use Chatter actions to create tasks to complete.",
        "C. Use post action on the Account object.",
        "D. Set up new private Chatter groups.",
      ],
      answer: "A,C",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to its sales team to only see the accounts that they own. Separate Month American and Environment manufacturing teams should only see accounts in their respective regions. The Inside sales team needs to see all accounts in Salesforce.\nHow should an app builder accomplish this?",
      options: [
        "A. Set the Organization-wide Default to public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the ''View All'' Setting for accounts.",
        "B. Set the Organization Team profile Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team. and create an inside Sales Team profile with the ''View All'' setting for accounts. ",
        "C. Set the Organization-Wide Default to private for accounts. Create permission setts for each Marketing Team, and create an Inside Sales team Profile with the ''View All'' setting for accounts.",
        "D. Set the organization--Wide Default to publish for accounts. Create profiles for each Marketing Team, and create an inside Sales Team role that is at the top of the Role Hierarchy.",
        "E. Set the Organization Team profile Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team. and create an inside Sales Team profile with the ''View All'' setting for accounts.",
        "F. Set the Organization-wide Default to public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the ''View All'' Setting for accounting for accounts.",
      ],
      answer: "F",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has leads owned by users and queues. The sales manager wants the status to change to working when a user takes ownership.\nWhat does an app builder need to have in the criteria to ensure the process runs without error?",
      options: [
        "A. NOT(ISBLANK([Lead].OwnerId))",
        'B. BEGINS([Lead].OwnerId, ,,005")',
        "C. [Lead].Owner:User.Role Is Null = False",
        "D. [Lead].Owner:Queue.OwnerId Is Null = True",
      ],
      answer: "A",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app.\nWhat are three things an app builder should do to optimize mobile experience?\nChoose 3 answers",
      options: [
        "A. Put the most important fields in the compact layout so they are easy to find.",
        "B. Use Global Actions to make it easy to perform vital functionality on mobile.",
        "C. Avoid using default field values so that the user is required to fill in all fields on the screen.",
        "D. Create individual customized layouts for different phone operating systems.",
        "E. Minimize the amount of formula fields and lookup fields to reduce page load time.",
      ],
      answer: "A,B,E",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "A custom button can be used for performing all of the following actions, except: Choose 1 answer.",
      options: [
        "A. Invoke a Javascript",
        "B. Invoke a webpage URL",
        "C. Invoke an Apex Trigger",
        "D. Invoke a visualforce page in your Salesforce org",
      ],
      answer: "C",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to standardize their business logic. They want to ensure that the workflow order is guaranteed to be the same each time. Which feature can be used to accomplish this? Choose 2 answers.",
      options: [
        "A. Workflow",
        "B. Lightning Process Builder",
        "C. Visual Workflow",
        "D. Chatter Actions",
      ],
      answer: "B,C",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "Universal containers is importing 1000 records into Salesforce. They want to avoid any duplicate records from being created during the import. How can these requirements be met?",
      options: [
        "A. After importing all of the custom objects, run a duplicate check report, export the record to a CSV File, and run a mass delete to purge any duplicates.",
        "B. After importing all of the custom objects, review all records created and manually merge or delete and duplicate record",
        "C. Include a column in the import file that has either record names, Salesforce IDs, or external IDs that can be used to match records.",
        'D. When importing the file, select the "Prevent Duplicates" option on the last step of the Import Wizard and import the file.',
      ],
      answer: "C",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "Which statement is true about an external id field? Choose 2 answers",
      options: [
        "A. The field must contain at least one number and at least one letter",
        "B. The field must be unique since duplicates are not allowed within salesforce",
        "C. The field can be unique based on case-sensitive or case-insensitive values.",
        "D. The field contains unique records identifiers from a system outside of salesforce",
      ],
      answer: "B,D",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "SERVICE AGENTS ARE REQUIRED TO CONFIRM A USER IDENTITY BEFORE PROVIDING SUPPORT INFORMATION OVER THE PHONE. WHAT FEATURE CAN AN APP BUILDER USE TO HELP AGENTS MEET THIS REQUIREMENT?",
      options: [
        "A. Case Validation Rules",
        "B. Add Path to the top of the Case layout",
        "C. Include Surveys as a Case related list",
        "D. Guided Action Flows on the record page",
      ],
      answer: "D",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "Sales rep at universal containers use salesforce on their mobile devices. They want a way to add new contacts quickly and then follow up later to complete the additional information necessary. What mobile should an app builder recommend?",
      options: [
        "A. Add a compact layout to contacts",
        "B. Use path and set pre-defined values",
        "C. Build a global action to create contacts",
        "D. Customize the mobile menu to move contacts to the top",
      ],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "What determines whether a user can create a new record using a specific record type?",
      options: [
        "A. Page Layout",
        "B. Field level security",
        "C. Sharing",
        "D. Profile",
      ],
      answer: "D",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "Sales reps at Cloud Kicks (CK) forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit opportunities into the Secure Commitment Stage to eliminate manual submission.\nWhich three features would meet the business requirements?\nChoose 3 answers",
      options: [
        "A. Chatter action",
        "B. Flow",
        "C. Workflow",
        "D. Apex",
        "E. Process Builder",
      ],
      answer: "B,D,E",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding case assignment rules? (Choose 3 answers)",
      options: [
        "A. A predefined Case Team is mandatory for each rule entry",
        "B. They allow for more than one rule entry for each assignment rule",
        "C. They allow for more than one active rule at the same time",
        "D. They allow cases to be assigned to a queue",
        "E. Salesforce processes case assignment rules before workflow rules",
      ],
      answer: "A,B,D",
      title: "Question 117",
      explanation: "",
    },
    {
      content: "In order to delete a record smth needs to be approved.",
      options: [
        "A. Option 4",
        "B. Approval with Workflow",
        "C. Approval with Apex Trigger",
        "D. Option 3",
      ],
      answer: "C",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        'Duplicate management for leads has been implemented at universal containers but it seems duplicate leads are still being created. The org wide default is set to "Private" for leads.\nWhich two actions help prevent duplicate leads from being created?\nChoose 2 answers.',
      options: [
        "A. Change OWD for leads for public read",
        "B. Change OWD for leads to public edit",
        "C. Change the lead duplicate rule details to bypass sharing rules",
        "D. Change the lead matching rule to block on create",
      ],
      answer: "C,D",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules occur after validation rules and thus override validation rules.",
        "B. Workflow rules cannot trigger a validation rule",
        "C. Field Level Security prevents the validation rule from running.",
      ],
      answer: "B",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "Universal Containers require different fields to be filled out at each stage of the Opportunity sates process.\nWhat configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Create a Process Builder to prompt the User for field information.",
        "B. Define record types and page layouts for each stage.",
        "C. Set page layout required fields based on the current stage.",
        "D. Add the Path component to the Lightning record page.",
      ],
      answer: "D",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track installation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installation with their opportunities.\nvisibility of all the installations associated with their opportunities.\nWhat kind of relationship should this new object have to the Opportunity?",
      options: [
        "A. Lookup",
        "B. Many to Many",
        "C. Hierarchical",
        "D. Master-Detail",
      ],
      answer: "D",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "Which of the following can be source of report chart placed in page layout?(Choose 2)",
      options: ["A. Joined", "B. Summary", "C. Matrix", "D. Tabular"],
      answer: "B,C",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "Universal Containers is piloting new features in an existing sandbox and wants to prevent outbound email sends during testing.\nWhat should the app builder do to meet the requirement?",
      options: [
        "A. Email deliverability set to no access.",
        "B. Email deliverability set to system email only.",
        "C. Email configured for SMTP authentication.",
        "D. Email relay to the configured host enabled.",
      ],
      answer: "A",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        'UVC uses a custom object to track site visits, When the status of a site visit ischanged from "in process " to "On hold " the business wants the site visit owner tobe automatically assigned to an "On hold " Queue. Which capability can be used toaccomplish this?',
      options: [
        "A. Visual workflow",
        "B. Apex Trigger",
        "C. Assignment rule",
        "D. Action",
      ],
      answer: "C",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize Salesforce1 mobile app for branding? Choose 3 answers",
      options: [
        "A. The image on loading page",
        "B. Background color on loading page.",
        "C. Action bar color",
        "D. Header and search bar color.",
        "E. Notification and search icon",
      ],
      answer: "A,B,D",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. Endusers would like a visual indicator of one to five stars based on the number found inthe feedback score customer field.",
      options: ["A. Use a custom image", "B. Number", "C. Text", "D. Formula"],
      answer: "D",
      title: "Question 127",
      explanation: "",
    },
    {
      content: "Which report types may be used with Analytic Snapshots?(2)",
      options: ["A. Matrix", "B. Summary", "C. Tabular", "D. Joined"],
      answer: "B,C",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "An app builder is tasked with adding key performance indicators on client pages. They want to see a summary of the number of open Opportunities and the number of won Opportunities for each Account.\nWhere should the app builder go to build these new rollups?",
      options: [
        "A. Lightning Object Creator",
        "B. Account Object",
        "C. Lightning App Builder",
        "D. Opportunity Object",
      ],
      answer: "B",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "Universal Containers allows users to create standard reports on demand.\nWhat are three considerations users should be aware of when creating a new report?\nChoose 3 answers",
      options: [
        "A. Records will be available in the report regardless of security permissions",
        "B. Users will need to add the report to a shared folder for other users to see It.",
        "C. Users can require that child objects exist for patent records using a cross filter.",
        "D. Charts can be added to summary reports to provide a visualization.",
        "E. The report type determines the types of records and fields that will be available.",
      ],
      answer: "A,C,D",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) has a custom Invoice object and a custom Invoice Line Item object. TTie Invoice Line Item object has a lookup relationship to the Invoice. UC would like to convert the lookup relationship to a master-detail relationship but is unable to do so.\nWhich two reasons could be preventing this relationship conversion?\nChoose 2 answers",
      options: [
        "A. There is a roll-up summary field on the Invoice object.",
        "B. There are already two master-detail relationships on the Invoice Line Item.",
        "C. Invoice Line Item records exist without having the Invoice lookup field populated.",
        "D. Custom objects are unable to be on the detail side of a master-detail relationship.",
      ],
      answer: "B,C",
      title: "Question 131",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      options: [
        "A. Custom Button",
        "B. Custom Action",
        "C. Custom quick access link",
        "D. Custom URL formula field",
      ],
      answer: "B",
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding quick actions in the publisher section.",
        "B. By adding Visualforce page to the mobile cards section",
        "C. By adding a mobile layout and assigning it to a profile.",
        "D. By adding actions in the Salesforce1 action bar section.",
      ],
      answer: "B,C",
      title: "Question 133",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Contracts for agreements with customers. A sales manager is required to provide approval for contracts and director approval for any contract over $10,000.\nWhich two options should an app builder use to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved7 Choose 2 answers",
      options: [
        "A. Create an approval process on the Contract object with one step for each sales manager that sets the approver as the director.",
        "B. Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed.",
        "C. Create an approval process on the Contract object with criteria set on a second approval step set as 'Amount__c > 10,000' and set the approver as director.",
        "D. Create an approval process on the Contract object and set the field for 'Next Automated Approver Determined By' as Manager'.",
      ],
      answer: "A,D",
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty wants to track how many lifts are being installed into customer garages. The To Be Installed custom checkbox field on the custom Lift object should be checked and an external system should be notified via an outbound message the next day when a lift is sold.\nWhat automation tool should be used to complete this task?",
      options: [
        "A. Approval process",
        "B. Process Builder",
        "C. Flow",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 135",
      explanation: "",
    },
    {
      content:
        "An admin is trying to add a custom VF page to the mobile app quick navigation menu but can't. What might be the problem?",
      options: [
        "A. The VF page references / fields that the user can't access",
        "B. The menu configuration has not been set up correctly for the VF page",
        "C. A tab has not been created for the VF page",
        "D. The smart search is not enabled for the VF page",
      ],
      answer: "C",
      title: "Question 136",
      explanation: "",
    },
    {
      content:
        "Invoices in SAP need to be reviewed from Salesforce Account object Home. (Select 2)",
      options: [
        "A. O-DATA",
        "B. Data Loader",
        "C. From SAP config",
        "D. External object",
      ],
      answer: "A,D",
      title: "Question 137",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered. What should an app builder recommend to meet this requirement?",
      options: [
        "A. Update the important fields to be required on the page layout",
        "B. Create a workflow rule to check the fields are formatted correctly",
        "C. Configure a validation to require a field for a specific record type",
        "D. Make a formula field to check the format of the important fields",
      ],
      answer: "C",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "Universal Containers assigns system access via permission sets and permission set groups to ensure each user has proper access. One department with varying levels of support staff has five consistent permission sets they require in order to complete their duties. Some higher-level staff have additional permission sets that are only required for them.\nHow should an app builder recommend assigning permission sets to users?",
      options: [
        "A. Utilize the manage assignments button to assign a permission set group and additional individual permission sets to each user.",
        "B. Utilize the Data Loader to mass update the desired users with their full list of permission sets and permission set groups.",
        "C. Utilize the manage assignments button to assign each user with the same set of permission set groups and permission sets.",
        "D. Utilize the Data Import Wizard to mass update the desired users with their full list of permission sets and permission set groups.",
      ],
      answer: "A",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "Universal containers allows users to create standard reports on demand. What are two considerations users should be aware of when creating a new report?",
      options: [
        "A. The report type determines the types of records and fields that will be available",
        "B. Records will be available in the in the report regardless of security permissions",
        "C. Reports created from standard report types are available to all users",
        "D. Users can require that child objects exist for parent records using a cross filter",
      ],
      answer: "A",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To create a record page",
        "B. To create a custom visual flow",
        "C. To external system using data of salesforce",
        "D. Navigate to Apex trigger",
        "E. To a process to update current record",
      ],
      answer: "A,C,E",
      title: "Question 141",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment.\nHow can this be accomplished?",
      options: [
        "A. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
        "B. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
        "C. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments.",
        "D. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
      ],
      answer: "A",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from "In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Assignment Rule",
        "B. Action",
        "C. Visual Workflow",
        "D. Apex Trigger",
      ],
      answer: "A",
      title: "Question 143",
      explanation: "",
    },
    {
      content:
        "Universal Containers's app builder has been tasked with replacing workflow rules and Apex triggers with Process Builders where possible.\nWhat are two important considerations an app builder should know before the project is started?\nChoose 2 answers",
      options: [
        "A. Apex has a different SOQL query limit than Flow.",
        "B. Avoid generating infinite loops.",
        "C. Combine actions when possible.",
        "D. Create a process for each workflow rule.",
      ],
      answer: "B,C",
      title: "Question 144",
      explanation: "",
    },
    {
      content: "What is the capability of schema Builder? Choose 2 Answers",
      options: [
        "A. Showing selected objects on the page.",
        "B. Creating a new record type",
        "C. Viewing page layout in a new window",
        "D. Editing custom settings",
      ],
      answer: "A,C",
      title: "Question 145",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters uses a custom object to track travel requests. Rangers want to have automatic posts on a record whenever a travel request has been approved.\nWhich feature should be used to accomplish this?",
      options: [
        "A. Workflow rule",
        "B. Feed tracking",
        "C. Auto-response rule",
        "D. Feed quick action",
      ],
      answer: "B",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "What salesforce functionality is ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Multiple Currencies",
        "B. Validation Rules",
        "C. Decimal Places and Character Limits",
        "D. Field Level Security",
        "E. Record Type Picklist Value Assignments",
      ],
      answer: "B,D,E",
      title: "Question 147",
      explanation: "",
    },
    {
      content: "Which objects can be members of a campaign? Choose 2 answers",
      options: ["A. Contact", "B. Account", "C. Opportunity", "D. Lead"],
      answer: "A,D",
      title: "Question 148",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
      options: [
        "A. Checkbox fields can be controlling fields but not dependent fields",
        "B. Standard and custom picklist fields can be dependent fields.",
        "C. Multi select picklist can be dependent picklist but not controlling fields",
        "D. Custom picklist field can be either controlling or dependent field",
        "E. The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field",
      ],
      answer: "A,C,D",
      title: "Question 149",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object. The App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Invoice records have existing values in the Account.",
        "B. The Account record includes Invoice roll-up summary fields.",
        "C. The invoice must have at least one Master-Detail field for reporting.",
        "D. The Account is included in the workflow on the Invoice object.",
      ],
      answer: "B",
      title: "Question 150",
      explanation: "",
    },
    {
      content:
        "The marketing team at UVC has a list of 400 leads it wants to upload to Salesforce. The team need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers",
      options: [
        "A. Upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation.",
        "B. Use Data Loader's update function to import lead and match to existing records based on e-mail address.",
        "C. Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to_Lead scenario.",
        "D. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
      ],
      answer: "A,D",
      title: "Question 151",
      explanation: "",
    },
    {
      content:
        "What is a section of the Lightning App Builder Tool? Choose 3 Answers",
      options: [
        "A. Mini Page Layout",
        "B. Canvas",
        "C. Selected Publisher Actions",
        "D. Components",
        "E. Mobile Cards",
      ],
      answer: "B,C,D",
      title: "Question 152",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants some enhancements on its Opportunity page layout to improve efficiency and collaboration.\nWhich two solutions should an app builder suggest to help meet these requirements?\nChoose 2 answers",
      options: [
        "A. Add a Path component with fields and instructions aligning to stages on the Opportunity.",
        "B. Mark stage dependent fields as required on the Opportunity page layout.",
        "C. Use two Tabs components to separate record information from activities.",
        "D. Set up an approval process requiring manager consent at each stage of the Opportunity.",
      ],
      answer: "A,B",
      title: "Question 153",
      explanation: "",
    },
    {
      content:
        "Service agents at Ursa Major Solar want a more condensed case view. Service agents also want to be able to modify the associated contact and account records from the case page layout on the Lightning record page.\nWhich two components should an app builder use to meet these requirements?\nChoose 2 answers",
      options: ["A. Tabs", "B. Related record", "C. Path", "D. Rich text"],
      answer: "A,B",
      title: "Question 154",
      explanation: "",
    },
    {
      content:
        "An app builder received a request to extend record access beyond the organization-wide defaults configured. Which two features satisfy this requirement?\nChoose 2 answers",
      options: [
        "A. Public Groups",
        "B. Sharing Rules",
        "C. Permission Set Groups",
        "D. Manual Sharing Rules",
      ],
      answer: "A,B",
      title: "Question 155",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The global marketing public group and anyone above the owner in the role hierarchy",
        "B. The record owner and the global marketing public group.",
        "C. The record owner and anyone above the owner in the role hierarchy",
        "D. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
      ],
      answer: "B",
      title: "Question 156",
      explanation: "",
    },
    {
      content:
        "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
      options: [
        "A. Use a flow and an outbound message",
        "B. Use a process and an outbound message",
        "C. Use a workflow rule and an outbound message",
        "D. Use a process and Apex Code",
      ],
      answer: "C,D",
      title: "Question 157",
      explanation: "",
    },
    {
      content:
        "What is a key consideration when using Unmanaged packages? Choose 2 answers",
      options: [
        "A. A namespace is required to create an Unmanaged package",
        "B. A namespace is not required to create an Unamanged package",
        "C. The person who created the Unamanged package has no control over the installed components",
        "D. The person who created the Unmanaged package can change or upgrade installed components",
      ],
      answer: "A,C",
      title: "Question 158",
      explanation: "",
    },
    {
      content:
        "A user is unable to use inline editing on a list view. A quick check verifies the user should be able to perform inline editing as they have been assigned the appropriate permissions.\nWhich two conditions should the app builder review?\nChoose 2 answers",
      options: [
        "A. If the list view contains a chart created by the user",
        "B. If the list view selected is the recently viewed list view",
        "C. If the list view contains more than one record type",
        "D. If the list view restricts sharing for the user",
      ],
      answer: "C,D",
      title: "Question 159",
      explanation: "",
    },
  ],
});