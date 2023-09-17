window.testContent = window.testContent || [];
var testId = "Salesforce.Data-Architect";
var testName = "Salesforce.Data-Architect";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Data-Architect.v2023-03-15.q77",
  content: [
    {
      content:
        "NTO (Northern Trail Outlets) has a complex Salesforce org which has been developed over past 5 years. Internal users are complaining abt multiple data issues, including incomplete and duplicate data in the org. NTO has decided to engage a data architect to analyze and define data quality standards.\n       Which 3 key factors should a data architect consider while defining data quality standards? Choose 3 answers:",
      options: [
        "A. Measure data timeliness and consistency",
        "B. Measure data completeness and accuracy",
        "C. Define key fields in staging database for data cleansing",
        "D. Define data duplication standards and rules",
        "E. Finalize an extract transform load (ETL) tool for data migration",
      ],
      answer: "A,B,D",
      title: "Question 1",
    },
    {
      content:
        "Cloud Kicks is launching a Partner Community, which will allow users to register shipment requests that are then processed by Cloud Kicks employees. Shipment requests contain header information, and then a list of no more than 5 items being shipped.\n       First, Cloud Kicks will introduce its community to 6,000 customers in North America, and then to 24,000 customers worldwide within the next two years. Cloud Kicks expects 12 shipment requests per week per customer, on average, and wants customers to be able to view up to three years of shipment requests and use Salesforce reports.\n       What is the recommended solution for the Cloud Kicks Data Architect to address the requirements?",
      options: [
        "A. Create an external custom object to track shipment requests and a child external object to track shipment items. External objects are stored off-platform in Heroku's Postgres database.",
        "B. Create an external custom object to track shipment requests with five lookup custom fields for each item being shipped. External objects are stored off-platform in Heroku's Postgres database.",
        "C. Create a custom object to track shipment requests and a child custom object to track shipment items. Implement an archiving process that moves data off-platform after three years.",
        "D. Create a custom object to track shipment requests with five lookup custom fields for each item being shipped Implement an archiving process that moves data off-platform after three years.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A large automobile company has implemented Salesforce for its sales associates. Leads flow from its website to Salesforce using a batch integration in Salesforce. The batch job converts the leads to Accounts in Salesforce. Customers visiting their retail stores are also created in Salesforce as Accounts.\n       The company has noticed a large number of duplicate Accounts in Salesforce. On analysis, it was found that certain customers could interact with its website and also visit the store. The sales associates use Global Search to search for customers in Salesforce before they create the customers.\n       Which option should a data architect choose to implement to avoid duplicates?",
      options: [
        "A. leverage duplicate rules in Salesforce to validate duplicates during the account creation process.",
        "B. Build a custom search functionality that allows sales associates to search for customer in real time upon visiting their retail stores.",
        "C. Implement an MDM solution to validate the customer information before creating Salesforce.",
        "D. Develop an Apex class that searches for duplicates and removes them nightly.",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "Universal Container (US) is replacing a home grown CRM solution with Salesforce, UC has decided to migrate operational (Open and active) records to Salesforce, while keeping historical records in legacy system, UC would like historical records to be available in Salesforce on an as needed basis.\n       Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Build a chair solution to go the legacy system and display records.",
        "B. Bring all data Salesforce, and delete it after a year.",
        "C. Leverage real-time integration to pull records into Salesforce.",
        "D. Leverage mashup to display historical records in Salesforce.",
      ],
      answer: "D",
      title: "Question 4",
    },
    {
      content:
        "Northern trail Outfitters (NTO) runs its entire out of an enterprise data warehouse (EDW), NTD's sales team starting to use Salesforce after a recent implementation, but currently lacks data required to advanced and opportunity to the next stage.\n       NTO's management has research Salesforce Connect and would like to use It to virtualize and report on data from the EDW within Salesforce. NTO will be running thousands of reports per day across 10 to 15 external objects.\n       What should a data architect consider before implementing Salesforce Connect for reporting?",
      options: [
        "A. OData callout limits per day",
        "B. Maximum number for records returned",
        "C. Maximum external objects per org",
        "D. Maximum page size for server-driven paging",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "Salesforce is being deployed in Ursa Major Solar's disparate, multi-system ERP environment. Ursa major Solar wants to maintain data synchronization between systems.\n       Which two techniques should be used to achieve this goal? (Choose two.)",
      options: [
        "A. Utilize an MDM strategy to outline a single source of truth.",
        "B. Utilize workbench to update files within systems.",
        "C. Integrate Salesforce with the ERP environment.",
        "D. Build synchronization reports and dashboards.",
      ],
      answer: "A,C",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers has deployed Salesforce for case management The company is having difficulty understanding what percentage of cases are resolved from the initial call to their support organization. What first step is recommended to implement a reporting solution to measure the support reps case closure rates?",
      options: [
        "A. Create Contact and Opportunity Reports and Dashboards.",
        "B. Create a report on Case analytic snapshots.",
        "C. Install AppExchange packages for available reports.",
        "D. Enable field history tracking on the Case object.",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "As part of a phased Salesforce rollout. there will be 3 deployments spread out over the year. The requirements have been carefully documented. Which two methods should an architect use to trace back configuration changes to the detailed requirements? Choose 2 answers",
      options: [
        "A. Put the business purpose in the Description of each field.",
        "B. Maintain a data dictionary with the justification for each field.",
        "C. Use the Force.com IDE to save the metadata files in source control.",
        "D. Review the setup audit trail for configuration changes.",
      ],
      answer: "A,B",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers (UC) has an Application custom object, which has tens of millions of records created in the past 5 years. UC needs the last 5 years of data to exist in Salesforce at all times for reporting and queries. UC is currently encountering performance issues when reporting and running queries on this Object using date ranges as filters. Which two options can be used to improve report performance?",
      options: [
        "A. Ask support to create a skinny table for Application with the necessary reporting fields.",
        "B. Add custom indexes to the Date fields used for filtering the report.",
        "C. Add custom indexes to all fields on Application without a standard index.",
        "D. Run multiple reports to get different pieces of the data and combine them.",
      ],
      answer: "A,B",
      title: "Question 9",
    },
    {
      content:
        "UC recently migrated 1 Billion customer related records from a legacy data store to Heroku Postgres. A subset of the data need to be synchronized with salesforce so that service agents are able to support customers directly within the service console. The remaining non- synchronized set of data will need to be accessed by salesforce at any point in time, but UC management is concerned about storage limitations.\n       What should a data architect recommend to meet these requirements with minimal effort?",
      options: [
        "A. As needed, make call outs into Heroku postgres and persist the data in salesforce.",
        "B. Use Heroku connect to bi-directional, sync all data between systems.",
        "C. Migrate the data to big objects and leverage async SOQL with custom objects.",
        "D. Virtualize the remaining set of data with salesforce connect and external objects.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) has multi -level account hierarchies that represent departments within their major Accounts. Users are creating duplicate Contacts across multiple departments. UC wants to clean the data so as to have a single Contact across departments. What two solutions should UC implement to cleanse their data? Choose 2 answers",
      options: [
        "A. Make use of the Merge Contacts feature of Salesforce to merge duplicates for an Account.",
        "B. Use Workflow rules to standardize Contact information to identify and prevent duplicates.",
        "C. Make use of a third -party tool to help merge duplicate Contacts across Accounts.",
        "D. Use Data.com to standardize Contact address information to help identify duplicates.",
      ],
      answer: "C,D",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating lagacy inventory data from an enterprise resources planning (ERP) system into Sales Cloud with the following requirements:\n       Legacy inventory data will be stored in a custom child objects called Inventory_c.\n       Inventory data should be related to the standard Account object.\n       The Inventory_c object should Inhent the same sharing rules as the Account object.\n       Anytime an Account record is deleted in Salesforce, the related Inventory_c record(s) should be deleted as well.\n       What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Master-detail relationship filed on Account, related to Inventory_c",
        "B. Master-detail relationship filed on Inventory_c, related to Account",
        "C. Indirect lookup relationship field on Account, related to Inventory_c",
        "D. Lookup relationship fields on Inventory related to Account",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:\n       State in which the customer is located\n       City in which the customer is located if available\n       Zip code In which the customer is located if available\n       Changes to this information should have minimum code changes\n       What should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Create a custom object to maintain the pricing criteria.",
        "B. Assign the pricing criteria within customer pricing engine.",
        "C. Configure the pricing criteria in price books.",
        "D. Maintain require pricing criteria in custom metadata types.",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "An architect is planning on having different batches to load one million Opportunities into Salesforce using the Bulk API in parallel mode. What should be considered when loading the Opportunity records?",
      options: [
        "A. Order batches by Auto -number field.",
        "B. Create indexes on Opportunity object text fields.",
        "C. Sort batches by Name field values.",
        "D. Group batches by the AccountId field.",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "UC is trying to switch from legacy CRM to salesforce and wants to keep legacy CRM and salesforce in place till all the functionality is deployed in salesforce. The want to keep data in synch b/w Salesforce, legacy CRM and SAP. What is the recommendation.",
      options: [
        "A. Suggest MDM solution and link MDM to salesforce and SAP",
        "B. Do not integrate legacy CRM to Salesforce, but integrate salesforce to SAP",
        "C. Integrate SAP with Salesforce, SAP to legacy CRM but not legacy CRM to Salesforce",
        "D. Integrate legacy CRM to salesforce and keep data in synch till new functionality is in place",
      ],
      answer: "A,C",
      title: "Question 15",
    },
    {
      content:
        "UC has large amount of orders coming in from its online portal. Historically all order are assigned to a generic user.\n       Which 2 measures should data architect recommend to avoid any performance issues while working with large number of order records? Choose 2 answers:",
      options: [
        "A. Create a role at top of role hierarchy and assign the role to the generic user.",
        "B. Clear the role field in the generic user record.",
        "C. Salesforce handles the assignment of orders automatically and there is no performance impact.",
        "D. Create a pool of generic users and distribute the assignment of memory to the pool of users.",
      ],
      answer: "A,B",
      title: "Question 16",
    },
    {
      content:
        "Cloud Kicks needs to purge detailed transactional records from Salesforce. The data should be aggregated at a summary level and available in Salesforce.\n       What are two automated approaches to fulfill this goal? (Choose two.)",
      options: [
        "A. Apex Triggers",
        "B. Third-party Business Intelligence system",
        "C. Third-party Integration Tool (ETL)",
        "D. Schedulable Batch Apex",
      ],
      answer: "C,D",
      title: "Question 17",
    },
    {
      content:
        "Every year, Ursa Major Solar has more than 1 million orders. Each order contains an average of 10 line items. The Chief Executive Officer (CEO) needs the Sales Reps to see how much money each customer generates year-over-year. However, data storage is running low in Salesforce.\n       Which approach for data archiving is appropriate for this scenario?",
      options: [
        "A. 1. Annually delete orders and order line items. 2. Ensure the customer has order information in another system.",
        "B. 1. Annually export and delete orders and order line items. 2. Store them in a zip file in case the data is needed later.",
        "C. 1. Annually aggregate order amount data to store in a custom object. 2. Delete those orders and order line items.",
        "D. 1. Annually export and delete order line items. 2. Store them in a zip file in case the data is needed later.",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "UC has one SF org (Org A) and recently acquired a secondary company with its own Salesforce org (Org B). UC has decided to keep the orgs running separately but would like to bidirectionally share opportunities between the orgs in near-real time.\n       Which 3 options should a data architect recommend to share data between Org A and Org B?\n       Choose 3 answers.",
      options: [
        "A. Leverage Heroku Connect and Heroku Postgres to bidirectionally sync Opportunities.",
        "B. Use Salesforce Connect and the cross-org adapter to visualize Opportunities into external objects",
        "C. Develop an Apex class that pushes opportunity data between orgs daily via the Apex schedule.",
        "D. Leverage middleware tools to bidirectionally send Opportunity data across orgs.",
        "E. Install a 3rd party AppExchange tool to handle the data sharing",
      ],
      answer: "B,C,D",
      title: "Question 19",
    },
    {
      content:
        "Universal Container has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master Sales team are complaining about duplicate account and data quality issues with account data.\n       Which two solution should a data architect recommend to resolve the complaints?",
      options: [
        "A. Build a nightly sync job from ERP to Salesforce.",
        "B. Build a nightly batch job to de-dupe data, and merge account records.",
        "C. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce",
      ],
      answer: "C,D",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers (UC) provides shipping services to its customers. They use Opportunities to track customer shipments. At any given time, shipping status can be one of the 10 values. UC has 200,000 Opportunity records. When creating a new field to track shipping status on opportunity, what should the architect do to improve data quality and avoid data skew?",
      options: [
        "A. Create a text field and make it an external I",
        "B. Create a Lookup to custom object ShippingStatus c.",
        "C. Create a picklist field, values sorted alphabetically.",
        "D. Create a Master -Detail to custom object ShippingStatus c.",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "(NTO) has multiple salesforce orgs based on geographical reports (AMER, EMEA, APAC). NTO products are in the AMER org and need to be created in the EMEA and APAC after the products are approved.\n       Which two features should a data architect recommend to share records between salesforce orgs? Choose 2.",
      options: [
        "A. Change data capture (CDC)",
        "B. Salesforce 2 Salesforce",
        "C. Federation search",
        "D. Salesforce connect.",
      ],
      answer: "A,B",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers is integrating a new Opportunity engagement system with Salesforce. According to their Master Data Management strategy, Salesforce is the system of record for Account, Contact, and Opportunity dat a. However, there does seem to be valuable Opportunity data in the new system that potentially conflicts with what is stored in Salesforce. What is the recommended course of action to appropriately integrate this new system?",
      options: [
        "A. A policy should be adopted so that the system whose record was most recently updated should prevail in conflicts.",
        "B. The MDM strategy defines Salesforce as the system of record, so Salesforce Opportunity values prevail in all conflicts.",
        "C. The Opportunity engagement system should become the system of record for Opportunity records.",
        "D. Stakeholders should be brought together to discuss the appropriate data strategy moving forward.",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers (UC) has deployed Salesforce to manage Marketing. Sales, and Support efforts in a multi -system ERP environment After reaching the limits of native reports & dashboards. UC leadership is looking to understand what options can be used to provide more analytical insights. What two approaches should an architect recommend? Choose 2 answers",
      options: [
        "A. Wave Analytics",
        "B. AppExchange Apps",
        "C. Setup Audit Trails",
        "D. Weekly Snapshots",
      ],
      answer: "A,B",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers has defined a new Data Quality Plan for their Salesforce data and wants to know how they can enforce it throughout the organization. Which two approaches should an architect recommend to enforce this new plan?\n       Choose 2 answers",
      options: [
        "A. Schedule a weekly dashboard displaying records that are missing information to be sent to managers for review.",
        "B. Use Workflow, Validation Rules, and Force.com code (Apex) to enforce critical business processes.",
        "C. Store all data in an external system and set up an integration to Salesforce for view -only access.",
        "D. Schedule reports that will automatically catch duplicates and merge or delete the records every week.",
      ],
      answer: "A,B",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers (UC) wants to ensure their data on 100,000 Accounts pertaining mostly to US-based companies is enriched and cleansed on an ongoing basis. UC is looking for a solution that allows easy monitoring of key data quality metrics. What should be the recommended solution to meet this requirement?",
      options: [
        "A. Implement an Apex Trigger on Account that queries a third-party data quality API to monitor Account data quality.",
        "B. Implement Batch Apex that calls out a third-party data quality API in order to monitor Account data quality.",
        "C. Use declarative approach by installing and configuring Data.com Prospector to monitor Account data quality.",
        "D. Use a declarative approach by installing and configuring Data.com Clean to monitor Account data quality.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "A large retail B2C customer wants to build a 360 view of its customer for its call center agents. The customer interaction is currently maintained in the following system: 1. Salesforce CRM\n       2. Custom billing solution\n       3. Customer Master Data management (MDM)\n       4. Contract Management system\n       5. Marketing solution\n       What should a data architect recommend that would help upgrade uniquely identify customer across multiple systems:",
      options: [
        "A. Create a customer data base and use this id in all systems.",
        "B. Store the salesforce id in all the solutions to identify the customer.",
        "C. Create a custom object that will serve as a cross reference for the customer id.",
        "D. Create a custom field as external id to maintain the customer Id from the MDM solution.",
      ],
      answer: "D",
      title: "Question 27",
    },
    {
      content:
        "US is implementing salesforce and will be using salesforce to track customer complaints, provide white papers on products and provide subscription (Fee) - based support.\n       Which license type will US users need to fulfil US's requirements?",
      options: [
        "A. Service cloud license.",
        "B. Lightning platform starter license.",
        "C. Salesforce license.",
        "D. Sales cloud license",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "UC has migrated its Back-office data into an on-premise database with REST API access. UC recently implemented Sales cloud for its sales organization. But users are complaining about a lack of order data inside SF.\n       UC is concerned about SF storage limits but would still like Sales cloud to have access to the data.\n       Which design patterns should a data architect select to satisfy the requirement?",
      options: [
        "A. Use SF Connect to virtualize the data in SF and avoid storage limits.",
        "B. Migrate and persist the data in SF to take advantage of native functionality.",
        "C. Develop a bidirectional integration between the on-premise system and Salesforce.",
        "D. Build a UI for the on-premise system and iframe it in Salesforce",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "A casino is implementing salesforce and is planning to build a customer 360 view for a customer who visits its resorts. The casino currently maintained the following systems that records customer activity:\n       1. Point of sales system: All purchases for a customer.\n       2. Salesforce: All customer service activity and sales activity for a customer.\n       3. Mobile app: All bookings, preferences and browser activity for a customer.\n       4. Marketing: All email, SMS and social campaigns for a customer.\n       Customer service agents using salesforce would like to view the activities from all system to provide supports to customers. The information has to be current and real time.\n       What strategy should the data architect implement to satisfy this requirement?",
      options: [
        "A. Migrate customer activities from all 4 systems into salesforce.",
        "B. Periodically upload summary information in salesforce to build 360 view.",
        "C. Explore external data sources in salesforce to build 360 view of customer.",
        "D. Use a customer data mart to view the 360 view of customer.",
      ],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) has over 10 million accounts with an average of 20 opportunities with each account. A Sales Executive at UC needs to generate a daily report for all opportunities in a specific opportunity stage.\n       Which two key considerations should be made to make sure the performance of the report is not degraded due to large data volume?",
      options: [
        "A. Number of records returned by report query.",
        "B. Number of queries running at a time.",
        "C. Number of joins used in report query.",
        "D. Number of characters in report query.",
      ],
      answer: "A,C",
      title: "Question 31",
    },
    {
      content:
        "UC has multiple SF orgs that are distributed across regional branches. Each branch stores local customer data inside its org's Account and Contact objects. This creates a scenario where UC is unable to view customers across all orgs.\n       UC has an initiative to create a 360-degree view of the customer, as UC would like to see Account and Contact data from all orgs in one place.\n       What should a data architect suggest to achieve this 360-degree view of the customer?",
      options: [
        "A. Use Salesforce Connect's cross-org adapter.",
        "B. Build a bidirectional integration between all orgs.",
        "C. Use an ETL tool to migrate gap Accounts and Contacts into each org.",
        "D. Consolidate the data from each org into a centralized datastore",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        'Universal Containers (UC) is a major supplier of office supplies. Some products are produced by UC and some by other manufacturers. Recently, a number of customers have complained that product descriptions on the invoices do not match the descriptions in the online catalog and on some of the order confirmations (e.g., "ballpoint pen" in the catalog and "pen" on the invoice, and item color labels are inconsistent: "what vs. "White" or "blk" vs. "Black"). All product data is consolidated in the company data warehouse and pushed to Salesforce to generate quotes and invoices. The online catalog and webshop is a Salesforce Customer Community solution. What is a correct technique UC should use to solve the data inconsistency?',
      options: [
        "A. Build Apex Triggers in Salesforce that ensure products have the correct names and labels after data is loaded into salesforce.",
        "B. Add custom fields to the Product standard object in Salesforce to store data from the different source systems.",
        "C. Define a data taxonomy for product data and apply the taxonomy to the product data in the data warehouse.",
        "D. Change integration to let product master systems update product data directly in Salesforce via the Salesforce API.",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "The data architect for UC has written a SOQL query that will return all records from the Task object that do not have a value in the WhatId field:\n       Select id, description, Subject from Task where WhatId != NULL\n       When the data architect usages the query to select values for a process a time out error occurs.\n       What does the data architect need to change to make this query more performant?",
      options: [
        "A. Remove description from the requested field set.",
        "B. Add limit 100 to the query.",
        "C. Change the where clause to filter by a deterministic defined value.",
        "D. Change query to SOSL. ??",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content: "What makes Skinny tables fast? Choose three answers.",
      options: [
        "A. They support up to a max of 100 of columns",
        "B. Their tables are kept in sync with their source tables when the source tables are modified",
        "C. They avoid resource intensive joins",
        "D. They can contain fields from other objects",
        "E. They do not include soft-deleted records",
      ],
      answer: "B,C,E",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers (UC) is concerned that data is being corrupted daily either through negligence or maliciousness. They want to implement a backup strategy to help recover any corrupted data or data mistakenly changed or even deleted. What should the data architect consider when designing a field -level audit and recovery plan?",
      options: [
        "A. Review projected data storage needs.",
        "B. Schedule a weekly export file.",
        "C. Reduce data storage by purging old data.",
        "D. Implement an AppExchange package.",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "US has released a new disaster recovery (DR)policy that states that cloud solutions need a business continuity plan in place separate from the cloud providers built in data recovery solution.\n       Which solution should a data architect use to comply with the DR policy?",
      options: [
        "A. Utilize an ETL tool to migrate data to an on-premise archive solution.",
        "B. Leverage salesforce weekly exports, and store data in Flat files on a protected system.",
        "C. Write a custom batch job to extract data changes nightly, and store in an external protected system.",
        "D. Leverage a 3rd party tool that extract salesforce data/metadata and stores the information in an external protected system.",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers is creating a new B2C service offering for consumers to ship goods across continents. This is in addition to their well-established B2B offering. Their current Salesforce org uses the standard Account object to track B2B customers. They are expecting to have over 50,000,000 consumers over the next five years across their 50 business regions. B2C customers will be individuals. Household data is not required to be stored. What is the recommended data model for consumer account data to be stored in Salesforce?",
      options: [
        "A. Use the Account object with a newly created Record Type for B2C customers.",
        "B. Create a new picklist value for B2C customers on the Account Type field.",
        "C. Use the Account object with Person Accounts and a new B2C page layout.",
        "D. Use 50 umbrella Accounts for each region, with customers as associated Contacts.",
      ],
      answer: "C",
      title: "Question 38",
    },
    {
      content:
        "A large retail company has recently chosen SF as its CRM solution. They have the following record counts:\n       2500000 accounts\n       25000000 contacts\n       When doing an initial performance test, the data architect noticed an extremely slow response for reports and list views.\n       What should a data architect do to solve the performance issue?",
      options: [
        "A. Load only the data that the users is permitted to access",
        "B. Create a skinny table to represent account and contact objects.",
        "C. Limit data loading to the 2000 most recently created records.",
        "D. Add custom indexes on frequently searched account and contact objects fields",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "A company wants to document the data architecture of a Salesforce organization.\n       What are two valid metadata types that should be included? (Choose two.)",
      options: [
        "A. RecordType",
        "B. SecuritySettings",
        "C. CustomField",
        "D. Document",
      ],
      answer: "A,C",
      title: "Question 40",
    },
    {
      content:
        "UC is using SF CRM. UC sales managers are complaining about data quality and would like to monitor and measure data quality.\n       Which 2 solutions should a data architect recommend to monitor and measure data quality?\n       Choose 2 answers.",
      options: [
        "A. Review data quality reports and dashboards.",
        "B. Use custom objects and fields to identify issues.",
        "C. Install and run data quality analysis dashboard app",
        "D. Export data and check for data completeness outside of Salesforce.",
      ],
      answer: "A,C",
      title: "Question 41",
    },
    {
      content:
        "UC is rolling out Sales App globally to bring sales teams together on one platform. UC expects millions of opportunities and accounts to be creates and is concerned about the performance of the application.\n       Which 3 recommendations should the data architect make to avoid the data skew? Choose 3 answers.",
      options: [
        "A. Assign 10000 opportunities to one account.",
        "B. Use picklist fields rather than lookup to custom object.",
        "C. Limit assigning one user 10000 records ownership.",
        "D. Limit associating 10000 opportunities to one account.",
        "E. Limit associating 10000 records looking up to same records.",
      ],
      answer: "C,D",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) has a complex system landscape and is implementing a data governance program for the first time Which two first steps would be appropriate for UC to initiate an assessment of data architecture? Choose 2 answers",
      options: [
        "A. Engage with IT program managers to assess current velocity of projects in the pipeline.",
        "B. Engage with business units and IT to assess current operational systems and data models.",
        "C. Engage with database administrators to assess current database performance metrics.",
        "D. Engage with executive sponsorship to assess enterprise data strategy and goals.",
      ],
      answer: "B,D",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers (UC) uses the following Salesforce products:\n       Sales Cloud for customer management.\n       Marketing Cloud for marketing.\n       Einstein Analytics for business reporting.\n       UC occasionally gets a list of prospects from third-party source as comma-separated values (CSV) files for marketing purposes. Historically, UC would load contact Lead object in Salesforce and sync to Marketing Cloud to send marketing communications. The number of records in the Lead object has grown over time and has been consuming large amounts of storage in Sales Cloud, UC is looking for recommendations to reduce the storage and advice on how to optimize the marketing Cloud to send marketing communications. The number of records in the Lead object has grown over time and has been consuming large amounts of storage in Sales Cloud, UC is looking for recommendations to reduce the storage and advice on how to optimize the marketing process.\n       What should a data architect recommend to UC in order to immediately avoid storage issues in the future?",
      options: [
        "A. Load the contacts directly to Marketing Cloud and have a reconciliation process to track prospects that are converted to customers.",
        "B. Load the CSV files in Einstein Analytics and sync with Marketing Cloud prior to sending marketing communications ;",
        "C. Continue to use the existing process to use Lead object to sync with Marketing Cloud and delete Lead records from Sales after the sync is complete.",
        "D. Load the CSV files in an external database and sync with Marketing Cloud prior to sending marketing communications.",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "Which two best practices should be followed when using SOSL for searching?",
      options: [
        "A. Keep searches specific and avoid wildcards where possible.",
        'B. Use Find in "ALL FIELDS" for faster searches.',
        "C. Use searches against single Objects for greater speed and accuracy.",
        "D. Use SOSL option to ignore custom indexes as search fields are pre-indexed.",
      ],
      answer: "A,B",
      title: "Question 45",
    },
    {
      content:
        "UC is implementing sales cloud for patient management and would like to encrypt sensitive patient records being stored in files.\n       Which solution should a data architect recommend to solve this requirement?",
      options: [
        "A. Store files outside of salesforce and access them to real time.",
        "B. Use classic encryption to encrypt files.",
        "C. Implement 3rd party App Exchange app to encrypt files.",
        "D. Implement shield platform encryption to encrypt files.",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers has a custom object with millions of rows of data.\n       When executing SOQL queries, which three options prevent a query from being selective? (Choose three.)",
      options: [
        "A. Using a custom index on a deterministic formula field.",
        "B. Using NOT and != operators.",
        "C. Performing large loads and deletions.",
        "D. Using leading % wildcards.",
        "E. Using trailing % wildcards.",
      ],
      answer: "A,B,D",
      title: "Question 47",
    },
    {
      content:
        "Which two aspects of data does an Enterprise data governance program aim to improve?",
      options: [
        "A. Data modeling",
        "B. Data integrity",
        "C. Data distribution",
        "D. Data usability",
      ],
      answer: "B,D",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers (UC) has a very large and complex Salesforce org with hundreds of validation rules and triggers. The triggers are responsible for system updates and data manipulation as records are created or updates by users. A majority of the automation tool within UC'' org were not designed to run during a data load. UC is importing 100,000 records into Salesforce across several objects over the weekend.\n       What should a data architect do to mitigate any unwanted results during the import?",
      options: [
        "A. Import the data in smaller batches over a 24-hour period.",
        "B. Bulkily the trigger to handle import leads.",
        "C. Ensure duplication and matching rules and defined.",
        "D. Ensure validation rules, triggers and other automation tools are disabled.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "A casino is implementing Salesforce and is planning to build a customer 360 degree view for a customer who visits its resorts. The casino currently maintains the following systems that record customer activity: L Point-of-sale system: All purchases for a customer\n       2. Salesforce; All customer service activity and sales activities for a customer\n       3. Mobile app: All bookings, preferences, and browser activity for a customer\n       4. Marketing: All email, SMS, and social campaigns for a customer\n       Customer service agents using Salesforee would like to view the activities from all four systems to provide support to customers. The information has to be current and real time.\n       What strategy should the data architect implement to satisfy this requirement?",
      options: [
        "A. Periodically upload summary information in Salesforce to build a 360 degree view.",
        "B. Use a customer data mart to create the 360 degree view of the customer.",
        "C. Migrate customer activities fro, all four system into Salesforce.",
        "D. Explore external data sources in Salesforce to build a 360 degree view of the customer.",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "The head of sales at Get Cloudy Consulting wants to understand key relevant performance figures and help managers take corrective actions where appropriate.\n       What is one reporting option Get Cloudy Consulting should consider?",
      options: [
        "A. Case SLA performance report",
        "B. Sales KPI Dashboard",
        "C. Opportunity analytic snapshot",
        "D. Lead conversion rate report",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "Get Cloud Consulting needs to integrate two different systems with customer records into the Salesforce Account object. So that no duplicate records are created in Salesforce, Master Data Management will be used.\n       An Architect needs to determine which system is the system of record on a field level.\n       What should the Architect do to achieve this goal?",
      options: [
        "A. Any field that is an input field in either external system will be overwritten by the last record integrated and can never have a system of record.",
        "B. Key stakeholders should review any fields that share the same purpose between systems to see how they will be used in Salesforce.",
        "C. Master Data Management systems determine system of record, and the Architect doesn't have to think about what data is controlled by what system.",
        "D. The database schema for each external system should be reviewed, and fields with different names should always be separate fields in Salesforce.",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "DreamHouse Realty has a Salesforce deployment that manages Sales, Support, and Marketing efforts in a multi-system ERP environment. The company recently reached the limits of native reports and dashboards and needs options for providing more analytical insights.\n       What are two approaches an Architect should recommend? (Choose two.)",
      options: [
        "A. Setup Audit Trails",
        "B. Einstein Analytics",
        "C. Weekly Snapshots",
        "D. AppExchange Apps",
      ],
      answer: "B,D",
      title: "Question 53",
    },
    {
      content:
        "UC is migrating data from legacy system to SF. UC would like to preserve the following information on records being migrated:\n       Date time stamps for created date and last modified date.\n       Ownership of records belonging to inactive users being migrated to Salesforce.\n       Which 2 solutions should a data architect recommends to preserve the date timestamps and ownership on records? Choose 2 answers.",
      options: [
        "A. Enable modify all and view all permission.",
        "B. Enable update records with Inactive Owners Permission",
        "C. Log a case with SF to update these fields",
        "D. Enable Set Audit fields upon Record Creation Permission",
      ],
      answer: "B,D",
      title: "Question 54",
    },
    {
      content:
        "Due to security requirements, Universal Containers needs to capture specific user actions, such as login, logout, file attachment download, package install, etc. What is the recommended approach for defining a solution for this requirement?",
      options: [
        "A. Use a custom object and trigger to capture changes.",
        "B. Use a third-party AppExchange app to capture changes.",
        "C. Use a field audit trail to capture field changes.",
        "D. Use Event Monitoring to capture these changes.",
      ],
      answer: "D",
      title: "Question 55",
    },
    {
      content:
        "DreamHouse Realty has 15 million records in the Order_c custom object. When running a bulk query, the query times out.\n       What should be considered to address this issue?",
      options: [
        "A. Metadata API",
        "B. Streaming API",
        "C. Tooling API",
        "D. PK Chunking",
      ],
      answer: "D",
      title: "Question 56",
    },
    { content: "", options: [], answer: "", title: "" },
    {
      content:
        "During the implementation of Salesforce, a customer has the following requirements for Sales Orders:\n       1. Sales Order information needs to be shown to users in Salesforce.\n       2. Sales Orders are maintained in the on-premises enterprise resource planning (ERP).\n       3. Sales Order information has more than 150 million records.\n       4. Sales Orders will not be updated in Salesforce.\n       What should a data architect recommend for maintaining Sales Orders in salesforce?",
      options: [
        "A. Us custom objects to maintain Sales Orders in Salesforce.",
        "B. Use Standard order object to maintain Sale Orders in Salesforce",
        "C. Use external objects to maintain Sales Order in Salesforce.",
        "D. Use custom big objects to maintain Sales Orders in Salesforce.",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "NTO processes orders from its website via an order management system (OMS). The OMS stores over 2 million historical records and is currently not integrated with SF. The Sales team at NTO using Sales cloud and would like visibility into related customer orders yet they do not want to persist millions of records directly in Salesforce. NTO has asked the data architect to evaluate SF connect and the concept of data verification. Which 3 considerations are needed prior to a SF Connect implementation?\n       Choose 3 answers:",
      options: [
        "A. Identify the external tables to sync into external objects",
        "B. Assess whether the external data source is reachable via an ODATA endpoint.",
        "C. Create a 2nd system Admin user for authentication to the external source.",
        "D. Develop an object relationship strategy.",
        "E. Configure a middleware tool to poll external table data",
      ],
      answer: "A,B,D",
      title: "Question 59",
    },
    {
      content:
        "What is an advantage of using Custom metadata type over Custom setting?",
      options: [
        "A. Custom metadata records are editable in Apex.",
        "B. Custom metadata records are not copied from production to sandbox.",
        "C. Custom metadata records are deployable using packages.",
        "D. Custom metadata types are available for reporting.",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "Universal Container has implemented Sales Cloud to manage patient and related health records. During a recent security audit of the system it was discovered that same standard and custom fields need to encrypted.\n       Which solution should a data architect recommend to encrypt existing fields?",
      options: [
        "A. Implement shield platform encryption to encrypt and standard fields",
        "B. Expert data out of Salesforce and encrypt custom and standard fields.",
        "C. Implement classic encryption to encrypt custom and standard fields.",
        "D. Use Apex Crypto Class encrypt customer and standard fields.",
      ],
      answer: "A",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers wishes to maintain Lead data from Leads even after they are deleted and cleared from the Recycle Bin. What approach should be implemented to achieve this solution?",
      options: [
        "A. Send data to a Data Warehouse and mark Leads as deleted in that system.",
        "B. Use a Converted Lead report to display data on Leads that have been deleted.",
        "C. Use a Lead standard report and filter on the IsDeleted standard field.",
        "D. Query Salesforce with the queryAll API method or using the ALL ROWS SOQL keywords.",
      ],
      answer: "A",
      title: "Question 62",
    },
    {
      content:
        "Northern Trail Outfitter has implemented Salesforce for its associates nationwide, Senior management is concerned that the executive dashboard are not reliable for their real-time decision-making. On analysis , the team the following issues with data entered in Salesforce.\n       Information in certain records is incomplete.\n       Incorrect entry in certain fields causes records to be excluded in report fitters.\n       Duplicate entries cause incorrect counts.\n       Which three steps should a data architect recommend to address the issues?",
      options: [
        "A. Build a sales data warehouse with purpose-build data marts for dashboards and senior management reporting.",
        "B. Explore third-party data providers to enrich and augment information entered in salesforce.",
        "C. Leverage Salesforce features, such as validate rules, to avoid incomplete and incorrect records.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect",
      ],
      answer: "A,B,C",
      title: "Question 63",
    },
    {
      content:
        "UC has millions of Cases and are running out of storage. Some user groups need to have access to historical cases for up to 7 years.\n       Which 2 solutions should a data architect recommend in order to minimize performance and storage issues?\n       Choose 2 answers:",
      options: [
        "A. Leverage big object to archive case data and lightning components to show archived data.",
        "B. Create a custom object to store case history and run reports on it.",
        "C. Export data out of salesforce and store in Flat files on external system.",
        "D. Leverage on premise data archival and build integration to view archived data.",
      ],
      answer: "A,D",
      title: "Question 64",
    },
    {
      content:
        "UC has a requirement to migrate 100 million order records from a legacy ERP application into the salesforce platform. UC does not have any requirements around reporting on the migrated data.\n       What should a data architect recommend to reduce the performance degradation of the platform?",
      options: [
        "A. Use a standard big object defined by salesforce.",
        "B. Implement a custom big object to store the data.",
        'C. Use the standard "Order" object to store the data.',
        "D. Create a custom object to store the data.",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance issues and time-outs while running case reports in the Salesforce org.\n       Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Create a custom object to store aggregate data and run reports.",
        "C. Build reports using custom Lightning components.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        'Get Cloudy Consulting uses an invoicing system that has specific requirements. One requirement is that attachments associated with the Invoice_c custom object be classified by Types (i.e., ""Purchase Order"", ""Receipt"", etc.) so that reporting can be performed on invoices showing the number of attachments grouped by Type.\n       What should an Architect do to categorize the attachments to fulfill these requirements?',
      options: [
        "A. Create a custom picklist field for the Type on the standard Attachment object with the values.",
        "B. Add additional options to the standard ContentType picklist field for the Attachment object.",
        "C. Create a custom object related to the Invoice object with a picklist field for the Type.",
        "D. Add a ContentType picklist field to the Attachment layout and create additional picklist options.",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers wants to implement a data -quality process to monitor the data that users are manually entering into the system through the Salesforce UI. Which approach should the architect recommend?",
      options: [
        "A. Use Apex to validate the format of phone numbers and postal codes.",
        "B. Allow users to import their data using the Salesforce Import tools.",
        "C. Utilize a 3rd -party solution from the AppExchange for data uploads.",
        "D. Utilize an app from the AppExchange to create data -quality dashboards.",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "DreamHouse Realty has a data model as shown in the image. The Project object has a private sharing model, and it has Roll-Up summary fields to calculate the number of resources assigned to the project, total hours for the project, and the number of work items associated to the project.\n       There will be a large amount of time entry records to be loaded regularly from an external system into Salesforce.\n       \n       \n       What should the Architect consider in this situation?",
      options: [
        "A. Calculate summary values instead of Roll-Up by using triggers.",
        "B. Load all data using external IDs to link to parent records.",
        "C. Load all data after deferring sharing calculations.",
        "D. Calculate summary values instead of Roll-Up by using workflow.",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "UC is building a salesforce application to track contacts and their respective conferences that they have attended with the following requirements:\n       1. Contacts will be stored in the standard contact object.\n       2. Conferences will be stored in a custom conference__c object.\n       3. Each contact may attend multiple conferences and each conference may be related to multiple contacts.\n       How should a data architect model the relationship between the contact and conference objects?",
      options: [
        "A. Create a lookup relationship field on contact object.",
        "B. Create a master detail relationship field on the Contact object.",
        "C. Implement a Contact Conference junction object with master detail relationship to both contact and conference__c.",
        "D. Create a master detail relationship field on the Conference object.",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers keeps its Account data in Salesforce and its Invoice data in a third -party ERP system. They have connected the Invoice data through a Salesforce external object. They want data from both Accounts and Invoices visible in one report in one place. What two approaches should an architect suggest for achieving this solution? Choose 2 answers",
      options: [
        "A. Create a report combining data from the Account standard object and the Invoices external object.",
        "B. Create a report in an external system combining Salesforce Account data and Invoice data from the ERP.",
        "C. Create a Visualforce page combining Salesforce Account data and Invoice external object data.",
        "D. Create a separate Salesforce report for Accounts and Invoices and combine them in a dashboard.",
      ],
      answer: "B,C",
      title: "Question 71",
    },
    {
      content:
        "NTO has implemented salesforce for its sales users. The opportunity management in salesforce is implemented as follows:\n       1. Sales users enter their opportunities in salesforce for forecasting and reporting purposes.\n       2. NTO has a product pricing system (PPS) that is used to update opportunity amount field on opportunities on a daily basis.\n       3. PPS is the trusted source within the NTO for opportunity amount.\n       4. NTO uses opportunity forecast for its sales planning and management.\n       Sales users have noticed that their updates to the opportunity amount field are overwritten when PPS updates their opportunities.\n       How should a data architect address this overriding issue?",
      options: [
        "A. Create a custom field for opportunity amount that PPS updates separating the field that sales user updates.",
        "B. Create a custom field for opportunity amount that sales users update separating the fields that PPS updates.",
        "C. Change opportunity amount field access to read only for sales users using field level security.",
        "D. Change PPS integration to update only opportunity amount fields when values is NULL.",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "Universal Container is Implementing salesforce and needs to migrate data from two legacy systems. UC would like to clean and duplicate data before migrate to Salesforce.\n       Which solution should a data architect recommend a clean migration?",
      options: [
        "A. Define external IDs for an object, migrate second database to first database, and load into Salesforce.",
        "B. Define external IDs for an object, Insert data from one database, and use upsert for a second database",
        "C. Define duplicate rules in Salesforce, and load data into Salesforce from both databases.",
        "D. Set up staging data base, and define external IDs to merge, clean duplicate data, and load into Salesforce.",
      ],
      answer: "B",
      title: "Question 73",
    },
    {
      content:
        "A large multinational B2C Salesforce customer is looking to implement their distributor management application is Salesforce. the application has the following capabilities:\n       1.Distributor create sales order in salesforce\n       2.Sales order are based on product prices applicable to their region\n       3. Sales order are closed once they are fulfilled\n       4. It is decided to maintain the order in opportunity object\n       How should the data architect model this requirement?",
      options: [
        "A. Add custom fields in Opportunity and use triggers to update prices.",
        "B. Configure price Books for each region and share with distributors.",
        "C. Create lookup to Custom Price object and share with distributors.",
        "D. Manually update Opportunities with Prices application to distributors.",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "UC is having issues using Informatica Cloud Louder to export +10MOrder records. Each Order record has 10 Order Line Items. What two steps can you take to help correct this? Choose two answers.",
      options: [
        "A. Export Bulk API in parallel mode",
        "B. Limit Batch to 10K records",
        "C. Export in multiple batches",
        "D. Use PK Chunking",
      ],
      answer: "C,D",
      title: "Question 75",
    },
    {
      content:
        "Universal Containers (UC) has 1,000 accounts and 50,000 opportunities. UC has an enterprise security requirement to export all sales data outside of Salesforce on a weekly basis. The security requirement also calls for exporting key operational data that includes events such as file downloads, logins, logouts, etc. Which two recommended approaches would address the above requirement?",
      options: [
        "A. Use Field Audit History to capture operational data and extract it to on-premise systems.",
        "B. Use Event Monitoring to extract event data to on-premise systems.",
        "C. Use Weekly Export to extract transactional data to on-premise systems.",
        "D. Use a custom built extract job to extract operational data to on-premise systems.",
      ],
      answer: "D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers (UC) has a Salesforce instance with over 10.000 Account records. They have noticed similar, but not identical. Account names and addresses. What should UC do to ensure proper data quality?",
      options: [
        "A. Make the Account Owner clean their Accounts' addresses, then merge Accounts with the same address.",
        "B. Use a service to standardize Account addresses, then use a 3rd -party tool to merge Accounts based on rules.",
        "C. Run a report, find Accounts whose name starts with the same five characters, then merge those Accounts.",
        "D. Enable Account de -duplication by creating matching rules in Salesforce, which will mass merge duplicate Accounts.",
      ],
      answer: "D",
      title: "Question 77",
    },
  ],
});