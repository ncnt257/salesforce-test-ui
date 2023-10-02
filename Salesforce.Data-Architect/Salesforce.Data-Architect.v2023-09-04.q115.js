window.testContent = window.testContent || [];
var testId = "Salesforce.Data-Architect";
var testName = "Salesforce.Data-Architect";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Data-Architect.v2023-09-04.q115",
  content: [
    {
      content:
        "To address different compliance requirements, such as general data protection regulation (GDPR), personally identifiable information (PII), of health insurance Portability and Accountability Act (HIPPA) and others, a SF customer decided to categorize each data element in SF with the following:Data ownerSecurity Level, such as confidentialCompliance types such as GDPR, PII, HIPPAA compliance audit would require SF admins to generate reports to manage compliance.What should a data architect recommend to address this requirement?",
      options: [
        "A. Build reports for field information, then export the information to classify and report for Audits.",
        "B. Use field metadata attributes for compliance categorization, data owner, and data sensitivity level.",
        "C. Create a custom object and field to capture necessary compliance information and build custom reports.",
        "D. Use metadata API, to extract field attribute information and use the extract to classify and build reports",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "A large multinational B2C Salesforce customer is looking to implement their distributor management application is Salesforce. the application has the following capabilities:1.Distributor create sales order in salesforce2.Sales order are based on product prices applicable to their region3. Sales order are closed once they are fulfilled4. It is decided to maintain the order in opportunity objectHow should the data architect model this requirement?",
      options: [
        "A. Configure price Books for each region and share with distributors.",
        "B. Add custom fields in Opportunity and use triggers to update prices.",
        "C. Manually update Opportunities with Prices application to distributors.",
        "D. Create lookup to Custom Price object and share with distributors.",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers (UC) management has identified a total of ten text fields on the Contact object as important to capture any changes made to these fields, such as who made the change, when they made the change, what is the old value, and what is the new value. UC needs to be able to report on these field data changes within Salesforce for the past 3 months. What are two approaches that will meet this requirement? Choose 2 answers",
      options: [
        "A. Turn on field Contact object history tracking for these ten fields, then create reports on contact history.",
        "B. Write an Apex trigger on Contact after insert event and after update events and store the old values in another custom object.",
        "C. Create a workflow to evaluate the rule when a record is created and use field update actions to store previous values for these ten fields in ten new fields.",
        "D. Create a Contact report including these ten fields and Salesforce Id, then schedule the report to run once a day and send email to the admin.",
      ],
      answer: "A,B",
      title: "Question 3",
    },
    {
      content:
        "UC is using SF CRM. UC sales managers are complaining about data quality and would like to monitor and measure data quality.Which 2 solutions should a data architect recommend to monitor and measure data quality?Choose 2 answers.",
      options: [
        "A. Review data quality reports and dashboards.",
        "B. Install and run data quality analysis dashboard app",
        "C. Use custom objects and fields to identify issues.",
        "D. Export data and check for data completeness outside of Salesforce.",
      ],
      answer: "A,B",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers (UC) has 1,000 accounts and 50,000 opportunities. UC has an enterprise security requirement to export all sales data outside of Salesforce on a weekly basis. The security requirement also calls for exporting key operational data that includes events such as file downloads, logins, logouts, etc. Which two recommended approaches would address the above requirement?",
      options: [
        "A. Use Field Audit History to capture operational data and extract it to on-premise systems.",
        "B. Use Event Monitoring to extract event data to on-premise systems.",
        "C. Use a custom built extract job to extract operational data to on-premise systems.",
        "D. Use Weekly Export to extract transactional data to on-premise systems.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "NTO would like to retrieve their SF orgs meta data programmatically for backup within a various external. Which API is the best fit for accomplishing this task?",
      options: [
        "A. Metadata API",
        "B. SOAP API",
        "C. Tooling API",
        "D. Bulk API in serial mode",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "What should a data architect do to provide additional guidance for users when they enter information in a standard field?",
      options: [
        "A. Create a custom page with help text for user guidance.",
        "B. Add custom help text in default value for the field.",
        "C. Add a label field with help text adjacent to the custom field.",
        "D. Provide custom help text under field properties.",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) has a complex system landscape and is implementing a data governance program for the first time Which two first steps would be appropriate for UC to initiate an assessment of data architecture? Choose 2 answers",
      options: [
        "A. Engage with executive sponsorship to assess enterprise data strategy and goals.",
        "B. Engage with database administrators to assess current database performance metrics.",
        "C. Engage with IT program managers to assess current velocity of projects in the pipeline.",
        "D. Engage with business units and IT to assess current operational systems and data models.",
      ],
      answer: "A,D",
      title: "Question 8",
    },
    {
      content:
        "NTO has implemented salesforce for its sales users. The opportunity management in salesforce is implemented as follows:1. Sales users enter their opportunities in salesforce for forecasting and reporting purposes.2. NTO has a product pricing system (PPS) that is used to update opportunity amount field on opportunities on a daily basis.3. PPS is the trusted source within the NTO for opportunity amount.4. NTO uses opportunity forecast for its sales planning and management.Sales users have noticed that their updates to the opportunity amount field are overwritten when PPS updates their opportunities.How should a data architect address this overriding issue?",
      options: [
        "A. Create a custom field for opportunity amount that PPS updates separating the field that sales user updates.",
        "B. Change PPS integration to update only opportunity amount fields when values is NULL.",
        "C. Create a custom field for opportunity amount that sales users update separating the fields that PPS updates.",
        "D. Change opportunity amount field access to read only for sales users using field level security.",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers wants to automatically archive all inactive Account data that is older than 3 years. The information does not need to remain accessible within the application. Which two methods should be recommended to meet this requirement? Choose 2 answers",
      options: [
        "A. Schedule a weekly export file from the Salesforce UI.",
        "B. Schedule jobs to export and delete using an ETL tool.",
        "C. Schedule jobs to export and delete using the Data Loader.",
        "D. Use the Force.com Workbench to export the data.",
      ],
      answer: "B,C",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers has two systems. Salesforce and an on -premise ERP system. An architect has been tasked with copying Opportunity records to the ERP once they reach a Closed/Won Stage. The Opportunity record in the ERP system will be read-only for all fields copied in from Salesforce. What is the optimal real-time approach that achieves this solution?",
      options: [
        "A. Implement an hourly integration to send Salesforce Opportunities to the ERP system.",
        "B. Implement a Master Data Management system to determine system of record.",
        "C. Implement a workflow rule that sends Opportunity data through Outbound Messaging.",
        "D. Have the ERP poll Salesforce nightly and bring in the desired Opportunities.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "UC is having issues using Informatica Cloud Louder to export +10MOrder records. Each Order record has 10 Order Line Items. What two steps can you take to help correct this? Choose two answers.",
      options: [
        "A. Limit Batch to 10K records",
        "B. Export in multiple batches",
        "C. Export Bulk API in parallel mode",
        "D. Use PK Chunking",
      ],
      answer: "B,D",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers (UC) is implementing Salesforce and will be using Salesforce to track customer complaints, provide white papers on products, and provide subscription based support.Which license type will UC users need to fulfill UC's requirements?",
      options: [
        "A. Salesforce License",
        "B. Sales Cloud License",
        "C. Service Cloud License",
        "D. Lightning Platform Starter License",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "UC has millions of case records with case history and SLA data. UC's compliance team would like historical cases to be accessible for 10 years for Audit purpose.What solution should a data architect recommend?",
      options: [
        "A. Use a custom object to store archived case data.",
        "B. Archive Case data using Salesforce Archiving process",
        "C. Use a custom Big object to store archived case data.",
        "D. Purchase more data storage to support case object",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has an external product master system that syncs product and pricing information with Salesforce. Users have been complaining that they are seeing discrepancies in product and pricing information displayed on the NTO website and Salesforce.As a data architect, which action is recommended to avoid data sync issues?",
      options: [
        "A. Implement a manual process to update the products from an extract from the products master on a weekly basis.",
        "B. Build a custom integration for two-way sync of product and pricing information between product master to Salesforce.",
        "C. Build a custom integration for one-way sync of product and pricing information from product master to Salesforce.",
        "D. Use the Customer 360 data manager to sync product and pricing information from product master database to Salesforce.",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers (UC) owns a complex Salesforce org with many Apex classes, triggers, and automated processes that will modify records if available. UC has identified that, in its current development state, UC runs change of encountering race condition on the same record.What should a data architect recommend to guarantee that records are not being updated at the same time?",
      options: [
        "A. Refactor or optimize classes and trigger for maximum CPU performance.",
        "B. Disable classes or triggers that have the potential to obtain the same record.",
        "C. Migrate programmatic logic to processes and flows.",
        "D. Embed the keywords FOR UPDATE after SOQL statements.",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers has implemented Salesforce for its operations. In order for customers to be created in their MDM solution, the customer record needs to have the following attributes:\n1. First Name\n2. Last Name\n3. Email\nWhich option should the data architect recommend to mandate this when customers are created in Salesforce?",
      options: [
        "A. Configure Page Layout marking attributes as required fields.",
        "B. Build validation in Integration with MDM to check required attributes.",
        "C. Mark Fields for the attributes as required under Setup.",
        "D. Create validation rules to check If the required attributes are entered.",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers (UC) needs to move millions of records from an external enterprise resource planning (ERP) system into Salesforce.What should a data architect recommend to be done while using the Bulk API in serial mode instead of parallel mode?",
      options: [
        "A. Inserting 1 million orders distributed across a variety of accounts with potential lock exceptions.",
        "B. Inserting 1 million orders distributed across a variety of accounts with lock exceptions eliminated and managed.",
        "C. Placing 20 batches on the queue for upset jobs.",
        "D. Leveraging a controlled feed load with 10 batches per job.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "Northern Trail Outfitter has implemented Salesforce for its associates nationwide, Senior management is concerned that the executive dashboard are not reliable for their real-time decision-making. On analysis , the team the following issues with data entered in Salesforce.Information in certain records is incomplete.\nIncorrect entry in certain fields causes records to be excluded in report fitters.Duplicate entries cause incorrect counts.\nWhich three steps should a data architect recommend to address the issues?",
      options: [
        "A. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "B. Build a sales data warehouse with purpose-build data marts for dashboards and senior management reporting.",
        "C. Explore third-party data providers to enrich and augment information entered in salesforce.",
        "D. Leverage Salesforce features, such as validate rules, to avoid incomplete and incorrect records.",
        "E. design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect",
      ],
      answer: "B,C,D",
      title: "Question 19",
    },
    {
      content:
        "Universal Containers is establishing a call center that will use Salesforce. UC receives 10 million calls and creates 100 million cases every month. Cases are linked to a custom call object using lookup relationship. UC would like to run reports and dashboard to better understand different case types being created on calls to better serve customers.\nWhat solution should a data architect recommend to meet the business requirement?",
      options: [
        "A. Leverage big objects to archive records and Einstein Analytics to run reports.",
        "B. Leverage custom objects to store aggregate data and run analytics.",
        "C. Archive records to a data warehouse and run analytics on the data warehouse.",
        "D. Leverage out-of-the-box reports and dashboard on case and interactive voice response (IVR) custom object.",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers (UC) is launching an RFP to acquire a new accounting product available on AppExchange. UC is expecting to issue 5 million invoices per year, with each invoice containing an average of 10 line items. What should UC's Data Architect recommend to ensure scalability?",
      options: [
        "A. Ensure the account product vendor includes Wave Analytics in their offering.",
        "B. Ensure the account product vendor provides a sound data archiving strategy.",
        "C. Ensure invoice line items simply reference existing Opportunity line items.",
        "D. Ensure the accounting product runs 100% natively on the Salesforce platform.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "An Architect needs to document the data architecture for a multi-system, enterprise Salesforce implementation.\nWhich two key artifacts should the Architect use? (Choose two.)",
      options: [
        "A. Non-functional requirements",
        "B. Integration specification",
        "C. Data model",
        "D. User stories",
      ],
      answer: "B,C",
      title: "Question 22",
    },
    {
      content:
        "Northern Trail Outfitters Is planning to build a consent form to record customer authorization for marketing purposes.\nWhat should a data architect recommend to fulfill this requirement?",
      options: [
        "A. Create a custom object to maintain the authorization.",
        "B. Utilize the Authorization Form Consent object to capture the consent.",
        "C. Use AppExchange solution to address the requirement.",
        "D. Use custom fields to capture the authorization details.",
      ],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers (UC) has a data model as shown in the image. The Project object has a private sharing model, and it has Roll -Up summary fields to calculate the number of resources assigned to the project, total hours for the project, and the number of work items associated to the project. What should the architect consider, knowing there will be a large amount of time entry records to be loaded regularly from an external system into Salesforce.com?",
      options: [
        "A. Load all data using external IDs to link to parent records.",
        "B. Use triggers to calculate summary values instead of Roll -Up.",
        "C. Use workflow to calculate summary values instead of Roll -Up.",
        "D. Load all data after deferring sharing calculations.",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "A customer needs a sales model that allows the following:\nOpportunities need to be assigned to sales people based on the zip code.\nEach sales person can be assigned to multiple zip codes.\nEach zip code is assigned to a sales area definition. Sales is aggregated by sales area for reporting.\nWhat should a data architect recommend?",
      options: [
        "A. Assign opportunities using list views using zip code.",
        "B. Allow sales users to manually assign opportunity ownership based on zip code.",
        "C. Configure territory management feature to support opportunity assignment.",
        "D. Add custom fields in opportunities for zip code and use assignment rules.",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers (CU) is in the process of implementing an enterprise data warehouse (EDW). UC needs to extract 100 million records from Salesforce for migration to the EDW.\nWhat data extraction strategy should a data architect use for maximum performance?",
      options: [
        "A. Utilize PK Chunking with the Bulk API.",
        "B. Call the REST API in successive queries.",
        "C. Install a third-party AppExchange tool.",
        "D. Use the Bulk API in parallel mode.",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers (UC) plans to implement consent management for its customers to be compliant with General Data Protection Regulation (GDPR). UC has the following requirements:UC uses Person Accounts and Contacts in Salesforce for its customers.Data Protection and Privacy is enabled in Salesforce.Consent should be maintained in both these objects.UC plans to verify the consent provided by customers before contacting them through email or phone.\nWhich option should the data architect recommend to implement these requirements?",
      options: [
        "A. Use the Consent Management Feature to validate consent provide under the person Account and Contact that is provided by the customer.",
        "B. Configure custom fields in Person Account and Contact to store consent provided by customers, and validate consent against the fields.",
        "C. Build Custom object to store consent information in Person Account and Contact, validate against this object before contacting customers.",
        "D. Delete contact information from customers who have declined consent to be contacted.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers (UC) is implementing a new customer categorization process where customers should be assigned to a Gold, Silver, or Bronze category if they've purchased UC's new support service. Customers are expected to be evenly distributed across all three categories. Currently, UC has around 500,000 customers, and is expecting 1% of existing non-categorized customers to purchase UC's new support service every month over the next five years. What is the recommended solution to ensure long-term performance, bearing in mind the above requirements?",
      options: [
        "A. Implement a new Categories custom object and a master-detail relationship from Account to Category.",
        "B. Implement a new picklist custom field in the Account object with Gold, Silver, and Bronze values.",
        "C. Implement a new global picklist custom field with Gold, Silver, and Bronze values and enable it in Account.",
        "D. Implement a new Categories custom object and create a lookup field from Account to Category.",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers (UC) has deployed Salesforce to manage Marketing. Sales, and Support efforts in a multi -system ERP environment After reaching the limits of native reports & dashboards. UC leadership is looking to understand what options can be used to provide more analytical insights. What two approaches should an architect recommend? Choose 2 answers",
      options: [
        "A. AppExchange Apps",
        "B. Wave Analytics",
        "C. Setup Audit Trails",
        "D. Weekly Snapshots",
      ],
      answer: "A,B",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers (UC) is expecting to have nearly 5 million shipments records in its Salesforce org. Each shipment record has up to 10 child shipment item records. The Shipment custom object has an Organization-wide Default (OWD) sharing model set to Private and the Shipment Item custom object has a Master-Detail relationship to Shipment. There are 25 sharing rules set on the Shipment custom object, which allow shipment records to be shared to each of UC's 25 business areas around the globe. These sharing rules use public groups, one for each business area plus a number of groups for management and support roles. UC has a high turnover of Sales Reps and often needs to move Sales Reps between business areas in order to meet local demand. What feature would ensure that performance, when moving Sales Reps between regions, remains adequate while meeting existing requirements?",
      options: [
        "A. Implement data archiving for old Shipment records.",
        "B. Contact Salesforce to enable Defer Sharing Rules",
        "C. Contact Salesforce to create Skinny tables on Shipment.",
        "D. Configure shipment OWD to Public Read/Write.",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) is concerned about the accuracy of their Customer information in Salesforce. They have recently created an enterprise-wide trusted source MDM for Customer data which they have certified to be accurate. UC has over 20 million unique customer records in the trusted source and Salesforce. What should an Architect recommend to ensure the data in Salesforce is identical to the MDM?",
      options: [
        "A. Load the Trusted Source data into Salesforce and run an Apex Batch job to find difference.",
        "B. Extract the Salesforce data into Excel and manually compare this against the trusted source.",
        "C. Leave the data in Salesforce alone and assume that it will auto-correct itself over time.",
        "D. Use an AppExchange package for Data Quality to match Salesforce data against the Trusted source.",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        'Get Cloudy Consulting needs to evaluate the completeness and consistency of contact information in Salesforce. Their sales reps often have incomplete information about their accounts and contacts. Additionally, they are not able to interpret the information in a consistent manner. Get Cloudy Consulting has identified certain ""key"" fields which are important to their sales reps.\nWhat are two actions Get Cloudy Consulting can take to review their data for completeness and consistency? (Choose two.)',
      options: [
        "A. Run a report which shows the last time the key fields were updated.",
        "B. Run one report per key field, grouped by that field, to understand its data variability.",
        "C. Run a report that shows the percentage of blanks for the important fields.",
        "D. Run a process that can fill in default values for blank fields.",
      ],
      answer: "A,C",
      title: "Question 32",
    },
    {
      content:
        "Which three characteristics of a Skinny table help improve report and query performance?",
      options: [
        "A. Skinny tables provide a view across multiple objects for easy access to combined data.",
        "B. Skinny tables can contain frequently used fields and thereby help avoid joins.",
        "C. Skinny tables are kept in sync with changes to data in the source tables.",
        "D. Skinny tables do not include records that are available in the recycle bin.",
        "E. Skinny tables can be used to create custom indexes on multi-select picklist fields.",
      ],
      answer: "A,B,C",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers (UC) loads bulk leads and campaigns from third-party lead aggregators on a weekly and monthly basis. The expected lead record volume is 500K records per week, and the expected campaign records volume is 10K campaigns per week. After the upload, Lead records are shared with various sales agents via sharing rules and added as Campaign members via Apex triggers on Lead creation. UC agents work on leads for 6 months, but want to keep the records in the system for at least 1 year for reference. Compliance requires them to be stored for a minimum of 3 years. After that, data can be deleted. What statement is true with respect to a data archiving strategy for UC?",
      options: [
        "A. UC can leverage the Salesforce Data Backup and Recovery feature for data archival needs.",
        "B. UC can leverage recycle bin capability, which guarantees record storage for 15 days after deletion.",
        'C. UC can leverage a "tier"-based approach to classify the record storage need.',
        "D. UC can store long-term lead records in custom storage objects to avoid counting against storage limits.",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "What 2 data management policies does the data classification feature allow customers to classify in salesforce? Choose 2 answers:",
      options: [
        "A. Data sensitivity level",
        "B. Reference data policy.",
        "C. Data governance policy.",
        "D. Compliance categorization policy.",
      ],
      answer: "A,D",
      title: "Question 35",
    },
    {
      content:
        "NTO has 1 million customer records spanning 25 years. As part of its new SF project, NTO would like to create a master data management strategy to help preserve the history and relevance of its customer data.Which 3 activities will be required to identify a successful master data management strategy? Choose 3 answers:",
      options: [
        "A. Define the systems of record for critical data",
        "B. Choose a Business Intelligence tool.",
        "C. Install a data warehouse",
        "D. Identify data to be replicated",
        "E. Create a data archive strategy",
      ],
      answer: "A,D,E",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers (UC) has multi -level account hierarchies that represent departments within their major Accounts. Users are creating duplicate Contacts across multiple departments. UC wants to clean the data so as to have a single Contact across departments. What two solutions should UC implement to cleanse their data? Choose 2 answers",
      options: [
        "A. Use Workflow rules to standardize Contact information to identify and prevent duplicates.",
        "B. Make use of a third -party tool to help merge duplicate Contacts across Accounts.",
        "C. Make use of the Merge Contacts feature of Salesforce to merge duplicates for an Account.",
        "D. Use Data.com to standardize Contact address information to help identify duplicates.",
      ],
      answer: "B,D",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers (UC) is migrating data from legacy system to Salesforce. During data analysis it was discovered that data types of fields being migrated do not match with Salesforce data types.\nWhich solution should a data architect use to ensure successful data migrations?",
      options: [
        "A. Migrate legacy data to a staging database for mapping then leverage an ETL tool to transform the data and load into Salesforce.",
        "B. Export legacy data into CSV files and leverage data loader to load data into Salesforce.",
        "C. Migrate the legacy data leveraging an ETL tool to transform data types and load data into Salesforce.",
        "D. Export legacy data into the staging database and leverage stored procedures to transform data types before loading into Salesforce.",
      ],
      answer: "C",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.\nWhat does UC need to do to ensure users have access to its notices and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Attachments in Lighting Experience.",
        "B. Migrate Notes and Attachment to Enhanced Notes and Files a migration tool",
        "C. Manually upload Notes in Lighting Experience.",
        "D. Add Notes and Attachments Related List to page Layout in Lighting Experience.",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers (UC) has a multi-level master-detail relationship for opportunities, a custom opportunity line item object, and a custom discount request. UC has opportunity as master and custom line item object as detail in master-detail relationship. UC also has a custom line item object as master and a custom discount request object as detail in another master-detail relationship. UC has a requirement to show all sums of discounts across line items at an opportunity level. What is the recommended solution to address these requirements?",
      options: [
        "A. Use roll-up for the line-item-level summary and a trigger for the opportunity amount summary, as only one level roll-up is allowed.",
        "B. Roll-up discount request amount at the line-item-level and line-item-level summary discount at the opportunity level.",
        "C. Remove the master-detail relationships and rely completely on workflow/triggers to summarize the discount amount.",
        "D. Update the master-detail relationships to lookup relationships in order to allow the discount amount to roll up.",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers (UC) owns several Salesforce orgs across a variety of business units. UC management has declared that it needs the ability to report on Accounts and Opportunities from each org in one place. Once the data is brought together into a global view, management would like to use advanced Al-driven analytics on the dataset.\nWhich tool should a data architect recommend to accomplish this reporting requirement?",
      options: [
        "A. Use Einstein Analytics for multi-org.",
        "B. Run standard reports and dashboards.",
        "C. Install a third-party AppExchange tool for multi-org reporting.",
        "D. Write a Python script to aggregate and visualize the data.",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "A large automobile manufacturer has decided to use Salesforce as its CRM. It needs to maintain the following dealer types in their CRM:Local dealersRegional distributorState distributorService dealerThe attributes are different for each of the customer types. The CRM users should be allowed to enter only attributes related to the customer types. The processes and business rules for each of the customer types could be different.\nHow should the different dealers be maintained in Salesforce?",
      options: [
        "A. Use Accounts for dealers and custom picklist field for each of the dealer types",
        "B. Create dealers as Accounts, and build custom views for each of the dealer types.",
        "C. Use Accounts for dealers, and create record types for each of the dealer types.",
        "D. Create Custom objects for each dealer types and custom fields for dealer attributes.",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "The head of sales at Get Cloudy Consulting wants to understand key relevant performance figures and help managers take corrective actions where appropriate.\nWhat is one reporting option Get Cloudy Consulting should consider?",
      options: [
        "A. Lead conversion rate report",
        "B. Sales KPI Dashboard",
        "C. Opportunity analytic snapshot",
        "D. Case SLA performance report",
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has the following systems:Customer master-source of truth for customer informationService cloud-customer supportMarketing cloud-marketing supportEnterprise data warehouse-business reportingThe customer data is duplicated across all these system and are not kept in sync. Customers are also complaining that they get repeated marketing emails and have to call into update their information.NTO is planning to implement master data management (MDM) solution across the enterprise.\nWhich three data will an MDM tool solve? Choose 3 answers",
      options: [
        "A. Data accuracy and quality",
        "B. Data standardization",
        "C. Data duplication",
        "D. Data completeness",
        "E. Data loss and recovery",
      ],
      answer: "A,B,C",
      title: "Question 44",
    },
    {
      content:
        "Based on government regulations, a Salesforce customer plans to implement the following in Salesforce for compliance:Access to customer information based on record ownershipAbility for customers to request removal of their information from Salesforce Prevent users from accessing Salesforce from outside company network (virtual private network, or VPN) What should a data architect recommend to address these requirements?",
      options: [
        "A. Implement Salesforce shield with Event Monitoring to address the requirement.",
        "B. Contact Salesforce support to restrict access only with VPN and other requirements",
        "C. Allow users access to Salesforce through a custom web application hosted within VPN.",
        "D. Implement IP restrictions, sharing settings, and custom Apex to support customer requests.",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "Northern Trail outfitters in migrating to salesforce from a legacy CRM system that identifies the agent relationships in a look-up table.\nWhat should the data architect do in order to migrate the data to Salesfoce?",
      options: [
        "A. Migrate the data and assign to a non-person system user.",
        "B. Migrate to Salesforce without a record owner.",
        "C. Create custom objects to store agent relationships.",
        "D. Assign record owner based on relationship.",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "Northern Trail Outfitters needs to implement an archive solution for Salesforce dat a. This archive solution needs to help NTO do the following:1. Remove outdated Information not required on a day-to-day basis.2. Improve Salesforce performance.Which solution should be used to meet these requirements?",
      options: [
        "A. Create a full copy sandbox, and use it as a source for retaining archived data.",
        "B. Use a formula field that shows true when a record reaches a defined age and use that field to run a report and export a report into SharePoint.",
        "C. Identify a location to store archived data and use scheduled batch jobs to migrate and purge the aged data on a nightly basis,",
        "D. Identify a location to store archived data, and move data to the location using a time-based workflow.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers (UC) is migrating from a legacy system to Salesforce CRM, UC is concerned about the quality of data being entered by users and through external integrations.\nWhich two solutions should a data architect recommend to mitigate data quality issues?",
      options: [
        "A. Leverage picklist and lookup fields where possible",
        "B. Leverage Apex to validate the format of data being entered via a mobile device.",
        "C. Leverage validation rules and workflows.",
        "D. Leverage third-party- AppExchange tools",
      ],
      answer: "A,C",
      title: "Question 48",
    },
    {
      content:
        "A casino is implementing salesforce and is planning to build a customer 360 view for a customer who visits its resorts. The casino currently maintained the following systems that records customer activity:1. Point of sales system: All purchases for a customer.2. Salesforce: All customer service activity and sales activity for a customer.3. Mobile app: All bookings, preferences and browser activity for a customer.4. Marketing: All email, SMS and social campaigns for a customer.Customer service agents using salesforce would like to view the activities from all system to provide supports to customers. The information has to be current and real time.\nWhat strategy should the data architect implement to satisfy this requirement?",
      options: [
        "A. Periodically upload summary information in salesforce to build 360 view.",
        "B. Migrate customer activities from all 4 systems into salesforce.",
        "C. Use a customer data mart to view the 360 view of customer.",
        "D. Explore external data sources in salesforce to build 360 view of customer.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "UC is migrating data from legacy system to SF. UC would like to preserve the following information on records being migrated:Date time stamps for created date and last modified date.Ownership of records belonging to inactive users being migrated to Salesforce.\nWhich 2 solutions should a data architect recommends to preserve the date timestamps and ownership on records? Choose 2 answers.",
      options: [
        "A. Enable Set Audit fields upon Record Creation Permission",
        "B. Enable update records with Inactive Owners Permission",
        "C. Enable modify all and view all permission.",
        "D. Log a case with SF to update these fields",
      ],
      answer: "A,B",
      title: "Question 50",
    },
    {
      content:
        "A large telecommunication provider that provides internet services to both residence and business has the following attributes:A customer who purchases its services for their home will be created as an Account in Salesforce.Individuals within the same house address will be created as Contact in Salesforce.Businesses are created as Accounts in Salesforce.Some of the customers have both services at their home and business.\nWhat should a data architect recommend for a single view of these customers without creating multiple customer records?",
      options: [
        "A. Costumers are created as Accounts for Residence Account and use Parent Account to relate Business Account.",
        "B. Customers are created as Person Accounts and related to Business and Residential Accounts using the Account Contact relationship.",
        "C. Customers are created as Contacts and related to Business and Residential Accounts using the Account Contact Relationships.",
        "D. Customer are created as individual objects and relate with Accounts for Business and Residence accounts.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers (UC) requires 2 years of customer related cases to be available on SF for operational reporting. Any cases older than 2 years and upto 7 years need to be available on demand to the Service agents. UC creates 5 million cases per yr.\nWhich 2 data archiving strategies should a data architect recommend? Choose 2 options:",
      options: [
        "A. Sync cases older than 2 years to an external database, and provide access to Service agents to the database",
        "B. Use custom objects for cases older than 2 years and use nightly batch to move them.",
        "C. Use Big objects for cases older than 2 years, and use nightly batch to move them.",
        "D. Use Heroku and external objects to display cases older than 2 years and bulk API to hard delete from Salesforce.",
      ],
      answer: "C,D",
      title: "Question 52",
    },
    {
      content:
        "Cloud Kicks is launching a Partner Community, which will allow users to register shipment requests that are then processed by Cloud Kicks employees. Shipment requests contain header information, and then a list of no more than 5 items being shipped.First, Cloud Kicks will introduce its community to 6,000 customers in North America, and then to 24,000 customers worldwide within the next two years. Cloud Kicks expects 12 shipment requests per week per customer, on average, and wants customers to be able to view up to three years of shipment requests and use Salesforce reports.\nWhat is the recommended solution for the Cloud Kicks Data Architect to address the requirements?",
      options: [
        "A. Create an external custom object to track shipment requests with five lookup custom fields for each item being shipped. External objects are stored off-platform in Heroku's Postgres database.",
        "B. Create an external custom object to track shipment requests and a child external object to track shipment items. External objects are stored off-platform in Heroku's Postgres database.",
        "C. Create a custom object to track shipment requests with five lookup custom fields for each item being shipped Implement an archiving process that moves data off-platform after three years.",
        "D. Create a custom object to track shipment requests and a child custom object to track shipment items. Implement an archiving process that moves data off-platform after three years.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers (UC) is a business that works directly with individual consumers (B2C). They are moving from a current home-grown CRM system to Salesforce. UC has about one million consumer records. What should the architect recommend for optimal use of Salesforce functionality and also to avoid data loading issues?",
      options: [
        "A. Load all individual consumers as Account records and avoid using the Contact object.",
        "B. Load one Account record and one Contact record for each individual consumer.",
        "C. Create one Account and load individual consumers as Contacts linked to that one Account.",
        "D. Create a Custom Object Individual Consumer c to load all individual consumers.",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Which two aspects of data does an Enterprise data governance program aim to improve?",
      options: [
        "A. Data usability",
        "B. Data distribution",
        "C. Data modeling",
        "D. Data integrity",
      ],
      answer: "A,D",
      title: "Question 55",
    },
    {
      content:
        "A casino is implementing Salesforce and is planning to build a customer 360 degree view for a customer who visits its resorts. The casino currently maintains the following systems that record customer activity: L Point-of-sale system: All purchases for a customer2. Salesforce; All customer service activity and sales activities for a customer3. Mobile app: All bookings, preferences, and browser activity for a customer4. Marketing: All email, SMS, and social campaigns for a customerCustomer service agents using Salesforee would like to view the activities from all four systems to provide support to customers. The information has to be current and real time.What strategy should the data architect implement to satisfy this requirement?",
      options: [
        "A. Migrate customer activities fro, all four system into Salesforce.",
        "B. Explore external data sources in Salesforce to build a 360 degree view of the customer.",
        "C. Periodically upload summary information in Salesforce to build a 360 degree view.",
        "D. Use a customer data mart to create the 360 degree view of the customer.",
      ],
      answer: "B",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers (UC) has implemented Salesforce, UC is running out of storage and needs to have an archiving solution, UC would like to maintain two years of data in Saleforce and archive older data out of Salesforce.\nWhich solution should a data architect recommend as an archiving solution?",
      options: [
        "A. Build a batch join move all records off platform, and delete all records from Salesforce.",
        "B. Build a batch job to move all restore off platform, and delete old records from Salesforce.",
        "C. Use a third-party backup solution to backup all data off platform.",
        "D. Build a batch join to move two-year-old records off platform, and delete records from Salesforce.",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "A Customer is migrating 10 million order and 30 million order lines into Salesforce using Bulk API. The Engineer is experiencing time-out errors or long delays querying parents order IDs in Salesforce before importing related order line items. What is the recommended solution?",
      options: [
        "A. Leverage a sequence of numbers on the imported orders to import related order lines.",
        "B. Query only indexed ID field values on the imported order to import related order lines.",
        "C. Leverage an External ID from source system orders to import related order lines.",
        "D. Leverage Batch Apex to update order ID on related order lines after import.",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers (UC) is in the process of selling half of its company. As part of this split, UC's main Salesforce org will be divided into two org:org A and org B, UC has delivered these requirements to its data architect1. The data model for Org B will drastically change with different objects, fields, and picklist values.2. Three million records will need to be migrated from org A to org B for compliance reasons.3. The migrate will need occur within the next two month, prior to be split.\nWhich migrate strategy should a data architect use to successfully migrate the date?",
      options: [
        "A. Use Data Loader for export and Data Import Wizard for import",
        "B. Write a script to use the Bulk API",
        "C. use as ETL tool to orchestrate the migration.",
        "D. Use the Salesforces CLI to query, export, and import",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "NTO has decided to franchise its brand. Upon implementation, 1000 franchisees will be able to access BTO's product information and track large customer sales and opportunities through a portal. The Franchisees will also be able to run monthly and quarterly sales reports and projections as well as view the reports in dashboards.\nWhich licenses does NTO need to provide these features to the Franchisees?",
      options: [
        "A. Lightning Platform license",
        "B. Salesforce Sales Cloud license",
        "C. Customer Community license",
        "D. Partner Community license",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "NTO uses salesforce to manage relationships and track sales opportunities. It has 10 million customers and 100 million opportunities. The CEO has been complaining 10 minutes to run and sometimes failed to load, throwing a time out error.\nWhich 3 options should help improve the dashboard performance?Choose 3 answers:",
      options: [
        "A. De-normalize the data by reducing the number of joins.",
        "B. Run the dashboard for CEO and send it via email.",
        "C. Use selective queries to reduce the amount of data being returned.",
        "D. Reduce the amount of data queried by archiving unused opportunity records.",
        "E. Remove widgets from the dashboard to reduce the number of graphics loaded.",
      ],
      answer: "A,C,D",
      title: "Question 61",
    },
    {
      content:
        "To avoid creating duplicate Contacts, a customer frequently uses Data Loader to upsert Contact records into Salesforce. What common error should the data architect be aware of when using upsert?",
      options: [
        "A. Errors with records being updated and inserted in the same CSV file.",
        "B. Errors with duplicate external Id values within the same CSV file.",
        "C. Errors when a duplicate Contact name is found cause upsert to fail.",
        "D. Errors with using the wrong external Id will cause the load to fail.",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "Universals Containers' system administrators have been complaining that they are not able to make changes to its users' record, including moving them to new territories without getting \"unable to lock row\" errors. This is causing the system admins to spend hours updating user records every day.\nWhat should the data architect do to prevent the error?",
      options: [
        "A. Analyze Splunk query to spot offending records.",
        "B. Increase CPU for the Salesforce org.",
        "C. Enable granular locking.",
        "D. Reduce number of users updated concurrently.",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "Universal Containers has successfully migrated 50 million records into five different objects multiple times in a full copy sandbox. The Integration Engineer wants to re-run the test again a month before it goes live into Production. What is the recommended approach to re-run the test?",
      options: [
        "A. Truncate all 5 objects quickly and re-run the data migration test.",
        "B. Refresh the full copy sandbox and re-run the data migration test.",
        "C. Truncate all 5 objects and hard delete before running the migration test.",
        "D. Hard delete all 5 objects' data and re-run the data migration test.",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers has deployed Salesforce for case management The company is having difficulty understanding what percentage of cases are resolved from the initial call to their support organization. What first step is recommended to implement a reporting solution to measure the support reps case closure rates?",
      options: [
        "A. Create a report on Case analytic snapshots.",
        "B. Enable field history tracking on the Case object.",
        "C. Install AppExchange packages for available reports.",
        "D. Create Contact and Opportunity Reports and Dashboards.",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers is looking to use Salesforce to manage their sales organization. They will be migrating legacy account data from two aging systems into Salesforce. Which two design considerations should an architect take to minimize data duplication? Choose 2 answers",
      options: [
        "A. Use Salesforce matching and duplicate rules.",
        "B. Clean data before importing to Salesforce.",
        "C. Import the data concurrently.",
        "D. Use a workflow to check and prevent duplicates.",
      ],
      answer: "A,B",
      title: "Question 66",
    },
    {
      content:
        "Company S was recently acquired by Company T. As part of the acquisition, all of the data for the Company S's Salesforce instance (source) must be migrated into the Company T's Salesforce instance (target). Company S has 6 million Case records.\nAn Architect has been tasked with optimizing the data load time.What should the Architect consider to achieve this goal?",
      options: [
        "A. Directly leverage Salesforce-to-Salesforce functionality to load Case data.",
        "B. Pre-process the data, then use Data Loader with SOAP API to upsert with zip compression enabled.",
        "C. Utilize the Salesforce Org Migration Tool from the Setup Data Management menu.",
        "D. Load the data in multiple sets using Bulk API parallel processes.",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers has provided a web order form for its customer and has noticed invalid data coming in on orders.\nWhat should be used to mitigate this problem?",
      options: [
        "A. Formatted Fields",
        "B. Work Flow Rules",
        "C. Validation Rules",
        "D. Apex Trigger",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "UC is migrating individual customers (B2C) data from legacy systems to SF. There are millions of customers stored as accounts and contacts in legacy database.\nWhich object model should a data architect configure within SF?",
      options: [
        "A. Leverage person account object in Salesforce",
        "B. Leverage custom person account object in SF",
        "C. Leverage custom account and contact object in SF",
        "D. Leverage standard account and contact object in SF",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "Which API should a data architect use if exporting 1million records from Salesforce?",
      options: [
        "A. SOAP API",
        "B. Bulk API",
        "C. REST API",
        "D. Streaming API",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "UC is rolling out Sales App globally to bring sales teams together on one platform. UC expects millions of opportunities and accounts to be creates and is concerned about the performance of the application.Which 3 recommendations should the data architect make to avoid the data skew? Choose 3 answers.",
      options: [
        "A. Assign 10000 opportunities to one account.",
        "B. Limit assigning one user 10000 records ownership.",
        "C. Limit associating 10000 opportunities to one account.",
        "D. Use picklist fields rather than lookup to custom object.",
        "E. Limit associating 10000 records looking up to same records.",
      ],
      answer: "B,C,E",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers (UC) is implementing a formal, cross -business -unit data governance program As part of the program, UC will implement a team to make decisions on enterprise -wide data governance. Which two roles are appropriate as members of this team? Choose 2 answers",
      options: [
        "A. Data Domain Stewards",
        "B. Salesforce Administrators",
        "C. Operational Data Users",
        "D. Analytics/BI Owners",
      ],
      answer: "A,D",
      title: "Question 72",
    },
    {
      content:
        "UC migrating 100,000 Accounts from an enterprise resource planning (ERP) to salesforce and is concerned about ownership skew and performance.\nWhich 3 recommendations should a data architect provide to prevent ownership skew? Choose 3 answers:",
      options: [
        "A. Assigned a default user as owner of accounts, and assign role in hierarchy.",
        "B. Assign a default user as owner of account and do not assign any role to default user.",
        "C. Assign a default user as owner of accounts and assigned top most role in hierarchy.",
        'D. Assign "view all" permission on profile to give access to account.',
        "E. Keep users out of public groups that can be used as the source for sharing rules.",
      ],
      answer: "B,C,E",
      title: "Question 73",
    },
    {
      content:
        "Universal Containers (UC) has over 10 million accounts with an average of 20 opportunities with each account. A Sales Executive at UC needs to generate a daily report for all opportunities in a specific opportunity stage. Which two key considerations should be made to make sure the performance of the report is not degraded due to large data volume?",
      options: [
        "A. Number of records returned by report query.",
        "B. Number of queries running at a time.",
        "C. Number of joins used in report query.",
        "D. Number of characters in report query.",
      ],
      answer: "A,C",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers wishes to maintain Lead data from Leads even after they are deleted and cleared from the Recycle Bin. What approach should be implemented to achieve this solution?",
      options: [
        "A. Query Salesforce with the queryAll API method or using the ALL ROWS SOQL keywords.",
        "B. Use a Lead standard report and filter on the IsDeleted standard field.",
        "C. Send data to a Data Warehouse and mark Leads as deleted in that system.",
        "D. Use a Converted Lead report to display data on Leads that have been deleted.",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "A health care provider wishes to use salesforce to track patient care. The following actions are in Salesforce1. Payment Providers: Orgas who pay for the care 2 patients.2. Doctors: They provide care plan for patients and need to support multiple patients, they are provided access to patient information.3. Patients: They are individuals who need care.A data architect needs to map the actor to Sf objects. What should be the optimal selection by the data architect?",
      options: [
        "A. Patients as Person Accounts, Payment providers as Accounts, & Doctors as Contacts",
        "B. Patients as Accounts, Payment providers as Accounts, & Doctors as Person Accounts",
        "C. Patients as Person Accounts, Payment providers as Accounts, & Doctors as Person Account",
        "D. Patients as Contacts, Payment providers as Accounts, & Doctors as Accounts",
      ],
      answer: "C",
      title: "Question 76",
    },
    {
      content:
        "UC has large amount of orders coming in from its online portal. Historically all order are assigned to a generic user.Which 2 measures should data architect recommend to avoid any performance issues while working with large number of order records? Choose 2 answers:",
      options: [
        "A. Create a role at top of role hierarchy and assign the role to the generic user.",
        "B. Clear the role field in the generic user record.",
        "C. Create a pool of generic users and distribute the assignment of memory to the pool of users.",
        "D. Salesforce handles the assignment of orders automatically and there is no performance impact.",
      ],
      answer: "A,B",
      title: "Question 77",
    },
    {
      content:
        "Northern Trail Outfitters has these simple requirements for a data export process:File format should be in CSV.Process should be scheduled and run once per week.The expert should be configurable through the Salesforce UI.Which tool should a data architect leverage to accomplish these requirements?",
      options: [
        "A. Data export wizard",
        "B. Data loader",
        "C. Bulk API",
        "D. Third-party ETL tool",
      ],
      answer: "A",
      title: "Question 78",
    },
    {
      content:
        "UC has a variety of systems across its technology landscape, including SF, legacy enterprise resource planning (ERP) applications and homegrown CRM tools. UC has decided that they would like to consolidate all customer, opportunity and order data into Salesforce as part of its master data management (MDM) strategy.What are the 3 key steps that a data architect should take when merging data from multiple systems into Salesforce? Choose 3 answers:",
      options: [
        "A. Create new fields to store additional values from all the systems.",
        "B. Utilize an ETL tool to merge, transform and de-duplicate data.",
        "C. Work with Stakeholders to define record and field survivorship rules",
        "D. Install a 3rd party AppExchange tool to handle the merger",
        "E. Analyze each system's data model and perform gap analysis",
      ],
      answer: "B,C,E",
      title: "Question 79",
    },
    {
      content:
        "Cloud Kicks has the following requirements:- Data needs to be sent from Salesforce to an external system to generate invoices from their Order Management System (OMS).- A Salesforce administrator must be able to customize which fields will be sent to the external system without changing code.What are two approaches for fulfilling these requirements? (Choose two.)",
      options: [
        "A. A Field Set that determines which fields to send in an HTTP callout.",
        "B. Enable the field -level security permissions for the fields to send.",
        "C. An Outbound Message to determine which fields to send to the OMS.",
        "D. A set<sobjectFieldset> to determine which fields to send in an HTTP callout.",
      ],
      answer: "A,C",
      title: "Question 80",
    },
    {
      content:
        "Universal Container (UC) has accumulated data over years and has never deleted data from its Salesforce org. UC is now exceeding the storage allocations in the org. UC is now looking for option to delete unused from the org.Which three recommendations should a data architect make is order to reduce the number of records from the org?Choose 3 answers",
      options: [
        "A. Use Rest API to permanently delete records from the Salesforce org.",
        "B. Archive the records in enterprise data warehouse (EDW) before deleting from Salesforce.",
        "C. Use hard delete in batch Apex to permanently delete records from Salesforce.",
        "D. Identify records in objects that have not been modified or used In last 3 years.",
        "E. Use hard delete in Bulk API to permanently delete records from Salesforce.",
      ],
      answer: "B,D,E",
      title: "Question 81",
    },
    {
      content:
        "NTO has multiple systems across its enterprise landscape including salesforce, with disparate version the customer records.In salesforce, the customer is represented by the contact object.NTO utilizes an MDM solution with these attributes:1. The MDM solution keeps track of customer master with a master key.2. The master key is a map to the record ID's from each external system that customer data is stored within.3. The MDM solution provides de-duplication features, so it acts as the single source of truth.How should a data architect implement the storage of master key within salesforce?",
      options: [
        "A. Create an external object to store the master key with a lookup field to contact.",
        "B. Store the master key in Heroku postgres and use Heroku connect for synchronization.",
        "C. Store the master key on the contact object as an external ID (Field for referential imports)",
        "D. Create a custom object to store the master key with a lookup field to contact.",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers has a public website with several forms that create Lead records in Salesforce using the REST API. When designing these forms, which two techniques will help maintain a high level of data quality?",
      options: [
        "A. Do client-side validation of phone number and email field formats.",
        "B. Ensure the website visitor is browsing using an HTTPS connection.",
        "C. Prefer picklist form fields over free text fields, where possible.",
        "D. Use cookies to track when visitors submit multiple forms.",
      ],
      answer: "A,C",
      title: "Question 83",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has a variety of customers that include householder, businesses, and individuals.The following conditions exist within its system:NTO has a total of five million customers.Duplicate records exist, which is replicated across many systems, including Salesforce.Given these conditions, there is a lack of consistent presentation and clear identification of a customer record.Which three option should a data architect perform to resolve the issues with the customer data?",
      options: [
        "A. Invest in data duplicate tool to de-dupe and merge duplicate records across all systems.",
        "B. Duplicate customer records across the system and provide a two-way sync of data between the systems.",
        "C. Use Salesforce CDC to sync customer data cross all systems to keep customer record in sync.",
        "D. Create a customer master database external to Salesforce as a system of truth and sync the customer data with all systems.",
        "E. Create a unique global customer ID for each customer and store that in all system for referential identity.",
      ],
      answer: "A,D,E",
      title: "Question 84",
    },
    {
      content:
        "Universal Containers (UC) wants to store product data in Salesforce, but the standard Product object does not support the more complex hierarchical structure which is currently being used in the product master system. How can UC modify the standard Product object model to support a hierarchical data structure in order to synchronize product data from the source system to Salesforce?",
      options: [
        "A. Create a custom master-detail field on the standard Product to reference the child record in the hierarchy.",
        "B. Create an Apex trigger to synchronize the Product Family standard picklist field on the Product object.",
        "C. Create a custom lookup field on the standard Product to reference the parent record in the hierarchy.",
        "D. Create a custom lookup filed on the standard Product to reference the child record in the hierarchy.",
      ],
      answer: "C",
      title: "Question 85",
    },
    {
      content:
        'Universal Containers has a rollup summary field on account to calculate the number of contacts associated with an account. During the account load, Salesforce is throwing an "UNABLE _TO_LOCK_ROW" error.Which solution should a data architect recommend to resolve the error?',
      options: [
        "A. Leverage Data Loader's platform API to load data.",
        "B. Defer rollup summary field calculation during data migration.",
        "C. Perform a batch job in parallel mode and reduce the batch size.",
        "D. Perform a batch job in serial mode and reduce the batch size.",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "Universal Container has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master Sales team are complaining about duplicate account and data quality issues with account data.Which two solution should a data architect recommend to resolve the complaints?",
      options: [
        "A. Implement a de-dupe solution and establish account ownership in Salesforce",
        "B. Build a nightly sync job from ERP to Salesforce.",
        "C. Build a nightly batch job to de-dupe data, and merge account records.",
        "D. Integrate Salesforce with ERP, and make ERP as system of truth.",
      ],
      answer: "A,D",
      title: "Question 87",
    },
    {
      content:
        "US is implementing salesforce and will be using salesforce to track customer complaints, provide white papers on products and provide subscription (Fee) - based support.Which license type will US users need to fulfil US's requirements?",
      options: [
        "A. Salesforce license.",
        "B. Service cloud license.",
        "C. Sales cloud license",
        "D. Lightning platform starter license.",
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "Ursa Major Solar has defined a new Data Quality Plan for their Salesforce data.Which two approaches should an Architect recommend to enforce the plan throughout the organization? (Choose two.)",
      options: [
        "A. Enforce critical business processes by using Workflow, Validation Rules, and Apex code.",
        "B. Ensure all data is stored in an external system and set up an integration to Salesforce for view-only access.",
        "C. Schedule a weekly dashboard displaying records that are missing information to be sent to managers for review.",
        "D. Schedule reports that will automatically catch duplicates and merge or delete the records every week.",
      ],
      answer: "A,C",
      title: "Question 89",
    },
    {
      content:
        "DreamHouse Realty has 15 million records in the Order_c custom object. When running a bulk query, the query times out.What should be considered to address this issue?",
      options: [
        "A. Streaming API",
        "B. Tooling API",
        "C. Metadata API",
        "D. PK Chunking",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "NTO has been using salesforce for sales and service for 10 years. For the past 2 years, the marketing group has noticed a raise from 0 to 35 % in returned mail when sending mail using the contact information stored in salesforce.Which solution should the data architect use to reduce the amount of returned mails?",
      options: [
        "A. Email all customer and asked them to verify their information and to call NTO if their address is incorrect.",
        "B. Have the sales team to call all existing customers and ask to verify the contact details.",
        "C. Use a 3rd-party data source to update contact information in salesforce.",
        "D. Delete contacts when the mail is returned to save postal cost to NTO.",
      ],
      answer: "C",
      title: "Question 91",
    },
    {
      content:
        "Universal Containers (UC) has built a custom application on Salesforce to help track shipments around the world. A majority of the shipping records are stored on premise in an external data source. UC needs shipment details to be exposed to the custom application, and the data needs to be accessible in real time. The external data source is not OData enabled, and UC does not own a middleware tool.Which Salesforce Connect procedure should a data architect use to ensure UC's requirements are met?",
      options: [
        "A. Migrate the data to Heroku and register Postgres as a data source.",
        "B. Develop a process that calls an inviable web service method.",
        "C. Write a custom adapter with the Apex Connector Framework.",
        "D. Write an Apex class that makes a REST callout to the external API.",
      ],
      answer: "C",
      title: "Question 92",
    },
    {
      content:
        "North Trail Outfitters (NTO) operates a majority of its business from a central Salesforce org, NTO also owns several secondary orgs that the service, finance, and marketing teams work out of, At the moment, there is no integration between central and secondary orgs, leading to data-visibility issues.Moving forward, NTO has identified that a hub-and-spoke model is the proper architect to manage its data, where the central org is the hub and the secondary orgs are the spokes.Which tool should a data architect use to orchestrate data between the hub org and spoke orgs?",
      options: [
        "A. Develop custom APIs to poll the hub org for change data and push into the spoke orgs.",
        "B. A backup and archive solution that extracts and restores data across orgs.",
        "C. A middleware solution that extracts and distributes data across both the hub and spokes.",
        "D. Develop custom APIs to poll the spoke for change data and push into the org.",
      ],
      answer: "C",
      title: "Question 93",
    },
    { content: "", options: [], answer: "", title: "" },
    {
      content:
        "Universal Containers (UC) is using Salesforce Sales & Service Cloud for B2C sales and customer service but they are experiencing a lot of duplicate customers in the system. Which are two recommended approaches for UC to avoid duplicate data and increase the level of data quality?",
      options: [
        "A. Use Data.com Clean",
        "B. Use a data wharehouse.",
        "C. Use an Enterprise Service Bus.",
        "D. Use Duplicate Management.",
      ],
      answer: "A,D",
      title: "Question 95",
    },
    {
      content:
        "A customer is facing locking issued when importing large data volumes of order records that are children in a master-detail relationship with the Account object. What is the recommended way to avoid locking issues during import?",
      options: [
        "A. Import Account records first followed by order records after sorting order by OrderID.",
        "B. Import Order records and Account records separately and populate AccountID in orders using batch Apex.",
        "C. Import Account records first followed by order records after sorting orders by AccountID.",
        "D. Change the relationship to Lookup and update the relationship to master-detail after import.",
      ],
      answer: "C",
      title: "Question 96",
    },
    {
      content:
        "A large automobile company has implemented Salesforce for its sales associates. Leads flow from its website to Salesforce using a batch integration in Salesforce. The batch job converts the leads to Accounts in Salesforce. Customers visiting their retail stores are also created in Salesforce as Accounts.The company has noticed a large number of duplicate Accounts in Salesforce. On analysis, it was found that certain customers could interact with its website and also visit the store. The sales associates use Global Search to search for customers in Salesforce before they create the customers.Which option should a data architect choose to implement to avoid duplicates?",
      options: [
        "A. Implement an MDM solution to validate the customer information before creating Salesforce.",
        "B. leverage duplicate rules in Salesforce to validate duplicates during the account creation process.",
        "C. Build a custom search functionality that allows sales associates to search for customer in real time upon visiting their retail stores.",
        "D. Develop an Apex class that searches for duplicates and removes them nightly.",
      ],
      answer: "B",
      title: "Question 97",
    },
    {
      content:
        "An architect has been asked by a client to develop a solution that will integrate data and resolve duplicates and discrepancies between Salesforce and one or more external systems. What two factors should the architect take into consideration when deciding whether or not to use a Master Data Management system to achieve this solution?Choose 2 answers",
      options: [
        "A. Whether the system of record changes for different tables.",
        "B. Whether or not Salesforce replaced a legacy CRM.",
        "C. Whether the systems are cloud -based or on -premise.",
        "D. The number of systems that are integrating with each other.",
      ],
      answer: "A,D",
      title: "Question 98",
    },
    {
      content:
        "Northern Trail Outfitters is concerned because some of its data is sensitive and needs to be identified for access.What should be used to provide ways to filter and identify the sensitive data?",
      options: [
        "A. Define data classification metadata.",
        "B. Define data grouping metadata.",
        "C. Implement field-level security.",
        "D. Custom checkbox denoting sensitive data.",
      ],
      answer: "A",
      title: "Question 99",
    },
    {
      content:
        "Universal Containers (UC) has implemented Sales Cloud and it has been noticed that Sales reps are not entering enough data to run insightful reports and dashboards. UC executives would like to monitor and measure data quality metrics. What solution addresses this requirement?",
      options: [
        "A. Use custom objects and fields to calculate data quality.",
        "B. Export the data to an enterprise data warehouse and use BI tools for data quality.",
        "C. Generate reports to view the quality of sample data.",
        "D. Use third-party AppExchange tools to monitor and measure data quality.",
      ],
      answer: "D",
      title: "Question 100",
    },
    {
      content:
        "Universal Containers has multiple systems all containing and maintaining customer dat a. Although point-to-point integrations are in place, customers are complaining about consistency in the data.What solution should the data architect recommend?",
      options: [
        "A. Improve existing point-to-point integrations",
        "B. An MDM solution as the customer master, with centralized integrations to ensure consistency across all systems.",
        "C. Perform a onetime synchronization to level set the built up inconsistencies",
        "D. Data cleanse each system",
      ],
      answer: "B",
      title: "Question 101",
    },
    {
      content:
        "Universal Containers (UC) has implemented a master data management strategy, which uses a central system of truth, to ensure the entire company has the same customer information in all systems. UC customer data changes need to be accurate at all times in all of the systems. Salesforce is the identified system of record for this information.What is the correct solution for ensuring all systems using customer data are kept up to date?",
      options: [
        "A. Send customer record changes from Salesforce to the system of truth in real time.",
        "B. Send customer record changes from Salesforce to each system in a nightly batch job.",
        "C. Send customer data nightly to the system of truth in a scheduled batch job.",
        "D. Have each system pull the record changes from Salesforce using change data capture.",
      ],
      answer: "D",
      title: "Question 102",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has implemented Salesforce for its sales users. The opportunity management in Saiesforce Is implemented as follows:1. Sales users enter their opportunities in Salesforce for forecasting and reporting purposes.2. NTO has a product pricing system (PPS) that is used to update the Opportunity Amount field on opportunities on a daily basis.3. PPS is the trusted source within NTO for Opportunity Amount.4. NTO uses Opportunity Forecast for its sales planning and management.Sales users have noticed that their updates to the Opportunity Amount field are overwritten when PPS updates their opportunities.How should a data architect address this overwriting issue?",
      options: [
        "A. Change PSS integration to update only Opportunity Amount field when the value is null.",
        "B. Create a custom field for Opportunity amount that sales users update separating the field that PPS updates.",
        "C. Change Opportunity Amount field access to Read Only for sales users field-level security.",
        "D. Create a custom field for Opportunity amount that PSS updates separating the field sales user updates.",
      ],
      answer: "C",
      title: "Question 103",
    },
    {
      content:
        "A large insurance provider is looking to implement Salesforce. The following exist.1. Multiple channel for lead acquisition2. Duplication leads across channels3. Poor customer experience and higher costsOn analysis, it found that there are duplicate leads that are resulting to mitigate the issues?",
      options: [
        "A. Implement de-duplication strategy to prevent duplicate leads",
        "B. Build process is manually search and merge duplicates.",
        "C. Build a custom solution to identify and merge duplicate leads.",
        "D. Implement third-party solution to clean and event lead data.",
        "E. Standard lead information across all channels.",
      ],
      answer: "A,D,E",
      title: "Question 104",
    },
    {
      content:
        "As part of addressing general data protection regulation (GDPR) requirements, UC plans to implement a data classification policy for all its internal systems that stores customer information including salesforce.What should a data architect recommend so that UC can easily classify consumer information maintained in salesforce under both standard and custom objects?",
      options: [
        "A. Create a custom picklist field to capture classification of information on customer.",
        "B. Build reports for customer information and validate.",
        "C. Use data classification metadata fields available in field definition.",
        "D. Use App Exchange products to classify fields based on policy.",
      ],
      answer: "C",
      title: "Question 105",
    },
    {
      content:
        "As part of a phased Salesforce rollout. there will be 3 deployments spread out over the year. The requirements have been carefully documented. Which two methods should an architect use to trace back configuration changes to the detailed requirements? Choose 2 answers",
      options: [
        "A. Maintain a data dictionary with the justification for each field.",
        "B. Put the business purpose in the Description of each field.",
        "C. Use the Force.com IDE to save the metadata files in source control.",
        "D. Review the setup audit trail for configuration changes.",
      ],
      answer: "A,B",
      title: "Question 106",
    },
    {
      content:
        "Universal Containers (UC) maintains a collection of several million Account records that represent business in the United Sates. As a logistics company, this list is one of the most valuable and important components of UC's business, and the accuracy of shipping addresses is paramount. Recently it has been noticed that too many of the addresses of these businesses are inaccurate, or the businesses don't exist. Which two scalable strategies should UC consider to improve the quality of their Account addresses?",
      options: [
        "A. Integrate with a third-party database or services for address validation and enrichment.",
        "B. Build a team of employees that validate Accounts by searching the web and making phone calls.",
        "C. Leverage Data.com Clean to clean up Account address fields with the D&B database.",
        "D. Contact each business on the list and ask them to review and update their address information.",
      ],
      answer: "A,C",
      title: "Question 107",
    },
    {
      content:
        "Universal Container (US) is replacing a home grown CRM solution with Salesforce, UC has decided to migrate operational (Open and active) records to Salesforce, while keeping historical records in legacy system, UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Bring all data Salesforce, and delete it after a year.",
        "B. Build a chair solution to go the legacy system and display records.",
        "C. Leverage real-time integration to pull records into Salesforce.",
        "D. Leverage mashup to display historical records in Salesforce.",
      ],
      answer: "D",
      title: "Question 108",
    },
    {
      content:
        "Northern trail Outfitters (NTO) uses Sales Cloud and service Cloud to manage sales and support processes. Some of NTOs team are complaining they see new fields on their page unsure of which values need be input. NTO is concerned about lack of governance in making changes to Salesforce.Which governance measure should a data architect recommend to solve this issue?",
      options: [
        "A. Create and manage a data dictionary and ups a governance process for changes made to common objects.",
        "B. Create reports to identify which users are leaving blank, and use external data sources o agreement the missing data.",
        "C. Create validation rules with error messages to explain why the fields is used",
        "D. Add description fields to explain why the field is used, and mark the field as required.",
      ],
      answer: "A",
      title: "Question 109",
    },
    {
      content:
        "Universal Containers is setting up an external Business Intelligence (BI) system and wants to extract 1,000,000 Contact records. What should be recommended to avoid timeouts during the export process?",
      options: [
        "A. Use GZIP compression to export the data.",
        "B. Schedule a Batch Apex job to export the data.",
        "C. Use the SOAP API to export data.",
        "D. Utilize the Bulk API to export the data.",
      ],
      answer: "A",
      title: "Question 110",
    },
    {
      content:
        "Developers at Universal Containers need to build a report for the business which displays Accounts opened in the past year grouped by industry. This report will also include information from contacts, opportunities, and orders. There are several million Accounts in the system. Which two options should be recommended to make this report perform well and satisfy the business need?",
      options: [
        "A. Use unbounded date ranges to filter the report.",
        "B. Use triggers to populate denormalized related fields on the Account.",
        "C. Use Formula fields to surface information I related entities on the report.",
        "D. Use an indexed data field with bounded data filters.",
      ],
      answer: "A,D",
      title: "Question 111",
    },
    {
      content:
        "Universal Container is using Salesforce for Opportunity management and enterprise resource planning (ERP) for order management. Sales reps do not have access to the ERP and have no visibility into order status.What solution a data architect recommends to give the sales team visibility into order status?",
      options: [
        "A. Build real-time integration to pull order line items into Salesforce when viewing orders.",
        "B. Leverage Canvas to bring the order management UI in to the Salesforce tab.",
        "C. leverage Salesforce Connect top bring the order line item from the legacy system to Salesforce.",
        "D. Build batch jobs to push order line items to salesforce.",
      ],
      answer: "C",
      title: "Question 112",
    },
    {
      content:
        "Universal Containers (UC) has lead assignment rules to assign leads to owners. Leads not routed by assignment rules are assigned to a dummy user. Sales rep are complaining of high load times and issues with accessing leads assigned to the dummy user.What should a data architect recommend to solve these performance issues?",
      options: [
        "A. Create multiple dummy user and assign leads to them",
        "B. Periodically delete leads to reduce number of leads",
        "C. Assign dummy user last role in role hierarchy",
        "D. Assign dummy user to highest role in role hierarchy",
      ],
      answer: "A",
      title: "Question 113",
    },
    {
      content:
        "UC needs to load a large volume of leads into salesforce on a weekly basis. During this process the validation rules are disabled.What should a data architect recommend to ensure data quality is maintained in salesforce.",
      options: [
        "A. Allow validation rules to be activated during the load of leads into salesforce.",
        "B. Develop custom APEX batch process to improve quality once the load is completed.",
        "C. Ensure the lead data is preprocessed for quality before loading into salesforce.",
        "D. Activate validation rules once the leads are loaded into salesforce to maintain quality.",
      ],
      answer: "B",
      title: "Question 114",
    },
    {
      content:
        "Due to security requirements, Universal Containers needs to capture specific user actions, such as login, logout, file attachment download, package install, etc. What is the recommended approach for defining a solution for this requirement?",
      options: [
        "A. Use a third-party AppExchange app to capture changes.",
        "B. Use Event Monitoring to capture these changes.",
        "C. Use a field audit trail to capture field changes.",
        "D. Use a custom object and trigger to capture changes.",
      ],
      answer: "B",
      title: "Question 115",
    },
  ],
});