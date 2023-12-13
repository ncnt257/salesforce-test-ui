window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2021-01-05.q103",
  content: [
    {
      content:
        "Universal containers created a custom object called component to capture details about products sold. what approach should an app builder take to show component as a related list on product?",
      options: [
        "A. Create a master-detail- relationship on product to component. Add the component related list to the product page layout.",
        "B. Create a roll-up on product. Add the component related list to the product page layout.",
        "C. Created junction object to relate component and product. Add the component related list to the product page layout.",
        "D. Create a lookup relationship on component to product . Add the component related list to the product page layout.",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Which two features can extend record access beyond the organization-wide defaults?",
      options: [
        "A. Criteria-based sharing rules",
        "B. Public or private groups",
        "C. Owner-based sharing rules",
        "D. Dynamic role hierarchy",
      ],
      answer: "A,C",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Containers use Salesforce to record information for leads. When new prospects are added, an outbound message is sent to SAP with lead's information. Which automation process will accomplish this without writing any code?",
      options: [
        "A. Create a Workflow Rule with an outbound message as the action",
        "B. Use Visual Workflow to create a wizard that will send an outbound message.",
        "C. Design an Approval Process that sends an outbound message upon arrival.",
        "D. Create a process using Lightning Process Builder to send the outbound message.",
      ],
      answer: "A",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity Stage? Choose 3 answers",
      options: [
        "A. Probability",
        "B. Forecast Category",
        "C. Close Date",
        "D. Amount",
        "E. Type",
      ],
      answer: "A,B,E",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "At Universal containers, all US Sales reps should be able to view the US Team dashboard, however, only the US sales directors should be able to see the data in the component and view its source report. How can an app builder ensure the proper access is granted?",
      options: [
        "A. Make the dashboard dynamic and give US Sales Reps the view my teams dashboard permission",
        "B. Share the dashboard with the public group US Sales Reps and share the dashboard source reports folder with the US Sales Director profile",
        "C. Share the dashboard folder with roles and subordinates of the US Sales Director and share the report folder with the role of US Sales Director",
      ],
      answer: "B",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to odd new contacts quickly and then follow up later to complete the additional Information necessary.\nWhat mobile solution should an App Builder recommend?",
      options: [
        "A. Customize the mobile menu to move Contacts to the top.",
        "B. Add a compact layout to Contacts.",
        "C. Build a global action to create Contacts.",
        "D. Use Path and set pre-defined values",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "All contact's mailing post code should match the account shipping postal code.How to do it?",
      options: [
        "A. Geolocation()",
        "B. Use distance()use distance()",
        "C. Use NOT EQUAL operator",
        "D. Use compare operator",
      ],
      answer: "D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be out at each of the opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Add the path component to the lightning record type",
        "B. Create a process builder to prompt the user for filed information",
        "C. Define record type and page payouts for each stage",
        "D. Set page layout required fields based on the current stage",
      ],
      answer: "B",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
        "B. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "C. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
        "D. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
      ],
      answer: "B",
      title: "Question 9",
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
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from\n"In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Assignment Rule",
        "B. Visual Workflow",
        "C. Apex Trigger",
        "D. Action",
      ],
      answer: "A",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to build a recruiting app that allows for multiple positions to appear on custom objects websites and postings. UC requires a report that shows the related custom objects of postings. Which two items should an app builder configure to implement this?",
      options: [
        "A. Configure a postings object with lookup field to both positions and websites",
        "B. Utilize the standard report type",
        "C. Create two new custom report type",
        "D. Configure a postings object with master detail field to both positions and websites",
      ],
      answer: "C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "An app builder wants to show groups as the last navigation menu item in the salesforce1 mobile app. however, the app builder is not able to select groups as one of the items on the drop-down menu. What could cause this?",
      options: [
        "A. Groups is showing up in the recent section and not in the navigation menu",
        "B. Groups is not included in the selecteCreate a criteria based sharing rule using the projects department that grd list for the navigation menu",
        "C. Groups is included in the smart search items but not on the navigation menu",
        "D. Groups cannot be the last item in the navigation menu.",
      ],
      answer: "C",
      title: "Question 13",
      explanation:
        "Explanation\n Groups Appears for organizations that have Chatter enabled. If you don't add this item to the navigation menu, groups are automatically included in the set of Smart Search Items instead and the Groups item is available from the Recent section.\n https://developer.salesforce.com/docs/atlas.en-us.salesforce1.meta/salesforce1/customize_s1_nav_about.htm",
    },
    {
      content:
        "What is a true statement in regards to converting a tabular, summary, ormatrix report to a joined report?\n(Choose 3)",
      options: [
        "A. Joined report blocks are formatted as matrix reports",
        "B. The rows to display filter is not supported in joined reports",
        "C. Bucket field are not supported in joined reports",
        "D. Report formula fields are not supported in joined reports",
        "E. Cross filter are not supported in joined reports",
      ],
      answer: "B,C,E",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Which type of membership can be defined with external objects? (Choose 2)",
      options: [
        "A. External lookup",
        "B. External master-detail",
        "C. Indirect lookup",
        "D. Cross-organization lookup",
      ],
      answer: "A,C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Universal containers requires that all users specify a contract is sent on each opportunity prior to marking it as closed won. uc wants to be able to report on how many opportunities have sent contracts compared to how many have a missing contract when the opportunities closed. what type of field should an app builder configure to fulfill this requirement ?",
      options: ["A. Picklist", "B. Text", "C. Text Area", "D. Checkbox"],
      answer: "D",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to update a field on an Account when an Opportunity Stage is changed to Closed Lost. What tools can we use to accomplish this requirement? (Choose 2)",
      options: [
        "A. Lightning Process Builder",
        "B. Workflow Rule",
        "C. Approval Process",
        "D. Assignment Rule",
      ],
      answer: "A,B",
      title: "Question 17",
      explanation: "",
    },
    {
      content: "What can be done after the workflow field re-evaluation?",
      options: [
        "A. Invalid data",
        "B. Out of hour limit (loop)",
        "C. Option 1",
        "D. Trigger another rule",
      ],
      answer: "B",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores invoices in SAP. Users want to view invoice data on the related Account records in Salesforce. How can this be achieved? Choose 2 answers",
      options: [
        "A. Create an external object connected to an invoice table in SAP.",
        "B. Create a custom Invoice object and connect to SAP using Data Loader.",
        "C. Connect to an OData Publisher Service for SAP databases",
        "D. Use SAP data export functions to load data directly in Salesforce",
      ],
      answer: "A,C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "At UVC, the Account object has a MD relationship with an Invoice custom object. The app builder would like to change this to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Invoice must have at least one MD field for reporting",
        "B. The Account record includes invoice roll-up summary fields",
        "C. The Account is included in the workflow on the Invoice Object",
        "D. The invoice records have existing values in the Account",
      ],
      answer: "B",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link? Choose 3 answers",
      options: [
        "A. Navigate to a custom visual flow to update the current record",
        "B. Navigate to a process to update the current record",
        "C. Navigate to an Apex Trigger to update the current record",
        "D. Navigate to a create a record page with field pre-populated",
        "E. Navigate to an external system using data in salesforce",
      ],
      answer: "B,D,E",
      title: "Question 21",
      explanation: "",
    },
    {
      content: "When should Unmanaged packages be created? Choose 2 answers",
      options: [
        "A. Publishing an application for sale on the AppExchange.",
        "B. Distributing open-source projects on AppExchange",
        "C. Migrating of components from sandbox to production",
        "D. Deploying from a Developer Edition environment.",
      ],
      answer: "B,D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "What is a section of the Lightning App Builder Tool? Choose 3 Answers",
      options: [
        "A. Selected Publisher Actions",
        "B. Mobile Cards",
        "C. Mini Page Layout",
        "D. Components",
        "E. Canvas",
      ],
      answer: "A,D,E",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. Field references will be removed in Visualforce pages",
        "B. Existing list views that reference the field may be deleted.",
        "C. Changing a field type will remove existing field history.",
        "D. All data should be backed up before converting a text field.",
      ],
      answer: "B,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Personal account",
        "B. Record page",
        "C. Web to case",
        "D. Related object",
      ],
      answer: "A,B,D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Contact Salesforce to have the component activated for the Lightning App Builder.",
        "B. Purchase a license for the Lightning App Builder.",
        "C. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
        "D. Join the pilot Lightning App Builder team.",
      ],
      answer: "A",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 2", "B. 4", "C. 1", "D. 3"],
      answer: "A",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up Salesforce for the first time. Management wants the sales and marketing have different navigation menus in the Salesforce 1 mobile app. Which option is available for an App Builder to satisfy this requirement?",
      options: [
        "A. Create public group for Sales and Marketing and create mobile navigation menus for each group",
        "B. Create mobile navigation menus for both sales and marketing profile ",
        "C. Create mobile navigation menus for both sales and marketing profile",
        "D. Create roles for sales and marketing and assign a custom home page layout for each profile",
      ],
      answer: "B",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "UVC has deployed custom tabs to Production via change sets, without including the profiles settings. What is true about the visibility of custom tabs in Enterprise Edition?",
      options: [
        "A. Custom tabs are not deployed",
        "B. Custom tabs are hidden for all users",
        "C. Custom tabs are default on for all the users",
        "D. Custom tabs are default off for all the users.",
      ],
      answer: "B",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly.\nWhat steps should an App Builder take to meet these requirements?",
      options: [
        "A. Create a Developer Sandbox and schedule Data loader to download selected object data weekly.",
        "B. Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.",
        "C. Create a Full Sandbox and use a sandbox template",
        "D. Create a Partial Copy Sandbox and use a sandbox template.",
      ],
      answer: "D",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "What Is true statement regarding roll up summary fields. Select 2.",
      options: [
        "A. The roll up summary field inherits the field level security of the child object.",
        "B. Multi select picklist files can be used in the field column of the field column of roll up summary filters.",
        "C. Changes to the value of a roll up summary field can trigger assignment rules to run",
        "D. Roll up summary fields can only be created on the master of master-detail relationship",
      ],
      answer: "C,D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a Visualforce page in a page Layout. Choose 2 Answers",
      options: [
        "A. Visualforce Pages on a field set have attributes for width and height.",
        "B. Visualforce Pages can be placed anywhere in the page layout.",
        "C. Visualforce Pages can only be place in the Visualforce section in a page layout.",
        "D. Visualforce Pages on a page layout have attributes for width and height",
      ],
      answer: "B,D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a Contact's \"Preferred Contact Method\" direction on Contact record. Users need to be able to identify whether a phone number or an email, is the Contact's preferred communication method. Which filed type will allow the App Builder to accomplish this with the fewest fields possible?",
      options: ["A. Checkboxes", "B. Picklist", "C. Formula", "D. Email"],
      answer: "A,B",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal con has purchased a lighting component on the appExchange. Where can that component be utilized? (Choose 2)",
      options: [
        "A. Visual workflow",
        "B. Lightning process builder",
        "C. Salesforce1 mobile app",
        "D. Salesforce lighting app",
      ],
      answer: "C,D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "The VP of account management at Universal Containers has requested that all contacts mailing postal codes match the associated accounts shipping postal code. How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using the distance() function",
        "B. Create a validation rule using the geolocation() function",
        "C. Create a validation rule using a compare operator",
        "D. Create a validation rule using a not equal operator",
      ],
      answer: "D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal Containers provides access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when users log in, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Create separate home page custom components and layouts; assign to users by role.",
        "B. Expose specific elements within a home page custom component determined by role.",
        "C. Create separate home page custom components and layouts; assign to users by profile",
        "D. Expose specific elements within a home page custom components determined by profile.",
      ],
      answer: "C",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "B. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
        "C. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "D. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
      options: [
        "A. Multi select picklist can be dependent picklist but not controlling fields",
        "B. The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field",
        "C. Checkbox fields can be controlling fields but not dependent fields",
        "D. Standard and custom picklist fields can be dependent fields.",
        "E. Custom picklist field can be either controlling or dependent field",
      ],
      answer: "A,C,E",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers provide access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when user login, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Create separate home page custom components and layouts; assign to user by role.",
        "B. Expose specific elements within a home page custom component determined by profile.",
        "C. Expose specific elements within a home page custom component determined by role.",
        "D. Create separate home page custom components and layouts; assign to user by profile.",
      ],
      answer: "D",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal Containers is rolling out a new customer service process. Customer service managers will need to edit cases for their subordinates, but not cases for other groups. Managers and users should be able to view all cases. What is the recommended solution to configure this? Choose 2 answers",
      options: [
        "A. Create standard role hierarchies",
        "B. Set organization-wide sharing defaults to public read/only.",
        "C. Set organization-wide sharing defaults to private.",
        "D. Create criteria-based sharing rules.",
      ],
      answer: "A,B",
      title: "Question 40",
      explanation: "",
    },
    {
      content: "Person Accounts Choose 2 answers",
      options: [
        "A. Do use space in both account and contacts table",
        "B. Are enabled by default",
        "C. Are enabled via feature license",
        "D. Have the same icon as Business accounts",
        "E. Can only be merged with other person accounts",
      ],
      answer: "A,E",
      title: "Question 41",
      explanation: "",
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
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "What is true when changing the following field types? (Choose 3)",
      options: [
        "A. Data can be lost when changing from Rich Text to Long Text",
        "B. No data is lost when changing Picklist to Multipicklist",
        "C. No data is lost when converting Text to auto number",
        "D. Data is lost when changing Number to Currency",
        "E. Rollup summary fields will stop calculate if Master Detail is changed to lookup",
      ],
      answer: "A,B,C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "What the true statement is in regards to converting a tabular, summary, or matrix report to a joined report?\nChoose 3 answers",
      options: [
        "A. The rows to display filter is not supported in Joined reports",
        "B. Joined report blocks are formatted as matrix reports.",
        "C. Report formula fields are nor supported in Joined reports",
        "D. Bucket fields are not supported in joined reports.",
        "E. Cross filters are not supported in joined reports",
      ],
      answer: "A,D,E",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "When an opportunity close date is delayed by more than 60 days, the manager and the VP sales must approve the change. How can this requirement be met? Choose 2 answers",
      options: [
        "A. Create a lightning process builder flow that submits the record for an approval process",
        "B. Build a validation rule that does not allow a user to save the opportunity record.",
        "C. Build an approval process that requires unanimous approval from the manager and VP of sales.",
        "D. Create a workflow rule that checks for close date less that 60 days and add an email alert.",
      ],
      answer: "A,C",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom picklist called support level on the account object. They would like to show the real time value of support level on all case records. How can an app builder implement this requirement?",
      options: [
        "A. Create a formula field on the account object using the ISPICKVAL function",
        "B. Create a roll-up summary field using support level on the account object",
        "C. Create a process builder and use a field update on the case object",
        "D. Create a formula field on the case object using the TEXT function",
      ],
      answer: "C",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Which statement is true about converting a lead? Choose 3 answers",
      options: [
        'A. The lead\'s most recent campaign record is automatically applied to the "PRIMARY campaign source" field on the opportunity',
        "B. Administrators may choose whether to enforce validation rules & triggers",
        "C. Users can convert leads that are associated with an active approval process.",
        "D. The system automatically maps standard lead fields to standard account, contact, and opportunity fields.",
        "E. Multi-select picklist values on lead records overwrite values on the contact's corresponding field.",
      ],
      answer: "A,B,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead.\nWhat should an app builder configure to meet these requirements?",
      options: [
        "A. Create a partner community and a record type for web and trade show leads",
        "B. Create three sections on the lead layout and instruct users to collapse the non-relevant fields",
        "C. Create custom page payouts for each type of lead only containing the relevant fields",
      ],
      answer: "A",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Which of the following can be source of report chart placed in page layout?(Choose 2)",
      options: ["A. Tabular", "B. Summary", "C. Matrix", "D. Joined"],
      answer: "B,C",
      title: "Question 49",
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
      answer: "A",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days an account has been last contacted through mail. Which field should be used to achieve this?",
      options: [
        "A. Formula Field",
        "B. Number Field",
        "C. Rollup Summary Field",
        "D. Date Field",
      ],
      answer: "A",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Number",
        "B. Date",
        "C. Formula",
        "D. Currency",
        "E. Percent",
      ],
      answer: "A,D,E",
      title: "Question 52",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content:
        "After universal containers converted qualified leads. Sales reps need to be able to report on converted leads.\nHow should an app builder support for this requirement ?",
      options: [
        "A. Ensure the representative has read access to the original lead records",
        "B. Assign the representative view and edit converted leads permission",
        "C. Enable preserve lead status in the lead conversion settings",
        "D. Create a custom report type with converted leads as the primary object",
      ],
      answer: "C",
      title: "Question 58",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content:
        "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
      options: [
        "A. Summary format",
        "B. Tabular format",
        "C. Matrix format",
        "D. Joined format",
      ],
      answer: "A,C",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "A production org includes custom objects containing confidential information. A sandbox ix needed that includes data records, excludes all of the confidential objects, and can be refreshed weekly?",
      options: [
        "A. Create a partial copy sandbox and use a sandbox template",
        "B. Create a developer pro sandbox and schedule loader to download selected object data weekly",
        "C. Create a developer sandbox and schedule data loader to download selected object data weekly.",
        "D. Create a full sandbox and use a sandbox template",
      ],
      answer: "A",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize the salesforce1 mobile app for branding ? Select 3",
      options: [
        "A. Action bar color",
        "B. The image on loading page",
        "C. Background color on loading page",
        "D. Header and search bar color",
        "E. Notification and search icon",
      ],
      answer: "B,C,D",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Develop Apex code and Visualforce pages to send the emails.",
        "B. Request Salesforce increase the number of maximum daily mails.",
        "C. Research and evaluate products available on AppExchange to send mass emails",
        "D. Download all contacts to a CSV file and use an email client to send the mails",
      ],
      answer: "C",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "What is a feature that can extend record access beyond the organization-wide defaults? Choose 2 Answers",
      options: [
        "A. Owner-based sharing rules.",
        "B. Public or private groups.",
        "C. Dynamic role hierarchy",
        "D. Criteria-based sharing rules.",
      ],
      answer: "A,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Approval process",
        "B. Validation rule",
        "C. Lighting process builder",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 66",
      explanation: "",
    },
    {
      content: "",
      options: [],
      answer: "",
      title: "Question ",
      explanation: "",
    },
    {
      content:
        "Invoices in SAP need to be reviewed from Salesforce Account object Home. (Select 2)",
      options: [
        "A. External object",
        "B. Data Loader",
        "C. O-DATA",
        "D. From SAP config",
      ],
      answer: "A,C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Which two solutions prevent a formula field from being referenced by a Roll-Up Summary Field?",
      options: [
        "A. The NOW() function in the formula field",
        "B. The CASE() function in the formula field",
        "C. A cross-object workflow updating a field referenced by the formula field",
        "D. A cross-object field reference in the formula field",
      ],
      answer: "B,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Loading page color",
        "B. Header and Search",
        "C. Action tab bar",
        "D. Loading logo",
      ],
      answer: "A,B,D",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered. What should an app builder recommend to meet this requirement?",
      options: [
        "A. Configure a validation to require a field for a specific record type",
        "B. Make a formula field to check the format of the important fields",
        "C. Create a workflow rule to check the fields are formatted correctly",
      ],
      answer: "A",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "What salesforce functionality is ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Field Level Security",
        "B. Record Type Picklist Value Assignments",
        "C. Multiple Currencies",
        "D. Validation Rules",
        "E. Decimal Places and Character Limits",
      ],
      answer: "A,B,D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        "A. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
        'B. Create a Manager profile and select the "View My Teams Data" option.',
        'C. Create a Manager Permission set and select the "View All Data" option',
        "D. Set the Manger field for each User Record on the Manager's team.",
      ],
      answer: "C",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup. What happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail field is deleted from the object",
        "B. The Contacts Master-Detail becomes the primary.",
        "C. The Contacts Master-Detail values are cleared from invoices.",
        "D. The Contacts Master-Detail also converts to Lookup.",
      ],
      answer: "B",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        "A. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
        "B. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
        "C. Field update are not available on currency field if the organization uses multi-currency.",
        'D. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
      ],
      answer: "B,D",
      title: "Question 75",
      explanation: "",
    },
    {
      content: "Field type conversion. Which of the following are true: (2)",
      options: [
        "A. Data can be lost when converting from number to currency (assuming that field lengths are identical)",
        "B. Data can be lost when converting from simple picklist to multi picklist",
        "C. Information can be lost when converting from text area (rich) to text area (long)",
        "D. Data can be lost when converting from auto-number to text",
      ],
      answer: "C,D",
      title: "Question 76",
      explanation: "",
    },
    {
      content: "What can be done after workflow field re-evaluation?",
      options: [
        "A. Out of hour limit (loop)",
        "B. Option 1",
        "C. Invalid data",
        "D. Trigger another rule",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to rollout new product bundles with several pricing options. Pricing options include product-price bundles, account specific pricing and more. Which product satisfies the needs?",
      options: [
        "A. Lightning process builder",
        "B. Workflow on Opportunity/Opportunity Product",
        "C. Custom AppExchange-app for product-pricing",
        "D. Formula fields on Opportunity/Opportunity Product",
      ],
      answer: "A",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.\nThe App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Account record includes Invoice roll-up summary fields.",
        "B. The Invoice records have existing values in the Account.",
        "C. The invoice must have at least one Master-Detail field for reporting.",
        "D. The Account is included in the workflow on the Invoice object.",
      ],
      answer: "A",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Use an AppExchange partner product",
        "B. Use geolocation fields with Distance and Geolocation formulas",
        "C. Configure routing options in a custom object",
        "D. Configure Territory hierarchy and rules for routes based on territory",
      ],
      answer: "A",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "What metadata changes can be made directly in a production environment without deploying from sandbox?\nChoose 2 answers",
      options: [
        "A. Apex Classes",
        "B. Visualforce Pages",
        "C. Validation Rules",
        "D. Apex Triggers",
      ],
      answer: "B,C",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
      options: [
        "A. Use a flow and an outbound message",
        "B. Use a process and Apex Code",
        "C. Use a process and an outbound message",
        "D. Use a workflow rule and an outbound message",
      ],
      answer: "D",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers andacquisitions team to collaborate on potential new projects. This project should notbe visible for non-members to see or join,and can be accessed by invites only.",
      options: [
        "A. Unlisted group",
        "B. Public group",
        "C. Private group",
        "D. Member group",
      ],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority,\n         "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"),\n         "img/samples/flag_red.gif"))), "Priority Flag")',
        'B. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif",\n         "High", "img/samples/flag_red.gif", "/s.gif")',
        'C. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium",\n         "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'D. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"),\n         "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif",\n         "/s.gif")))',
      ],
      answer: "A,C",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "universal containers has implemented multi currency. There are several products that universal containers sells exclusively in europe and the UK. Opportunities for these products need to be written in euros or british pounds. Which solution should an app builder recommend ?",
      options: [
        "A. Create a new sales process that includes only the EUR and GBP currencies for these products.",
        "B. Create a new page layout for these products that shows only the EUR and GRP currencies in the opportunity currency picklist.",
        "C. Create a new validation rule that allows only EUR or GBP to be selected from all active currencies when an opportunity is created for these products.",
        "D. Create a new record type for these products and include only the EUR and GBP currencies from the opportunity currency picklist",
      ],
      answer: "B",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Universal Containers has requested that Sales reps be given access to view all Accounts in Salesforce. However, they've also requested that sales reps only be allowed to create new Opportunities on Accounts they own. How can this requirement be met?",
      options: [
        "A. Set the Organization-Wide Defaults sharing on Opportunities to Controlled by Parent.",
        "B. Set the Organization-Wide Defaults sharing on Opportunities to Private and recalculate sharing.",
        "C. Create an Opportunity Validation Rule that compares the Opportunity and Account Owners",
        "D. Create a new Opportunity Quick Action that validates Account ownership.",
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content: "What is the capability of sandbox templates? Choose 2 answers",
      options: [
        "A. Create a Partial Copy sandbox from a Partial Copy sandboxes environment.",
        "B. Save a template for re-use when creating a Partial Copy sandbox environment.",
        "C. Specify the object whose data should be replicated in a Partial Copy sandbox environment.",
        "D. Specify the data range for data being replicated in a Partial Copy sandbox environment",
      ],
      answer: "B,C",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "UVC has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. Which two actions can an App Builder take to accomplish this requirement? Choose 2 answers",
      options: [
        "A. Use a MD relationship between the Candidate and Interview Objects",
        "B. Use a roll-up summary field on the Candidate record to show the total number of interviews",
        "C. Use a lookup relationship between the Candidate and Interview objects (Your Answer)",
        "D. Use a formula field on the Candidate record to show the total number of interviews",
      ],
      answer: "A,B",
      title: "Question 88",
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
      title: "Question 89",
      explanation: "",
    },
    {
      content: "What is true regarding compact layouts? Choose 2 answers.",
      options: [
        "A. If a user doesn't have access to a field it won't be displayed",
        "B. Compact layouts must be configured for fields to be displayed in the record header",
        "C. Compact layouts can be assigned to different record types",
        "D. Compact layouts support all field types",
      ],
      answer: "A,C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "You want to use an External Data Object Table from Heroku carrying Product Category information. The data need to be included in Salesforce and searchable. What do you have to do before you can use the connection.\n(Choose 2)",
      options: [
        'A. Press "validate and sync"',
        "B. URL / choose the URL",
        'C. Choose "include as index field"',
        'D. Choose "include in Salesforce searches" option',
      ],
      answer: "A,D",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "What is true regarding the user interface for external object data? Choose 1 answer.",
      options: [
        "A. Chatter Feeds can be enabled on external object pages",
        "B. External object data can be accessed via detail pages",
        "C. All of the above",
        "D. External object data can be accessed via lists views",
        "E. External object data can be accessed via custom tabs",
      ],
      answer: "C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "In order to delete the Opportunities, Universal Containers would like sales reps to submit requests for approval from their sales manager. What can be used to meet these requirements?",
      options: [
        "A. Process Builder with Submit for Approval action",
        "B. Approval Process with Apex Trigger.",
        "C. Two-step Approval process.",
        "D. Approval Process with Time-Dependent workflow action.",
      ],
      answer: "C",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check organization-wide defaults",
        "B. Check the report folder sharing settings",
        "C. Check the user's profile for object settings.",
        "D. Check reports filter",
        "E. Check Sharing rules",
      ],
      answer: "A,C,E",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Forecast Category",
        "B. Lead Source",
        "C. Type",
        "D. Stage",
      ],
      answer: "B,C",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox?",
      options: [
        "A. Validation rules",
        "B. Visualforce pages",
        "C. Apex classes",
        "D. Apex triggers",
      ],
      answer: "A,B",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Con use salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to SAP with the Lead's info.",
      options: [
        "A. Use Visual Workflow",
        "B. Design an approval process",
        "C. Create a workflow rule",
        "D. Create a process using lightning process builder",
      ],
      answer: "C",
      title: "Question 97",
      explanation: "",
    },
    {
      content: "Which type of field cannot be universally required?",
      options: ["A. Summary", "B. Email", "C. Text", "D. Lookup"],
      answer: "A,D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this?\nChoose 3 answers",
      options: [
        "A. Date",
        "B. Percent",
        "C. Currency",
        "D. Checkbox",
        "E. Time",
      ],
      answer: "A,B,C",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a custom called reviews to capture information generated by interviews during the candidate process. The review records are visible to any user that has access to the related custom candidate record. The VP of human resources wants the comment field on the review to be private to anyone outside of the HR department",
      options: [
        "A. Create a page layout with the field and use field level security to hide the from all others users",
        "B. Create a sharing rule to share the filed with the VP of HR with role and subordinates",
        "C. Create an apex sharing rule to share the field with users that have HR in their role",
      ],
      answer: "B",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "The App Builder at Universal Containers has been asked to ensure that the Amount field is populated when the stage is set to Closed Won. What can be used to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Validation Rule",
        "C. Approval Process",
        "D. Lightning Process Builder",
      ],
      answer: "A",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure A new sales operations team has been created. This team needs to perform analysis on Opportunity data, all should have read arid write access to all Opportunities.\nWhat are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
      options: [
        "A. Add a permission set with 'View All\" and 'Modify All'' opportunity permissions enabled.",
        "B. Add a manual share for all opportunities with each user on the sales operations team.",
        "C. Create a criteria-based sharing rule to share all opportunities with the sales operations private group",
        "D. Create a criteria based sharing rule to all opportunities with the sales operations public group.",
      ],
      answer: "B",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment. How can this be accomplished?",
      options: [
        "A. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments",
        "B. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
        "C. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
        "D. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
      ],
      answer: "B",
      title: "Question 103",
      explanation: "",
    },
  ],
});