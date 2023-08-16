window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2022-05-02.q74",
  content: [
    {
      content:
        "The administrator at DreamHouse Realty added an email quick action to the Case page layout and is unable to see the action on the case feed.Which feature must be enabled to ensure the quick action will be displayed as expected?",
      options: [
        "A. Email-to-Case",
        "B. Email Alerts",
        "C. Email Notifications",
        "D. Email Templates",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has three separate lines of business. Each line has specific fields that must be displayed to users. However, the fields needed by the sales team are different than the fields needed by the service team.How should the administrator configure this requirement?",
      options: [
        "A. Create one record type with six Page Layouts.",
        "B. Create three record types, each with 2 page layouts.",
        "C. Create six record types, each with 1 page layout.",
        "D. Create two record types, each with 3 page layouts.",
      ],
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "Which two actions should an administrator perform with Case escalation rules?Choose 2 answers",
      options: [
        "A. Re-open the Case.",
        "B. Re-assign the Case.",
        "C. Change the Case Priority.",
        "D. Send email notifications.",
      ],
      answer: "A,D",
      title: "Question 3",
    },
    {
      content:
        "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record.What should AWC use to track Contacts?",
      options: [
        "A. Create a new Contact record for each agency.",
        "B. Create a Junction object to track many-to-many relationship.",
        "C. Use a partner community to track the Contacts.",
        "D. Enable Contacts to multiple Accounts.",
      ],
      answer: "D",
      title: "Question 4",
    },
    {
      content:
        "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network.What are two considerations for this configuration?Choose 2 answers",
      options: [
        "A. Single sign-on will allow users to log in from anywhere.",
        "B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.",
        "C. Users can change their password to avoid login IP restrictions.",
        "D. IP address restrictions are set on the profile or globally for the org.",
      ],
      answer: "B,D",
      title: "Question 5",
    },
    {
      content:
        "The administrator at Cloud Kicks has created an approval process for time off requests.Which two automated actions are available to be added as part of the approval process?Choose 2 answers",
      options: [
        "A. Field Update",
        "B. Auto launched Flow",
        "C. Chatter Post",
        "D. Email Alert",
      ],
      answer: "A,D",
      title: "Question 6",
    },
    {
      content:
        "Northern Trail Outfitters is using one profile for all of its marketing users, providing read-only access to the Campaign object. A few marketing users now require comprehensive edit access on Campaigns.How should an administrator fulfil this request?",
      options: [
        "A. Marketing user checkbox",
        "B. Organization-wide defaults",
        "C. Permission sets",
        "D. Field-level security",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "Northern Trail Outfitters has the Case Object set to private. The support manager raised a concern the reps have a boarder view of data than expected and can see all cases on their groups dashboards.What could be Causing reps to have inappropriate access to data on dashboards?",
      options: [
        "A. Dynamic Dashboards",
        "B. Dashboard Subscriptions",
        "C. Public Dashboards.",
        "D. Dashboard Filters",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "DreamHouse reality has an approval process. A manager attempts to approve the record but receives an error.What should an administrator review to troubleshoot this request?",
      options: [
        "A. Add a delegated approver for the next approver in the process.",
        "B. Update the field level security to view on fields that are updated in the process.",
        "C. Check if the user in the next approver is inactive or missing",
        "D. Review the page layout to ensure, the fields updated in the process are visible",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "An administrator Creates a custom text area field on the Account object and adds it to the service team's page layout. The services team manager loves the addition of this field and wants it to appear in the highlights panel so that the services reps can quickly find it when on the Account Page How should the administrator accomplish this?",
      options: [
        "A. Create a new page layout and a new section titled highlights panel.",
        "B. From the page layout editor, drag the field to the highlights panel.",
        "C. Make the field required and move it to the top of the page.",
        "D. In the Account object manager, create a custom compact layout.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest from online. The team currently does not access to the lead object.How should an administrator provide proper access?",
      options: [
        "A. Create a new profile",
        "B. Assign a new role.",
        "C. Set Up Manual Sharing",
        "D. Configure permission sets.",
      ],
      answer: "D",
      title: "Question 11",
    },
    {
      content:
        "The administrator are Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted case to the administrator indication that the new field is unavailable.Which two steps should an administrator do to troubleshoot this issue?Choose 2 answers",
      options: [
        "A. Ensure that the page layout for the user's profile has been updated.",
        "B. Update the organization wide default for the object.",
        "C. Run the setup audit trail for the organization.",
        "D. Review the field level security of the field for the user profile",
      ],
      answer: "A,D",
      title: "Question 12",
    },
    {
      content:
        "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and wants to share all cross-sell opportunities with a team of subject matter experts in their organisation. The company has different roles, and the organisation wide default opportunity is set to private.How should the administrator accomplish this?",
      options: [
        "A. Add the subject matter experts to a public group and give them access to records with a criteriabased sharing rule.",
        "B. Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing.",
        "C. Change the organisation-wide default for opportunity from private to public Read/Write to open up access for subject matter experts.",
        "D. Create a new role for the subject matter experts and give them access to the records with the owner-based sharing rule",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "Cloud Kicks has a Customer success agent going on leave and needs to change ownership on multiple cases.Which two users are able to fulfill this request?Choose 2 answers",
      options: [
        "A. A user with Read Permission on account.",
        "B. A user with the System Administrator profile.",
        "C. A user with the Manage Cases Permission",
        "D. A user with manager role above the agent.",
      ],
      answer: "B,C",
      title: "Question 14",
    },
    {
      content:
        'The administrator at universal containers has a screen flow that helps users create new leads.When lead source is "Search Engine", the administrator needs to require the user to choose a specific a search engine from a picklist. If lead source is not "Search Engine", this picklist should be hidden.How should the administrator complete this requirement?',
      options: [
        'A. Configure a picklist for specific search engine, and use a validation rule to conditionally show only when lead source is "Search Engine"',
        'B. Create a picklist for specific search engine, and set conditional visibility so that is only shown when lead source is "Search Engine".',
        'C. Use an assignment element, one for when lead source is "Search Engine" and one for everything else.',
        'D. Assign a decision element to direct the user to a second screen to hold specific search engine only when a lead source is "Search Engine".',
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "An administrator at Universal Container needs an automated way to delete records based on field values.What automated solution should the administrator use?",
      options: [
        "A. Process Builder",
        "B. Workflow",
        "C. Flow Builder",
        "D. Automation Studio",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow.How should the administrator address this issues?",
      options: [
        "A. Uncheck the end user Flow Errors box in setup.",
        "B. Remove validation rules so that the users are able to process without complete records.",
        "C. Create a permission set to allow users to bypass the error.",
        "D. use a fault connector and display a screen with text explaining what went wrong and how to correct it.",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Cloud Kicks has created a screen flow for their sales team to use when they add new leads. The screen flow collect name, email and shoe preference.which two things should the administrator do to display the screen flow?Choose 2 answers",
      options: [
        "A. install an app from the AppExchange",
        "B. use a flow element and add the screen flow to the record page.",
        "C. Add the flow in the utility bar of the console",
        "D. Create a tab and add the screen flow to the page.",
      ],
      answer: "B,D",
      title: "Question 18",
    },
    {
      content:
        "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled on every Invoice record.How should an administrator ensure this requirement?",
      options: [
        "A. Require the field on the record type.",
        "B. Define an approval process for the child.",
        "C. Make the field universally required.",
        "D. Create a Process Builder to set the field.",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "Universal container has a contact Lightning record Page with a component that shows LinkedIn dat a. The sales team would like to only show this component to sales users when they are on their mobile phones.Choose 2 Answers.",
      options: [
        "A. Filter the component visibility with User > Profile > name = sales User.",
        "B. Filter the component visibility with view = Mobile/Tablet.",
        "C. Filter the component visibility with Form Factor = phone",
        "D. Filter the component visibility with User > Role > Name = Sales User.",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "The marketing director at Northern Trail Outfitters has requested that the budget field is populated in order for the Lead Status field to be marked as qualified.What tool should the administrator use to fulfill this request?",
      options: [
        "A. Workflow Rule",
        "B. Require Field.",
        "C. Lead Conversion.",
        "D. Validation Rule",
      ],
      answer: "D",
      title: "Question 21",
    },
    {
      content:
        "Northern Trail Outfitters has a new flow that automatically sets the field values when a new account is created. That the flow is launched by a process, But the flow is not working properly.What should administrator do to identify the problem?",
      options: [
        "A. Setup Email logs and review the send error log.",
        "B. Review debug logs with the login level.",
        "C. Use the native debug feature in the flow builder.",
        "D. View the setup audit Trail and review for errors.",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases.Which two options should the administrator use to help the support team?Choose 2 answers",
      options: [
        "A. Create a new queue and add Cases as an available object.",
        "B. Use assignment rules to set the queue as the owner of the case.",
        "C. Add Cass to the existing queue as available object.",
        "D. Configure a flow to assign the cases to the queue.",
      ],
      answer: "B,D",
      title: "Question 23",
    },
    {
      content:
        "The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases.How should the screen flow be distributed?",
      options: [
        "A. Home page",
        "B. Component Filter",
        "C. Lightning page",
        "D. Page Layout",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "Sales raps at Ursa Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals.What should the administrator and close more deals.",
      options: [
        "A. Einstein Activity Capture",
        "B. Einstein Search Personalization",
        "C. Einstein Lead Scoring",
        "D. Einstein Opportunity Scoring",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "An Administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won and another task after 60 days to check in with the customer.which two automation tools should the administrator use?Choose 2 answers",
      options: [
        "A. process builder",
        "B. Field Update",
        "C. Outbound Message",
        "D. workflow Rule",
      ],
      answer: "A,B",
      title: "Question 26",
    },
    {
      content:
        "Northern Trail Outfitters has a custom quick action on Account that creates a new Case.How should an administrator make the quick action available on the Salesforce mobile app?",
      options: [
        "A. Modify compact Case page layout to include the action.",
        "B. Include the action in the Salesforce Mobile Navigation menu.",
        "C. Add the Salesforce Mobile and Lightning Experience action to the page layout.",
        "D. Create a custom Lightning App with the action.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Northern Trail Outfitters has asked an administrator to ensure that when a contact with a title of CEO is created, the contact's account record gets updated with the CEO's name.Which feature should an administrator use to implement this request?",
      options: [
        "A. Quick Action",
        "B. Process Builder",
        "C. Workflow Rule",
        "D. Validation Rule",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "The administrator at Cloud Kicks has been asked to replace two old workflow rules that are doing simple field updated when a lead is created to improve processing time.What tool should the administrator use to replace the workflow rules?",
      options: [
        "A. Quick Action Flow",
        "B. Screen Flow",
        "C. Before Save Flow",
        "D. Scheduled Flow",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on pacific time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support.How should an administrator solve for this issue?",
      options: [
        "A. Allow the reps to set business hours manually.",
        "B. Adjust the currant business hours to accommodate the Eastern Time Zone.",
        "C. Set temporary business hours for each time zone.",
        "D. Create one set of business hours per time zone.",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard.What are the two reasons this is likely to occur?Choose 2 answers",
      options: [
        "A. The current user does not have access to the report folder.",
        "B. The dashboard needs to be refreshed.",
        "C. The running dashboard user and viewer have different permissions.",
        "D. The report needs to be refreshed.",
      ],
      answer: "B,C",
      title: "Question 31",
    },
    {
      content:
        "The DreamHouse Realty team has a master-detail relationship set up with open house as the parent object and visitors as the child object.What type of field should the administrator add to the open house object to track number of visitors?",
      options: [
        "A. Indirect lookup",
        "B. Cross-object formula",
        "C. Roll-up Summary.",
        "D. Multi-select Picklist",
      ],
      answer: "C",
      title: "Question 32",
    },
    {
      content:
        "Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue.Which feature should be used to fulfill this requirement?",
      options: [
        "A. Einstein Case Routing",
        "B. Auto-response rule",
        "C. Case assignment rule",
        "D. Case escalation rule",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns.How should an administrator deliver this information?",
      options: [
        "A. Create a roll-up summary field on Opportunity to Campaign.",
        "B. Perform periodic data job to update campaign records.",
        "C. Design a standard Campaign report and add the value Won Opportunities in Campaign field.",
        "D. Add a Total Value Field on campaign and use a workflow rule to update the value when an opportunity is won.",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "Universal Container wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find the deal records via a search.What options should the administrator adjust to fully restrict access?",
      options: [
        "A. App permissions and search terms",
        "B. Page layouts and field- level security",
        "C. Record setting and search index",
        "D. Permissions and tab visibility",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "The administrator at Ursa Major Solar has created a custom report type and built a report for sales operation team. However, none of the user are able to access the report.Which two options could cause this issue?Choose 2 Answers",
      options: [
        "A. The custom report type is in development.",
        "B. The report is saved in a private folder",
        "C. The user's profile is missing view access.",
        "D. The org has reached its limit of custom report types.",
      ],
      answer: "B,C",
      title: "Question 36",
    },
    {
      content:
        "What are three characteristics of a master-detail relationship?Choose 3 answers",
      options: [
        "A. Permissions for the detail record are set independently of the master.",
        "B. The owner field on the detail records is the owner of the master record.",
        "C. Each object can have up to five master-detail relationships.",
        "D. The master object can be a standard or custom object.",
        "E. Roll-up summaries are supported in master-detail relationships.",
      ],
      answer: "B,D,E",
      title: "Question 37",
    },
    {
      content:
        "Dreamhouse Reality just announced its new home concierge offering. This product is unlike anything the company has offered in the past and follows a different business model.What Should the administrator Configure to meet this requirement?",
      options: [
        "A. Create a quick action.",
        "B. Create a new sales process.",
        "C. Create a new approval process.",
        "D. Create a new Opportunity product.",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "The administrator at Cloud kicks deleted a custom field but realized there is a business unit that still uses the field.What should an administrator take into consideration when undeleting the field?",
      options: [
        "A. The field needs to be re-added to reports.",
        "B. The field needs to be re-added to page Layouts.",
        "C. The field needs to be restored from the recycle bin.",
        "D. The field history will remain deleted.",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "Cloud kicks intends to protect with backups by using the data by using the data export Service.Which two considerations should the administrator remember when Scheduling the export?Choose 2 Answers.",
      options: [
        "A. Metadata Backups are limited a sandbox refresh intervals.",
        "B. Data export service should be run from a sandbox.",
        "C. Metadata backups must be run via a separate process.",
        "D. Data Backups are limited to weekly or monthly intervals.",
      ],
      answer: "A,D",
      title: "Question 40",
    },
    {
      content:
        "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their websites. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose.How should an administrator configure this requirement?",
      options: [
        "A. Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule.",
        "B. Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry.",
        "C. Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule.",
        "D. Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "When a cloud kicks Opportunity closes, the company would like to automatically create a renewal opportunity.Which two automation tools should an administrator use to accomplish this request?Choose 2 answers",
      options: [
        "A. Approval Process",
        "B. Flow Builder",
        "C. Process Builder",
        "D. WorkFlow Rule",
      ],
      answer: "B,C",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) would like to count the number of open cases associated with each account and update the account with this value every Friday evening. UC has several hundred open cases at any given time.What should the administrator use to complete this request?",
      options: [
        "A. Use a Roll-Up summary.",
        "B. Use a scheduled process builder.",
        "C. Use a record trigger flow.",
        "D. Use a scheduled flow",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "Clod Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the questions that is needed.How should an administrator complete this?",
      options: [
        "A. Use a conditional visibility to hide the unnecessary question",
        "B. Use a new version of the flow for each scenario.",
        "C. Use branching in the flow screen to show the proper scenario",
        "D. Use a decision element and a new screen to show the proper question",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "At Universal Containers, there is a custom field on the Lead named Product Category. Management wants this information to be part of the Opportunity upon lead conversion.What action should the administrator take to satisfy the request?",
      options: [
        "A. Map the lead custom field to the product's product category field.",
        "B. Create a workflow to update Opportunity fields based on the lead.",
        "C. Configure the product categories picklist field on the product.",
        "D. Create a custom field on the Opportunity and map the two fields.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "An Administrator supporting global team of salesforce users has been asked to configure the company settings Which two options should the administrator configure?Choose 2 Answers",
      options: [
        "A. Password Policy",
        "B. Default Language",
        "C. Login Hours",
        "D. Currency Local",
      ],
      answer: "B,D",
      title: "Question 46",
    },
    {
      content:
        "Ursa Major Solar wants to know which of its marketing efforts are helping the team win Opportunities.What should an administrator configure to provide these insights?",
      options: [
        "A. Map Custom Lead Fields",
        "B. Campaign Hierarchy.",
        "C. List Email Activities",
        "D. Campaign Influence",
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "Which three items are available in the mobile navigation menu?Choose 3 answers",
      options: [
        "A. Lightning App Pages",
        "B. Lightning Home Page",
        "C. Chatter",
        "D. Dashboards",
        "E. Utility Bar",
      ],
      answer: "C,D,E",
      title: "Question 48",
    },
    {
      content:
        "Once an opportunity reaches the negotiation stage at cloud kicks, The Amount fields becomes required for sales users. Sales managers need to be able to move opportunities inti this stage without knowing the amount.How should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?",
      options: [
        "A. Assign the administrator profile to the managers.",
        "B. Create to formula field to fill in the field for managers.",
        "C. Configure a validation rule to meet the criteria.",
        "D. Make the field required for all users.",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "DreamHouse Reality needs to use consistent picklist value on a category filed on accounts and cases, with value respective to record types.Which two features should the administrator use to fulfill this requirement?Choose 2 Answers",
      options: [
        "A. Multi-Select Picklist",
        "B. Custom Picklist",
        "C. Dependent Picklist",
        "D. Global Picklist",
      ],
      answer: "B,D",
      title: "Question 50",
    },
    {
      content:
        "The Cloud kicks sales manager wants to boost productivity by providing insights at the start of each day.Which three sales-specific standard Lightning components should administrator add to the homepage to meet this requirement?Choose 3 Answers.",
      options: [
        "A. Activities",
        "B. Assistant",
        "C. Path",
        "D. Performance chart.",
        "E. Key Deals",
      ],
      answer: "C,D,E",
      title: "Question 51",
    },
    {
      content:
        "Cloud Kicks has decided to delete a custom field.What will happen to the data in the field when it is deleted?",
      options: [
        "A. The data is restorable from the recycle bin.",
        "B. The data is permanently deleted.",
        "C. The data associated with the field is required.",
        "D. The data in the field is stored for 20 days.",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "At cloud kicks sales reps use discounts on the opportunity record to help win sales on products. When an opportunity is won, they then have to manually apply the discount up the related opportunity products. The sales manager has asked if three is a way to automate this time consuming task.What should the administrator use to deliver this requirement?",
      options: [
        "A. Formula field",
        "B. Flow Builder",
        "C. Approval Process",
        "D. Prebuild Macro.",
      ],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "An Administrator at DreamHouse Realty wants an easier way to assign an agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
      options: [
        "A. Territory Manag",
        "B. Knowledge Management.",
        "C. Escalation Rules",
        "D. Omni-Channel",
      ],
      answer: "D",
      title: "Question 54",
    },
    {
      content:
        "The Call centre manager in Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status and owner.What should an Administrator add to the dashboard to fulfil the request?",
      options: [
        "A. Bucket column",
        "B. Dashboard Filter",
        "C. Dashboard component",
        "D. Combination Chart",
      ],
      answer: "B",
      title: "Question 55",
    },
    {
      content:
        "Ursa Solar Major is evaluating Salesforce for its service team and would like to know what objects were available out of the box.Which three of the standard objects are available to an administrator considering a support use case?Choose 3 answers",
      options: [
        "A. Account",
        "B. Ticket",
        "C. Request",
        "D. Contract",
        "E. Case",
      ],
      answer: "A,D,E",
      title: "Question 56",
    },
    {
      content:
        "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options.What should an administrator configure to meet these requirements?",
      options: [
        "A. Validation rules that ensure that users are entering accurate sales stage information.",
        "B. Different page layouts that control the picklist values for the opportunity types.",
        "C. Separate record types and Sales processes for the different types of opportunities.",
        "D. Public groups to limit record types and sales processes for opportunities.",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variable for use later in the flow.What flow element should the administrator add?",
      options: [
        "A. Assignment",
        "B. Get Records",
        "C. Create Records",
        "D. Update Records",
      ],
      answer: "B",
      title: "Question 58",
    },
    {
      content:
        "Users at Cloud Kicks are reporting different options when uploading a custom picklist on the Opportunity object based on the kind of opportunity.Where Should an administrator update the option in the picklist?",
      options: [
        "A. Fields and relationships",
        "B. Record Type",
        "C. Related lookup filters",
        "D. Picklist value sets",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations.Which two tools should an administrator use to build this solution?Choose 2 answers",
      options: [
        "A. Approval Process",
        "B. Flow Builder",
        "C. Validation Rule",
        "D. Quick Action",
      ],
      answer: "A,B",
      title: "Question 60",
    },
    {
      content:
        "Cloud Kicks (CK) has new administrator who is asked to put together a memo detailing salesforce uses to budget for upcoming license purchases.Where Should the administrator go to find out what type of licenses CK Has purchased and how many are available.",
      options: [
        "A. Search for licenses types in setup.",
        "B. Usage based entitlement related list in company information.",
        "C. User Management settings in setup.",
        "D. User Licenses Related List in Company information.",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "Northern Trail Outfitters wants to know the average stage duration for all closed Opportunities. How should an administrator support this request?",
      options: [
        "A. Add Formula Fields to track Stages on each Opportunity.",
        "B. Use process builder to capture the daily average on each opportunity.",
        "C. Run the Opportunity Stage Duration report.",
        "D. Refresh weekly reporting snapshots for Closed Opportunities.",
      ],
      answer: "C",
      title: "Question 62",
    },
    {
      content:
        "The VP of Sales at Cloud Kicks is receiving an error message that prevents them form saving an Opportunity. The administrator attempted the same edit without receiving an error.How can the administrator validate the error the user is receiving?",
      options: [
        "A. Edit the page layout.",
        "B. Review the sharing model",
        "C. Log in as the user",
        "D. View the setup audit trail.",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce.Which field type should an administrator use to capture coordinates?",
      options: [
        "A. Geofence",
        "B. External lookup",
        "C. Custom address",
        "D. Geolocation",
      ],
      answer: "D",
      title: "Question 64",
    },
    {
      content:
        "An administrator needs to create a one-to-many relationship between two objects with limited access to child records.What type of field should the administrator use?",
      options: [
        "A. Roll-up summary",
        "B. Cross Object formula",
        "C. Master-detail field",
        "D. Lookup field",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "An administrator has reviewed an upcoming critical update.How should the administrator proceed with activation of the critical update?",
      options: [
        "A. Activate the critical update in production.",
        "B. Activate the critical update in a sandbox.",
        "C. Allow the critical update to auto-activate in a sandbox.",
        "D. Allow the critical update to auto-activate.",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "At universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well.Which are two considerations for enabling this functionality?Choose 2 answers",
      options: [
        "A. Collaboration groups are created automatically for every department.",
        "B. Object layouts should be configured to include the groups related list.",
        "C. An administrator needs to create a group to enable record sharing",
        "D. The Add Record action must be configured in the group publisher.",
      ],
      answer: "C,D",
      title: "Question 67",
    },
    {
      content:
        "A new Sales Rep at Ursa Major has a qualified lead that is ready for conversation.When using the Lead Conversion process, which two records can be Created?Choose 2 answers",
      options: ["A. Case", "B. Campaign", "C. Contact", "D. Account"],
      answer: "C,D",
      title: "Question 68",
    },
    {
      content:
        "New leads need be routed to the correct Sales person based on the lead address.",
      options: [
        "A. Create a formula field",
        "B. Use lead assignment rule",
        "C. Assign with an escalation rule",
        "D. Configure validation rule",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on campaign ROI by month and series.How should the administrator set up the Campaign to simplify reporting?",
      options: [
        "A. Configure campaign Member Statuses to record which event members attended.",
        "B. Create individual Campaigns that all have the same name.",
        "C. Add different record types for the monthly event types.",
        "D. Use Campaign Hierarchy where the monthly events roll up to a parent Campaign",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks.What should an administrator do to meet the requirement?",
      options: [
        "A. Enable Creation of Recurring Tasks.",
        "B. Flow to create recurring tasks.",
        "C. Turn on Recurring Activities.",
        "D. Workflow rule to create recurring tasks.",
      ],
      answer: "A",
      title: "Question 71",
    },
    {
      content:
        "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permissions and the two-factor authentication for API Logins permission to a group of users.Which two prompts will happen when one of the users attempts to log in to Data Loader?Choose 2 answers",
      options: [
        "A. Users need to enter a verification code from email or SMS, whichever has higher priority.",
        "B. Users need to download and install an authenticator app on their mobile device.",
        "C. Users need to connect an authenticator app to their Salesforce account.",
        "D. Users need to get a security token from a trusted network using Reset My Security Token.",
      ],
      answer: "B,C",
      title: "Question 72",
    },
    {
      content:
        "Sales Users at Cloud Kicks are requesting that the data in the industry field on the Account object displays on the Opportunity page layout.Which type of the field should an administrator create to accomplish this?",
      options: [
        "A. Custom Account Field",
        "B. Cross Object Formula Field",
        "C. Master detail relationship Field",
        "D. Standard Account Field.",
      ],
      answer: "B",
      title: "Question 73",
    },
    {
      content:
        "A user at Universal Containers left the company. The administrator needs to create new user for their replacement, but they have assigned all available users licenses.What should the administrator do to free up users licenses for the new users?",
      options: [
        "A. Change the formers users record to the new user.",
        "B. Deactivate the former employees user record.",
        "C. Freeze former employees user record.",
        "D. Delete former employees user record.",
      ],
      answer: "A",
      title: "Question 74",
    },
  ],
});
