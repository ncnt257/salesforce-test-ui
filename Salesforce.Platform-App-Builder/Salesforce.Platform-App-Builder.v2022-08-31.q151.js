window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2022-08-31.q151",
  content: [
    {
      content:
        "A workflow has been written to update the 'Stage' field on opps. What will be the impact of this field update?",
      options: [
        "A. Both A&B",
        "B. Type fields on opp",
        "C. Forecast field on opp",
        "D. No Impact",
      ],
      answer: "A",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "A divisional manager wants to add a chart into a page layout Which report format can be used as the source report to accomplish this? Choose 2 answers.",
      options: [
        "A. Tabular format with a chart.",
        "B. Summary format with a chart.",
        "C. Matrix format with a chart.",
        "D. Joined format with a chart.",
      ],
      answer: "B,C",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Users at Cloud Kicks provided feedback that the time card custom page layout has too many fields on it, and some fields are only needed if other fields are entered.\nWhat should an app builder configure to help with this issue?",
      options: [
        "A. Lightning web components",
        "B. Dynamic forms",
        "C. Dependent picklists",
        "D. Separate page layouts",
      ],
      answer: "B",
      title: "Question 3",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Record page",
        "B. Related object",
        "C. Personal account",
        "D. Web to case",
      ],
      answer: "A,B,C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record.\nWhat solution should the app builder use to meet DreamHouse Realty's needs?",
      options: [
        "A. Lookup Object",
        "B. Text Area (Long)",
        "C. Master-Detail Child Object",
        "D. Multi-select Pickllst",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses the Asset object to track products that are installed at customer locations. A new object, Asset Inventory, has been created to capture details about the asset.\nWhich approach should the app builder take to show Asset Inventory as a related list on Asset?",
      options: [
        "A. Create a master-detail relationship on Asset to Asset Inventory Add the Asset Inventory related list to the Asset page layout.",
        "B. Create a lookup relationship on Asset Inventory to Asset. Add the Asset Inventory related list to the Asset page layout.",
        "C. Create a junction object to relate Asset Inventory and Asset. Add the Asset Inventory related list to the Asset page layout.",
        "D. Create a roll-up on Asset. Add the Asset Inventory related list to the Asset page layout.",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Contracts for agreements with customers. A sales manager is required to provide approval for contracts and director approval for any contract over $10,000.\nWhich two options should an app builder use to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved7 Choose 2 answers",
      options: [
        "A. Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed.",
        "B. Create an approval process on the Contract object with one step for each sales manager that sets the approver as the director.",
        "C. Create an approval process on the Contract object and set the field for 'Next Automated Approver Determined By' as Manager'.",
        "D. Create an approval process on the Contract object with criteria set on a second approval step set as 'Amount__c > 10,000' and set the approver as director.",
      ],
      answer: "B,C",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar is ramping up the sales team to meet increased demand. As part of the short ramp up for these new reps, the manager wants to provide a help guide to enable reps to easily get help where needed during the different sales processes.\nWhich solution should an app builder recommend?",
      options: [
        "A. Path",
        "B. Flow",
        "C. Journey Builder",
        "D. Chatter Publisher",
      ],
      answer: "A",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be out at each of the opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Set page layout required fields based on the current stage",
        "B. Define record type and page payouts for each stage",
        "C. Add the path component to the lightning record type",
        "D. Create a process builder to prompt the user for filed information",
      ],
      answer: "C",
      title: "Question 9",
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
        "Universal Containers wants the sales reps to clean up its Salesforce customer contacts using the Contacts tab.\nWhich two solutions can be used to support and simplify this process using a list view? Choose 2 answers",
      options: [
        "A. Add a chart to the list view to show the percentage of contacts that have already been cleaned up.",
        "B. Filter the list view by customer record type and enable inline edit functionality.",
        "C. Clone a master list view for each user on the team so they can view their customers.",
        'D. Make the list view dynamic so only "My Contacts are visible to the user',
      ],
      answer: "A,B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Use geolocation fields with Distance and Geolocation formulas",
        "B. Use an AppExchange partner product",
        "C. Configure routing options in a custom object",
        "D. Configure Territory hierarchy and rules for routes based on territory",
      ],
      answer: "B",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Universal container needs to update a field on an account when an opportunity stage is changed to close lost. What can be used to accomplish this requirement? Choose 2",
      options: [
        "A. Assignment Rules",
        "B. Workflow Rule",
        "C. Approval Process",
        "D. Lightning Process Builder",
      ],
      answer: "B,D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Which statement is true about converting a lead? Choose 3 answers",
      options: [
        "A. Multi-select picklist values on lead records overwrite values on the contact's corresponding field.",
        "B. The system automatically maps standard lead fields to standard account, contact, and opportunity fields.",
        "C. Administrators may choose whether to enforce validation rules & triggers",
        "D. Users can convert leads that are associated with an active approval process.",
        'E. The lead\'s most recent campaign record is automatically applied to the "PRIMARY campaign source" field on the opportunity',
      ],
      answer: "B,C,E",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "What is a section of the Lightning App Builder Tool? Choose 3 Answers",
      options: [
        "A. Selected Publisher Actions",
        "B. Mini Page Layout",
        "C. Components",
        "D. Mobile Cards",
        "E. Canvas",
      ],
      answer: "A,C,E",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to quickly insert a list of over 60,000 net new Accounts. The template based on CK's data model was used to populate the list.\nWhich tool should be used?",
      options: [
        "A. Import Wizard",
        "B. Schema Builder",
        "C. Data Loader",
        "D. A Lightning Object Creator",
      ],
      answer: "D",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "An app builder needs a custom solution and is considering using community. Ease of updates is the primary consideration.\nWhat should the app builder consider?",
      options: [
        "A. An unmanaged package from AppExchange",
        "B. An open-source unmanaged package",
        "C. A managed package from AppExchange",
        "D. An open-source custom development",
      ],
      answer: "C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "The VP of sales requested that Account Site Information should be visible on an Opportunity record. What is the recommended salutation to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Roll-Up Summary Field",
        "C. Cross-Object Formula Field",
        "D. Workflow Rule",
      ],
      answer: "C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated.\nWhat is recommended feature to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Visual Workflow",
        "C. Process Builder",
        "D. Lightning Connect",
      ],
      answer: "A",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Representatives at Cloud Kicks use Salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to the data warehouse with the Lead's information.\nWhich automation tool should an app builder use to meet this requirement?",
      options: [
        "A. Design an approval process that sends an outbound message.",
        "B. Use Lightning Flow to send an outbound message.",
        "C. Create a workflow rule with an outbound message as the action.",
        "D. Create a process using Process Builder to send an outbound message.",
      ],
      answer: "C",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this? Choose 3 answers",
      options: [
        "A. Currency",
        "B. Checkbox",
        "C. Percent",
        "D. Date",
        "E. Time",
      ],
      answer: "A,C,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Universal Containers has public Read-Write as the Account Org Wide Default (OWO) setting. visit form to the Universal Containers Customer Community report they can see all of Universal Containers' account records.\nHow should an app builder configure Account sharing so that Community users only see their own Account.",
      options: [
        "A. Define an Owner-based Sharing Rule for External Accounts.",
        "B. Define a Permission Set External Accounts.",
        "C. Create an Account record type for External Accounts.",
        "D. Set the Account External OWD to Private.",
      ],
      answer: "B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Managers at Universal Containers want a quick way to create additional accounts to form a hierarchy from a Parent Account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.\nWhat should the app builder recommend?",
      options: [
        "A. Add a custom link on Account",
        "B. Create a custom action",
        "C. Customize a Global Quick Action",
        "D. Add Path on Account hierarchy",
      ],
      answer: "B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Which rule can be configured for the Opportunity object? Choose 2 answers",
      options: [
        "A. Validation Rule",
        "B. Workflow Rule",
        "C. Assignment Rule",
        "D. Escalation Rule",
      ],
      answer: "A,B",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject called projects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by roles.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users by permission sets.",
      ],
      answer: "B,C",
      title: "Question 25",
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
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding master-detail relationships? Choose 3 answers",
      options: [
        "A. Master-detail relationships cannot be converted to a look-up relationship",
        "B. A master-detail relationship cannot be created if the custom object on the detail side already contains data",
        "C. Master-detail relationship can be convert to a lookup relationship if no roll-up summary fields exist on the master object",
        "D. Standard objects can be on the detail side of a custom object in a master-details relationship",
        "E. Deleting a master record in a master-detail relationship deletes all related detail records",
      ],
      answer: "B,C,E",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Roll-up-summary field",
        "B. Workflow",
        "C. Apex",
        "D. Formula Field",
      ],
      answer: "B",
      title: "Question 28",
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
      title: "Question 29",
      explanation:
        "https://help.salesforce.com/apex/HTViewHelpDoc?id=workflow_field_update_considerations.h tm&language=en",
    },
    {
      content:
        "Cloud Kicks received a new requirement to calculate summaries from child objects of a standard object. The team would prefer to solve this declaratively.\nWhat are two considerations an app builder should evaluate?\nChoose 2 answers",
      options: [
        "A. An app builder is unable to change a lookup to a master-detail relationship.",
        "B. An object can have up to two master-detail relationships.",
        "C. A value is required in all records of the lookup field prior to converting to a master-detail relationship.",
        "D. A trigger on save or update can kick off calculations.",
      ],
      answer: "A,B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead. What should an app builder configure to meet these requirements?",
      options: [
        "A. Create three sections on the lead layout and instruct users to collapse the non-relevant fields",
        "B. Create three lead record types each with its own page layout containing the relevant fields",
        "C. Create a partner community and a record type for web and trade show leads",
        "D. Create custom page payouts for each type of lead only containing the relevant fields",
      ],
      answer: "A",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "An App Builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality Is immediately available to users What should the App Builder rake Into consideration when planning the deployment?",
      options: [
        "A. Grant user access to the Flow.",
        "B. Verify there is an Apex test that provides test coverage for the Flow.",
        "C. Manually activate the Flow after deployment",
        "D. Include the Process Builder calling the Flow In the deployment",
      ],
      answer: "B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Universal containers created a custom object called component to capture details about products sold. what approach should an app builder take to show component as a related list on product?",
      options: [
        "A. Create a roll-up on product. Add the component related list to the product page layout.",
        "B. Create a lookup relationship on component to product . Add the component related list to the product page layout.",
        "C. Created junction object to relate component and product. Add the component related list to the product page layout.",
        "D. Create a master-detail- relationship on product to component. Add the component related list to the product page layout.",
      ],
      answer: "C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages leads in a Lead qualification queue where sales reps can accept ownership of the Lead. Campaign members are required to have a sales owner.\nWhat validation rule should an app builder configure?",
      options: [
        "A. NOT(ISNEW() && ISBLANK(Lead.Owner:Queue.Id))",
        "B. AND( ISBLANK(Lead.Owner.Id) )",
        "C. AND(ISNEW(), ISBLANK(Lead.Owner:User.Id))",
        "D. NOT( ISBLANK(Lead.Owner:Queue.Id))",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Universal Containers's app builder has been tasked with replacing workflow rules and Apex triggers with Process Builders where possible.\nWhat are two important considerations an app builder should know before the project is started?\nChoose 2 answers",
      options: [
        "A. Combine actions when possible.",
        "B. Avoid generating infinite loops.",
        "C. Create a process for each workflow rule.",
        "D. Apex has a different SOQL query limit than Flow.",
      ],
      answer: "A,B",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to convert the relationship between Galaxy and Star from a lookup relationship to a master-detail relationship so each Galaxy record can be equipped with a roll-up summary count of Star records.\nWhich two considerations should be made?\nChoose 2 answers",
      options: [
        "A. The Galaxy object has fewer than two existing master-detail relationships.",
        "B. The Galaxy object is required to contain existing roll-up summary fields.",
        "C. The Star records are all required to have an existing value in their Galaxy field.",
        "D. The Star object has fewer than two existing master-detail relationships.",
      ],
      answer: "C,D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "In a real estate app, if a listing is sold, all related inspections for the listing must be cancelled. What business logic feature best caters to this requirement? Choose 1 answer.",
      options: [
        "A. Use Visual Workflow to define a flow to iterate through the related inspection records and update the status to 'Cancelled'",
        "B. Use a trigger to update the status of the related inspection records when the listing status is updated",
        "C. Create a standard workflow on the Listing object with a workflow record update action on the related Inspection records",
        "D. Use Process Builder to define a process action to update related records based on the listing status change",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules occur after validation rules and thus override validation rules.",
        "B. Field Level Security prevents the validation rule from running.",
        "C. Workflow rules cannot trigger a validation rule",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Describe the ramifications of field updates and potential for recursion for the following scenario: If a field update for Rule1 triggers Rule2, and a field update for Rule2 triggers Rule1",
      options: [
        "A. The updates create a loop and the org be blocked until the admin resolves the issue",
        "B. The updates create a loop and the org limits for workflow time triggers per hour will likely be violated",
        "C. When the second trigger is saved a Imminent Loop Error message will be displayed and the workflow rule update will not save",
        "D. Loop is allowed to run 25 times within one hour. If it does not end on its own the process will be stopped by R&D",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Validation rule",
        "B. Workflow",
        "C. Approval process",
        "D. Lighting process builder",
      ],
      answer: "B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object. The App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Account is included in the workflow on the Invoice object.",
        "B. The Invoice records have existing values in the Account.",
        "C. The Account record includes Invoice roll-up summary fields.",
        "D. The invoice must have at least one Master-Detail field for reporting.",
      ],
      answer: "C",
      title: "Question 41",
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
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "An app builder is creating a custom object called Testimonial__c and wants to connect Testimonial__c records with both the submitter's Contact record and Account record. If the Account is deleted, the Testimonial__c should also be deleted. If the Contact is deleted, but the Account remains, the Testimonial__c should remain.\nHow should this be accomplished?",
      options: [
        "A. Create a lookup relationship from Testimonial__c to Account and a master-detail relationship from Testimonial__c to Contact.",
        "B. Make both the Contact and Account fields required on the Testimonial__c object and create lookup relationships from Testimonial__c to Contact and to Account.",
        "C. Create a master-detail relationship from Testimonial__c to Account and a lookup relationship from Testimonial__c to Contact.",
        "D. Make Testimonial__c a junction object between Account and Contact using master-detail relationships.",
      ],
      answer: "C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system.\nWhich two details should the app builder know when using external ID fields?\nChoose 2 answers",
      options: [
        "A. An external ID field can be a number field.",
        "B. An external ID field can be a URL field.",
        "C. An external ID field can be a text field.",
        "D. An external ID field can be a phone field.",
      ],
      answer: "A,C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two types of applicants, hourly and salary. There are separate record types for each. While all members of the human resource department need to be able to view all applicant records, only the hiring Manager and VP of HR should be able to create salary applicant records.\nWhat should the app builder recommend to meet this requirement?",
      options: [
        "A. Create a permission set containing the salary record type and assign it to the appropriate users.",
        "B. Update the org-wide default to private and create a sharing rule for the role of recruiting manager.",
        'C. Remove "create" permission for the salary applicant object for everyone except the manager and VP.',
        "D. Configure the hourly record type as the default and instruct non-management users to accept the default record type.",
      ],
      answer: "A",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Which statement is true when using record types to control picklist value. (Select 2)",
      options: [
        "A. If a picklist value is removed from the master, then it is no longer available when records assigned to that value are unchanged",
        "B. If values are added to the Opportunity Stage, Case Status, and Lead Status fields, then the values must be manually adjusted for each record type",
        "C. If a picklist value is added to the master picklist, then the new value must be manually included in the appropriate record types",
        "D. If a record type is renamed, then the list of values included in that record type are also changed to newly renamed record types",
      ],
      answer: "A,C",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Crossobject",
        "B. Master-Detail",
        "C. Lookup",
        "D. Junction",
      ],
      answer: "B",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "What salesforce functionality is ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Multiple Currencies",
        "B. Validation Rules",
        "C. Record Type Picklist Value Assignments",
        "D. Field Level Security",
        "E. Decimal Places and Character Limits",
      ],
      answer: "B,C,D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "When an opportunity is closed date is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process.\nHow can an app builder ensure that these opportunities are submitted into the approval process?",
      options: [
        "A. Change the entry criteria on the approval process to criteria are met and lock the record on initial submission.",
        'B. Give the manager the "API Enabled" permission to permit approval responses by email.',
        "C. Submit the record for approval from an automated process.",
        "D. Use a validation rule and an email alert to the manager requesting approval.",
      ],
      answer: "C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
      options: [
        "A. Roll-up summary field",
        "B. Formula field",
        "C. Workflow",
        "D. Apex",
      ],
      answer: "C",
      title: "Question 50",
      explanation: "",
    },
    {
      content: "What is true about social accounts, contacts, and leads?",
      options: [
        "A. The social feature automatically imports the social profile for a lead or contact in salesforce if the user is connected with the lead or contact on the social network",
        "B. The social feature displays the social profile for a Lead or Contact even if the user is not connected with the Lead or Contact on the Social network",
        "C. To use Social Accounts, Contacts and lead feature, a separate feature license must be assigned to the user in salesforce",
        "D. To use Social Accounts, Contacts and lead feature, users need to have a personal social network accounts for the social network they would like to view",
      ],
      answer: "D",
      title: "Question 51",
      explanation: "",
    },
    {
      content: "Which statement about record types is true? (Select 2)",
      options: [
        "A. Record types can only be assigned to one profile at a time",
        "B. Users cannot view records assigned to a record type their profile does not have access to",
        "C. The ability to create records of a specific record type is determined by the profile",
        "D. Record types can be used to define picklist values available for a given field",
      ],
      answer: "C,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "The app builder at Ursa Major Solar has just created a master-detail relationship between a parent object Galaxy__c and child object Star__c.\nWhat would be the effect of creating this type of relationship if users want to report on Galaxy__c with Star__c?",
      options: [
        "A. A new custom report type will need to be created for Star__c with lookup fields from Galaxy__c.",
        "B. A Star__c report type with Galaxy__c as a field will be automatically created.",
        "C. A new custom report type will need to be created for Galaxy__c with Star__c.",
        "D. A Galaxy__c with Star__c report type will be automatically created.",
      ],
      answer: "C",
      title: "Question 53",
      explanation: "",
    },
    {
      content: "When do you refresh a Sandbox?",
      options: [
        "A. Option 4",
        "B. When a Production user is added",
        "C. After a major update",
        "D. Before UAT",
      ],
      answer: "D",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "An app builder is tasked with adding key performance indicators on client pages. They want to see a summary of the number of open Opportunities and the number of won Opportunities for each Account.\nWhere should the app builder go to build these new rollups?",
      options: [
        "A. Lightning App Builder",
        "B. Lightning Object Creator",
        "C. Opportunity Object",
        "D. Account Object",
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Stage",
        "B. Lead Source",
        "C. Forecast Category",
        "D. Type",
      ],
      answer: "B,D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
      options: [
        "A. Use a workflow rule and an outbound message",
        "B. Use a flow and an outbound message",
        "C. Use a process and an outbound message",
        "D. Use a process and Apex Code",
      ],
      answer: "A,D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) switched to Lightning Experience and started using Chatter across its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with gathering feedback from core team members, including understanding who is available to respond.\nWhich two ways could CK use Chatter to solve this problem?\nChoose 2 answers",
      options: ["A. Topics", "B. Polls", "C. Out of Office", "D. Streams"],
      answer: "B,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission.\nWhich three action types should an app builder use in the approval process?\nChoose 3 answers",
      options: [
        "A. Invocable Process Builder",
        "B. Outbound Message",
        "C. Invocable Flow",
        "D. Email Alert",
        "E. Task",
      ],
      answer: "B,D,E",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days since an account was last contacted through email. Which field type should be used to accomplish this?",
      options: ["A. Formula", "B. Roll-up Summary", "C. Number", "D. Date"],
      answer: "A",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) has a custom Invoice object and a custom Invoice Line Item object. TTie Invoice Line Item object has a lookup relationship to the Invoice. UC would like to convert the lookup relationship to a master-detail relationship but is unable to do so.\nWhich two reasons could be preventing this relationship conversion?\nChoose 2 answers",
      options: [
        "A. Invoice Line Item records exist without having the Invoice lookup field populated.",
        "B. There is a roll-up summary field on the Invoice object.",
        "C. There are already two master-detail relationships on the Invoice Line Item.",
        "D. Custom objects are unable to be on the detail side of a master-detail relationship.",
      ],
      answer: "A,C",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
        "B. The global marketing public group and anyone above the owner in the role hierarchy",
        "C. The record owner and anyone above the owner in the role hierarchy",
        "D. The record owner and the global marketing public group.",
      ],
      answer: "D",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once it is created.\nOn the gift card object, what type of field should be created to support this requirement?",
      options: [
        "A. Formula",
        "B. Master-detail relationship",
        "C. Roll-up summary",
        "D. Lookup relationship",
      ],
      answer: "B",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "What are the recommendations for unmanaged packages? (Choose 2)",
      options: [
        "A. For sale in App Ex",
        "B. Should be deployed from Dev Edition",
        "C. For move to production",
        "D. For open source",
      ],
      answer: "B,D",
      title: "Question 64",
      explanation: "",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On the User Object",
        "B. On the Custom List View",
        "C. On a related list",
        "D. On a Person Account",
        "E. On a Web-to-Case form",
      ],
      answer: "B,C,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to update a field on an Account when an Opportunity Stage is changed to Closed Lost. What tools can we use to accomplish this requirement? (Choose 2)",
      options: [
        "A. Lightning Process Builder",
        "B. Assignment Rule",
        "C. Approval Process",
        "D. Workflow Rule",
      ],
      answer: "A,D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "An app builder wants to update a field on the parent record when a child record connected via lookup is deleted.\nWhat automation should the app builder use?",
      options: [
        "A. Process Builder",
        "B. Screen flow",
        "C. Workflow rule",
        "D. Apex code",
      ],
      answer: "D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "The VP of account management at Universal Containers has requested that all contacts mailing postal codes match the associated accounts shipping postal code. How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using a compare operator",
        "B. Create a validation rule using the distance() function",
        "C. Create a validation rule using a not equal operator",
        "D. Create a validation rule using the geolocation() function",
      ],
      answer: "C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a report chart that has been added to page Layout?",
      options: [
        "A. Matching ID field",
        "B. Formula field",
        "C. Name field",
        "D. Standard field",
      ],
      answer: "A",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "What metadata changes can be made directly in a production environment without deploying from sandbox? Choose 2 answers",
      options: [
        "A. Apex Triggers",
        "B. Validation Rules",
        "C. Visualforce Pages",
        "D. Apex Classes",
      ],
      answer: "B,C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks's management team frequently travels and wants to approve requests from their team on the go via Chatter.\nWhere would an app builder enable this ability?",
      options: [
        "A. Chatter Settings",
        "B. Object Settings",
        "C. Approval Process Settings",
        "D. Chatter Feed Tracking",
      ],
      answer: "A",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets.\nWhat is the settings for the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default off for all users.",
        "B. Custom tabs are default on for all uses.",
        "C. Custom tabs are hidden for all users.",
        "D. Custom tabs are NOT deployed.",
      ],
      answer: "A",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox?",
      options: [
        "A. Validation rules",
        "B. Apex classes",
        "C. Apex triggers",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check the report folder sharing settings",
        "B. Check organization-wide defaults",
        "C. Check the user's profile for object settings.",
        "D. Check Sharing rules",
        "E. Check reports filter",
      ],
      answer: "B,C,D",
      title: "Question 74",
      explanation: "",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Contact", "B. Account", "C. Opportunity", "D. Lead"],
      answer: "A,D",
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
        "https://developer.salesforce.com/docs/atlas.enus.salesforce1appadmin.meta/salesforce1appadmin/s1_admin_guide_actions_predef_values.ht m https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_sf1_rollout_overview.htm&la nguage=en_US",
    },
    {
      content:
        "UVC uses a custom object to track expense reports. They would like to automatically post updates in a record's feed whenever an expense report has been approved. Which social feature can be used to accomplish this?",
      options: [
        "A. Feed Quick Action",
        "B. Auto-response rule",
        "C. Approval Process",
        "D. Feed Tracking",
      ],
      answer: "D",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar's sales team has been struggling to enter data on mobile since rollout; the team dislikes scrolling through all of the fields to input only the necessary data.\nHow could the app builder solve this with minimal impact to desktop users?",
      options: [
        "A. Update the training documentation with better screenshots.",
        "B. Filter components by device using Form Factor.",
        "C. Reorder the fields to make sense for the reps when in the field.",
        "D. Deselect the phone radio button on the Lightning record page assignment.",
      ],
      answer: "C",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Universal containers requires that all users specify a contract is sent on each opportunity prior to marking it as closed won. uc wants to be able to report on how many opportunities have sent contracts compared to how many have a missing contract when the opportunities closed. what type of field should an app builder configure to fulfill this requirement ?",
      options: ["A. Picklist", "B. Text", "C. Text Area", "D. Checkbox"],
      answer: "D",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to managing access to reports and dashboards? Choose 2 answers",
      options: [
        'A. Users with the "Manage Public Reports" permission can organize reports by creating custom report folders and sending invitations to users to access them.',
        "B. Users must have certain permissions to access public, hidden, or shared folder.",
        'C. Users with the "Manage Public Reports" and "Create and Customize Reports" permissions can create custom reports that all users can view.',
        "D. Users that want to grant access to personal folders can manually share a personal folder with a user or public group.",
      ],
      answer: "A,C",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "The customer service team at Universal containers uses a custom Project object to track their customer projects. An App builder needs to create a relationship between the project object and the related client Account record. A private sharing model is in place for both Accounts and projects. Which statement is true when creating an Account lookup field on the Project object? Choose 2 answers",
      options: [
        "A. The account record can include roll-up summary field with data from the project records",
        "B. Cross-object field updates between the Project and Account records are not supported",
        "C. Users can only delete Accounts if they have access to related projects records",
        "D. The account lookup field on the project record can be made optional.",
      ],
      answer: "C,D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Which statement is true when defining a Create custom action for the Contact object? Choose 2 answers",
      options: [
        "A. The create action can pre-define Contact field values",
        "B. The create action will respect validation rules",
        "C. The create action will ignore field requirements",
        "D. The create action allows a user to select a record type",
      ],
      answer: "B,D",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) employees started using company-owned airplanes for work travel after Ursa Major Solar was acquired. DR executives want to automate the submission travel request forms to enforce the Internal policy.\nHow should an app builder automate travel requests based on these criteria?",
      options: [
        "A. Workflow rule",
        "B. Approval process",
        "C. Process Builder",
        "D. Apex",
      ],
      answer: "B",
      title: "Question 83",
      explanation: "",
    },
    {
      content: "Identify the standard Lightning components. (Choose 3 answers)",
      options: [
        "A. Rich Text",
        "B. Reports",
        "C. Dashboards",
        "D. List View",
        "E. Visualforce Page",
      ],
      answer: "A,D,E",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use record types with field sets and restrict editing fields using field-level security",
        "C. Use multiple record types, page layouts, and profiles",
        "D. Use field-level security to mark fields as read-only on the sales profile",
      ],
      answer: "A",
      title: "Question 85",
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
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 87",
      explanation:
        "You can have two report charts per page.\n You can only add report charts from the enhanced page layout editor. The mini console and the original page layout editor are not supported.\n On detail pages, users can refresh up to 100 report charts every 60 minutes.\n Your organization can refresh up to 3,000 report charts every 60 minutes.\n https://help.salesforce.com/HTViewHelpDoc?id=reports_embed_limits.htm&language=en_US",
    },
    {
      content:
        "Cloud Kicks is redefining its entire business process to convert the Manager Notes field from a long text area field. The goal is to encourage managers to be more concise in their comments and stay at 255 characters or less. There is preexisting information in the Manager Notes field that often is well beyond the character limit.\nWhat would happen to any existing information if the app builder tries to convert a preexisting long text area field to text area?",
      options: [
        "A. Preexisting information will cause a- e-r0- -essace to poo up.",
        "B. Preexisting information will truncate to the first 255 characters.",
        "C. Preexisting information in the field will be completely lost.",
        "D. Preexisting information will remain even if it was over 255 characters.",
      ],
      answer: "B",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Universal containers (uc) wants to delete data in several fields for 5000 lead records. UC export the selected record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements ? Choose 2 answers",
      options: [
        "A. Select the correct record type",
        "B. Use import Wizard to update leads using the CSV file",
        "C. Use Data Loader to update leads using the CSV file",
        "D. Select insert null values in settings.",
      ],
      answer: "C,D",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding actions in the Salesforce1 action bar section.",
        "B. By adding Visualforce page to the mobile cards section",
        "C. By adding a mobile layout and assigning it to a profile.",
        "D. By adding quick actions in the publisher section.",
      ],
      answer: "B,C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "B. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
        "C. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "D. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
      ],
      answer: "C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding case assignment rules? (Choose 3 answers)",
      options: [
        "A. A predefined Case Team is mandatory for each rule entry",
        "B. They allow for more than one active rule at the same time",
        "C. They allow cases to be assigned to a queue",
        "D. Salesforce processes case assignment rules before workflow rules",
        "E. They allow for more than one rule entry for each assignment rule",
      ],
      answer: "A,C,E",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "Universal Containers provide access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when user login, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Create separate home page custom components and layouts; assign to user by role.",
        "B. Create separate home page custom components and layouts; assign to user by profile.",
        "C. Expose specific elements within a home page custom component determined by role.",
        "D. Expose specific elements within a home page custom component determined by profile.",
      ],
      answer: "B",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a contact's \"preferred contact method\" directly on the contact record. users need to be able to identify whether a phone number or an email, is the contact's preferred communication method. Which field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Picklist", "B. Email", "C. Checkboxes", "D. Formula"],
      answer: "A",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "The developer at Universal Containers wants to test code in a sandbox environment. In order to ensure the code works properly, the sandbox needs to have at least half a gigabyte of dat a. The sandbox will need to be refreshed after each three-day sprint.\nWhat type of sandbox should the App Builder provision to the developer?",
      options: [
        "A. Partial Data",
        "B. Full Copy",
        "C. Developer",
        "D. Developer Pro",
      ],
      answer: "D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "What determines whether a user can create a new record using a specific record type?",
      options: [
        "A. Field level security",
        "B. Page Layout",
        "C. Profile",
        "D. Sharing",
      ],
      answer: "C",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "A new field has been added to the Applicant object that is part of an unmanaged package. A recruiter ran the Position with or without Applicants report and noticed that the new field was missing as an option to add as a column.\nHow should an app builder troubleshoot this issue?",
      options: [
        "A. Add the field to the custom report type field layout.",
        "B. Adjust the field level security to include in the report type.",
        "C. Update the profile with the Manage Public Reports permission.",
        "D. Check Allow Reports for the position and applicant objects.",
      ],
      answer: "A",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about an External ID field? Choose 2 answers",
      options: [
        "A. The field must contain at least one number and at least one letter.",
        "B. The field can be unique based on case-sensitive or case-insensitive values.",
        "C. The field can be used to contain unique record identifiers from a system outside of Salesforce.",
        "D. The field must be unique since duplicates are NOT allowed within Salesforce.",
      ],
      answer: "B,C",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "universal containers has several large customers that sell their products through dealers. Each customer and dealer has an individual rep who works directly with uc and each is billed separately. How can an app builder implement these requirements?",
      options: [
        "A. Create a single account record, add each rep as a contact and create a custom dealer object",
        "B. Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record",
        "C. Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy.",
        "D. Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.",
      ],
      answer: "C",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "The app builder needs to change the data types of new custom fields. The app builder is not able to delete and recreate any of the fields, nor modify any apex code. Which data type change will require the app builder to perform the additional steps in order to retain existing functionalities?",
      options: [
        "A. Changing the data type of a field used in an apex class from number to text.",
        "B. Changing the data type of a field used in a report from a text to an encrypted field",
        "C. Changing the data type of a field used as an external id from number to text.",
        "D. Changing the data type of a field used in lead conversion from number to text",
      ],
      answer: "C",
      title: "Question 100",
      explanation:
        "If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. If you change the data type of a custom field that is set as an external ID, choosing a data type other than text, number, or email will cause the field to no longer act as an external ID.\n The option to change the data type of a custom field is not available for all data types. For example, existing custom fields cannot be converted into encrypted fields nor can encrypted fields be converted into another data type.\n https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types. htm&language=en",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      options: [
        "A. Custom Action",
        "B. Custom Button",
        "C. Custom URL formula field",
        "D. Custom quick access link",
      ],
      answer: "A",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to track orders against inventory, ensuring its ability to fulfill order requests. CK created a junction object called Request Inventory to enable many-to-many relationships with the Inventory and Order objects.\nWhat does the app builder need to provide to ensure users can view Request Inventory records?",
      options: [
        "A. Read access to both master objects.",
        "B. Read access to the first master object.",
        "C. Sharing rules on Request Inventory object.",
        "D. Apex-based sharing on the first master object.",
      ],
      answer: "A",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Number",
        "B. Percent",
        "C. Currency",
        "D. Formula",
        "E. Date",
      ],
      answer: "A,B,C",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to provide sales console users with an Incredible experience, with the most-used components easily accessible at all times.\nWhat solution can enable reps to see and access these components from anywhere within the app without leaving the pagere where the team is working?",
      options: [
        "A. Favorites",
        "B. Home page",
        "C. Global actions",
        "D. Utility bar",
      ],
      answer: "D",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) has a policy that requires the phone number on Contact to be deleted when the DoNotCall checkbox is checked.\nWhat automation tool should the app builder recommend?",
      options: [
        "A. Validation rule",
        "B. Workflow rule",
        "C. Approval process",
        "D. Quick action",
      ],
      answer: "A",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when processing field updates in workflow rules and approval processes?",
      options: [
        "A. Validation Rules",
        "B. Multiple currencies",
        "C. Decimal places and character limits",
        "D. Record type picklist value assignments",
        "E. Field-Level Security",
      ],
      answer: "B,C,D",
      title: "Question 106",
      explanation: "",
    },
    {
      content: "Which two are a capability of record types? Choose two answers",
      options: [
        "A. Filtering picklist values",
        "B. Displaying different field labels",
        "C. Displaying different page layouts",
        "D. Having multiple record types on the record",
      ],
      answer: "A,C",
      title: "Question 107",
      explanation: "",
    },
    {
      content: "What is true regarding compact layouts? Choose 2 answers.",
      options: [
        "A. Compact layouts can be assigned to different record types",
        "B. Compact layouts must be configured for fields to be displayed in the record header",
        "C. Compact layouts support all field types",
        "D. If a user doesn't have access to a field it won't be displayed",
      ],
      answer: "A,D",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to rollout new product bundles with several pricing options. Pricing options include product-price bundles, account specific pricing and more. Which product satisfies the needs?",
      options: [
        "A. Formula fields on Opportunity/Opportunity Product",
        "B. Workflow on Opportunity/Opportunity Product",
        "C. Custom AppExchange-app for product-pricing",
        "D. Lightning process builder",
      ],
      answer: "A,B,D",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "B. Standard buttons can be overridden with a Visualforce page",
        "C. Standard buttons that are not available for overrides can still be hidden on page layouts",
        "D. Standard buttons can be overridden, relocated on the detail page, and relabeled",
      ],
      answer: "B,C",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "An app builder wants to create a formula field on an Account to include data from related Contacts but is unable to find the relationship in the formula editor.\nWhat is a limitation of formulas that could be causing the issue?",
      options: [
        "A. Unable to reference the child records.",
        "B. Formula field limit reached on the Account object.",
        "C. A master-detail relationship should be created.",
        "D. More than 5,000 characters in the formula.",
      ],
      answer: "B",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
      options: [
        "A. Approval Process with Time-Dependent Workflow action.",
        "B. Two-step Approval Process.",
        "C. Process Builder with Submit for Approval action.",
        "D. Approval Process with a triggered Flow process.",
      ],
      answer: "B",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements?",
      options: [
        "A. Custom button, validation rule, record types",
        "B. Process builder field update, quick action, record type",
        "C. Page layout, record types, process builder field update",
        "D. Picklist dependency, page layouts, record types",
      ],
      answer: "D",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "Which three field types should be referenced by a roll-up summary field using SUM? Choose 3 answers",
      options: [
        "A. Percent",
        "B. Formula",
        "C. Date",
        "D. Number",
        "E. Currency",
      ],
      answer: "A,D,E",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are also unique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
        "B. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
        "C. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
        "D. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
      ],
      answer: "C",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has a sales rep who is stating that their Contact is unavailable for other users to see within Salesforce.\nIn which three ways can an app builder troubleshoot this issue?\nChoose 3 answers",
      options: [
        "A. Verify the users with the issue have access to the Contact object.",
        "B. Review the Contact record and ensure it is linked to an Account.",
        "C. Confirm whether Default Organization-Wide Sharing Settings provide access to the Account.",
        "D. Create a new Contact and have the users try again.",
        "E. Create an Account Sharing Rule to give the users access to all records.",
      ],
      answer: "A,B,C",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "A new custom object called Invoices need to have an invoice date for the date and time itwas invoiced.\nWhich field type should be selected for this?",
      options: ["A. Time", "B. Date", "C. Date/Timestamp", "D. Date/Time"],
      answer: "D",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should a app builder look at so address this?",
      options: [
        "A. Workflows on other objects that are being re triggered",
        "B. Workflows that cause each other to fire back and forth recursively",
        "C. Talk to a developer about apex code issues",
        "D. Number of workflows per object limits",
      ],
      answer: "B",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "On the Account Lightning record page, users need to see ten fields and the ability to sort and wrap text on their Related Lists.\nWhat Related List type would the app builder select for the Related List Lightning component?",
      options: [
        "A. Enhanced List",
        "B. Basic List",
        "C. List Class",
        "D. ListVlew",
      ],
      answer: "A",
      title: "Question 119",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes? Choose 2 answers.",
      options: [
        "A. Update the PTO record field with the user's manager.",
        "B. Require the CFO to review the salary range for all job offers.",
        "C. Ensure an opportunity that has at least one product added.",
        "D. Approve expense reports automatically when less than $50.",
      ],
      answer: "B,D",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers create multiple quotes per opportunity.\nWhat automation tool should an app builder recommend to delete rejected quotes?",
      options: [
        "A. Flow",
        "B. Validation rule",
        "C. Approval process",
        "D. Workflow rule",
      ],
      answer: "A",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, each admin and developer use a separate developer pro sandbox. Configuration and code are then migrated to a partial data sandbox for combination and initial testing. Once approved the configuration and code are then migrated to a full sandbox for final toad and regression testing before going to production.\nWhen should the full sandbox be refreshed?",
      options: [
        "A. After user acceptance testing is complete.",
        "B. After a new user is added to production.",
        "C. After each major release to production.",
        "D. After each push from the partial data sandbox.",
      ],
      answer: "D",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to begin socializing and collaborating within Salesforce around customer accounts to discuss various topics. CK would like all company employees to see these conversations.\nWhich two features of Chatter would meet CK's business needs?\nChoose 2 answers",
      options: [
        "A. Use Chatter actions to create tasks to complete.",
        "B. Use post action on the Account object.",
        "C. Set up new private Chatter groups.",
        "D. Set up new public Chatter groups.",
      ],
      answer: "B,D",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "Which statements are true regarding Roll-Up Summary fields? (select all thatapply)",
      options: [
        "A. Once created, you cannot change the detail object selected or delete any field referenced in your roll-up summary definition.",
        "B. Because roll-up summary fields are not displayed on edit pages, you can use them in validation rules.",
        "C. Validation errors can display when saving either the detail or master record.",
        "D. Advanced currency management has no affect on roll-up summary fields.",
      ],
      answer: "A,B,C",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        "An app builder is preparing to deploy a new app from the sandbox to production using change sets.\nWhat two considerations should an app builder keep in mind during this process?\nChoose 2 answers",
      options: [
        "A. Salesforce Connect automatically establishes a link between environments.",
        "B. Users should be logged out of production when receiving inbound change sets.",
        "C. Transactions will revert if the deployment errors.",
        "D. Change sets do not include all components and may have to perform some changes manually.",
      ],
      answer: "C,D",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom picklist field Account Region on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account.\nHow should an app builder meet this requirement?",
      options: [
        "A. Create a text field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "B. Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c).",
        "C. Create a picklist field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "D. Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c).",
      ],
      answer: "B",
      title: "Question 126",
      explanation: "",
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
      title: "Question 127",
      explanation:
        "Check out the following link: MassMailer App Link on AppExchange https://appexchange.salesforce.com/listingDetail?listingId=a0N30000005uxj5EAA",
    },
    {
      content:
        "An app builder has modified a Lightning record page for a case and has added an email button item to the page layout; however, users are unable to see the new item on the layout.\nWhat are two potential reasons why users are unable to view the item on the Case Lightning record page?\nChoose 2 answers",
      options: [
        "A. The case page layout also contains custom buttons.",
        "B. The email button contains JavaScript.",
        "C. The page layout excludes the case feed component.",
        "D. The page layout includes the case feed component.",
      ],
      answer: "B,C",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "UV has a customer base where many customers have the same or similar company names.",
      options: [
        "A. Update the account search layout list view filter settings.",
        "B. Update the account search layout search results columns displayed.",
        "C. Update the account search layout search filter fields.",
        "D. Update the account search layout accounts tab columns displayed.",
      ],
      answer: "A",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "UVC wants their Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce. How can this be accomplished?",
      options: [
        'A. Set the OWD to Private for all accounts. Create Criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team Profile with the "View All" setting for accounts',
        'B. Set the OWD to Public for all accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" settings for accounts',
        'C. Set the OWD to Private for accounts. Create permission sets for each Marketing team, and create an Inside Sales team profile with the "View All" setting for accounts',
        "D. Set the OWD to Public for accounts. Create profiles for each Marketing team, and create an Inside Sales Team role that is at the top of the Role Hierarchy",
      ],
      answer: "A",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) has created a picklist field called Status on three separate custom objects. UC has a requirement to share the list of values for this field across each object.\nWhich feature would an app builder use?",
      options: [
        "A. Dynamic Action",
        "B. Global Picklist Value Set",
        "C. Field Update",
        "D. Dependent Picklist",
      ],
      answer: "B",
      title: "Question 131",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director. How can this be configured? Choose 1 answer.",
      options: [
        "A. Use manager sharing to enable sharing with the employee's manager and HR director",
        "B. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
        "C. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
        "D. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
      ],
      answer: "D",
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "An app builder wants to create a report to compare the number of support cases in each status (New, In-progress, or Closed) and by priority (Critical, High, Medium, or Low).\nWhat solution should be used for the report?",
      options: [
        "A. Grouping",
        "B. Bucket Columns",
        "C. Filters",
        "D. Custom Report Type",
      ],
      answer: "B",
      title: "Question 133",
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
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "When an opportunity close date is delayed by more than 60 days, the manager and the VP sales must approve the change. How can this requirement be met? Choose 2 answers",
      options: [
        "A. Build an approval process that requires unanimous approval from the manager and VP of sales.",
        "B. Create a lightning process builder flow that submits the record for an approval process",
        "C. Create a workflow rule that checks for close date less that 60 days and add an email alert.",
        "D. Build a validation rule that does not allow a user to save the opportunity record.",
      ],
      answer: "A,B",
      title: "Question 135",
      explanation: "",
    },
    {
      content:
        "Which statement is true when a new full sandbox is created? Choose 2 answers",
      options: [
        "A. Usernames will be modified uniquely for that sandbox",
        "B. User's email addresses will not be modified.",
        "C. Default email deliverability is set to system email only",
        "D. Chatter data will be copied to the sandbox by default",
      ],
      answer: "B,C",
      title: "Question 136",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are re-evaluated after a field change by a field update? Choose 2 answers",
      options: [
        "A. Workflow rules trigger more workflow rules to be re-evaluated.",
        "B. A recursive loop potentially results in exceeding organizational limits.",
        "C. Cross-object workflow rules result in re-evaluation after field change.",
        "D. Workflow rules trigger validation rules on field updates",
      ],
      answer: "A,B",
      title: "Question 137",
      explanation: "",
    },
    {
      content: "When should Unmanaged packages be created? Choose 2 answers",
      options: [
        "A. Distributing open-source projects on AppExchange",
        "B. Migrating of components from sandbox to production",
        "C. Deploying from a Developer Edition environment.",
        "D. Publishing an application for sale on the AppExchange.",
      ],
      answer: "A,C",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "Invoices in SAP need to be reviewed from Salesforce Account object Home. (Select 2)",
      options: [
        "A. Data Loader",
        "B. From SAP config",
        "C. External object",
        "D. O-DATA",
      ],
      answer: "C,D",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers and acquisitions team to collaborate on potential new projects. This project should not be visible for non-members to see or join, and can be accessed by invites only.",
      options: [
        "A. Member group",
        "B. Private group",
        "C. Unlisted group",
        "D. Public group",
      ],
      answer: "C",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "For which report types custom summary formulas are available? (Choose 3)",
      options: ["A. Tabular", "B. Matrix", "C. Summary", "D. Joined"],
      answer: "B,C,D",
      title: "Question 141",
      explanation: "",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "B. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
        "C. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
        "D. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
      ],
      answer: "A",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        "UVC needs to flag leads with one or more business areas. They need to add a field to capture these to the Lead Record. There is no need to report on this field. What is the appropriate field type?",
      options: [
        "A. Picklist (Multi-Select)",
        "B. Radio Buttons (Multi-select)",
        "C. Picklist",
        "D. Text Area",
      ],
      answer: "A",
      title: "Question 143",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment.\nHow can this be accomplished?",
      options: [
        "A. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments.",
        "B. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
        "C. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
        "D. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
      ],
      answer: "B",
      title: "Question 144",
      explanation: "",
    },
    {
      content: "Person Accounts Choose 2 answers",
      options: [
        "A. Are enabled by default",
        "B. Have the same icon as Business accounts",
        "C. Are enabled via feature license",
        "D. Do use space in both account and contacts table",
        "E. Can only be merged with other person accounts",
      ],
      answer: "D,E",
      title: "Question 145",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants a Chatter post to the All Sales private group when an Opportunity goes to the closed won stage.\nWhat two tools should the app builder use to automate this process?\nChoose 2 answers",
      options: [
        "A. Workflow",
        "B. Flow",
        "C. Big Deal Alert",
        "D. Process Builder",
      ],
      answer: "B,D",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to use a chatter group for their mergers and acquisition team to collaborate on potential new projects. This group should not be visible for non-members to see or join, and can be accessed by invite only. Which chatter Group type should the App Builder recommend?",
      options: [
        "A. Member Group",
        "B. Unlisted Group",
        "C. Private Group",
        "D. Public Group",
      ],
      answer: "B",
      title: "Question 147",
      explanation: "",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity stage? Choose 3",
      options: [
        "A. Type",
        "B. Probability",
        "C. Close date",
        "D. Forecast category",
        "E. Amount",
      ],
      answer: "C,D,E",
      title: "Question 148",
      explanation: "",
    },
    {
      content:
        "accounts and a secondary master detail relationship with contacts. The app builder has requirement to change the primary master relationship to lookup. What happens to the master detail relationship with contacts?",
      options: [
        "A. The contacts master detail also converts to lookup",
        "B. The contacts master detail field is deleted from the object",
        "C. The contacts master detail becomes the primary",
        "D. The contacts master detail values are cleared from invoice",
      ],
      answer: "C",
      title: "Question 149",
      explanation: "",
    },
    {
      content:
        "An app builder needs to create new automation on an object.\nWhat best practice should the app builder follow when building out automation7",
      options: [
        "A. One Flow per object.",
        "B. One record change process per object.",
        "C. One invocable process per object.",
        "D. One Workflow rule per object.",
      ],
      answer: "C",
      title: "Question 150",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices.\nWhat can be the issue?",
      options: [
        "A. The component has been developed for Desktop Pages.",
        "B. The component needs to be activated.",
        "C. The record page needs to be activated.",
        "D. The record page template is unable to support mobile devices.",
      ],
      answer: "D",
      title: "Question 151",
      explanation: "",
    },
  ],
});