window.testContent = window.testContent || [];
window.testContent.push({
  name: "Salesforceben.Associate.test1.q40",
  content: [
    {
      content:
        "You would like to link individuals related to a specific business account in Salesforce. What object would support this?",
      options: ["A. Lead", "B. Person", "C. Contact"],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "Your company would like to see the total amount of “won” Opportunities displayed on the account record. How should this be achieved?",
      options: ["A. Roll-Up Summary", "B. Formula Field", "C. Lookup Field"],
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "You would like to create a new custom field that enables users to select more than one value from a list. What type of custom field would support this?",
      options: ["A. Picklist", "B. Multi-Select Picklist", "C. Lookup"],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "A picklist field on the Lead object has multiple values that determine the source of a Lead. Users should be able to choose a value, however, Leads mostly arrive via email. What could be set up to improve the user experience and data accuracy?",
      options: ["A. Default Value", "B. Dependent Picklist", "C. Global Value"],
      answer: "B",
      title: "Question 4",
    },
    {
      content: "How many Master-Detail relationships can an object have?",
      options: ["A. 1", "B. 2", "C. 3"],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "Emma and Steve are both assigned a custom Sales Team profile that enables create, read, and edit on accounts. As a manager, Steve should also be allowed to delete accounts. How can this be achieved?",
      options: [
        "A. Create a new custom profile for Steve.",
        "B. Create a new permission set and assign to Emma.",
        "C. Create a new permission set and assign to Steve.",
      ],
      answer: "C",
      title: "Question 6",
    },
    {
      content:
        "After some consideration, it has been decided that the Eastern Sales Team and Western Sales Team should both have read access to each other’s opportunities. The Sales Teams have different roles and the opportunity organization-wide default is currently set to private. How could you achieve this requirement?",
      options: [
        "A. Profiles",
        "B. Make the Opportunity organization-wide default Public Read Only",
        "C. Sharing Rules",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "A small group of Super Users are allowed to perform additional tasks on Salesforce including exporting reports, deleting accounts, and converting leads. Each additional permission has its own permission set. What would be the best way to assign the extra permissions to the Super Users?",
      options: [
        "A. Permission Sets + Permission Set Group",
        "B. Profile",
        "C. Role",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "Some Salesforce users should have read access to other users’ opportunity records, including those that do not report to them in the role hierarchy. What should the organization-wide sharing default be for the opportunity object?",
      options: ["A. Private", "B. Public Read Only", "C. Public Read/Write"],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "Your Salesforce org has different page layouts for accounts: one for customers and one for competitors. You would like the annual revenue field to be required for customers only. What is the most appropriate way to make the field mandatory?",
      options: [
        "A. Validation Rule",
        "B. Universally Required",
        "C. Required at Page Level",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "What is NOT an access level you can grant to report and dashboard folders?",
      options: ["A. Public Access", "B. Editor Access", "C. Viewer Access"],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "The telemarketing team would like to be able to work through a list of records and edit them as needed without needing to navigate away from the list. What would you suggest they use?",
      options: ["A. Report", "B. Split View", "C. Call View"],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "You frequently need to view a specific report in Salesforce. How could you improve navigation and make it easier to access it?",
      options: ["A. Pin", "B. Favorite", "C. Track"],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "Marketing Users would like the Marketing App to be their default app, so that they land on it every time they login to Salesforce. Where can a default app be configured?",
      options: ["A. Role", "B. User Record", "C. Profile"],
      answer: "A",
      title: "Question 14",
    },
    {
      content: "How can users personalize their navigation bar?",
      options: [
        "A. It is not possible for users to personalize their Navigation Bar",
        "B. Pencil Icon next to Navigation Bar",
        "C. Setup > Personalization > Navigation Bar",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "Where can you find information about your org’s total, used, and remaining Salesforce licenses?",
      options: ["A. Users", "B. Company Information", "C. Object Manager"],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "What is the correct path to create a new custom field on the Account object?",
      options: [
        "A. Setup > Object Manager > Contact > Fields & Relationships > New",
        "B. Setup > Home > Account > Fields & Relationships > New",
        "C. Setup > Object Manager > Account > Fields & Relationships > New",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "A user would like to Bcc themself into any emails they send via Salesforce. How could this be achieved?",
      options: [
        'A. Select "Automatic Bcc" in Personal Information',
        'B. Select "Automatic Bcc" in the User Record',
        'C. Select "Automatic Bcc" in My Email Settings',
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "In Lightning Experience, what are the two options for Default Activities View? (Select 2)",
      options: [
        "A. Related Lists",
        "B. Activity Timeline",
        "C. Activity Composer",
      ],
      answer: "B,C",
      title: "Question 19",
    },
    {
      content:
        "Accounts, Contacts, and Opportunities are all examples of what?",
      options: ["A. Fields", "B. Objects", "C. Records"],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "A user has forgotten their Salesforce password. What should you recommend?",
      options: [
        'A. The user should reset their own password by logging in to Salesforce and going to "Change My Password" in "Personal Information".',
        "B. The administrator should reset the user’s password from the user record.",
        'C. The user should reset their own password by clicking "Forgot Password" on the login page.',
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "You would like to get a report of leads grouped by status. What kind of report would meet this requirement?",
      options: ["A. Summary", "B. Metric", "C. Tabular"],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "What is NOT a frequency option when subscribing to a dashboard?",
      options: ["A. Quarterly", "B. Weekly", "C. Daily"],
      answer: "C",
      title: "Question 23",
    },
    {
      content: "What is a bucket column in Salesforce reporting?",
      options: [
        "A. A custom field that can be created to store a finite amount of values.",
        "B. Used in reports to categorize and group report values.",
        "C. A custom field that can be created to group values.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "How can you ensure you are looking at the latest dashboard data? (Select 2)",
      options: [
        "A. Refresh each underlying report",
        "B. Refresh the dashboard",
        "C. Check the dashboard timestamp",
      ],
      answer: "A,B",
      title: "Question 25",
    },
    {
      content:
        "You would like to visualize progress against a fixed target on a sales dashboard. How can this be achieved?",
      options: [
        "A. Use a funnel component",
        "B. Use a metric component",
        "C. Use a gauge component",
      ],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "What chart types would be appropriate to compare values, for example, average deal size per account? (Select 2)",
      options: ["A. Column Chart", "B. Gauge Chart", "C. Bar Chart"],
      answer: "A,C",
      title: "Question 27",
    },
    {
      content:
        "Software architecture in which a single instance of software runs on a server and serves multiple distinct user groups is known as what?",
      options: ["A. Single-Tenancy", "B. Multi-Instance", "C. Multitenancy"],
      answer: "C",
      title: "Question 28",
    },
    {
      content:
        "Where can you pose a question about Salesforce to your Salesforce peers?",
      options: [
        "A. Salesforce Help",
        "B. Trailblazer Questions",
        "C. IdeaExchange",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content: "What is the largest annual Salesforce conference?",
      options: ["A. Dreamforce", "B. Techforce", "C. TrailblazerDX"],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "A Salesforce professional focused on the user interface and user experience of Salesforce is known as?",
      options: [
        "A. Salesforce Marketer",
        "B. Salesforce User Experience Designer",
        "C. Salesforce Administrator",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "A company would like to be able to sell complex sets of products. Which product would support complex configure, price, and quote functionality?",
      options: ["A. Tableau", "B. CPQ", "C. RFP"],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "What is NOT a type of hands-on org to practice your Salesforce skills?",
      options: [
        "A. Developer Org",
        "B. Trailhead Playground",
        "C. Production Org",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "Your company has recently purchased Salesforce Service Cloud and you would like to learn more about Case assignment rules. Where could you go for on demand, free learning content?",
      options: ["A. AppExchange", "B. App Store", "C. Trailhead"],
      answer: "B",
      title: "Question 34",
    },
    {
      content: "How many Salesforce releases are there per year?",
      options: ["A. 2", "B. 3", "C. 4"],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Salesforce demonstrate their commitment to “business as a platform for change” via:",
      options: ["A. Giving 1%", "B. Pledge 1%", "C. Take 1%"],
      answer: "A",
      title: "Question 36",
    },
    {
      content: "What is NOT a benefit of Customer 360?",
      options: [
        "A. Unites all of your teams.",
        "B. Provides a complete, single, shared view of every customer.",
        "C. Data is stored on-site at your offices.",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content: "What is multitenancy?",
      options: [
        "A. Multiple cloud customers sharing the same Salesforce org.",
        "B. A single instance of the software and supporting infrastructure serving a single customer.",
        "C. A single instance of the software and supporting infrastructure serving multiple customers.",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content:
        "A Salesforce professional that gathers requirements, writes user stories, maps out business strategies, and makes actionable recommendations, describes what role?",
      options: [
        "A. Salesforce Business Analyst",
        "B. Salesforce Marketer",
        "C. Salesforce Developer",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "In the Salesforce ecosystem, companies that provide apps or consulting services are known as what?",
      options: ["A. Customers", "B. Partners", "C. Trailblazers"],
      answer: "B",
      title: "Question 40",
    },
  ],
});
