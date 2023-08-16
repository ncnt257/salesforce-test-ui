window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2020-07-19.q57",
  content: [
    {
      content:
        "Universal Containers (UC) has created a public group with certain Sales Engineers to help on complex deals and a sharing rule to grant access to these opportunities. Opportunity OWD is private.\n       What is the impact of these sharing settings?",
      options: [
        "A. Sales Engineers Managers and their managers in the role hierarchy will also have access to these records.",
        "B. Sales Engineers direct reports will also have access to these records.",
        "C. Subordinates of Managers who have Sales Engineers in the public group will also have access to these records.",
        "D. Sales Engineers that have a similar role of the Sales Engineers of the public group will also have access to these records.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers keeps product brochures in Salesforce as files. Sarah shares a public link to a product during a meeting. She wants to ensure they do not have access to the file after the meeting.\n       How should Sarah accomplish this?",
      options: [
        "A. Delete the file.",
        "B. Move the file to another folder",
        "C. Delete the public link.",
        "D. Rename the file.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers wants to store Payment Term Details on the Account object, but the fields should only be visible on certain record types and for certain user profiles.\n       How can a System Administrator quickly determine which user profiles, page layouts, and record types include certain fields?",
      options: [
        "A. Log in as each user profile and view the Account Page Layouts.",
        "B. Universally require the field at the field level.",
        "C. Click the Field-Level Security for the field on each Profile.",
        "D. Use the Field Accessibility Viewer for the fields in question",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "In order to comply with regulatory requirements, Universal Health must encrypt all Personally Identifiable Information (PII), both while it is being transmitted over the network and while it is at rest. Universal Health has completed a data audit and has determined that 12 fields on the contact record can contain PII, including the contact name and several other standard fields. Universal Health would like the fields to remain accessible in Salesforce. Which two options does Universal Health have to maintain compliance?\n       Choose 2 answers.",
      options: [
        "A. Use an external, third party encryption service to encrypt PII before it enters Salesforce.",
        'B. Update the field type of each of the 12 fields to "Text (Encrypted)" so that they are encrypted at rest.',
        "C. Implement a custom Apex trigger to automatically encrypt the PII data using the Apex Crypto Class.",
        "D. Enable Salesforce Platform Encryption and select the 12 contact fields to be encrypted.",
      ],
      answer: "B,D",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers has a customer that meets criteria for two Enterprise territory Management territories (Portugal and Southern Europe).\n       What is necessary to assign opportunities to a territory for this account?",
      options: [
        "A. The territory with the highest Territory Type Priority is automatically assigned to the Opportunity",
        "B. Create an Apex class that implement. Filter-Based Opportunity Territory Assignment",
        "C. Create a Process Builder Process that updates the Territory field on the Opportunity",
        "D. Create a criteria-based sharing rule on the Opportunity to assign It to a territory.",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "Below are some details regarding the organization at Universal containers:\n       1. Richard and Kevin are the east sales reps and their manager is Karen the East sales executive.\n       2. Sam and Wilder are West sales reps and the manager is Wendy, the West sales executive.\n       3. Bob is the CEO and managers both Karen and Wendy\n       Universal containers role hierarchy follows their management structure. Richard owns an account, NewCompany, and Kevin owns an account, OldCompany. Karen manually shared her account NewWorld with Kevin. However, she has moved to a new role to lead all Named Accounts, and Phil, who replaced her, is the new owner of NewWorld. Which employees will have access to the NewWorld account?",
      options: [
        "A. Bob, Richard, Phil and Kevin",
        "B. Bob, Karen and Kevin",
        "C. Bob, Phil and Kevin",
        "D. Bob and Phil",
      ],
      answer: "D",
      title: "Question 6",
    },
    {
      content:
        "What should a Salesforce architect recommend to make sure that users that gained access to a custom object record through Apex managed sharing do not lose access to it when its owner is changed?",
      options: [
        "A. Create a new record in _Share object with RowCause 'Manual''.",
        "B. Use \"runAs'' system method in Apex classes to enforce record visibility.",
        "C. Create specific Apex Sharing Reason for the custom object.",
        "D. Use ''With Sharing'' keyword to make sure record visibility will be considered.",
      ],
      answer: "C",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers has created a custom object to store highly confidential client relationship data with Private sharing settings. Which two options would an Architect choose to ensure access only to the record owner and the administrator?\n       Choose 2 answers.",
      options: [
        'A. Disable the "Create" permission on all other profiles.',
        'B. Disable "Grant Access Using Hierarchies."',
        'C. Disable the "View All" permission on all other profiles.',
        'D. Disable the "Read" permission on all other profiles.',
      ],
      answer: "B,C",
      title: "Question 8",
    },
    {
      content:
        "What advanced tool can Salesforce enable for large-scale role hierarchy realignment?",
      options: [
        "A. Partitioning Division",
        "B. Set external organizational-wide default to public read only",
        "C. Skinny Table Indexing",
        "D. Granular locking",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers (UC) provides shipment tracking for its customers on a custom Shipment object. The .. yearly by the customers should be available on the Account record to the Marketing team, but the Marketing Shipment records.\n       What recommend should an Architect provide to accomplish this?",
      options: [
        "A. Controlled by Parent (Account) on Shipment, trigger, and trigger, and Master-Detail relationship to Account.",
        "B. Public organization-wide default on Shipment, process builder, and lookup relationship to Account.",
        "C. Private organization-Wide default on Shipment, rollup summary, and Master-Detail relationship to Account.",
        "D. Private organization-wide default on Shipment, trigger, and Lookup relationship to Account,",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this it happening due to misconfigured role hierarchy (Shipment OWD is Private). Alter investigation, they determined the. role hierarchy for these users is correct.\n       What can be the reason why Universal Containers sales managers are not able to see Shipment records?",
      options: [
        "A. Sales managers have only the Read permission on the 5hipment object and should not be able to edit their team records.",
        "B. The Grant Access Using hierarchies option on Shipment Sharing Settings was incorrectly disabled by the Salesforce admin.",
        "C. Role hierarchy Implicit sharing was Incorrectly disabled by the Salesforce adman.",
        "D. Ownership-based sharing rule for Shipment was Incorrectly disabled by the Salesforce admin.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers would like to restrict users' access to export reports What option supports this requirement?",
      options: [
        "A. Remove the Export button from the report page layout.",
        'B. Remove the "Report Manager" user permission.',
        'C. Remove "Allow Export" on the report folder settings.',
        'D. Remove the "Export Reports" profile permission.',
      ],
      answer: "D",
      title: "Question 12",
    },
    {
      content:
        "Which users have access to Opportunity records owned by an external user, assuming no other changes to the sharing model have been implemented?",
      options: [
        "A. The record owner and any user above the external user in the role hierarchy.",
        "B. The record owner and any user below the external user in the role hierarchy.",
        "C. The record owner and all internal users.",
        "D. The record owner only.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to their distributor for delivery.\n       What license recommendation will meet distributor needs?",
      options: [
        "A. Partner Community",
        "B. Customer Community Plus",
        "C. Sales Cloud",
        "D. Custom Community",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers (UC) stores basic employee information in a custom Employee object (OWD -Public Read Only). There are a few sensitive fields that need restricted access (salary, grade level, last performance rating).\n       Other than field level security, what other options are available to make these fields accessible to the Human Resource team?",
      options: [
        "A. Create a new custom object with private OWD and Lookup relationship to Employee to store new restricted information.",
        "B. Create a new custom object controlled by parent and a Master-Detail relationship to Employee to store new restricted information.",
        "C. There are no other option besides using field level security.",
        "D. Change OWD of Employee custom object to private and a Lookup self-relationship to store only new restricted information.",
      ],
      answer: "C",
      title: "Question 15",
    },
    {
      content: "What is a workaround to ownership data skew?",
      options: [
        "A. You can minimize possible performance impacts by not assigning the user(s) to a role.",
      ],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC.. only edited/reassigned by the lead owner.\n       What organization-wide default (OWD) approach should be recommended to help UC implement these ..",
      options: [
        "A. Implement a Public Read Only OWD on Lead.",
        "B. Implement a private OWD on Lead.",
        "C. Implement a Public Read Only/Transfer OWD on Lead",
        "D. Implement a Public Read/Write OWD on Lead.",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        'At Universal Containers, users should only see Accounts they or their subordinates own. All Accounts with the custom field "Kay Customer" should be visible to all Senior Account Managers. There is a custom field on the Account record that contains sensitive information and should be hidden from all users, except 3 designated users who require view and edit access. These three users come from different user groups, and will change occasionally. Which three platform security features are required to support these requirements with the minimum amount of effort?\n       Choose 3 answers',
      options: [
        "A. Permission Sets",
        "B. Role Hierarchy",
        "C. Apex Managed Sharing",
        "D. Criteria-Based Sharing Rules",
        "E. Owner-Based Sharing Rules",
      ],
      answer: "A,B,D",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries role hierarchy to control data visibility. In the new fiscal year, UC is planned to reorganize the roles and rea..\n       Which two point should an Architect consider in this situation?\n       Choose 2 answers",
      options: [
        "A. Replacing Account records ownerships massively can cause data skew.",
        "B. Using a temporary parking lot account to improve performance.",
        "C. Restricting the organization-sharing configurations to private.",
        "D. Changing complex role hierarchy can cause a high level of sharing recalculation.",
      ],
      answer: "A,D",
      title: "Question 19",
    },
    {
      content:
        "By Viewer Access you can see the data in a report or dashboard, but you can't make any changes, except by cloning it into a new report or dashboard.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "The architect has a requirement to create a criteria-based sharing rule based on the customer Social.. up the rule in Contact Sharing, the field is not shown on the list of available field.\n       What might cause this?",
      options: [
        "A. fields with validation rules are not available for sharing rules.",
        "B. The field has been configured for encryption.",
        "C. The architect's profile does not have field level Security (FLS) for this field.",
        "D. The architect does not have permission to Compliance fields.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also wants to ensure that leads are only edited/reassigned by the lead owner.\n       What organization wide default (OWD) approach should be recommended to help UC implement these requirements?",
      options: [
        "A. Implement a Public Read/Write OWD on Lead.",
        "B. Implement a Private OWD on Lead.",
        "C. Implement a Public Read Only/Transfer OWD on Lead.",
        "D. Implement a Public Read Only OWD on Lead.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers (UC) uses a custom Visualforce page to display shipment tracking information (custom object, private OWD) to field manager and agents. The IT team wants to make sure that users have access to only the information that is allowed.\n       Which Apex method must be used to make sure only allowed fields are shown to the users'",
      options: [
        "A. isShowable()",
        "B. isViewable()",
        "C. isAccessible()",
        "D. isReadable()",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers' organization wide-defaults model is private for the Account object. A sales repeats to opportunity records.\n       Which level of access will the sales rep have to the related account record?",
      options: [
        "A. Read-only access",
        "B. Read/Create access",
        "C. No access",
        "D. Read/Create/Edit access",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "What feature in Salesforce is needed to restrict access to a custom object that has Public Read/Write access?",
      options: [
        "A. Record Type",
        "B. Role Hierarchy",
        "C. Profile",
        "D. Page Layout",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "In order to allow community users to collaborate on Opportunities, which license type must the users.",
      options: [
        "A. Partner Community",
        "B. Customer Community plus",
        "C. Sales Community",
        "D. Customer Community",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "Mary is Joe's manager in the role hierarchy. The OWD for a custom Invoice object is Public ReadOnly and Mary's profile is not granted the Read permission for the Invoice object.\n       What action can Mary take on Joe's Invoice records'?",
      options: ["A. View Only", "B. None", "C. Edit Only", "D. Read/Write"],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that sales agents have access to products the company sells and be able to create opportunities for its customers.\n       What should the Organization-Wide Defaults (OWD) be for pricebook?",
      options: [
        "A. Use",
        "B. Public Read Only",
        "C. Pubic Read Write",
        "D. View",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Universal container (UC) use External Object to retrieve Invoice data from a Legacy ERP. A finance team requested to have access to the Invoice records in the account page.\n       In addition to objects access in the finance users profile, what other feature should a Sales Architect recommend?",
      options: [
        "A. Create an owner-based sharing rule to grant access to the records.",
        "B. Create a criteria-based sharing rule to grant access to the records.",
        "C. Use APEX managed sharing to grant access to the records.",
        "D. Include the Invoice Related List On Account Page layout.",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        'Universal Containers has junction object called "Job Production Facility", with 2 master-detail relationships to the Job and Production Facility custom objects. Both master records have a private sharing model.\n       What statement is true if a user\'s profile allows access (Create/Read) to the Job, but no access to the Production Facility Object?',
      options: [
        "A. The user will not be able to see the junction object records or the field values.",
        "B. The user will be granted read access to the Production Facility record",
        "C. The user will see the junction object but not the link to the Production Facility.",
        "D. The user will see the junction object and the link to the Production Facility.",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "Sales managers at Universal Containers (UC) have requested viewing customer invoices in Salesforce .. system. The architect at UC decided to surface the customer invoices in Salesforce using external objects a..\n       Configured an external object called Invoice.\n       Created a lookup relationship between account and the invoice\n       How can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By creating a sharing set a share invoice with users in a sales manager role.",
        "B. By using manual sharing to share invoices with relevant sales managers.",
        "C. By controlling the invoices object permission on the sales manager's profile.",
        "D. By creating sharing rules to share the invoice records with users in sales manager roles.",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "Which two access grants are stored in the Group Maintenance tables?\n       Choose 2 answers",
      options: [
        "A. Implicit grants",
        "B. Inherited access grants",
        "C. Group Membership grants",
        "D. Explicit grants",
      ],
      answer: "B,C",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers has recently activated an integration that synchronizes customer information and orders into their CRM of choice: Salesforce.com. One of their largest customers, United Air, has over 12,000 unique contacts. Since the integration was activated, sales reps are having trouble adding contacts to the United Air account. When a sales rep adds a contact, they get the following error message:UNABLE_TO_LOCK_ROW, This issue seems to affect the United Air account and several other large customers. The sales rep can usually save the contact by trying again later in the evening. What should the Architect recommend as a possible solution?",
      options: [
        "A. Create a permission set for the sales team to grant them Read/Write access to all account fields.",
        "B. Implement an account hierarchy and redistribute the contacts evenly under the child accounts.",
        "C. Add a role-based sharing rule so all sales team members have Read/Write access to contacts.",
        "D. Remove sharing rules and replace them with Apex sharing for Unite Air and the other large accounts.",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role. The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows: Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        "A. The sharing scenario described will occur without any special configuration choices being made by the Architect",
        "B. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
        "C. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        'D. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review Inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group.\n       what is the underlying Issue for these users?",
      options: [
        "A. The Accounts ire owned by users higher In the role hierarchy.",
        "B. The users are In profiles that have no access to the Account object.",
        "C. The page layout assigned to these mart to different than the Account owner",
        "D. The users have a permission set that only allow Accounts in \"Active' status.",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Which three advanced tools can Salesforce enable for large-scale role hierarchy realignments in organizations with large data volumes?\n       Choose 3 answers.",
      options: [
        "A. Parallel Sharing Rule Recalculation",
        "B. Granular Locking",
        "C. Partitioning by Divisions",
        "D. Skinny Table Indexing",
        "E. Deferred Sharing Calculation",
      ],
      answer: "C,D,E",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers has requirement for the Architect to develop Apex Managed Sharing code for the custom Job object. The sharing settings for the Job object are set to Private.\n       When assigning access level for the record, which two lines of code will cause a DML exception on insert to the database?\n       Choose 2 answers",
      options: [
        "A. Objectname.AccessLevel='None'",
        "B. Objectname.AccessLevel='Edit'",
        "C. Objectname.AccessLevel='All'",
        "D. Objectname.AccessLevel='Read'",
      ],
      answer: "A,C",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers has a set of Account Management users that should only see Accounts once the Account becomes a customer. The Type field on the Account identifies whether the Account is a Prospect, Customer, Partner or Other. Which two methods could an Architect use to enable this sharing requirement, assuming a private sharing model for Accounts?\n       Choose 2 answers.",
      options: [
        "A. Institute a process that calls for the Account Manager to be added to the Account Team once the Account becomes a customer.",
        "B. Create an Account Sharing Rule that shares all Accounts owned by Sales to be shared with Account Management roles and subordinates.",
        "C. Create a Criteria-based Sharing rule that shares the Account to the Account Management Group when the Type is Customer.",
        "D. Create a Public List View, where Accounts of Type Customer are included and share the List view with the Account Management public group.",
      ],
      answer: "A,C",
      title: "Question 38",
    },
    {
      content:
        "Which two options are available to share a Report or Dashboard folder with other users in the Organization?\n       Choose 2 answers",
      options: ["A. Profiles", "B. Teams", "C. Public Groups", "D. Roles"],
      answer: "C,D",
      title: "Question 39",
    },
    {
      content:
        "The Architect notices that there are many duplicate Account records and numerous sharing rules created in Salesforce. What would be the reason?",
      options: [
        "A. The Organization-Wide Default for the Account object is Public Read-Only.",
        "B. The Organization-Wide Default for the Account object is Private.",
        "C. The Object permissions for the Account object are Create, Read, and Edit.",
        "D. The Organization-Wide Default for the Account object is Public Read/Write.",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "Universal Container is creating a custom VF page to allow user to edit contact records. The developer has used an apex:outputField for the Phone field on the contact obj. What is the expected behavior if a user without FLS accesses the VF page?",
      options: [
        "A. The user is able to enter a value into the phone field",
        "B. The output field is visible to user",
        "C. The user encounters an error while saving the record",
        "D. The field is automatically removed from the page",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        "A. The current Opportunity Owner can transfer the current ownership.",
        "B. Someone above the Opportunity Owner in the Role Hierarchy.",
        'C. The System Administrator or a user with the "Transfer Records" permission.',
        "D. The user specified as the Manager on the Owner's User Profile.",
        "E. Any Opportunity Team Member on the current Opportunity.",
      ],
      answer: "A,B,C",
      title: "Question 42",
    },
    {
      content:
        "Which two are potential vulnerabilities in the following code snippet? <apex:page> <apex:form> <apex:outputText value=\"Enter Name\"/> <apex:inputText value=\"{!name}\" /> <apex:commandButton value=\"Query\" action=\"{!query}\" /> </apex:form> </apex:page> public class SOQLController { public String name { get { return name;} set {name=value;} } public PageReference query() { String qryString='SELECT Id FROM Contact WHERE '+ '(IsDeleted = false and Name like \\'%' + name + '%\\'}'; queryResult = Database.query(qryString); retunr null; } } Choose 2 answers",
      options: [
        "A. FLS check",
        "B. SOQL Injection",
        "C. Data Access Control",
        "D. Arbitrary Redirects",
      ],
      answer: "B,C",
      title: "Question 43",
    },
    {
      content:
        "Besides their own team accounts, sales managers at Universal Container need to have READ access to all other countries.\n       Role hierarchy was implemented accordingly (based on countries) but a Sales manager in the US comp records of the same segment in Canada.\n       What should be done to grant access in a proper way?",
      options: [
        "A. Create owner-based sharing rule to grant access to account records that have the same segment.",
        "B. Create a public group and include all accounts of the same segment and grant access through.",
        "C. Change the role hierarchy and put all the sales managers in the US and Canada as the same role.",
        "D. Create criteria-based sharing rule to grant access to account records that have the same segment.",
      ],
      answer: "D",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service Containers sold locally. They recently opened two dealerships in California: NorthCal and SoCal. Universal Containers implemented a new partner community to enable their dealers. Each dealership has a dealer Manager who has all service agents report into them. Assuming a private sharing model, what is the best option to enable dealer managers to have visibility to customer cases within their dealership and not across all dealerships?",
      options: [
        "A. No changes are needed to the sharing and visibility model to implement this requirement.",
        "B. Create sharing groups that share all cases to all agents under the Dealer manager.",
        "C. Create a batch job that creates sharing rules as needed, based on the cases created.",
        "D. Build a trigger that create manual sharing of cases as needed whenever a new case is created.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "Which are two valid use cases for programmatic sharing?\n       Choose 2 answers.",
      options: [
        "A. Native sharing functionality does not meet requirements.",
        "B. An external system manages user record access.",
        "C. Setting user ownership for standard and custom objects.",
        "D. Frequent user ownership changes based on re-alignments.",
      ],
      answer: "A,B",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers (UC) has Affiliates who sell containers in countries where UC does not have a local office. UC has leveraged the Partner Community to manage the sales cycle. One of their affiliates has exponentially grown in the last years and restructured its internal sales team with the following structure:\n       Sales VP ...> Direct of sales ..> Sales Manager ..> Sales Reps\n       What is the main problem a Salesforce Architect will face to provide a solution?",
      options: [
        "A. The Channel manager Role can not be shared with Partner Community.",
        "B. Super User does not work in Partner Community",
        "C. Partner User Roles are limited to three levels.",
        "D. Partner Community does not support Role Hierarchy.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunity field-level security permissions of read only certain user's profiles are being updated by their class.\n       How should the architect fix this problem?",
      options: [
        "A. Add With Sharing keyword to the class.",
        "B. Use the IsUpdateable() Apex method to test each field prior to allowing updates.",
        "C. Put the code in an class that uses the With Sharing keyword.",
        "D. Use the With SECURYT_ENFORCED keyword in the SOQL statement.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "A dummy user at Universal Containers owns more that 10,000 lead records. The system assigned all these leads to a dummy user. This is causing performance issues whenever role hierarchy changes. Which two options should be recommended to improve performance?\n       Choose 2 answers.",
      options: [
        "A. Add the dummy user to the bottom of the role hierarchy.",
        "B. Do not assign a role to the dummy user.",
        "C. Assign ownership to a small number of users.",
        "D. Add the dummy user into a public group.",
      ],
      answer: "B,C",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers is designing a new community using the Customer Community license type. They would like to have the users complete survey questions through the community interface and store the responses in a Custom Object that has a lookup to the account object. Any internal user who has access to the account should be able to see all survey responses. All Customer Community users should be able to see surveys filled in by other users for their company, but not surveys for other companies. What are the correct security settings to achieve this?",
      options: [
        'A. Set all Organization-Wide Default security to be "Public Read/Write" for internal users and "Private" for external users.',
        'B. Set all Organization-Wide Default security to be "Private" for both internal and external users and use Sharing Rules to grant the desired access',
        'C. Set all Organization-Wide Default settings to be "Public Read/Write" for both internal and external users.',
        "D. Set the custom object to be master-detail to the Account and leave the Organization-Wide Default settings as their default values.",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing the ..\n       How are these requirements achieved?",
      options: [
        "A. Assign the sales manager View All on the opportunity object.",
        "B. Use sharing set to give the sales manager access to the deals.",
        "C. Use opportunity teams to automatically add the sales manager as a team member.",
        "D. Create ownership-based sharing rule.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "At Universal Containers, Accounts and Contracts are normally visible to all employees, and Proposals center owner and managers. However, some Proposals are considered confidential and are managed by a Strategic should not be visible to anyone in the Sales group other than owner and the strategic team.\n       How should the architect design for this requirement?",
      options: [
        "A. Disable Grant Access Using Hierarches and set a Criteria-based Sharing rule for Strategic Deals team.",
        "B. Proposal Owner set to the Strategic Deals Team Queue and set the Account relationship to Master-Dvt.",
        "C. Disable Grant Access Using Hierarchies and set an Owner_Based Sharing rule for Strategic Deals team",
        "D. Proposal Owner set to the Strategic Deals Team Queue and create an center- base sharing rule to grs",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers (UC) has Affiliates who sell containers in countries' where UC does not have a local office Community to manage the sales cycle. One of their affiliates has exponentially grown in the last years and .. with the following structure:\n       Sales VP ..> Direct of Sales .. > Sales Manager ..> Sales Reps\n       UC would like to have the ability to open up access to the sales opportunities according to the above structure.\n       What is the main problem a Salesforce Architect will face to provide a solution?",
      options: [
        "A. Partner User Roles are limited to three levels.",
        "B. The Channel manager Role can not be shared with Partner Community.",
        "C. Super User does not work in Partner Community.",
        "D. Partner Community does not support Role Hierarchy.",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "Which two reasons should the Architect consider regarding the use of Apex Sharing Reasons?\n       Choose 2 answers",
      options: [
        "A. Ensuring the Share record is not deleted upon ownership change.",
        "B. Ensuring the Share record is deleted upon ownership change.",
        "C. Ensuring there is additional criteria available for Criteria-Based Sharing.",
        "D. Ensuring the developer can more easily troubleshoot programmatic sharing.",
      ],
      answer: "A,D",
      title: "Question 54",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a "Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above. Universal Container\'s Role Hierarchy matches its organizational hierarchy. Which two options should the Architect consider when designing the solution? Choose 2 answers',
      options: [
        "A. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "B. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
        "C. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
        "D. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
      ],
      answer: "C,D",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries and has established a very complex role hierarchy to control data visibility. In the new fiscal year UC is planning to reorganize the roles and reassign accounts owners.\n       Which three features could an architect recommend to avoid problems on this operation? Choose 3 answers",
      options: [
        "A. Granular Locking",
        "B. Deferred Sharing Recalculation",
        "C. Partition data using Divisions",
        "D. Skinny table",
        "E. Parallel Sharing Rule recalculation",
      ],
      answer: "A,B,E",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers has implemented a community for its customers using the Customer Community sense type. They have implemented a custom object to store service requests that has a look up to the account record. The Organization Wide Default External Access for the service request object is set to Private. Universal Containers wants their customers to be able to see service requests for their account through the community Customers should not see service requests for other accounts. What Salesforce feature can the Architect use to implement this?",
      options: [
        "A. Use Apex Managed Sharing to share service requests related to the account to the appropriate community users.",
        "B. Use a Sharing Set to share service requests related to the account based on the community user's profile.",
        "C. Use a Sharing Rule to share service requests to the community user based on their role.",
        "D. Use manual sharing to share the service requests manually when a new community user is added.",
      ],
      answer: "B",
      title: "Question 57",
    },
  ],
});
