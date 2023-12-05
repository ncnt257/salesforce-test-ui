window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2022-05-21.q317",
  content: [
    {
      content:
        "Your organization-wide defaults for access rights to Price Books are set to Use, but only Sales Reps should have access to Price Books, What should be your first step? * (1 Point)",
      options: [
        "A. Change the organization-wide default setting to No Access.",
        "B. Change the Sales Reps' access rights to Use.",
        "C. Change the organization-wide default setting to View Only.",
        "D. Leave the organization-wide default setting, but change the Sales Reps' access rights.",
      ],
      answer: "A",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "UC has engaged a developer to create a custom Apex Rest service that is used by external systems to manipulate data in salesforce.\nwhich two methods can the administrator use to grant permission to use the Apex Rest service to the users of the external systems? choose 2 answers",
      options: [
        "A. Update the profile for the external systems to include access to the Remote site settings that correspond to the apex Rest services.",
        "B. Create a permission set that grants the API enabled administrative permission, and assign it to the users for the external systems.",
        "C. Create a Connected App and a new permission set to grant access to the Apex Rest services. Assign the permission set to the users for the external systems.",
        "D. create a permission set that grants access to the apex classes and grants the use apex Rest services permission and assign it to the users for the external",
      ],
      answer: "A,C",
      title: "Question 2",
      explanation: "systems.",
    },
    {
      content:
        "What can a Sales Representative see once he clicks on the Forecast (Collaborative) tab? Select 4",
      options: [
        "A. Quotas",
        "B. Forecast Categories",
        "C. Opportunity list column",
        "D. Forecast Range",
        "E. Data Source",
      ],
      answer: "A,B,C,D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "What determines whether a user can submit a record for approval?",
      options: [
        "A. If they have the Submit Approvals permission on their user record",
        "B. If the record meets the entry criteria set on the approval process",
        "C. If they are a delegated approver",
        "D. Anyone can submit a record that has an approval process",
      ],
      answer: "B",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining Salesforce Knowledge? Select 3",
      options: [
        "A. Knowledge settings must be configured in order for users to be able to create articles from cases",
        "B. Article version numbers must be assigned by a Knowledge Manager for tracking",
        "C. Solution category browsing must be enabled in Solution settings",
        "D. Data category visibility is assigned through roles and profiles",
      ],
      answer: "A,C,D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Dylan has submitted a vacation request for approval by his manager. Palmers, Dylan's manager is not receiving any email alerts. What can you use in order to troubleshoot the issue?",
      options: [
        "A. Setup audit trail",
        "B. Debug Log",
        "C. Email log",
        "D. Time-Based Workflow",
      ],
      answer: "C",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Which of the following features is NOT unique to Salesforce Knowledge? * (1 Point)",
      options: [
        "A. Synonym Search",
        "B. Categories",
        "C. Custom Page Layouts",
        "D. Article Types",
      ],
      answer: "C",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "A system admin found that there are accounts with the same name that are associated with contacts of the same name, too. What would be the sequence in merging these contacts into just one account?",
      options: [
        "A. Merge accounts. Contacts will be automatically merged.",
        "B. Its is not possible",
        "C. Merge accounts and then merge contact",
        "D. Merge contacts and then merge accounts",
      ],
      answer: "C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Which two types of metadata should be migrated between environments using change sets? (Choose two.)",
      options: [
        "A. Standard field picklist values",
        "B. Custom fields",
        "C. Account team roles",
        "D. Email templates",
      ],
      answer: "B,D",
      title: "Question 9",
      explanation: "Explanation",
    },
    {
      content:
        "When an opportunity with at least one opportunity product close wins, Universal Containers requires that an Invoice__c record be created with Invoice_Line_Item__c records for each Product on the Opportunity.\nHow should an administrator implement this request?",
      options: [
        "A. Use a Process Builder that calls a Flow.",
        "B. Use a custom button on the Opportunity.",
        "C. Use an Opportunity Approval Process.",
        "D. Use Einstein Next Best Actions.",
      ],
      answer: "A",
      title: "Question 10",
      explanation:
        "Explanation/Reference: https://trailhead.salesforce.com/en/content/learn/v/modules/business_process_automation/ business_process_automation_combined",
    },
    {
      content:
        "Universal Containers uses territory management to manage its sales territories. Territory managers and sales reps are at the same role level in the sold hierarchy. Account and opportunity objects are set to private. What record access can territory managers have for accounts and opportunities that are assigned to their territories?\nChoose 3",
      options: [
        "A. Transfer all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "B. Edit all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. View edit transfer and delete accounts assigned to the territory, regardless of who owns the accounts.",
        "D. Transfer and delete opportunities assigned to the territory, regardless of who owns the opportunities",
        "E. View all opportunities associated with accounts in the territory, regardless of who owns the opportunities",
      ],
      answer: "B,C,E",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "A custom object called Deliveries is created with a Master-detail relationship to Opportunities.\nWhich report type is created?",
      options: [
        "A. Opportunities with Deliveries",
        "B. Deliveries with Opportunities",
        "C. None. A custom report type will need to be created manually",
        "D. Opportunities and Deliveries",
      ],
      answer: "A",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "When a lookup relationship is created between two objects, which three options can the administrator select to help manage situations when a lookup record is deleted?\nChoose 3 answers.",
      options: [
        "A. Clear the value of the lookup field.",
        "B. Notify the record owner.",
        "C. Delete the related record also.",
        "D. Prompt the user to enter another record to resolve the lookup relationship.",
        "E. Do not allow deletion of a lookup record that is part of a lookup relationship.",
      ],
      answer: "A,C,E",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Sales managers at Ursa Major Solar have asked for some additional automation around opportunity reminders. If the opportunity is in the Proposal stage a week before the close date, they want an email sent to the opportunity owner and manager. If the Budget Approved custom field is checked, the managers want to be notified immediately.\nHow should these requirements be met without using code?",
      options: [
        "A. Create a schedule-triggered flow for the Opportunity object. Configure the trigger to flow daily.",
        "B. Create a schedule-triggered flow. Configure the trigger to flow weekly.",
        "C. Create a record-triggered flow with scheduled paths. Configure the trigger to flow after the record is saved.",
        "D. Create a record-triggered flow with scheduled paths. Configure the trigger to flow before the record is saved.",
      ],
      answer: "A",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        'In "Setup | Salesforce CRM Content | Settings" , what will happen if you uncheck "Enable content pack creation" ? Choose 5',
      options: [
        "A. You can Change Language",
        'B. You can change description of "Content Pack"',
        'C. You can delete "Content Pack"',
        "D. You can add , Edit Tags",
        'E. You can change Title of "Content Pack"',
        'F. You can create New "Content Pack"',
        'G. You can clone existing "Content Pack"',
        "H. Edit documents inside existing Content Pack",
      ],
      answer: "A,B,C,D,E",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "SFB Industries are on boarding a large amount of users\nonto their Salesforce Org over the coming months. They would like their Sales Managers to set up new users and edit them when appropriate to take the pressure off the Administrators. How can you best enable them to do this?",
      options: [
        "A. Assign the Sales Managers the System Administrator default profile",
        "B. Create a permission set and assign it to the Sales Managers users",
        "C. Add relevant permissions to the Sales Managers profile",
        "D. Use the Delegated Administrator feature",
      ],
      answer: "D",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "How can the administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Require a field on the page layout.",
        "B. Use field dependencies on article types.",
        "C. Create a validation rule on the article.",
        "D. Create different article type for different requirements.",
      ],
      answer: "C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers. What could be the cause of this? Choose 2 answers",
      options: [
        "A. HTML templates are not available in sandboxes",
        "B. The Deliverability Access Level setting is incorrect",
        "C. Workflow emails only work in Full sandboxes",
        "D. The email addresses for the users are incorrect",
      ],
      answer: "B,D",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "A user with permissions to create price books wants to quickly create a new product with the same information as the existing product by cloning the product. What is an important consideration when cloning a product?",
      options: [
        "A. Price book entries in price books that you don't have sharing access to aren't created.",
        "B. Price book entries will not be created in the standard price book.",
        "C. Price book entries need to be activated before users can use the new price book.",
        "D. Price book entries in price books that you don't have sharing access to are created.",
      ],
      answer: "C",
      title: "Question 19",
      explanation: "",
    },
    {
      content: "How do you create an Exception Report?",
      options: [
        "A. Create a cross filter on the custom report type",
        'B. Create a custom report type with a "without" filter',
        "C. Use an Exception report type",
        "D. Create a cross filter on the report builder",
      ],
      answer: "D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "An administrator needs to create a junction object called Account Region to link the standard Account object with a custom object called Region.\nOnce the junction object is created, what are the next two steps the administrator should take?\nChoose 2 answers",
      options: [
        "A. Configure a master-detail relationship field on the junction object to the Account object.",
        "B. Create a master-detail relationship field on the Account object to the junction object.",
        "C. Make a master-detail relationship field on the junction object to the Region object.",
        "D. Build a master-detail relationship field on the Region object to the junction object.",
      ],
      answer: "A,C",
      title: "Question 21",
      explanation: "",
    },
    {
      content: "Service Entitlements in Service Cloud help you to: Select 3",
      options: [
        "A. Verify if your customer is eligible for support.",
        "B. Track your supplier performance.",
        "C. Track the service levels you provide to your clients.",
        "D. Define and maintain service contracts.",
      ],
      answer: "A,C,D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "A custom object was created at Universal Containers to store information employees will need for their annual reviews. Only the employee should be able to access their records. The administrator has set Organization-Wide Defaults to private for the object. These records are accessible by the employee's manager.\nWhat additional step should be taken to remove the manager's access to these records?",
      options: [
        "A. Uncheck the manual sharing for the custom object on each profile.",
        "B. Remove access to the custom object on the manager's profile.",
        "C. Uncheck grant access using hierarchies in sharing settings.",
        "D. Recalculate the sharing rules in sharing settings.",
      ],
      answer: "D",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Users report that the Industry picklist field is no longer visible on account records.\nWhich tool can an administrator use to troubleshoot this issue?",
      options: [
        "A. Field audit history",
        "B. Field history tracking",
        "C. Debug log",
        "D. Setup audit trail",
      ],
      answer: "D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "U.C wants to archive cases that have been closed for two or more years. the cases need to be revoved from salesforce and be available to be loaded into loaded into the company's data warehouse.\nhow can the administrator automate this process? choose 2",
      options: [
        "A. schedule the data export service.",
        "B. use an Appexchange product",
        "C. use the apex dataloader",
        "D. enable the case archied feature.",
      ],
      answer: "B,C",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Which features are available only in Collaborative forecast ? Choose 2",
      options: [
        "A. You can use Territory Management",
        "B. You can Rename Forecast Category",
        "C. Custom Fiscal Years",
        "D. Default Forecast Currency Setting",
      ],
      answer: "B,D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks needs to set up automation to update three fields on the Shipment custom object. Because of the effect these updates will have on some programmatic customizations, they need to happen in a very specific order.\nHow should the administrator configure the field updates to ensure the proper order.",
      options: [
        "A. Create a process with one criteria node and three field updates in the correct order.",
        "B. Create a process with three criteria nodes and stop after each action.",
        "C. Create three workflow rules in order, one workflow rule for each field update.",
        "D. Create a workflow rule with three field updates entered in the correct order.",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A customer object was created at Universal Containers to store information employees will need for their annual reviews. Only the employees should be able to access their records. The administrator has set Organization-Wide Defaults (OWD) to private for the object. These records are accessible by the employee's manager.\nWhat additional step should the administrator take to remove the manager access to these records?",
      options: [
        "A. Uncheck Allow Users to Access Privacy Data on each profile",
        "B. Enable Hide Personal Information in User Management Settings.",
        "C. Verify that Allow Search is unchecked on the custom object.",
        "D. Uncheck Grant Access using Hierarchies in Sharing Settings.",
      ],
      answer: "A",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name. A contact record with the same name is associated with each account.\nWhich set of steps should be taken lo merge these accounts using the Salesforce merge feature?",
      options: [
        "A. Merge the duplicate accounts and then merge the duplicate contacts.",
        "B. Merge the duplicate accounts and check the box that optionally merges the duplicate contacts.",
        "C. Merge the duplicate contacts and then merge the duplicate accounts.",
        "D. Merge the duplicate accounts and the duplicate contacts will be merged automatically.",
      ],
      answer: "A",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "SFB Industries is currently granting access to a number of users around the business to various reports and folders in Salesforce. They are currently granting access based on the specific users. Which feature in Salesforce can be used to make this more efficient?",
      options: [
        "A. Create a new profile for the users",
        "B. Create a public group and add the users to it",
        "C. Place all users in the same Role",
        "D. Create a sharing rule and add the users to it",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Admin wants to make exact copy of production metadata in developer sandbox.",
      options: [
        "A. Schedule Sandbox refresh",
        "B. Use Developer Console",
        "C. Schedule full weekly backup",
        "D. Create and Deploy changeset",
      ],
      answer: "D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Select an option below that you would use to limit the number of records and assist with data consistency.",
      options: [
        "A. Custom formula fields",
        "B. Custom lookup fields and lookup filters",
        "C. Picklist and dependent picklist fields",
        "D. Record types and page layouts",
        "E. Workflow field updates",
      ],
      answer: "B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "A Us sales manager and 4 US Sales Users with different profile wants to view a specific account which is based in APAC. As an Administrator, how can you resolve this issue?",
      options: [
        "A. Add them to the Account",
        "B. Create a custom profile and add the Sales Manager and 4 User",
        "C. Set the OWD Setting of the said object to Public Read Only",
        "D. Create a Public Group and Create Sharing Rule",
      ],
      answer: "D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a report showing all newly created chatter groups by a custom designation divided by the four departments that maintain chatter groups- partners, corporate, practices and solutions.\nHow can an administrator meet this reporting requirement?",
      options: [
        "A. Use a multi-select picklist field to bucket chatter groups in the report according to department.",
        "B. Create tags for chatter groups and create a summary report for newly created chatter groups.",
        "C. Use a bucket in the chatter groups report to categorize the four different departments. (100%)",
        "D. Create a report type for chatter groups and create a summary report for newly- created chatter group.",
      ],
      answer: "C",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Which features make repetitive actions in the Service Console quicker and easier for agents?\nSelect 3",
      options: [
        "A. Quick Text",
        "B. Predictive text",
        "C. Heuristic Logic",
        "D. Macros",
        "E. Email Templates",
      ],
      answer: "A,D,E",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "An administrator must select milestones from an existing list of available milestones.",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "An administrator would like to convert a Master-Detail relationship to a Lookup relationship. What actions should be taken prior to converting the relationship?",
      options: [
        "A. Remove child object related lists from the parent object page layouts.",
        "B. Delete all roll-up summaries that reference the detail object prior to converting,",
        "C. Select the Allow Reparenting option on the master-detail relationship.",
        "D. Delete all reports that use the master object with the detail object report type.",
      ],
      answer: "B",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "What should be done to ensure that sales users cannot access cases owned by marketing users? - TROVARE LE RISPOSTE",
      options: [
        "A. Create a permission set for marketing and sales users",
        "B. Create a new public group for sales users and set case access to private",
        "C. Create sharing rules for marketing and sales users, and set case access to private",
        "D. Create a permission set for marketing users and set case access to private",
      ],
      answer: "A,B,C,D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Categorize accounts as small, medium, or large based on employees (1)",
      options: [
        "A. reporting snapshot",
        "B. cross filter",
        "C. PREVGROUPVAL function",
        "D. custom report type",
        "E. joined report",
        "F. bucket field",
        "G. dashboard filter",
      ],
      answer: "F",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "At Ursa Major Solar, there is an account owner by a user with the role of Galaxy manager. Two users with the same profile are both assigned to the sub-role, Galaxy Subordinate. However, only one can access the account.\nWhat is the reason only one user can see the account record?",
      options: [
        "A. Queues",
        "B. Manual Sharing",
        "C. Workflow Rule",
        "D. Role Hierarchy",
      ],
      answer: "B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Which Statement is true about the creation of entitlement processes? Choose 2 answers",
      options: [
        "A. The Manage Entitlement permission must be enabled",
        "B. Milestones can be created dynamically based on other fields",
        "C. Entitlements have their own organization wide defaults",
        "D. Entitlement versioning allows changes to existing entitlement processes",
      ],
      answer: "A,B",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools can be used to deploy metadata from a Developer Edition organization to another organization? (Choose two.)",
      options: [
        "A. Salesforce Extensions for Visual Studio Code",
        "B. Ant Migration Tool",
        "C. Change sets",
        "D. Data Loader",
      ],
      answer: "A,C",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        'How can SFB Industries ensure that incoming cases are routed to the correct department based on the "Type" field on Cases?',
      options: [
        "A. Use Assignment rules & Queues",
        "B. Enable case routing for agents",
        "C. Use Auto--response rules & Queues",
        "D. Create a workflow rule to assign users the correct case",
      ],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why can't the sales manager view the contact?",
      options: [
        "A. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "B. The contact has not been manually shared with the manager.",
        "C. The contact is not linked to an account.",
        "D. Contact sharing settings are Private.",
      ],
      answer: "C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers wants to see all opportunities that do not have any activities. Which report type could be used to meet this requirement? Choose 2",
      options: [
        "A. A joined report using an opportunity report in Block A; a task and event report filtered by tasks for Block B",
        "B. A custom report type with Opportunity as the primary object and Activity as the secondary object",
        "C. An opportunity report with a cross-object filter of opportunities without activities",
        "D. A standard opportunity filtered by the field Last Activity and a custom date range that is blank",
      ],
      answer: "C,D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "User is not the Owner of record and he has given READ/WRITE permission using Manual Sharing. However his profile only has READ permission. What will be actual permission for that record of that user.",
      options: [
        "A. Can only edit what he owns",
        "B. Can edit",
        "C. Can delete record",
        "D. Can read only",
      ],
      answer: "D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "A user changes roles from an EMEA sales representative to a US sales representative. How will this impact the ownership-based sharing rules for the user's records?",
      options: [
        "A. This will only affect ownership-based sharing rules if the user moves up in the role hierarchy.",
        "B. This will affect the ownership of records for standard objects but not custom objects.",
        "C. None of the ownership-based sharing rules are recalculated.",
        "D. All of the ownership-based sharing rules are recalculated.",
      ],
      answer: "D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Dylan has submitted a vacation request for approval by his manager, but the manager is not receiving any email alerts. What can you use in order to troubleshoot the issue? Choose two answers.",
      options: [
        "A. Email log",
        "B. A Time-Based Workflow",
        "C. Debug Log",
        "D. The Setup Audit Trail",
      ],
      answer: "A,C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "How to create a report showing Company growth Year after Year. What function to use ?",
      options: [
        "A. PRIORVALUE",
        "B. PARENTGROUPVAL",
        "C. PREVGROUPVAL",
        "D. DATEVAL",
      ],
      answer: "C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "What tool would you use to automate a process so a parent case is closed, the child case automatically closes?",
      options: [
        "A. Auto response rule",
        "B. Apex trigger",
        "C. Workflow rule field update",
        "D. Validation rule field update",
      ],
      answer: "B",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        'The wrong choices on the list should be improved.\nA lead needs to be assigned automatically to a Sales Rep if there has been no action on the account after 10 days. And the Deal status should be set to "Stalled" after it has been approved by a Manager. Which automation processes can a system administrator use?',
      options: [
        "A. Validation Rule. Assignment rule. Approval Process.",
        "B. Assignment Rule. Approval Process. Workflow Rule",
        "C. Assignment Rule, Approval Process.",
        "D. Assignment Rule. Auto-Response Rule, Workflow Rule",
      ],
      answer: "C",
      title: "Question 51",
      explanation:
        "Explanation\n Note: You can use the same Workflow Actions in Approval Processes that you use in Workflow.",
    },
    {
      content:
        "What object permission should the administrator provide for users to find duplicates under the lead object?",
      options: ["A. Merge", "B. View All", "C. Delete", "D. Read, Edit"],
      answer: "B",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to understand the implications ot archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers.",
      options: [
        "A. Closed tasks created more than 365 days ago with no due date are archived.",
        "B. Events created more than 365 days ago are archived.",
        "C. Archived activities are deleted after 365 days.",
        "D. Events that ended more than 365 days ago are archived.",
      ],
      answer: "B,C",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Which three password options are available for the administrator to set on content deliveries? (Choose three.)",
      options: [
        "A. Password protection is required",
        "B. Password protection is optional and defaults to OFF",
        "C. Administrator-provided default password",
        "D. Password complexity rules",
        "E. Password protection is optional and defaults to ON",
      ],
      answer: "A,B,E",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "What can a system administrator do to simplify searching in Knowledge for users? Choose three answers. * (1 Point)",
      options: [
        "A. Filter by Language",
        "B. Create synonyms",
        "C. Enter predefined search input (autocomplete)",
        "D. Create Knowledge Categories",
      ],
      answer: "A,B,D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "How to configure to make easier to search Knowledge Article ? Choose 5",
      options: [
        "A. Search from Article Tab",
        "B. Use Stemming",
        "C. Search using Global Search",
        "D. Use Article Type and Select Filters like Data Category",
        "E. Auto Complete tag",
        "F. Use Profiles",
        "G. Use Search Column",
        "H. Synonyms",
      ],
      answer: "A,B,D,E,H",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "The sales operations team at Universal Containers wants to ensure that when an opportunity is won the custom shipment date field is populated.\nHow should the administrator configure salesforce to meet this requirement?",
      options: [
        "A. Add a default value to the shipment date using the Today() function.",
        "B. Create a validation rule on the opportunity using the ISBLANK() function.",
        "C. Create a dependency between the stage and shipment date fields.",
        "D. Make the shipment date field required on the opportunity page layout.",
      ],
      answer: "B",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        'The sales team has requested that a new field called Current Customer be added to the Accounts object. The default value will be "No" and will change to "Yes" if any related opportunity is successfully closed as won.\nWhat can an administrator do to meet this requirement?',
      options: [
        "A. Configure Current Customer as a roll-up summary field that will recalculate whenever an opportunity is won",
        "B. Use an Apex trigger on the Account object that sets the Current Customer field when an opportunity is won",
        "C. Use a workflow rule on the Opportunity object that sets the Current Customer field when an opportunity is won",
        "D. Configure Current Customer as a text field and use an approval process to recalculate its value",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "Explanation/Reference:",
    },
    {
      content:
        "What password option is available for the administrator to set on content deliveries? Choose 3",
      options: [
        "A. Administrator provided default password",
        "B. Password protection is optional and defaults to OFF",
        "C. Password complexity rules",
        "D. Password protection is optional and defaults to ON",
        "E. Password protection is required",
      ],
      answer: "B,D,E",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name. A contact record with the same name is associated with each account.\nWhich set of steps should be taken lo merge these accounts using the Salesforce merge feature?",
      options: [
        "A. Merge the duplicate accounts and the duplicate contacts will be merged automatically.",
        "B. Merge the duplicate accounts and then merge the duplicate contacts.",
        "C. Merge the duplicate accounts and check the box that optionally merges the duplicate contacts.",
        "D. Merge the duplicate contacts and then merge the duplicate accounts.",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Sales Rep Phil Smith has an opportunity for 55,000 in the Commit stage. Which aggregates on Phil'sforecast willinclude this amount? Choose three answers.* (1 Point)",
      options: ["A. Best Case", "B. Commit", "C. Closed", "D. Pipeline"],
      answer: "A,B,D",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "Universal Containers' support team wants to use Salesforce Knowledge to allow customers and the support team to have access to the product documentation. There are many different types of documentation with usage across the globe.\nWhat feature should the administrator configure?",
      options: [
        "A. Enable the Case Feed.",
        "B. Define data categories and visibility.",
        "C. Setup record types and page layouts.",
        "D. Create article types.",
      ],
      answer: "B",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "An Admin needs to create a validation rule when Amount is greater than or equal to $50000 and the custom field should not be blank. Custom field is a picklist. Choose 2",
      options: [
        "A. Amount >50000 && ISBLANK(Picklist field)",
        'B. Amount >50000 && ISPICKVAL(Picklist field, " ")',
        'C. Amount >50000 && TEXT(Picklist field) = " "',
        'D. Amount >50000 && (Picklist field) = " "',
      ],
      answer: "B,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "An administrator would like to convert a Master-Detail relationship to a Lookup relationship. What action should be taken prior to converting the relationship?",
      options: [
        "A. Select the Allow Re-parenting option on the master detail relationship",
        "B. Delete all roll-up summaries that reference the detail object prior to converting",
        "C. Remove child object related lists from the parent object page layouts",
        "D. Delete all reports that use the master object with the detail object report type",
      ],
      answer: "B",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "How to write validation rule where the condition is Amount is greater than or equal 500 and custom field should not be blank. Choose 3",
      options: [
        "A. Amount >= 500 && TEXT (Child__c) = ''",
        "B. Amount >= 500 && (child__c = '')",
        "C. Amount >= 500 && ISPICKVAL(Child__c) = ''",
        "D. Amount >= 500 && ISBLANK(Child__c)",
      ],
      answer: "A,B,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "When can a user become an owner of a record without being a record creator? Choose 2 answers.* (1 Point)",
      options: [
        "A. If person is above the owner of the record in role hierarchy",
        "B. if someone shares the record to the record owner",
        "C. If he is already a record owner",
        "D. If the record is in a queue",
      ],
      answer: "A,D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Which three statements are correct about change sets? (Choose three.)",
      options: [
        "A. When custom fields are added to a change set, field-level security is automatically included.",
        "B. When a component is asses to a change set, all dependent components automatically get added.",
        "C. There is a feature that allows the user to validate a change set before deploying it.",
        "D. When a change set is deployed to production, by default, all unmanaged Apex tests will automatically be run.",
        "E. To use change sets, at least one inbound and one outbound connection must exist",
      ],
      answer: "C,D,E",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Which value rolls up the hierarchy to the manager for both Customizable and Collaborative Forecasts? Choose\n2 answers",
      options: [
        "A. Quota amount",
        "B. Product quantity",
        "C. Opportunity amount",
        "D. Expected revenue",
      ],
      answer: "C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "How many versions of any given flow, created with Visual Workflow, can be active at one time? * (1 Point)",
      options: ["A. 2", "B. 3", "C. 1", "D. 4"],
      answer: "C",
      title: "Question 69",
      explanation: "",
    },
    {
      content: "What are the types of Pricebook ? Choose 2",
      options: [
        "A. Master Price",
        "B. Standard",
        "C. Discount",
        "D. List Price",
      ],
      answer: "B,D",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "After delegated administration is granted for a custom object, what action can the delegated administrator complete? Choose 2 answers",
      options: [
        "A. Add a custom picklist field to the object",
        "B. Change organization-wide sharing rules for the object",
        "C. Change the relationship with other object",
        "D. Create a custom tab for the object",
      ],
      answer: "B,D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "The recruiting manager at universal containers has requested a new picklist value in the type field on the position object by the end of the week.\nIf the administrator is unable to complete this request in the desired timeline, what type of access will allow the recruiting manager to make the changes in salesforce?",
      options: [
        "A. Delegated administration over the position object.",
        "B. Modify all and view all access to the position object.",
        "C. Create, Read, Edit and Delete access to the position object.",
        "D. Delegated administration to manage recruiting users.",
      ],
      answer: "A",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "A custom field can be Viewed by profile Sales Manager, VP of Sales and System Administrator. However this field should only be edited by VP of sales and System Administrator profile. How to Setup.",
      options: [
        "A. Modify Role Hierarchy",
        "B. Create Permission set and assign to profiles VF of Sales and System Admin",
        "C. Set Field level Security",
        "D. View All Data for rofiles VF of Sales and System Admin",
      ],
      answer: "C",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when moving approval processes using a change set?",
      options: [
        "A. Custom fields on standard objects will need to be manually added in the target organization.",
        "B. Change Sets do not include the order of active approval processes from the source organization.",
        "C. Change sets do not include the approval and rejection actions from the source organization",
        "D. The Unique Name of the approval process is not allowed to be changed once deployed in the target organization.",
      ],
      answer: "B",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        'The wrong choices on the list should be improved.\nA lead needs to be assigned automatically to a Sales Rep if there has been no action on the account after 10 days. And the Deal status should be set to "Stalled" after it has been approved by a Manager. Which automation processes can a system administrator use?',
      options: [
        "A. Validation Rule. Assignment rule. Approval Process.",
        "B. Assignment Rule. Approval Process. Workflow Rule",
        "C. Assignment Rule, Approval Process.",
        "D. Assignment Rule. Auto-Response Rule, Workflow Rule",
      ],
      answer: "C",
      title: "Question 75",
      explanation:
        "Note: You can use the same Workflow Actions in Approval Processes that you use in Workflow.",
    },
    {
      content:
        "Universal containers is using a web-to-lead from to collect contact information on people interested in its product andwants to ensure that these leads are contacted in a timely manner. The following actions are required:\nsend the lead an email with appropriate product information, depending\non which product was selected on the web-to-lead form\nAssign the appropriatesalesperson to be the lead owner, depending on\nthe product selected\ncreate a task for the salesperson to follow up with the lead.\nAt a minimum, which combination of salesforce automation tools will be\nrequired to meet these requirement?",
      options: [
        "A. lead assignment rule and publisher action.",
        "B. Lead assignment rule, auto response rule and workflow rules",
        "C. Lead assignment rule and workflow rule",
        "D. Lead assignment rule and auto response rule.",
      ],
      answer: "B",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "We need to create a report on Accounts that will exclude that has related contacts , Opportunity and activities for cleaning purpose.",
      options: [
        "A. Create a joined Report that will exclude related contact, opportunity and activities",
        "B. Create a custom Account report that will filter out related contacts, opportunity and activities",
        "C. Create Account report that will filter out related Contact, Opportunity and activities",
      ],
      answer: "C",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to delete metadata from an organization?\nChoose 2 answers.",
      options: [
        "A. Ant Migration Tool",
        "B. Change sets",
        "C. Developer Console",
        "D. Unmanaged packages",
      ],
      answer: "C,D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "What statement is true regarding Salesforce Communities members? Choose 2 answers",
      options: [
        "A. They find crowdsourced answers and Knowledge articles in the Q&A tab to resolve a support issue",
        "B. They must belong to a company's internal community to participate in Chatter collaboration",
        "C. Their reputation levels must be the same across communities of which they are members",
        "D. They use the standard Ideas tab to submit, comment on, and vote for ideas",
      ],
      answer: "B,C",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Your company sells large mainframes that are delivered in one delivery but are paid for with several regular installments. What type of schedule should you set up?",
      options: [
        "A. Default Revenue Schedule",
        "B. Don't create any default schedule",
        "C. Default Quantity Schedule",
        "D. Default Revenue and Quantity Schedule",
      ],
      answer: "A",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases.\nWhat is a recommended solution?",
      options: [
        "A. Create a dashboard and add filters for users, opportunities, accounts, and cases",
        "B. Create an individual dashboard for each sales representative with opportunity, account, and case components",
        'C. Create a dynamic dashboard and ensure the sales manager has the "View My Team\'s Dashboard" permission',
        "D. Create a dynamic dashboard and add filters for opportunities, accounts, and cases",
      ],
      answer: "C",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nWhich two reasons could be the cause? (Choose two.)",
      options: [
        "A. Workflow emails only work in Full sandboxes",
        "B. The email addresses for the users are incorrect",
        "C. The Deliverability Access Level setting is incorrect",
        "D. HTML templates are NOT available in sandboxes",
      ],
      answer: "B,C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name.\nA contact record with the same name is associated with each account. Using the salesforce Merge Feature, what steps steps should be taken to merge these accounts ?",
      options: [
        "A. Merge the duplicate accounts, and then the duplicate contacts will be merged automatically.",
        "B. Merge the duplicate accounts, and check the that optionally merges the duplicate contacts.",
        "C. Merge the duplicate accounts, and then merge the duplicate contacts.",
        "D. Merge the duplicate contacts, and then merge the duplicate accounts.",
      ],
      answer: "C",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        'Why users are not able to see "Find Duplicate" button in Lead ?',
      options: [
        "A. They should have Read and Edit Permission",
        "B. They should have Read Permission",
        "C. They should have Delete Permission",
        "D. They should have Read and Delete Permission",
        "E. They should have Edit Permission",
      ],
      answer: "D",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Capability of Collaborative Forecast and Customizable Forecast Choose 2",
      options: [
        "A. Track sales quota",
        "B. Choose monthly or quarterly",
        "C. Create custom Field",
        "D. Rename Categories",
      ],
      answer: "A,B",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "The support manager at Universal Containers wants a dashboard that shows the number of cases that remain open as of 5:00 p.m. each day.\nWhich type of report should be used in the dashboard component?",
      options: [
        "A. Custom summary report where unit equals business hours",
        "B. Report based on custom report type using cases and business hours",
        "C. Standard case lifecycle report where unit equals business hours",
        "D. Report based on a reporting snapshot that runs daily at 5:00 p.m.",
      ],
      answer: "D",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "which two features of Enterprise Territory Management are available in the Salesforce1 mobile app? choose 2 answers",
      options: [
        "A. Assign an account to a new parent territory.",
        "B. View a list of territories to which the current user is assigned.",
        "C. Change a user's list of assigned territories.",
        "D. Change the assigned territory on an Opportunity record.",
        "E. View a list of assigned territories on the account.",
      ],
      answer: "A,E",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "What tool would you use if you wanted to create a report that would compare results over time based on specific criteria?",
      options: [
        "A. Exception Report",
        "B. custom report types (CRT)",
        "C. Standard Report",
        "D. analytic snapshots",
      ],
      answer: "D",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        'An administrator has unchecked the "Enable content pack creation" checkbox after users had created content packs. What is the impact of this change?',
      options: [
        "A. Users can modify the description and title of existing packs",
        "B. The Clone & Customize button will continue to be available",
        "C. All existing content packs will be deleted",
        "D. Users can continue to edit the contents of existing packs",
      ],
      answer: "A",
      title: "Question 89",
      explanation: "",
    },
    {
      content: "What happen when using changesets ( choose 2)",
      options: [
        "A. Has a feature that will validate the changeset before deploying",
        "B. Transfer all Data",
        "C. Transfer all Profiles",
        "D. Needs one inbound and outbound",
      ],
      answer: "A,D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "The Marketing Manager has requested that a field be added to each account that displays the number of contacts associated with that account. The manager wants to use this field as part of an email marketing segmentation strategy. How can this requirement be met?",
      options: [
        "A. Create a custom field on the account. Use a workflow rule to update the field when contacts are added or deleted.",
        "B. Create a roll-up summary field that counts the number of contacts and displays that count on the account.",
        "C. Create a custom formula field on the account using the count() function to count the number of related contacts.",
        "D. Create a custom field on the account. Use an Apex trigger to update the field when contacts are added or deleted.",
      ],
      answer: "B",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers wants to improve data quality by ensuring that all accounts have a Billing State/Province based upon the Billing Postal Code for that account. How can this be achieved? Choose\n2 answers",
      options: [
        "A. Use validation rule to do an HLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "B. Use validation rule to do a VLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "C. Use a trigger that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
        "D. Use a workflow that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
      ],
      answer: "B,D",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "When using Collaborative Forecasts, which two types of data can a sales representative access from the Forecasts tab?\nChoose 2",
      options: [
        "A. Forecast amount for each opportunity stage",
        "B. Forecast amount for other representatives on their team",
        "C. Opportunities that make up each forecast amount",
        "D. Forecast amount for each forecast category",
      ],
      answer: "A,C",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "Which value rolls up for both customizable and collaborative forecasting? * (1 Point)",
      options: [
        "A. Amount",
        "B. Opportunity amount",
        "C. Quota",
        "D. Expected revenue",
      ],
      answer: "B",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "How can an admin ensure that cases will be handled in multiple channels? Choose 2",
      options: [
        "A. Expose case feed options on the company website.",
        "B. Use Chatter Answers in the company Community page",
        "C. Offer a Live Agent Chat button on the company website.",
      ],
      answer: "B,C",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Which Objects in Salesforce does Data.com allow you to cleanse? (Select 3)",
      options: ["A. Contacts", "B. Cases", "C. Accounts", "D. Leads"],
      answer: "A,C,D",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "AW Computing has several service plans it offers with its laptops. Management wants the sales team to focus on bringing in new business and to have the creation of the renewal opportunity for the service plans happen automatically.\nWhat approach should the administrator take to automate the renewal process7",
      options: [
        "A. Configure a flow that will create the renewal based on the closed-won date and opportunity line items.",
        "B. Create a validation rule to prevent the rep from closing the opportunity until a renewal is associated.",
        "C. Configure a time-based workflow to send an email reminder to the sales rep when the service plan expires.",
        "D. Create a dynamic Lightning page with rich text to remind the rep to create a renewal opportunity when the opportunity is closed won.",
      ],
      answer: "A",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "The support managers want a way to identify other cases that require similar skills or help articles. This will allow them to easily determine appropriate support agents that can assist with reoccurring customer issued.\nWhich two of object relationship should help accomplish this?",
      options: [
        "A. Hierarchical Relationship",
        "B. Self-Relationship",
        "C. Master-Detail Relationship",
        "D. indirect Relationship",
      ],
      answer: "C",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "An administrator has a request to create a Next Steps field for users to document what they need to do next on a lead. The field should allow users to format the text and be mapped to an opportunity when converted.\nWhat type of field will satisfy these requirements?",
      options: [
        "A. Text Area",
        "B. Text Area (Long)",
        "C. Formula (Text)",
        "D. Text Area (Rich)",
      ],
      answer: "D",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "Users are complaining that their Account Page layout has been changed suddenly changed. Certain fields are missing and others been rearranged. Which tool can be used to identify which administrator made the changes?",
      options: [
        "A. Setup audit trail",
        "B. Debug log",
        "C. Developer Console",
        "D. Page Layout Activity History",
      ],
      answer: "A",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers wants to improve data quality by ensuring that all accounts have a billing State/Province based upon the Billing Postal Code for that account. Which two solutions can meet this requirement?\nChoose 2 answers.",
      options: [
        "A. Use a validation rule to do a VLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces.",
        "B. Use a trigger that populates Billing State/Province based on a custom object that maps postal codes to states/provinces.",
        "C. Use a workflow rule that populates Billing State/Province based on a custom object that maps postal codes to states/provinces.",
        "D. Use a validation rule to do a HLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces.",
      ],
      answer: "A,B",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        'System admin wants to give "view all data" to users who have different profiles and differents roles ? how can he do this?',
      options: [
        "A. Set owd to read/write",
        "B. Delegate admin to the users",
        "C. Permission set to those users",
        "D. Give view all data on that object",
      ],
      answer: "C",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name. A contact record with the same name is associated with each account.\nWhich set of steps should be taken to merge these accounts using the Salesforce merge feature?",
      options: [
        "A. Merge the duplicate accounts and the duplicate contacts will be merged automatically",
        "B. Merge the duplicate contacts and then merge the duplicate accounts",
        "C. Merge the duplicate accounts and then merge the duplicate contacts",
        "D. Merge the duplicate accounts and check the box that optionally merges the duplicate contacts",
      ],
      answer: "C",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity.\nHow can automation be used to help meet this requirement?",
      options: [
        "A. Write a validation rule that updates the opportunity name with the account name using a cross-object formula",
        "B. Use an approval process that routes newly created opportunities to management for data quality review",
        "C. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name",
        "D. Use an Apex trigger on the Account object that adds the account name to the opportunity name",
      ],
      answer: "C",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Universal containers set Job applicants to have the Position that they have applied for as a required field. Also, Position can have multiple Job applicants. If the Position is to be deleted, all Job applicants that are related to it should not be deleted. What type of relationship do Job applicants have with Position?",
      options: [
        "A. Create a lookup relationship with Position as the parent",
        "B. Create a custom object between Position and Applicant with lookup field to the junction",
        "C. Create a master-detail relationship with Position as the master",
        "D. Make a many to many relationship using a junction object",
      ],
      answer: "D",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to convert a lookup relationship to a master detail relationship.\nWhat action should the administrator take prior to converting the relationship?",
      options: [
        "A. Select the allow re-parenting option on the master-detail relationship field.",
        "B. Remove roll-up summary fields on the parent prior to changing the field type.",
        "C. Delete the current lookup field before adding the new master-detail field.",
        "D. Ensure all existing records have a value in the current lookup field.",
      ],
      answer: "D",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "Universal containers uses Salesforce to track job positions and applicants. Applicants can apply for multiple positions and positions will have multiple applicants. The company wants to ensure that if an applicant is deleted, all associations between the applicant and the position(s) that he or she has applied for are deleted.\nHow can this be accomplished?",
      options: [
        "A. Create a master detail relationship between applicants and positions with applicants as the master.",
        "B. Create a custom object between applicants and positions with lookup fields on the junction to both the objects.",
        "C. Create a lookup relationship between applicants and positions with applicants as the parent.",
        "D. Create a many -to- many relationships using junction object with both positions and applicants as masters.",
      ],
      answer: "A",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "A change set that has already been submitted for deployment is missing a component.\nWhat can you do in order to correct the issue? * (1 Point)",
      options: [
        "A. Edit the change set, deactivate it and then add the missing component",
        "B. Create another change set containing all components and deploy it",
        "C. Deploy the change set and then submit another change set for deployment",
        "D. Clone the change set. edit the components and deploy it",
      ],
      answer: "D",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "An admin create a custom field on the sandbox, How can an admin deploy it to Production including the settings of the field level Security.",
      options: [
        "A. Not possible using Changeset",
        "B. Check the checkbox to include field level security settings",
        "C. Click on Add Dependency button",
        "D. Check the checkbox saying Profile Settings For Included Components",
      ],
      answer: "D",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the Hierarchy to the manager for both Customizable and Collaborative Forecasts? Choose 2 answers",
      options: [
        "A. Quota amount",
        "B. Product quantity",
        "C. Opportunity amount",
        "D. Expected revenue",
      ],
      answer: "A,C",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "The Service team at Cloud Kicks needs a way to show the current status from the Account on the Case. This value should be on the page and is used in validation rules.\nWhat should the administrator recommend to solve this?",
      options: [
        "A. Create a cross-object formula.",
        "B. Make a Rollup Summary.",
        "C. Use a picklist field.",
        "D. Add a lookup field to Account.",
      ],
      answer: "A",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "While reviewing the quarterly forecast, a manager notices the newest team member is missing in the forecast- After looking at a few the manager can see where the sales representative has closed six opportunities this month and has three additional opportunities m progress.\nWhere should the administrator start troubleshooting?",
      options: [
        "A. Verify the app the user is selecting and adjust tabs as needed.",
        "B. Chide Allow Forecasting under general Information for user.",
        "C. Create a permission set with View All Forecasting permission.",
        "D. Assign View All Forecasting permission to the sales profile.",
      ],
      answer: "D",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "A sales manager wants to edit the opportunities owned by the sales team. The manager does not have Edit access to the Opportunity object. What is a recommended solution? * (1 Point)",
      options: [
        "A. Create permission set and associate Edit opportunity to the user record",
        'B. Redefine the role hierarchy by enabling"grant access using hierarchies',
        "C. Change the opportunity's organization-wide default setting to Public Read/Write",
        "D. Enable team selling on the Opportunity object to Grant Read/Writeaccess",
      ],
      answer: "A",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "The administrator at AW Computing implements multi-factor authentication using the Salesforce Authenticator app downloaded on company-provided iPhones. A sales rep breaks their phone and needs to update an opportunity record.\nHow should the administrator grant access for the sales rep?",
      options: [
        "A. Delegate multi-factor identification to the sales rep.",
        "B. Add the sales rep's IP address to the trusted IP ranges.",
        "C. Generate a temporary identity verification code for the rep.",
        "D. Instruct the sales rep to log in from the company's VPN.",
      ],
      answer: "C",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "In Lightning, an opportunity pipeline report listing opportunities by sales representative shows multiple opportunities written for the same account. The Sales Manager would like to know how many individual accounts each representative has written business for.\nHow should the report be modified to include the number of individual accounts represented by a representative?",
      options: [
        "A. Group by Account and summarize a custom checkbox defaulted to checked.",
        "B. Select Show Unique Count on the Account Name column in the report builder.",
        "C. Add a bucket field for Account Name and group by the bucket field.",
        "D. Create a custom summary formula and group by account.",
      ],
      answer: "B",
      title: "Question 115",
      explanation:
        "Add a unique count to the Account Name column to see how many individual accounts values appear in the report.\n Reference: https://help.salesforce.com/articleView?id=reports_count_unique_values.htm&type=0",
    },
    {
      content:
        "Multiple developers work in the AW Computing developer sandbox for testing and merging code. A developer is reporting that one of the Lightning web Components is no longer visible in the user interface.\nWhat can the administrator use to troubleshoot?",
      options: [
        "A. Flex Queue",
        "B. Setup Audit Trail",
        "C. Salesferce CLI",
        "D. Apex Jobs page",
      ],
      answer: "C",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "Universal Containers suspects a used is logging in as other users and editing Account records without their approval.\nWhere would an administrator go to verify who is logging in as other users?",
      options: [
        "A. Debug Logs",
        "B. Setup Audit Trail",
        "C. History Tracking on the Account",
        "D. Users Login History",
      ],
      answer: "B",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "Universal Containers is implementing a new lead status process and wants to be able to do the following:\n- Track leads through five different status values\n- Run reports showing the duration a lead spends in each status\n- Run full Lifetime reports of a lead from creation to conversion\n- Prevent leads from skipping a lead status\nHow can these requirements be met?",
      options: [
        "A. Use an Apex Trigger to populate custom date fields for each status, and use custom formula fields for calculating duration of each status",
        "B. Use custom date fields and workflow rules for each status, and use custom formula fields for calculating duration of a status. Use validation rules to prevent status skipping",
        "C. Use lead history reporting to track changes in the lead status field, and use custom reporting fields to calculate status duration. Use validation rules to prevent status skipping",
        "D. Use field history tracking on the lead status field to track the duration of each status. Use validation rules to prevent status skipping",
      ],
      answer: "C",
      title: "Question 118",
      explanation: "",
    },
    {
      content: "Things to considered enabling Territory Management , Choose 2",
      options: [
        "A. Must be set the same setting with role hierarchy",
        "B. Changes on Account Opportunity and Cases",
        "C. Users can only go to one territory",
        "D. Cannot be disable again",
      ],
      answer: "B,D",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "Which three capabilities of Live Agent in the Salesforce Console for Service? Choose 3 answers.",
      options: [
        "A. Multiple visitors can chat in one window",
        "B. The Articles tool can be used to search for Knowledge Articles",
        "C. Chats can be transferred to other agents.",
        "D. Approval Processes can be used to escalate cases in the chat window.",
        "E. The Details tab can be used to see information about the visitor.",
      ],
      answer: "B,C,E",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "What is the correct order of steps to follow when working with inbound change sets?",
      options: [
        "A. Validate, Deploy, Monitor",
        "B. Monitor, Deploy, Validate",
        "C. Deploy, Monitor, Validate",
        "D. Deploy, Validate, Monitor",
      ],
      answer: "A",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "Leads come to universal containers from various sources and need to be assigned to the correct sales team.\nWhen a lead comes for the APAC region, it can be passed to an external partner if the sales director approves the transfer. The partner's channel manager must be notified when the partner has been assigned the lead.\nAt the minimum, which combination of automation tools will be needed to meet these requirements?",
      options: [
        "A. Assignment rules, auto-response rules, and workflow rules",
        "B. Assignment rules, approval processes, and workflow rules",
        "C. Assignment rules and approval processes",
        "D. Assignment rules and workflow rules.",
      ],
      answer: "B",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "In addition to setting the standard price, what must you also do in order to add a Product to a Custom Price Book?",
      options: [
        "A. Enter a Product Description.",
        "B. Check the Active checkbox.",
        "C. Select a Product Family",
        "D. Enter a Product Code.",
      ],
      answer: "B",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the hierarchy to the manager for Collaborative Forecasting? (Choose two.)",
      options: [
        "A. Quota amount",
        "B. Expected revenue",
        "C. Opportunity amount",
        "D. Product quantity",
      ],
      answer: "B,C",
      title: "Question 124",
      explanation: "",
    },
    {
      content: "What is true about Territory Management? (Choose 2)",
      options: [
        "A. Users can belong to one or more territories",
        "B. Accounts can belong to one or more territories",
        "C. Accounts can belong to one territory",
        "D. Users can belong to one territory",
      ],
      answer: "A,B",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        'Cloud Kicks has a requirement to display sensitive data only to appropriate users. The amount m the Salary field on the User object should display data only when the user record is being viewed by the user or by users with the MR profile. For all other users viewing the user record, the Salary field should display the word "Confidential* as text in the field.\nWhat should the administrator to fulfill this requirement?',
      options: [
        "A. Validation Rule",
        "B. Page Layout",
        "C. Formula field",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "Sales management wants a small subset of users with different profiles and roles to be able to view all data for compliance purposes.\nHow can an administrator meet this requirement?",
      options: [
        "A. Assign delegated administration to the subset of users to View All Data",
        "B. Create a new profile and role for the subset of users with the View All Data permission",
        "C. Create a permission set with the View All Data permission for the subset of users",
        "D. Enable the View All Data permission for the roles of the subset of users",
      ],
      answer: "C",
      title: "Question 127",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers wants to see all opportunities that do not have any activities.\nWhich report type could be used to meet this requirement? Choose two answers. * (1 Point)",
      options: [
        "A. A standard opportunity filtered by the field Last Activity and a custom date range that is blank",
        "B. A custom report type with Opportunity as the primary object and Activity as the secondary object",
        "C. A joined report using an opportunity report in Block A; a task and event report filtered by tasks for Block B",
        "D. An opportunity report with across-object filter of opportunities without activities",
      ],
      answer: "A,D",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "Which tools would you use to deploy metadata from one organization to either a RELATED or UNRELATED organization? Choose two answers. * (1 Point)",
      options: [
        "A. Force.com Migration Tool",
        "B. Change sets",
        "C. Unmanaged Packages",
        "D. Force.com IDE",
      ],
      answer: "A,D",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "An administrator has uploaded a change set from a sandbox to a production organization and would like to add a missing component to the change set before deployment.\nWhat option does the administrator have to modify the change set? Choose 2 answers.",
      options: [
        "A. Edit the change set in the sandbox environment and upload it to production.",
        "B. Edit the change set in production, add the component, and use the redeploy option.",
        "C. Create a new change set in the sandbox environment, add all the required components and upload it to production",
        "D. Clone the change set in the sandbox environment, add the component and upload it to production",
      ],
      answer: "C,D",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "What are three characteristics of Dynamic Dashboards? (Select 3)",
      options: [
        "A. Dynamic Dashboards can be viewed by anyone",
        "B. Dynamic Dashboards can display the data of the logged-in user",
        "C. Dynamic Dashboards can display the data of a set running user",
        "D. Authorised users can change the running user of a Dynamic Dashboard",
      ],
      answer: "B,C,D",
      title: "Question 131",
      explanation: "",
    },
    {
      content:
        'JP Dela Cruz, a user with the" APAC Sales Representative" role, has been assigned the "US Sales Representative Role". Which sharing rules are recalculated?',
      options: [
        "A. No changes will be made",
        "B. Criteria based sharing rules will be recalculated",
        "C. Sales Team sharing rules will be recalculated.",
        "D. Ownership based rules will be recalculated",
      ],
      answer: "D",
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "Users report they are getting an Apex trigger error when they try to save a specific Account record.\nHow could an administrator collect more information about the processing for that record?",
      options: [
        "A. Enable debug Logging for the user.",
        "B. Review the Setup Audit Trail",
        "C. Create a Flow with a fault connector.",
        "D. Activate debug logging for the Apex trigger.",
      ],
      answer: "B",
      title: "Question 133",
      explanation: "",
    },
    {
      content:
        "Which deployment tool can be used to delete metadata from an organization? Choose 2 answers",
      options: [
        "A. Change sets",
        "B. Force.com migration Tool",
        "C. Unmanaged packages",
        "D. Force.com IDE",
      ],
      answer: "B,D",
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "How can you make sure that a field will be visible on 2 profiles only?",
      options: [
        "A. create a page layout and hide the field",
        "B. validation rules",
        "C. Field-Level Security",
        "D. workflow field update",
      ],
      answer: "C",
      title: "Question 135",
      explanation: "",
    },
    {
      content:
        "An Administrator is preparing to deploy change set into the production environment. Until the deployment is complete, only user with System Administrator profile should be allowed to access data in the production system. When any other user attempts to log in, a maintenance notice should be displayed instead. How can administrator meet this requirement?",
      options: [
        "A. Add login hours to all profiles except System Administrator and set the custom maintenance message",
        "B. Assign all other users a custom profile with read access to all objects revoked and add a custom home page message",
        "C. Add Individual IP range to all profiles except System Administrator and add a custom home page message",
        "D. Activate Planned maintenance window feature and set the custom maintenance message",
      ],
      answer: "B",
      title: "Question 136",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a replica of the production organization. The requirement states that existing fields, page layouts, record types, objects, and data contained in the fields and objects need to be available in the replica organization.\nHow can the administrator meet this requirement?",
      options: [
        "A. Create a full sandbox",
        "B. Create a metadata sandbox",
        "C. Create a configuration-only sandbox",
        "D. Create a developer sandbox",
      ],
      answer: "A",
      title: "Question 137",
      explanation: "",
    },
    {
      content: "Which feature license is required to use Content? * (1 Point)",
      options: [
        "A. Salesforce CRM Content Manager",
        "B. Salesforce CRM Content Contributor",
        "C. Salesforce CRM Content User",
        "D. Salesforce CRM Content Creator",
      ],
      answer: "C",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing is launching campaigns in each region to target accounts that do not have open opportunities. What reporting solution can an administrator set up to assist with this?",
      options: [
        "A. Joined report",
        "B. Standard Filter",
        "C. Reporting snapshot",
        "D. Cross Filter",
      ],
      answer: "C",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants only users from the sales department to have access to price books. How can an administrator meet this requirement?",
      options: [
        "A. Clone all custom price books from the standard price book.",
        "B. Set the organization-wide default for price book to Use.",
        "C. Create a sharing rule to share all price books to sales users.",
        "D. Manually share each price book to the sales users roles.",
      ],
      answer: "B",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "If using the Salesforce Data Loader, you need to use your username, password and:\nSelect one:",
      options: [
        "A. A CAPTCHA.",
        "B. A one-time password.",
        "C. A security key.",
        "D. Security Token.",
      ],
      answer: "D",
      title: "Question 141",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants to require that the Next Step field is always updated when an opportunity stage is changed.\nHow can this process be automated?",
      options: [
        "A. Create a validation rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT ( ISCHANGED(NextStep)))",
        "B. Create a workflow rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName), ISCHANGED(NextStep))",
        "C. Create a validation rule with the following formula: AND( ISCHANGED(StageName), NOT( ISCHANGED (NextStep)))",
        "D. Create a workflow rule with the following formula: AND( ISCHANGED(StageName), NOT( ISCHANGED (NextStep))",
      ],
      answer: "A",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar is using Experience Cloud for its customer community and wants to implement chatbots on its site that answer basic and also transfer customers to the right agents by topic and availability when more help is needed.\nWhich two features should the administrator configure to meet this request?\nChoose 2 answers",
      options: [
        "A. Omni-Channel",
        "B. Web-to-Case Form",
        "C. Contact Bequest Flow",
        "D. Skills-Based Routing",
      ],
      answer: "A,D",
      title: "Question 143",
      explanation: "",
    },
    {
      content:
        "The Marketing Manager at Universal Containers wants to change the column headings for several of the fields on opportunity reports.\nWhat approach should and administrator take to meet the requirements?",
      options: [
        "A. Edit the fields Available for Reports sections in the Opportunities report type to make the changed.",
        "B. User Rename tabs and labels to change the field labels as needed.",
        "C. Create bucket fields for each field and enter the new column heading in the Bucket Name Field.",
        "D. Build a Custom Report type and use Display As in Edit Layouts to make the requested changes.",
      ],
      answer: "C",
      title: "Question 144",
      explanation: "",
    },
    {
      content:
        "Universal Containers purchased Field Service Lightning Licenses in Production and wants to make these license available in an active development sandbox with the minimum development impact.\nHow should an administrator create these licenses in the sandbox?",
      options: [
        "A. Use the Match Production Licenses tool.",
        "B. Refresh the sandbox from production.",
        "C. Submit a Salesforce support case.",
        "D. Merge Production and the sandbox using a template.",
      ],
      answer: "B",
      title: "Question 145",
      explanation: "",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user.\nHow can an administrator meet this requirement?",
      options: [
        "A. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
        "B. Create a workflow field update to update the IsClosed field to True if a dosed opportunity is modified.",
        "C. Create an opportunity validation rule with the formula; PWORVALUE( IsClosed ) - True.",
        "D. Set the Do Not Modify Closed Opportunity permission for all profiles.",
      ],
      answer: "C",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "When configuring a change set, which two practices should an administrator adhere to in order to ensure a successful deployment to production?\nChoose 2 answers",
      options: [
        "A. Add permissions and access settings to outbound change sets in addition to the dependent component list.",
        "B. When deploying a new record type, ensure the new record type is the only component in the change set.",
        "C. Clone a change set to add forgotten dependent components to an uploaded change set.",
        "D. Run deployment validations on the change set in the sandbox prior to uploading to production.",
      ],
      answer: "C,D",
      title: "Question 147",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks would like to establish a backup administrator who can assign but not modify user permission How should this be accomplished?",
      options: [
        "A. Set up the user as a delegated administrator.",
        "B. Configure a custom administrator profile.",
        "C. Create an administrator permission set group",
        "D. Assign 'the user the System Administrator profile.",
      ],
      answer: "D",
      title: "Question 148",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track customer complaints. The company wants to have a field on the custom object where they can include a reference to another complaint.\nWhich type of relationship can be used to accomplish this?",
      options: [
        "A. Hierarchical",
        "B. Master-detail",
        "C. Lookup",
        "D. Junction",
      ],
      answer: "C",
      title: "Question 149",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow its customers to submit support requests across multiple channels.\nIn which two ways can this be accomplished with Salesforce?\nChoose 2 answers",
      options: [
        "A. Enable the Service Cloud Console app on the company's website.",
        "B. Expose the case feeds option on the company's website.",
        "C. Offer a Chat button on the company website.",
        "D. Enable Chatter Questions in the company's customer Community",
      ],
      answer: "B,C",
      title: "Question 150",
      explanation: "",
    },
    {
      content:
        "An administrator would like to convert a Master-Detail relationship to a Lookup relationship. What actions should be taken prior to converting the relationship?\n Discuss",
      options: [
        "A. Remove child object related lists from the parent object page layouts.",
        "B. Select the Allow Reparenting option on the master-detail relationship.",
        "C. Delete all reports that use the master object with the detail object report type.",
        "D. Delete all roll-up summaries that reference the detail object prior to converting,",
      ],
      answer: "D",
      title: "Question 151",
      explanation: "",
    },
    {
      content:
        "A user has asked the Administrator at SFB Industries if they should have access to the salary field on the user object they should not. The Administrator has checked their profile and they do not have access to this field on field level security. Where else should they check?",
      options: [
        "A. Sharing Rules",
        "B. Permission Sets",
        "C. Profile Object settings",
        "D. Org--wide defaults",
      ],
      answer: "B",
      title: "Question 152",
      explanation: "",
    },
    {
      content:
        "Universal Containers like to track Application Bugs within Salesforce. The company needs to track the bug's severity, type, status and description. Bugs should be related to Cases, but owner will be different than the owner of the case. How can the Universal Containers administrator meet these requirements?",
      options: [
        "A. Create a section on the case page layout",
        "B. Create a relationship between the standard bug object and the standard case object",
        "C. Create a field on cases",
        "D. Create a custom object for bugs and relate it to cases",
      ],
      answer: "D",
      title: "Question 153",
      explanation: "",
    },
    {
      content:
        "Sales manager wants to edit opportunity but is unable to do because he dont have Edit permission for Opportunity Object. so what does he needs to do to troubleshoot this ?",
      options: [
        "A. Grant access in the hierarchy in OWD",
        "B. Include in Team Selling",
        "C. Change owd to read / write",
        "D. Create a permission set to allow edit",
      ],
      answer: "D",
      title: "Question 154",
      explanation: "",
    },
    {
      content:
        "Universal Container wants to relate multiple projects to opportunities to track change orders when new order items added to the project. All Opportunity team members should have access to the opportunity, but only opportunity owners should have access to the change orders. What relationship type should be used to meet these requirements?",
      options: [
        "A. Many to Many",
        "B. Master Detail",
        "C. Lookup",
        "D. Hierarchical",
      ],
      answer: "C",
      title: "Question 155",
      explanation: "",
    },
    {
      content:
        "What are two capabilities of Enterprise Territory Management? (Choose two.)",
      options: [
        "A. The ability to use 20 territories assignment rules per model.",
        "B. Territory hierarchy replaces the role hierarchy for sharing.",
        "C. The ability to use filter-based opportunity criteria to expand assignment rules.",
        "D. Prioritize territories to indicate highest priority or lowest priority.",
      ],
      answer: "C,D",
      title: "Question 156",
      explanation:
        "Filter-Based Opportunity Territory can indicate that a territory type is the highest priority or the lowest.\n Reference: https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/ salesforce_implementing_territory_mgmt2_guide.pdf",
    },
    {
      content:
        "When the delete permission is selected in a muting permission set, which other permission is automatically muted?",
      options: [
        "A. View Al Data",
        "B. Modify All Records",
        "C. Modify All Data",
        "D. New Al Records",
      ],
      answer: "B",
      title: "Question 157",
      explanation: "",
    },
    {
      content:
        '"Object" data needs to be pulled up monthly from an org and stored else where. What can be done to perform this? Choose 2',
      options: [
        'A. Select "Schedule Export" from Data Export',
        "B. IUse Data Exporter",
        "C. Use Data Loader",
        'D. Select "Object" Export from Data Management',
      ],
      answer: "A,C",
      title: "Question 158",
      explanation: "",
    },
    {
      content:
        "How could you show a report of Accounts that do not have any Opportunity associated with them?",
      options: [
        "A. Use a cross filter on the standard Accounts report type and set it to without Opportunities",
        "B. Use the standard Accounts without Opportunities Report",
        "C. Create a Custom Report Type for Accounts & without Opportunities",
        "D. Use a filter on the standard Accounts report type and set it to without Opportunities",
      ],
      answer: "A",
      title: "Question 159",
      explanation: "",
    },
    {
      content:
        "Some users across the business in various departments need the ability to export reports. Which feature will best grant access to these users?",
      options: [
        "A. Create a permission set with the Export Reports permission and assign it to the relevant users",
        "B. Use Delegated Administration and assign it to the relevant users",
        "C. Enable the Export Reports permission on their existing profiles",
        "D. Create a new profile with the Export Reports permission",
      ],
      answer: "A",
      title: "Question 160",
      explanation: "",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user.\nHow can an administrator meet this requirement?",
      options: [
        "A. Set the Do Not Modify Closed Opportunity permission for all profiles",
        "B. Create an opportunity validation rule with the formula: PRIORVALUE(IsClosed) = True",
        "C. Create a workflow field update to update the IsClosed field to True if a closed opportunity is modified",
        "D. Set all fields to Read-Only on the standard Closed Opportunity page layout",
      ],
      answer: "B",
      title: "Question 161",
      explanation: "",
    },
    {
      content:
        "With customizable forecasting you can forecast any of the following data (3)",
      options: [
        "A. units of product family",
        "B. amount",
        "C. quantity",
        "D. units of individual products",
      ],
      answer: "A,B,C",
      title: "Question 162",
      explanation: "",
    },
    {
      content:
        "A sales manager would like access to the following information:\nAll closed/won opportunities in the last six months for each account the manager owns.\nAll cases created within the last six months for each account the manager owns.\nHow can the administrator meet these requirements?",
      options: [
        "A. Create an Account report and add Opportunity and Case cross filters",
        "B. Create a single report using the Joined Reports feature",
        "C. Create an Account report that groups by opportunities and cases",
        "D. Create a custom report type to combine the data into a single report",
      ],
      answer: "C",
      title: "Question 163",
      explanation: "",
    },
    {
      content:
        "Which is the most efficient way to protect a Social Security Number that must be stored on a customer's Contact record?\nSelect one:",
      options: [
        "A. Page Layouts linked to Profiles.",
        "B. Page Layouts linked to Record Types.\n         NOTES:\n         While you can remove the field in page layouts, the field will still be visible to those users in a report, list view, merge template etc. Field Level Security will prevent the user from seeing the contents of this field anywhere.\n         https://developer.salesforce.com/docs/atlas.enus.securityImplGuide.meta/securityImplGuide/admin_fls.htm",
        "C. Page Layouts.",
        "D. Field Level Security",
      ],
      answer: "D",
      title: "Question 164",
      explanation: "",
    },
    {
      content:
        "Suggest a feature that SFB Industries can enable to increase call deflection.",
      options: [
        "A. Public Knowledge Base",
        "B. Live Chat",
        "C. Email--to--Case",
        "D. Click--to--dial",
      ],
      answer: "A",
      title: "Question 165",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has a training sandbox with 160MB of test data that needs to be refreshed every other day.\nWhich two sandboxes should be used in this instance?\nChoose 2 answers",
      options: ["A. Developer", "B. Full", "C. Developer Pro", "D. Partial"],
      answer: "B,C",
      title: "Question 166",
      explanation: "",
    },
    {
      content: "How you can make sure that field on record is unique.",
      options: [
        'A. Check "External Id" in field while creating it',
        'B. Check "Unique" in field while creating it',
        "C. Use Validation Rule",
      ],
      answer: "B",
      title: "Question 167",
      explanation: "",
    },
    {
      content:
        "All enabled on Accounts and assign to the new users45. SFB Industries are looking to set up Entitlements in Salesforce. What is the first thing you must do in Salesforce when setting this up?",
      options: [
        "A. Choose an Entitlement Model",
        "B. Create an Entitlement Process",
        "C. Setup Milestone Actions",
        "D. Set Up Milestones",
      ],
      answer: "A",
      title: "Question 168",
      explanation: "",
    },
    {
      content:
        "If your support process is not based on individual service contracts which steps should you perform when settling up entitlements?",
      options: [
        "A. set up both service contracts and contract line items",
        "B. set up service contracts b. set up contract line items",
        "C. customize entitlement fields and entitlements page layout",
      ],
      answer: "A",
      title: "Question 169",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about the creation of entitlement processes? (Choose two.)",
      options: [
        "A. Entitlement versioning allows changes to existing entitlement processes",
        "B. Entitlements have their own organization-wide default settings",
        "C. Milestones can be created dynamically based on other fields",
        "D. The Manage Entitlements permission must be enabled",
      ],
      answer: "A,D",
      title: "Question 170",
      explanation: "",
    },
    {
      content:
        "James, a recruiting manager, needs a picklistfield implemented on the Position object by the end of the week. Matt, the system administrator, is too busy to fulfill the requirement.\nWhat should Matt do to prevent this from happening again?* (1 Point)",
      options: [
        "A. Make James a delegated administrator for the Position object",
        "B. Change the organization-wide defaults for the Position Object to Public Read/Write",
        "C. Make James a delegated administrator for the Recruiting app",
        'D. Assign James the "Modify All Data" permission set',
      ],
      answer: "A",
      title: "Question 171",
      explanation: "",
    },
    {
      content:
        "If an administrator uses the data loader to transfer ownership of account records, which two results can be expected?Choose 2 Answers.",
      options: [
        "A. All new owners are automatically notified of their new account ownership.",
        "B. All ownership-based sharing rules for the records are recalculated.",
        "C. All account teams are removed from the records that are transferred.",
        "D. All manual sharing is removed from the records that are transferred.",
      ],
      answer: "B,D",
      title: "Question 172",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a workflow rule that sends and email alert to the VP of Sales when a large deal is won.\nThe VP is reporting that these emails are not being delivered. Which two tools should be used to determine the problem?",
      options: [
        "A. Workflow monitor",
        "B. Email log",
        "C. System audit trail",
        "D. Debug logo",
      ],
      answer: "B,D",
      title: "Question 173",
      explanation: "",
    },
    {
      content:
        "Universal Containers has set up a picklist dependency between region and zone on the Account object. The sales manager has requested that when a user selects a region, a zone must also be selected.\nHow should this be achieved?",
      options: [
        "A. Set default values for both picklist fields.",
        "B. Make both picklist fields required at the field level.",
        "C. Create a validation rule using ISBLANK().",
        "D. Make the zone field required on the page layout.",
      ],
      answer: "B",
      title: "Question 174",
      explanation:
        "Would like to be able to identify each account record by its region and zone.\n Reference: https://trailhead.salesforce.com/en/content/learn/v/projects/customize-a-salesforce-object/picklists- field-dependencies",
    },
    {
      content:
        "Which two statements are true about the creation of entitlement processes? (Choose two.)",
      options: [
        "A. Entitlements have their own organization-wide default settings",
        "B. The Manage Entitlements permission must be enabled",
        "C. Milestones can be created dynamically based on other fields",
        "D. Entitlement versioning allows changes to existing entitlement processes",
      ],
      answer: "B,D",
      title: "Question 175",
      explanation: "Explanation",
    },
    {
      content:
        "an administrator has been asked to set up two custom objects named issues and tickets. multiple tickets can be associated with each issue, and each issue may be associated with multiple tickets.\nhow should the administrator set up the relationship between issues and tickets?",
      options: [
        "A. Create a lookup relationship with tickets as the master object.",
        "B. Create a junction object with both tickets and issues as master objects.",
        "C. Create a master detail relationship with issues as the master object",
        "D. Create a lookup relationship on both the tickets and issues object.",
      ],
      answer: "B",
      title: "Question 176",
      explanation: "",
    },
    {
      content:
        "Which of the following are current limitations of Salesforce Knowledge? (@Winter 18) Select 3",
      options: [
        "A. You can define up to 5 category groups with only 3 active at any time.",
        "B. You can define up to 50,000 articles in total.",
        "C. You can have up to 100 groups in each category.",
        "D. You can define up to 5 category groups.",
        "E. You can have up to 100 categories in each group.",
      ],
      answer: "A,B,E",
      title: "Question 177",
      explanation: "",
    },
    {
      content:
        "What things should be specified by the admin to deploy changes from Sandbox to Production org using Force.com IDE? Choose 3",
      options: [
        "A. Environment where changes will be transferred",
        "B. Change set connection settings",
        "C. Configuration that needs to be transferred",
        "D. Username and password",
        "E. Data to be included",
      ],
      answer: "A,C,D",
      title: "Question 178",
      explanation: "",
    },
    {
      content:
        "When will account assignment rules automatically assign an opportunity to a territory",
      options: [
        "A. Account has multiple territories",
        "B. Account ownership was changed",
        "C. When opportunity has no assigned territory and account has been assigned to a territory",
        "D. Account has no assigned territory",
      ],
      answer: "C",
      title: "Question 179",
      explanation: "",
    },
    {
      content:
        "A sales manager would like a report of accounts with no closed/won opportunities in the last year. How can this requirement be met?",
      options: [
        "A. Create a customer report type for Accounts without Opportunities.",
        "B. Create a tabular report using the Account report type and add a cross filter using Opportunities.",
        "C. Create a summary report using the Accounts report type with a formula field for opportunity count.",
        "D. Create a joined report using the Accounts report type and the Opportunities report types.",
      ],
      answer: "D",
      title: "Question 180",
      explanation: "",
    },
    {
      content:
        "Developers at universal containers have created new custom objects and fields in a sandbox. Records have also been created for these new objects.\nwhat should an administrator do to move these objects, fields and records to a production environment?",
      options: [
        "A. Use the Data loader to migrate all the new metadata and the related records",
        "B. Use change sets to migrate both the metadata and the records.",
        "C. Use the Force.com IDE's built in deployment wizard to migrate all changes.",
        "D. Use change set to migrate the metadata and data loader to migrate the records",
      ],
      answer: "D",
      title: "Question 181",
      explanation: "",
    },
    {
      content: "Territory Management can set access to which objects?",
      options: [
        "A. Accounts, Contacts & Opportunities",
        "B. Accounts, Contacts, Cases, Opportunities & Custom Objects",
        "C. Accounts only",
        "D. Accounts, Contacts, Cases & Opportunities",
      ],
      answer: "D",
      title: "Question 182",
      explanation: "",
    },
    {
      content: "Which permission do you need to manage entitlements? Choose 2",
      options: [
        "A. Customize Entitlement",
        "B. Manage Application",
        "C. Manage Entitlements",
        'D. Customize Application"',
      ],
      answer: "A",
      title: "Question 183",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) completed a project in a sandbox environment and wants to migrate the changes to production. CK split the deployment into two distinct change sets. Change set 1 has new custom objects and fields. Change set 2 has updated profiles and automation.\nWhat should the administrator consider before deploying the change sets?",
      options: [
        "A. Automations need to be deployed in the same change set in order to be activated.",
        "B. Change set 2 needs to be deployed first.",
        "C. The Field-Level Security will not be deployed with the profiles in change set 2.",
        "D. Both change sets must be deployed simultaneously.",
      ],
      answer: "C",
      title: "Question 184",
      explanation: "",
    },
    {
      content:
        "The VP of sales at Universal Containers has reported that users are changing the stage of opportunity records that they do not own. The VP wants only the owner of an opportunity to be able to change the stage of an opportunity-wide Default are set to pubic read/write.\nWhich validation rule should the administrator use to allow only the record owner to edit the stage field?",
      options: [
        "A. NOT(ISCHANGED(StageName) , ownerid = $user.id)",
        "B. AND(PRIORVALUE (StageName), Ownerid < >; $user,id)",
        "C. AND(ISCHANGED(StageName) < >; $user.id)",
        "D. NOT(PRIORVALUE(StageName) , Ownerid = $user.id)",
      ],
      answer: "C",
      title: "Question 185",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement to report on opportunities where the probability has dropped beneath 50%. The administrator has created a custom checkbox as a way to identify these records. What else should the administrator do to meet this requirement?",
      options: [
        "A. Enable field history tracking on the field and include the history in the report filter",
        "B. Build a validation rule that displays an error when the user enters the probability to less than 50%",
        "C. Create an approval process that submits the opportunity for approval when the custom checkbox is true.",
        "D. Create a workflow rule that updates the field when the probability drops below 50%",
      ],
      answer: "D",
      title: "Question 186",
      explanation: "",
    },
    {
      content:
        "V identify features from the list below that are included in Live Agent. (Select 3)",
      options: [
        "A. Share the customer's screen",
        "B. Pre-Chat Forms and Post-Chat pages",
        "C. Block visitors by IP Address",
        "D. Block visitors by username",
        "E. Enable agents to include standard responses without having to type each time",
      ],
      answer: "B,C,E",
      title: "Question 187",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the find duplicates button.\nWhich lead object-level permission will the administrator need to provide to these users?",
      options: ["A. Merge", "B. Read and Edit", "C. View All", "D. Delete"],
      answer: "C",
      title: "Question 188",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining salesforce knowledge? choose 3",
      options: [
        "A. Article version numbers must be assigned by a knowledge manager for tracking.",
        "B. Data category visibility is assigned through roles and profiles.",
        "C. knowledge settings must be configured to allow users to create an article from a case",
        "D. Enabling knowledge on a user record requires licensing.",
        "E. solution category browsing must be enabled in solution settings.",
      ],
      answer: "B,C,D",
      title: "Question 189",
      explanation: "",
    },
    {
      content:
        "Agents can file vacation leave request that must be approved by the manager. An agent is unable to submit the request. What could be the possible cause?",
      options: [
        "A. There is System Error",
        "B. There is no Manager for User",
        "C. Approval Process is not enabled for them",
      ],
      answer: "B",
      title: "Question 190",
      explanation: "",
    },
    {
      content:
        "System admin - wants to make sure that when an opportunity is closed - nobody can modify it.",
      options: [
        "A. Change OWD setting read / write",
        "B. create workflow (isclosed) is true - if customer modifies it",
        "C. give read only permission on close opportunity",
        "D. validation rule with priorvalue(isclosed) = true",
      ],
      answer: "D",
      title: "Question 191",
      explanation: "",
    },
    {
      content:
        "Admin wants to delete approval process that is no longer used by management. What makes admin not to complete this request. Choose 2",
      options: [
        "A. Process is not locked",
        "B. Process is set to active",
        "C. Process has record associated",
        "D. Process is tied with email alert and field update",
      ],
      answer: "B,C",
      title: "Question 192",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Job Application custom object related to a Job Posting custom object. They would also like a no-code solution to calculate the number of Job Applications for each Job Posting.\nWhat type of field should an administrator create on the Job Application to enable this functionality?",
      options: [
        "A. Lookup",
        "B. Formula",
        "C. Master-Detail",
        "D. Roll-up Summary",
      ],
      answer: "C",
      title: "Question 193",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private sharing model for accounts. A user who owns an account record needs to temporarly grant delete access to this records associated contacts to another user. how can this be accomplished?",
      options: [
        "A. Transfer ownership of the account record to the user.",
        "B. Use the manual sharing button on the account.",
        "C. Manually add the user to the account team.",
        "D. Add the user to the owner's default account team",
      ],
      answer: "A",
      title: "Question 194",
      explanation: "",
    },
    {
      content:
        "Cloud kicks wants to understand the implications of archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers",
      options: [
        "A. Events that ended more than 365 days ago are archived.",
        "B. Events created more than 365 days ago are archived.",
        "C. Closed tasks created more than 365 days ago with no due data are archived.",
        "D. Archived activities are deleted after 365 days.",
      ],
      answer: "A,B",
      title: "Question 195",
      explanation: "",
    },
    {
      content:
        "Users have been given Read/Write access to product support cases through criteria-based sharing rules. A user's profile only has the Read permission for cases.\nWhat can the user expect regarding their ability to edit product support cases?",
      options: [
        "A. The user will only be able to edit the cases that they created.",
        "B. The user will NOT be able to edit product support cases.",
        "C. The user will be able to edit product support cases.",
        "D. The user will only be ableto edit cases manually shared with them.",
      ],
      answer: "B",
      title: "Question 196",
      explanation: "",
    },
    {
      content:
        "An administrator has initiated the process of deploying changes from a sandbox to the production environment using the Force.com IDE. What information must be supplied to the IDE during this process? Choose 3 answers",
      options: [
        "A. The environment into which the changes can be deployed",
        "B. The username and password of the destination environment",
        "C. The related change set connection information",
        "D. The metadata components that need to be deployed",
        "E. The data of the fields which are being deployed",
      ],
      answer: "A,B,D",
      title: "Question 197",
      explanation: "",
    },
    {
      content:
        "VP for Marketing needs to edit the Pick List values of custom Object. He needs to constantly modify the page layout. What so you need to do address the issue?",
      options: [
        "A. Create a permission set on Object",
        "B. Permission on Edit Page Layout for Pick List",
        "C. Assign as Delegated Admin on object",
        "D. Give Modify All Data permission",
      ],
      answer: "C",
      title: "Question 198",
      explanation: "",
    },
    {
      content:
        "Admin uploaded a Changeset but realized that dependent component is missing.",
      options: [
        "A. Clone Changeset, Add dependent component and upload new changeset",
        "B. Deploy and create new changeset and add component",
        "C. Edit changeset and select active checkbox",
        "D. Deploy and manually add dependent component",
      ],
      answer: "A",
      title: "Question 199",
      explanation: "",
    },
    {
      content:
        "The recruiting manager at Universal Containers has requested a new picklist value in the Type field on the Position object by the end of the week. If the administrator is unable to complete this request in the desired timeline, what type of access will allow the recruiting manager to make the changes in Salesforce?",
      options: [
        "A. Delegated administration to manage recruiting users",
        "B. Create, Read, Edit, and Delete access to the Position object",
        "C. Modify All and View All access to the Position object",
        "D. Delegated administration over the Position object",
      ],
      answer: "D",
      title: "Question 200",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers. Which two reasons could be the cause?Choose 2 Answers",
      options: [
        "A. HTML templates are not available in sandboxes.",
        "B. The email addresses for the users are incorrect.",
        "C. The Deliverability Access Level setting is incorrect.",
        "D. Workflow emails only work in Full sandboxes.",
      ],
      answer: "B,C",
      title: "Question 201",
      explanation: "",
    },
    {
      content:
        "What are two considerations an administrator should consider when setting up quotes?\nChoose 2 answers",
      options: [
        "A. Quotes can be synced with multiple active quotes",
        "B. Price books must be active in an opportunity before you can create quote for the opportunity",
        "C. When a quote is deleted the related opportunity and products are deleted as well",
        "D. Discount fields on quotes can be a negative number",
        "E. Quote PDF text aligns to the left side of the page instead of the right.",
      ],
      answer: "B,E",
      title: "Question 202",
      explanation: "",
    },
    {
      content:
        "What privileges can be given to a delegated administrator? Choose three answers.",
      options: [
        "A. Manage custom objects.",
        "B. Modify profile permissions.",
        "C. Modify the role hierarchy.",
        "D. Assign users to specified profiles.",
        "E. Create and edit users.",
      ],
      answer: "A,D,E",
      title: "Question 203",
      explanation: "",
    },
    {
      content:
        "A sales rep at AW Computing needs to give read/write access to an Account and related records to a teammate #m*e the sates rep is on vacation.\nHow could the administrator enable the sales rep to give record access to a colleague?",
      options: [
        "A. Add the Manual Sharing button the page layout.",
        "B. Enable public groups for sharing.",
        "C. Include the nap on the Opportunity Team.",
        "D. Create an ownership-based sharing rule.",
      ],
      answer: "C",
      title: "Question 204",
      explanation: "",
    },
    {
      content:
        "Order status field value is not populating from an external processing system during a transaction. How to troubleshoot ?",
      options: [
        "A. Apex callout",
        "B. Debug log",
        "C. Server Process Down",
        "D. Integration log",
      ],
      answer: "B",
      title: "Question 205",
      explanation: "",
    },
    {
      content:
        "Users report that the Industry picklist field is no longer visible on account records. What tool can an administrator use to troubleshoot this issue?",
      options: [
        "A. Field history tracking",
        "B. Field audit history",
        "C. Debug log",
        "D. Setup audit trail",
      ],
      answer: "D",
      title: "Question 206",
      explanation: "",
    },
    {
      content:
        "What will happen when you use dataloader to transfer a record to a new owner? Choose 2",
      options: [
        "A. Account Teams will not be transferred",
        "B. All ownerbase sharing will be recalculated",
        "C. Criteria-based sharing rule will be recalculated",
        "D. Manual sharing rules will not be carried over",
      ],
      answer: "A,D",
      title: "Question 207",
      explanation: "",
    },
    {
      content:
        "Which of the following is NOT true about article types in Salesforce Knowledge? * (1 Point)",
      options: [
        "A. An organization must have 2 article types to enable Knowledge.",
        "B. Article Types may include attachments.",
        "C. Article Types are typically short HTML documents.",
        "D. Article Types should enable 'actionable' content.",
      ],
      answer: "A",
      title: "Question 208",
      explanation: "",
    },
    {
      content:
        "A field's label was changed in the sandbox. What should be done that the production's field label will also be changed? Choose 2",
      options: [
        "A. Changeset",
        "B. Manually change the field label in production",
        "C. Import wizard",
        "D. Dataloader",
      ],
      answer: "A,B",
      title: "Question 209",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to ensure that the following opportunity fields are present on each record at the negotiation/review or won stages:\nAmount (Currency) us populated.\nThe Ready to Close (Checkbox) must also be true.\nWhich validation rule error condition should the administrator configure to meet these requirements?\nA)\nB)\nC)\nD)",
      options: ["A. Option C", "B. Option B", "C. Option D", "D. Option A"],
      answer: "A",
      title: "Question 210",
      explanation: "",
    },
    {
      content:
        "Universal Containers has set up a picklist dependency between region and zone on the Account object. The sales manager has requested that when a user selects a region, a zone must also be selected.\nHow should this be achieved?",
      options: [
        "A. Create a validation rule using ISBLANK().",
        "B. Make both picklist fields required at the field level.",
        "C. Make the zone field required on the page layout.",
        "D. Set default values for both picklist fields.",
      ],
      answer: "A",
      title: "Question 211",
      explanation: "",
    },
    {
      content:
        "Which two should an administrator consider when setting up Salesforce CRM Content ?Choose\n2 answers.",
      options: [
        "A. The library type determines the size of files that can be contributed to content.",
        "B. A validation rule can ensure a description is required for all contributed content.",
        "C. An approval process can ensure that all product-related content is reviewed.",
        "D. The content type determines which fields appear on the Content Detail page layout.",
      ],
      answer: "B,D",
      title: "Question 212",
      explanation: "",
    },
    {
      content:
        "How to make sure that sandbox has the latest or updated version?",
      options: [
        "A. Refresh Sandbox",
        "B. Use Changeset",
        "C. Use ANT Migration Tool",
        "D. Use Dataloader",
      ],
      answer: "A",
      title: "Question 213",
      explanation: "",
    },
    {
      content:
        "what should an administrator do before case feeds can be enabled? choose 2",
      options: [
        "A. Enable chatter.",
        "B. Enable feed tracking on cases.",
        "C. Enable case assignment rules.",
        "D. Enable default email templates",
      ],
      answer: "A,B",
      title: "Question 214",
      explanation: "",
    },
    {
      content:
        'A system administrator has unchecked the setting "Enable Content Pack Creation". What can users do with content packs? Choose 1.',
      options: [
        "A. Edit description and title of existing content packs",
        "B. All content Packs will be deleted.",
        "C. Modify existing content packs.",
        "D. hindi ko alam",
      ],
      answer: "A",
      title: "Question 215",
      explanation: "",
    },
    {
      content:
        "A sales representative changed the ownership of an account that they owned. What impact will this have on sharing?",
      options: [
        "A. All criteria-based sharing rules will be recalculated.",
        "B. Related opportunity records will become Read-Only for account team members.",
        "C. All ownership-based sharing rules will be recalculated.",
        "D. Users who had access through manual sharing will lose access.",
      ],
      answer: "C,D",
      title: "Question 216",
      explanation: "",
    },
    {
      content:
        "If an administrator uses the data loader to transfer ownership of account records, what will be the result?\nChoose 2 answers",
      options: [
        "A. All new owners are automatically notified of their new account ownership",
        "B. All ownership based sharing rules for the records are recalculated",
        "C. All account teams are removed from the records that are transferred",
        "D. All manual sharing is removed from the records that are transferred",
      ],
      answer: "B,D",
      title: "Question 217",
      explanation: "",
    },
    {
      content:
        "Universal Container created data categories: AMER, AFRICA, LATAM, and ASIA. System administrator should assign some of the data categories to a Sales representative. How can the system administrator do it?\nChoose 2",
      options: [
        "A. Assign data categories to profile of the user",
        "B. Assign the data categories to the record types of the user",
        "C. Assign data categories to role of the user",
      ],
      answer: "A,C",
      title: "Question 218",
      explanation: "",
    },
    {
      content:
        "A Sales manager wants to implement a new B2B wherein when an opportunity is closed, it will add the name of the Account to the opportunity name",
      options: [
        "A. Use validation to update the field",
        "B. Create Approval process to add account and opportunity",
        "C. Use Rollup Summary field to concatenate",
        "D. Use Apex trigger to add the Account name to the Opportunity name",
        "E. Create a workflow field update to concatenate Account name and Opportunity name",
      ],
      answer: "E",
      title: "Question 219",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters has five delegated administrators and two system administrators. There have been a couple of cases reported that login settings for sales reps have changed.\nWhere would the administrator find what settings have been changed?",
      options: [
        "A. Debug log",
        "B. Login history",
        "C. Setup audit trail",
        "D. Field history tracking",
      ],
      answer: "C",
      title: "Question 220",
      explanation: "",
    },
    {
      content:
        "James, a recruiting manager needs a picklist field implemented on the Position object done by the end of the week. Matt, the system administrator was too busy to fulfill the requirement.\nWhat should Matt do, to prevent this from happening again?",
      options: [
        'A. Assign James with the "Modify All Data" permission set',
        "B. Changed OWD for the Position Object to Public Read/Write.",
        "C. Delegate James as a delegated administrator for the Recruiting App",
        "D. Delegate James as a delegated administrator for the Position Object",
      ],
      answer: "D",
      title: "Question 221",
      explanation: "",
    },
    {
      content:
        'If a system administrator has unchecked the "Enable Content Pack Creation" setting, what can users do with content packs?',
      options: [
        "A. Users can modify existing content packs.",
        "B. Users cannot do anything to existing content pack",
        "C. Users can only edit description and title of existing content packs",
      ],
      answer: "C",
      title: "Question 222",
      explanation: "",
    },
    {
      content:
        "Which two should an administrator consider when setting up Salesforce CRM Content ? Choose 2 answers.",
      options: [
        "A. An approval process can ensure that all product-related content is reviewed.",
        "B. The content type determines which fields appear on the Content Detail page layout.",
        "C. A validation rule can ensure a description is required for all contributed content.",
        "D. The library type determines the size of files that can be contributed to content.",
      ],
      answer: "B,C",
      title: "Question 223",
      explanation: "",
    },
    {
      content:
        "Which of the following is a typical user of Salesforce Knowledge?",
      options: [
        "A. End Customer",
        "B. All of the above",
        "C. Support Agent",
        "D. Sales Rep",
        "E. Internal Training Team",
      ],
      answer: "B",
      title: "Question 224",
      explanation: "",
    },
    {
      content:
        "Who can collaborate about your business with Salesforce Communities? Select 3",
      options: [
        "A. Partners",
        "B. Customers",
        "C. Suppliers",
        "D. Competitors",
        "E. Employees",
      ],
      answer: "A,B,E",
      title: "Question 225",
      explanation: "",
    },
    {
      content:
        "Which two permissions need to be enabled to set up entitlement management, including milestones, entitlement processes, and entitlement templates?",
      options: [
        "A. Customize Entitlements",
        "B. Manage Milestones",
        "C. Customize Application",
        "D. Manage Entitlements",
      ],
      answer: "C,D",
      title: "Question 226",
      explanation: "",
    },
    {
      content:
        "How should a Workflow issue be properly monitored and Debugged?",
      options: [
        "A. Check the standard Workflow logs",
        "B. Add a new monitored user and check the Debug Logs",
        "C. Check the standard Debug Logs",
        "D. Check the Time Based Workflow Log",
      ],
      answer: "B",
      title: "Question 227",
      explanation: "",
    },
    {
      content:
        "You have donwnloaded an App from AppExchange and you want to make changes in that App. What should be type of Package?",
      options: [
        "A. Manage Package",
        "B. Automatic Package",
        "C. Platinum Package",
        "D. UnManage Package",
      ],
      answer: "D",
      title: "Question 228",
      explanation: "",
    },
    {
      content:
        "Which tools would you use to deploy metadata from one organization to either a RELATED or UNRELATED organization? Choose two answers.",
      options: [
        "A. Unmanaged Packages",
        "B. Force.com Migration Tool",
        "C. Change sets",
        "D. Force.com IDE",
      ],
      answer: "B,D",
      title: "Question 229",
      explanation: "",
    },
    {
      content:
        "SFB Industries would like to see Opportunity Cases & Account information on one report. How can this be achieved inside of Salesforce?",
      options: [
        "A. Create a custom report type with Accounts, Cases & Opportunities",
        "B. Create a Joined Report",
        "C. Create a Matrix Report",
        "D. Use the standard report type for Accounts, Cases & Opportunities",
      ],
      answer: "B",
      title: "Question 230",
      explanation: "",
    },
    {
      content:
        "a sales manager wants to edit the opportunities owned by the sales team.\nthe manager does not have edit access to opportunity object.\nWhat is a recommended solution?",
      options: [
        "A. Create a permission set and associate Edit opportunity to the user record.",
        "B. change the opportunity organization-wide default setting to public Read/Write.",
        'C. Redefine the role hierarchy by enabling " grant access using hierarchies".',
        "D. Enable team selling on the opportunity object to grant Read/write access.",
      ],
      answer: "A,D",
      title: "Question 231",
      explanation: "",
    },
    {
      content: "What would you check to see whether a workflow failed?",
      options: [
        "A. debug log",
        "B. workflow log",
        "C. integration log",
        "D. failed work flow log",
      ],
      answer: "A",
      title: "Question 232",
      explanation:
        "http://help.salesforce.com/HTViewHelpDoc?id=code_debug_log.htm&language=en_US",
    },
    {
      content:
        'An administrator has unchecked the "Enable contact pack creation" checkbox after users had created content packs. What is the impact of the change?',
      options: [
        "A. All existing content packs will be deleted",
        "B. Users can continue to edit the contents of existing packs.",
        "C. The clone & customize button will continue to be available.",
        "D. Users can modify the description and title of existing packs.",
      ],
      answer: "D",
      title: "Question 233",
      explanation: "",
    },
    {
      content:
        "What Should be filter criteria to get all records having billing statement blank?",
      options: [
        "A. Billing statement | equal | null",
        "B. Billing statement |equal| blank",
        'C. Billing statement | contains | ""',
        "D. Billing statement | equal |",
      ],
      answer: "D",
      title: "Question 234",
      explanation: "",
    },
    {
      content: "What tool can be used to deploy sandbox to 2 different Orgs ?",
      options: [
        "A. ChangeSet",
        "B. DataLoader",
        "C. Import Wizard",
        "D. Force.com Migration Tool",
      ],
      answer: "D",
      title: "Question 235",
      explanation: "",
    },
    {
      content:
        "User reports that workflow is not functioning as expected. What tool can be used to check this issue.",
      options: [
        "A. Workflow log",
        "B. Debug log",
        "C. Apex test Unit",
        "D. System audit trail",
      ],
      answer: "B",
      title: "Question 236",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track expense reports and expense line Items. Values from expense line item records need to be aggregated and displayed on the expense record. What type of relationship should an administrator use to ensure that expense line items can be aggregated?",
      options: [
        "A. Roll-up summary",
        "B. Master-Detail",
        "C. Lookup",
        "D. Hierarchical",
      ],
      answer: "B",
      title: "Question 237",
      explanation: "",
    },
    {
      content:
        "Assuming that the training sandbox will contain approximately 500MB of production data and be refreshed after daily training sessions, which type of sandbox can be used to train users on new functionality that has recently been deployed to production? * (1 Point)",
      options: [
        "A. Developer Sandbox",
        "B. Partial Data Sandbox",
        "C. Full Sandbox",
        "D. Developer Pro Sandbox",
      ],
      answer: "D",
      title: "Question 238",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to implement a new entitlement process for premier support accounts. This support includes phone contact with the customer every 24 hours from the time the case is created for as long as it remains open.\nHow should an administrator configure this requirement?",
      options: [
        "A. Enable milestone tracker",
        "B. Configure an escalation rule",
        "C. Create an independent milestone",
        "D. Build a sequential milestone",
      ],
      answer: "A",
      title: "Question 239",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view contact owned by a salesperson. The sales person is below the sales manager in the role hierarchy. Why can't the sales manager view the contact?",
      options: [
        "A. The contact has not been manually shared with the manager",
        "B. The contact is not linked to an account",
        "C. Contact sharing settings are Private",
        "D. Contact sharing setting have Grant Access Using Hierarchies unchecked",
      ],
      answer: "B",
      title: "Question 240",
      explanation: "",
    },
    {
      content:
        "AW Computing wants to enable a backup resource to assign permissions while restricting the backup resource's ability to create or modify permission sets.\nWhich feature should be employed to accomplish this request?",
      options: [
        "A. Customize Application Permission",
        "B. Assignment Rules",
        "C. View All Users Permission",
        "D. Delegated Administrator",
      ],
      answer: "D",
      title: "Question 241",
      explanation: "",
    },
    {
      content:
        "What are the similarities of customizable and collaborative forecasting? Choose2",
      options: [
        "A. Submit Forecast",
        "B. Territory Management",
        "C. Quotas",
        "D. Monthly and Quarterly Forecasts",
      ],
      answer: "C,D",
      title: "Question 242",
      explanation: "",
    },
    {
      content:
        "Your boss wants you to make a report that shows sales growth year over year, which logical command should you use?",
      options: [
        "A. preVal",
        "B. Parentgroupval",
        "C. priorval custom field + modifier",
        "D. prevGroupVal",
      ],
      answer: "D",
      title: "Question 243",
      explanation: "",
    },
    {
      content: "What is true about Salesforce Communities? Choose 2",
      options: [
        "A. Reputation level is the same across all communities.",
        "B. Communities can be used by internal salesforce users only",
        "C. Ideas tab is used by community users to submit, like and promote Ideas",
      ],
      answer: "A,C",
      title: "Question 244",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Territory Management to manage its sales territories. Territory managers and sales representatives are at the same role level in the role hierarchy. Account and Opportunity objects are set to private.\nWhich three permissions should be granted to territory managers? (Choose three.)",
      options: [
        "A. Edit All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "B. Transfer and Delete opportunities assigned to the territory, regardless of who owns the opportunities.",
        "C. Transfer All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "E. View, Edit, Transfer, and Delete accounts assigned to the territory, regardless of who owns the accounts.",
      ],
      answer: "A,D,E",
      title: "Question 245",
      explanation: "",
    },
    {
      content:
        "Universal Container has an app exchange application they are planning to uninstall. What tools can be used to archive data before uninstalling the application? Choose 2 answers",
      options: [
        "A. Weekly Export Service",
        "B. Analytic Snapshot",
        "C. Workbench",
        "D. Data Loader",
      ],
      answer: "B,C",
      title: "Question 246",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has created a new custom Shoe object in the sandbox with two custom fields called Laces and Finish. The administrator is now preparing to deploy the entire custom object from the sandbox to the production instance.\nWhat should the administrator do to ensure the custom object is property deployed to production?",
      options: [
        "A. Add the custom object and fields to the change set.",
        "B. Manually create the custom objects and fields in production.",
        "C. Deploy the custom object and manually recreate the custom fields.",
        "D. Include the custom object in a change set.",
      ],
      answer: "C",
      title: "Question 247",
      explanation: "",
    },
    {
      content:
        "Support Records with a specific record type needs the access restricted to only a Support Manager and four support users. What can you do as a system administrator?",
      options: [
        "A. Create a criteria based sharing rule for the 5 users.",
        "B. Remove the record type access for all users except the 5 mentioned.",
        "C. Create a new profile and assign the 5 users to the new profile.",
        'D. Give the "View All Data" permission to the 5 mentioned users using permission sets.',
      ],
      answer: "A",
      title: "Question 248",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity. How can automation be used to help meet this requirement?",
      options: [
        "A. Use approval process that routes newly created opportunities to management for data quality review.",
        "B. Write a validation rule that updates the opportunity name with the account name using a cross-object formula.",
        "C. Use an Apex Trigger on the Account object that adds the account name to the opportunity name.",
        "D. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name.",
      ],
      answer: "D",
      title: "Question 249",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to grant read, create and edit access to the product object for users who currently have the standard marketing user profile.\nWhich two approaches could be used to meet the request? (Choose two.)",
      options: [
        "A. Create a new profile for the marketing users and change the access levels to read, create and edit for the product object",
        "B. Change the access levels in the marketing user standard profile to read, create and edit for the product object",
        "C. Create a permission set with read and write access for the product object and assign it to the marketing users",
        "D. Create a permission set with read, create and edit access for the product object and assign it to the marketing users",
      ],
      answer: "A,D",
      title: "Question 250",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers administrators the ability to fully customize the way an article type displays to an end user.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 251",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. The lookup field in all records contains a value.",
        "B. The lookup field is required on the child object.",
        "C. No roll-up summaries exist on the lookup object.",
        "D. The owner is the same for all related records",
      ],
      answer: "A",
      title: "Question 252",
      explanation: "",
    },
    {
      content:
        "What needs to be done before converting lookup to Master detail relationship",
      options: [
        "A. Make sure that all lookup fields have values",
        "B. First delete lookup field and create new Master Detail",
        "C. Use Data Loader to convert all lookup to Master detail",
        "D. OWD of master must be public Read/Write",
      ],
      answer: "A",
      title: "Question 253",
      explanation: "",
    },
    {
      content:
        "Universal Container (UC) is considering using Communities. Each partner is associated with a product and will need a separate community?\nSome partners will need to access to more than one community.\nWhat are two consideration an administrator should be aware of?\nChoose 2 answers",
      options: [
        "A. The org limit of 100 communities includes active, inactive, and preview communities.",
        "B. Community license choice of member-based or login-based.",
        "C. Communities licenses are associated with a specific community.",
        "D. The org limit of 100 community does not include inactive or preview communities.",
      ],
      answer: "A,B",
      title: "Question 254",
      explanation: "",
    },
    {
      content:
        "Universal Containers has four sales region: North America, APAC, EMEA, and LATAM. Each sales region is led by a VP of sales. Each of the VPs wants to have a dashboard emailed to them every IT Monday morning that contains components with only the data for their region. How can an administrator meet this requirement?",
      options: [
        "A. Create a reporting snapshot and check the dashboard option, scheduled to be delivered on Monday mornings",
        "B. Create one dashboard that includes a filter for each region, scheduled to be delivered on Monday mornings",
        "C. Create one dashboard using Visualforce to create a filter, scheduled to be delivered on Monday mornings",
        "D. Create a separate dashboard with data specific to each sales VP, scheduled to be delivered on Monday mornings",
      ],
      answer: "B",
      title: "Question 255",
      explanation: "",
    },
    {
      content: "What is an Article Type?",
      options: [
        "A. An Article Type defines the access and security of an article",
        "B. An Article Type defines which channel can access the article and Internal & Partner & Customer etc.",
        "C. Each Article created will have a corresponding Article Type that controls its content",
        "D. An Article Type defines the structure and format of an article",
      ],
      answer: "D",
      title: "Question 256",
      explanation: "",
    },
    {
      content:
        "Universal Containers support team needs to track service level agreements for customers.\nToday, they manually look up contacts by name when a customer calls. How can the administrator automate this process?",
      options: [
        "A. Create a private Chatter group for customers with high-priority service level agreements.",
        "B. Configure a workflow rule that sends and email alert of old cases to the support manager.",
        "C. Enable Case Feed and add a Contracts custom publisher to the Case Feed layout.",
        "D. Enable entitlements and add the tab for entitlements and service contracts.",
      ],
      answer: "D",
      title: "Question 257",
      explanation: "",
    },
    {
      content:
        "To create a large number of Salesforce user accounts from a CSV import file, you can use ________ to perform the import.\nSelect one:",
      options: [
        "A. Data Import Wizard",
        "B. Excel",
        "C. Bitlocker",
        "D. Data Loader\n         NOTES:\n         Data Loader does allow you to import users, you cannot import users with the Data Import Wizard.",
      ],
      answer: "D",
      title: "Question 258",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. It does not working parallel with sharing functions",
        "B. You need to contact Salesforce to have it enabled",
        "C. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "D. Once enabled it cannot be disabled",
      ],
      answer: "B,C,D",
      title: "Question 259",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to use Salesforce as part of their recruiting process. They need to track applicants and positions. Applicants should be able to apply for multiple positions. There should be a field on both the position and applicant records that sums the number of applications for each candidate.\nHow should an administrator define an application object to meet these requirements?",
      options: [
        "A. Create lookup fields on the application object to both the position and applicant.",
        "B. Create master-detail fields on the application object to both the position and applicant.",
        "C. Create a master-detail field on both the position and applicant to the application.",
        "D. Create a lookup field on both the position and applicant to the application.",
      ],
      answer: "C",
      title: "Question 260",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the Organization Wide Default internal access for opportunity to public read/write.",
        "B. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "C. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
        "D. Create a permission set for opportunity edit and add it to the support member's user record.",
      ],
      answer: "D",
      title: "Question 261",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using approval process with email notifications to streamline administrator process, A new approval process has been written that allow for delegated approvers. In testing, resulting show the primary approver is receiving the email notification but the delegated approver is NOT.\nWhich two steps should an administrator take to troubleshoot?",
      options: [
        "A. Verify that each approval step is set to allow delegated approvers.",
        "B. Verify that the email was sent in the setup Audit Trail.",
        "C. Check the delegated approver's user settings.",
        "D. Check Approval History to make sure the Submit for approval button was clicked.",
      ],
      answer: "B,C",
      title: "Question 262",
      explanation: "",
    },
    {
      content:
        "A Sales manager must be informed if an opportunity reaches 500,000$ mark. So that manager can check if they can approve it or not ? Provided that once who is asking for approvals are chatter users. Choose 2",
      options: [
        "A. Big Deal Alert",
        "B. Enable Chatter Post Notification",
        "C. Approval Process by a chatter",
        "D. Enable Allow approval by Email",
      ],
      answer: "C,D",
      title: "Question 263",
      explanation: "",
    },
    {
      content:
        "North Trail Outfitters want to automate the assignment of territories to opportunities.\nWhich two features are needed to meet this requirement.",
      options: [
        "A. Enable opportunity owner-based sharing",
        "B. Enable filter-based Opportunity Territory Assignment",
        "C. Create an Apex Class",
        "D. Create Assignment Rules",
      ],
      answer: "B,D",
      title: "Question 264",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot vim a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy.\nWhy is the sales manager unable to view the contact?",
      options: [
        "A. The contact is NOT linked to an account.",
        "B. Contact sharing settings ace Private.",
        "C. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "D. The contact has MOT been manually shared with the manager.",
      ],
      answer: "A",
      title: "Question 265",
      explanation: "",
    },
    {
      content:
        "Which two processing steps are triggered when reassigning Account owners using the Mass Transfer too?\nChoose 2 answers",
      options: [
        "A. Only Owner-based sharing rules are recalculated.",
        "B. All manual sharing is removed from the Accounts",
        "C. All Account sharing rules are recalculated.",
        "D. Manual sharing is updated to reflect the new Owner",
      ],
      answer: "C,D",
      title: "Question 266",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Feedback__c custom object related to Account and ensure all feedback records are owned by the same user as the Account owner.\nHow should an administrator relate Feedback__c to Account?",
      options: [
        "A. Create a lookup Account field and filter on Feedback__c.",
        "B. Create a hierarchical field on Feedback__c.",
        "C. Create a master-detail field on Feedback__c.",
        "D. Create a junction object between Account and Feedback__c.",
      ],
      answer: "B",
      title: "Question 267",
      explanation: "",
    },
    {
      content:
        "Universal Container's support team needs to track service level agreements for customers. Today, they manually look up contracts by name when a customer calls. How can an administrator automate this process?",
      options: [
        "A. Configure a workflow rule that sends an email alert of old cases to the support manager",
        "B. Create a private Chatter group for customers with high priority service level agreements",
        "C. Enable Case Feed and add a Contracts custom publisher to the Case Feed Layout",
        "D. Enable entitlements and add the tabs for entitlements and service contracts",
      ],
      answer: "D",
      title: "Question 268",
      explanation: "",
    },
    {
      content:
        "what type of data can be migrated between environments using change sets? choose 2",
      options: [
        "A. standard field picklist values.",
        "B. Email templates.(100%)",
        "C. Custom fields(100%)",
        "D. Account team roles.",
      ],
      answer: "B,C",
      title: "Question 269",
      explanation: "",
    },
    {
      content:
        "When a lead comes in from APAC it needs to be assigned to an external partner if the manager approves. Also external partner needs to be notified that lead has been assigned to him.\nAssignment rule, workflow rule",
      options: [
        "A. Assignment rule, workflow rule, approval process",
        "B. Assignment rule, workflow rule",
        "C. Assignment rule, approval process",
        "D. Assignment rule, auto-response rule, workflow rule",
      ],
      answer: "A",
      title: "Question 270",
      explanation: "",
    },
    {
      content:
        "Which three statements are correct about change sets?\nChoose 3",
      options: [
        "A. When a component is added to a change set, all dependent components automatically get added.",
        "B. When custom fields are added to a change set, field-level security is automatically included.",
        "C. There is a feature that allows the user to validate a change set before deploying it.",
        "D. To use change sets, at least one inbound and one outbound connection must exist.",
        "E. When a change set is deployed to production, by default, all Apex tests will automatically be run.",
      ],
      answer: "C,D,E",
      title: "Question 271",
      explanation: "",
    },
    {
      content:
        "List the different prices that are available for a product. Choose three answers. * (1 Point)",
      options: [
        "A. Standard Price",
        "B. List Price",
        "C. Discounted List Price",
        "D. Product Price",
        "E. Sales Price",
      ],
      answer: "A,B,E",
      title: "Question 272",
      explanation: "",
    },
    {
      content: "What is NOT a feature of Custom Report Types?",
      options: [
        "A. Select which fields appear as columns by default",
        "B. Add fields to the report type via lookups",
        "C. Add default filters",
        "D. Remove reorder and rename fields",
      ],
      answer: "C",
      title: "Question 273",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases. What is a recommended solution?",
      options: [
        "A. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "B. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
        'C. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
        "D. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
      ],
      answer: "C",
      title: "Question 274",
      explanation: "",
    },
    {
      content:
        "Sales leaders at Ursa Major Solar would like to be able to calculate forecasts based on megawatts.\nHow can the administrator create forecast types based on a megawatts measurement?",
      options: [
        "A. Create a custom number field.",
        "B. Use a standard currency field.",
        "C. Create a custom formula field.",
        "D. Customize a standard field.",
      ],
      answer: "A",
      title: "Question 275",
      explanation: "",
    },
    {
      content:
        "The administrator needs to give an IT Manager full access to customize Salesforce. How can this be accomplished?",
      options: [
        "A. Create a permission set and grant Customize Application permission",
        "B. Create a permission set and grant edit access to all objects",
        "C. Create a new profile for the user and grant edit access to all objects",
        "D. Create a delegated Administrator group",
      ],
      answer: "A",
      title: "Question 276",
      explanation: "",
    },
    {
      content:
        "You have created a workflow to send email. However customer is complaining that they didn't received any alert. Workflow is running. How you will troubleshoot ? Choose 2",
      options: [
        "A. Email Log",
        "B. Debug Log",
        "C. System Audit Trail",
        "D. Workflow Monitor",
      ],
      answer: "A,B",
      title: "Question 277",
      explanation: "",
    },
    {
      content:
        "What can a system administrator do to simplify searching in Knowledge for users? Choose 3",
      options: [
        "A. Prepopulate to Search tab of common fields from Case like Subject",
        "B. Create Filters",
        "C. Create synonyms",
        "D. Create Data Categories",
      ],
      answer: "A,C,D",
      title: "Question 278",
      explanation: "",
    },
    {
      content:
        "Sales management wants a small subset of users with different profiles and roles to be able to view all data for compliance purposes. How can an administrator meet this requirement?",
      options: [
        "A. Enable the View All Data permission for the roles of the subset of users",
        "B. Create a new profile and role for the subset of users with the View All Data permission",
        "C. Assign delegated administration to the subset of users to View All Data",
        "D. Create a permission set with the View All Data permission for the subset of users",
      ],
      answer: "D",
      title: "Question 279",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants customers who buy the Freight Container product to be billed in monthly installments. How should an administrator meet this requirement?",
      options: [
        "A. Create a default revenue schedule on the product.",
        "B. Create custom fields on the product.",
        "C. Create a default quantity schedule on the product",
        "D. Create a workflow rule on the product.",
      ],
      answer: "A",
      title: "Question 280",
      explanation: "",
    },
    {
      content:
        "Universal Containers' Support team is growing globally, and the manager has inquired about implementing Omni-Channel. The team supports multiple products that require complex expertise across multiple languages.\nWhich routing option should the administrator recommend to ensure the right cases get to the correct agents for resolution?",
      options: [
        "A. Translation Workbench",
        "B. Case Assignment Rules",
        "C. Skills-Based Routing",
        "D. Queue-Based Routing",
      ],
      answer: "C",
      title: "Question 281",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools can be used to deploy metadata from a Developer Edition organization to another organization? Choose 2 answers.",
      options: [
        "A. Ant Migration Tool",
        "B. Salesforce Extensions for Visual Studio Code",
        "C. Data Loader",
        "D. Change sets",
      ],
      answer: "A,D",
      title: "Question 282",
      explanation: "",
    },
    {
      content:
        "Which deployment tool can be used to deploy metadata from a developer\nedition organization to another organization? choose 2",
      options: [
        "A. Data loader.",
        "B. Force.com IDE",
        "C. Change sets",
        "D. Force.com Migration tool(100%)(salesforce extensions for visual studio code)",
      ],
      answer: "B,D",
      title: "Question 283",
      explanation: "",
    },
    {
      content:
        "What are three capabilities of Collaborative Forecasting? (Choose three.)",
      options: [
        "A. Select a default currency setting",
        "B. Overlay quota",
        "C. Add categories",
        "D. Rename categories",
        "E. Forecast using opportunity splits",
      ],
      answer: "A,D,E",
      title: "Question 284",
      explanation: "",
    },
    {
      content:
        "How can administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Require a field on page layout",
        "B. Use field dependencies on article types",
        "C. Create a validation rule on article",
        "D. Create different article type for different requirements",
      ],
      answer: "C",
      title: "Question 285",
      explanation: "",
    },
    {
      content:
        "A user at SFB Industries has reported that a Quote cannot sync with their Opportunity. What could this issue be a result of? (Select 2)",
      options: [
        "A. The Opportunity already has a quote synced to it",
        "B. The Quote has an inactive currency",
        "C. The user does not have access to the Quote object",
        "D. The Quote has an inactive or archived list price",
      ],
      answer: "D",
      title: "Question 286",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for al users? Choose\n2.",
      options: [
        "A. View all data.",
        "B. Customize Quotas",
        "C. View all Forecasts",
        "D. Manage Quotas",
        "E. Customize Forecasts",
        "F. Manage all data",
      ],
      answer: "C,D",
      title: "Question 287",
      explanation: "",
    },
    {
      content:
        "A user changes roles from an EMEA sales representative to a US sales representative.\nHow will this impact the ownership-based sharing rules for the user's records?",
      options: [
        "A. All of the ownership-based sharing rules are recalculated",
        "B. This will affect the ownership of records for standard objects but NOT custom objects",
        "C. This will only affect ownership-based sharing rules if the user moves up in the role hierarchy",
        "D. None of the ownership-based sharing rules are recalculated",
      ],
      answer: "A",
      title: "Question 288",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow community visitors to submit support cases without logging into the community.\nWhich two features are required to implement this request?\nChoose 2 answers",
      options: [
        "A. Caseassignment rules",
        "B. Case feed actions",
        "C. web-to-case",
        "D. New case quick action",
      ],
      answer: "C,D",
      title: "Question 289",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks needs to import a batch of person accounts into Salesforce.\nWhat tool should the administrator use?",
      options: [
        "A. Mass Update",
        "B. Data Import Wizard",
        "C. Bulk API",
        "D. Quick Create",
      ],
      answer: "B",
      title: "Question 290",
      explanation: "",
    },
    {
      content:
        "The security department at AW Computing wants to prevent users from exporting more data than they need. Included in this request is limiting records containing sensitive information, such as bank accounts and Personal Identifiable Information (PII).\nWhich feature should an administrator recommend to help limit what data is exported?",
      options: [
        "A. Salesforce Platform Encryption",
        "B. Muted Permission Sets",
        "C. Salesforce Shield",
        "D. Export Data Settings",
      ],
      answer: "C",
      title: "Question 291",
      explanation: "",
    },
    {
      content:
        "What sums up to the Manager on both the Collaborative and Customizable Forecasting?",
      options: [
        "A. Product Quantity",
        "B. Expected Revenue",
        "C. Quota Amount",
        "D. Opportunity Amount",
      ],
      answer: "D",
      title: "Question 292",
      explanation: "",
    },
    {
      content:
        "A job applicant object needs to be associated to Position object. Company wants that when a Position is deleted, all applicants should also be deleted. What type of relationship would this be?",
      options: [
        "A. Lookup",
        "B. Hierarchical",
        "C. Master-detail",
        "D. System information",
      ],
      answer: "C",
      title: "Question 293",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to ensure that when an opportunity stage is Closed Lost the reason is captured in a custom Reason Lost field before the record can be saved.Which approach can be taken to meet this requirement?",
      options: [
        "A. Create a trigger that requires Reason Lost to the populated once the opportunity stage is Closed Lost.",
        "B. Create a validation rule that requires Reason Lost to be populated once the opportunity stage is Closed Lost.",
        "C. Create a page layout for Closed Lost opportunities and make Reason Lost a required field.",
        "D. Create a workflow that fires on the Close Lost state and populates the Reason Lost field.",
      ],
      answer: "B",
      title: "Question 294",
      explanation: "",
    },
    {
      content:
        "What permission will you give a user without editing the profile itself?",
      options: [
        "A. Delegated administration",
        "B. Sharing rule",
        "C. Permission set",
        "D. Role hierarchy",
      ],
      answer: "A",
      title: "Question 295",
      explanation: "",
    },
    {
      content:
        "Customer wants to make sure that he is given a summary report on 4 regions weekly. How to achieve this ?",
      options: [
        "A. Analytical snapshot",
        "B. Create individual dashboards for each then sched them weekly",
        "C. Dynamic dashboard with filters given to them weekly",
        "D. Created dashboard with filters given to them weekly",
      ],
      answer: "D",
      title: "Question 296",
      explanation: "",
    },
    {
      content:
        "When an administrator enables customizable prebuilt entitlements, which three options are automatically created?\nChoose 3 answers",
      options: [
        "A. Three field updates",
        "B. One SLA process",
        "C. One escalation rulte",
        "D. One Warning Action",
        "E. Three milestone types",
      ],
      answer: "B,C,E",
      title: "Question 297",
      explanation: "",
    },
    {
      content:
        "Universal Container has NA, LATAM, EMEA and APAC regions. What is needed to resolve the issue on pricebook?",
      options: [
        "A. Create a separate pricebook for each region",
        "B. Add a different list price for products depending on the region",
        "C. Clone the standard pricebook and create separate pricebooks for each region.",
        "D. Modify the Standard Price Book",
      ],
      answer: "C",
      title: "Question 298",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for all users? Choose 2. * (1 Point)",
      options: [
        "A. View all Forecasts",
        "B. Customize Forecasts",
        "C. View all data.",
        "D. Manage all data",
        "E. Manage Quotas",
        "F. Customize Quotas",
      ],
      answer: "A,E",
      title: "Question 299",
      explanation: "",
    },
    {
      content:
        "When using Collaborative Forecasts, what information can a sales representative access from the Forecasts tab? Choose 2 answers",
      options: [
        "A. Forecast amount for each forecast category",
        "B. Forecast amount for other representatives on their team",
        "C. Opportunities that make up each forecast amount",
        "D. Forecast amount for each opportunity stage",
      ],
      answer: "A,B",
      title: "Question 300",
      explanation: "",
    },
    {
      content:
        "An administrator wants to pull data related to service contracts from Salesforce to store elsewhere on a monthly basis.\nWhich two ways can an administrator accomplish this? (Choose two.)",
      options: [
        'A. Use the "Object Export" feature under Data Management',
        'B. Configure the "Schedule Export" option under Data Export',
        "C. Use Data Loader to export the data each month",
        "D. Use Data Exporter to export the data each month",
      ],
      answer: "B,C",
      title: "Question 301",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers wants to improve data quality by ensuring that all accounts have a Billing State/Province based upon the Billing Postal Code for that account.\nWhich two solutions can meet the requirement? (Choose two.)",
      options: [
        "A. Use a validation rule to do an HLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "B. Use a trigger that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
        "C. Use a validation rule to do a VLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "D. Use a workflow that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
      ],
      answer: "B,C",
      title: "Question 302",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has a sneaker of the month product that is sold as an annual subscription at the price of $1, What type of product scheduling should the CK administrator set up to accurately capture that information?",
      options: [
        "A. Revenue Schedule Only",
        "B. Inbound Scheduling",
        "C. Quantity and Revenue Schedules.",
      ],
      answer: "C",
      title: "Question 303",
      explanation: "Quantity Schedule Only",
    },
    {
      content:
        "Noah wants a report that shows how many cases and closures for all of his subordinates at 6PM each day. How can you configure this?",
      options: [
        "A. Use a single dashboard and apply cross filters",
        "B. Use a single dashboard with an Analytic Snapshot",
        "C. Use a dynamic dashboard and specify each individual",
        "D. Use a dynamic dashboard for all subordinates",
      ],
      answer: "B",
      title: "Question 304",
      explanation: "",
    },
    {
      content:
        "Universal Containers categorizes its accounts with one of two status values - Prospect or Customer. The administrator wants to automatically change the value from Prospect to Customer when an opportunity is won. Which two actions should the administrator take to accomplish this?\nChoose 2 answers",
      options: [
        "A. Use an Apex trigger to update the Account Status field.",
        "B. Use Visualforce to update the Account Statusfield.",
        "C. Create an account workflow rule that updates the Account Status field.",
        "D. Create an opportunity workflow rule that updates the Account Status field.",
      ],
      answer: "A,D",
      title: "Question 305",
      explanation: "",
    },
    {
      content: "What can you do with Chat in Live Agent ? Choose 3",
      options: [
        "A. Escalate Case to Manager",
        "B. Transfer a session to another agent",
        "C. Chat with multiple users in one window",
        "D. Include information from an article in a chat response",
        "E. Use chatlets to view information about chatters",
      ],
      answer: "B,C,D",
      title: "Question 306",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers the ability to store PowerPoint files, PDFs, office documents, and any other type of file with no restriction on size or length. * (1 Point)",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 307",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has an email parsing tool. CK wants to ensure that when certain fields are updated, the Case Owner is notified by email.\nWhat should the administrator use to email the Case Owner?",
      options: [
        "A. Email-to-Case",
        "B. Outbound Message",
        "C. After Save Flow",
        "D. Before Save Flow",
      ],
      answer: "C",
      title: "Question 308",
      explanation: "",
    },
    {
      content:
        "An administrator is setting up Salesforce Knowledge and wants to implement an easy way for agents to create new articles from multiple objects.\nWhich two options could the administrator do to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Deploy a screen-based flow from the home page.",
        "B. Use the Service Setup Assistant to Configure Knowledge.",
        "C. Add the New Article global action to required page layouts.",
        "D. Create a custom quick action for each object.",
      ],
      answer: "C,D",
      title: "Question 309",
      explanation: "",
    },
    {
      content:
        "An Administrator has been asked to grant read, create and edit access to the product object for users who currently have the standard marketing user profile. How can this be accomplished? Choose 2 Answers",
      options: [
        "A. Change the access levels in the marketing user standard profile to read, create and edit for the product object",
        "B. Create a permission set with read, create and edit access for the product object and assign it to the marketing users",
        "C. Create a permission set with read and write access for the product object and assign it to the marketing users",
        "D. Create a new profile for the marketing users and change the access levels to read, create and edit for the product object",
      ],
      answer: "B,D",
      title: "Question 310",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like applicants to apply for multiple positions, tracking how many applicants have applied and how many positions each individual applicant has applied for. To do this, the Administrator will create a JobApplication junction object between the Applicant and Position objects. Why will this action meet the requirement?",
      options: [
        "A. The junction object allow the administrator to add a workflow rule to update fields on the Position and Applicant objects",
        "B. A lookup relationship on the Applicant object with Position as the master provides rollup summary fields without code",
        "C. The Job Application object as a master to Position and Applicant objects will allow roll up summary fields on the Position and Applicant objects",
        "D. The junction object allows a many to many relationship and also roll up summary fields on the parent objects",
      ],
      answer: "B",
      title: "Question 311",
      explanation: "",
    },
    {
      content:
        "Which Visual Workflows element would you add to a flow to create a new opportunity record?",
      options: [
        "A. Record Lookup",
        "B. Record Update",
        "C. Record Create",
        "D. Record Delete",
      ],
      answer: "C",
      title: "Question 312",
      explanation: "",
    },
    {
      content:
        "A user reports that a field can no longer be seen in a given page layout. What can a system administrator use in order to troubleshoot this? * (1 Point)",
      options: [
        "A. Perform a Field Audit",
        "B. View the Setup Audit Trail",
        "C. Use Field History Tracking",
        "D. View the system log",
      ],
      answer: "B",
      title: "Question 313",
      explanation: "",
    },
    {
      content:
        "What can an administrator do to enable customer-submitted service requests? Choose two answers.* (1 Point)",
      options: [
        "A. Enable case feed on the company website",
        "B. Enable the service cloud console on the company website",
        "C. Enable live agent on the company website",
        "D. Enable chatter answers",
      ],
      answer: "C,D",
      title: "Question 314",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track resources called Supply Items with a lookup to Accounts.\nThe Supply Items records should only be visible by users that own the Account records. What sharing setting provides the correct visibility?",
      options: [
        "A. Public Read/Write/Transfer",
        "B. Private",
        "C. Controlled by Parent",
        "D. Public Read Only",
      ],
      answer: "C",
      title: "Question 315",
      explanation: "",
    },
    {
      content:
        "Which two values rolls up the hierarchy to the manager for and Collaborative Forecasts? Choose\n2 answers.",
      options: [
        "A. Product quantity",
        "B. Opportunity amount",
        "C. Expected revenue",
        "D. Quota amount",
      ],
      answer: "B,C",
      title: "Question 316",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters requires the sales user to input a use case before moving the opportunity stage to qualified. A consultant has reviewed the business requirement and ran a report to check the state of data completion. When pulling a report for opportunities in the qualified stage or beyond, it appears that only 30% of records have a use case filled out with varying text strings.\nWhat should the administrator recommend?",
      options: [
        "A. Write a record-triggered flow that populates the Use Case field when an opportunity is closed.",
        "B. Make the Use Case field required on the master Opportunity layout.",
        "C. Create a validation rule and add the Use Case field to the Stage Guidance in Path.",
        "D. Use a quick action with the Use Case field in the layout, and add it as a Lightning component.",
      ],
      answer: "C",
      title: "Question 317",
      explanation: "",
    },
  ],
});