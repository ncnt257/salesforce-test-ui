window.testContent = window.testContent || [];
var testId = "Salesforce.Identity-and-Access-Management-Architect";
var testName = "Salesforce.Identity-and-Access-Management-Architect";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Identity-and-Access-Management-Architect.v2023-06-17.q81",
  content: [
    {
      content:
        "Universal containers (UC) does my domain enable in the context of a SAML SSO configuration? Choose 2 answers",
      options: [
        "A. SSO from salesforce1 mobile app.",
        "B. Login forensics",
        "C. App launcher",
        "D. Resource deep linking",
      ],
      answer: "A,D",
      title: "Question 1",
    },
    {
      content:
        "A financial services company uses Salesforce and has a compliance requirement to track information about devices from which users log in. Also, a Salesforce Security Administrator needs to have the ability to revoke the device from which users log in.\n       What should be used to fulfill this requirement?",
      options: [
        "A. Use the Login History object to track information about devices from which users log in.",
        "B. Use Login Flows to capture device from which users log in and store device and user information in a custom object.",
        "C. Use multi-factor authentication (MFA) to meet the compliance requirement to track device information.",
        "D. Use the Activations feature to meet the compliance requirement to track device information.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "Which two things should be done to ensure end users can only use single sign-on (SSO) to login in to Salesforce?\n       Choose 2 answers",
      options: [
        "A. Once SSO is enabled, users are only able to login using Salesforce credentials.",
        'B. Enable My Domain and select "Prevent login from https://login.salesforce.com".',
        'C. Assign user "is Single Sign-on Enabled" permission via profile or permission set.',
        "D. Request Salesforce Support to enable delegated authentication.",
      ],
      answer: "B,C",
      title: "Question 3",
    },
    {
      content:
        "An identity architect has been asked to recommend a solution that allows administrators to configure personalized alert messages to users before they land on the Experience Cloud site (formerly known as Community) homepage.\n       What is recommended to fulfill this requirement with the least amount of customization?",
      options: [
        "A. Create custom metadata that stores user alerts and use a LWC to display alerts.",
        "B. Customize the registration handler Apex class to create a routing logic navigating to different home pages based on the user profile.",
        "C. Use Login Flows to add a screen that shows personalized alerts.",
        "D. Build a Lightning web Component (LWC) for a homepage that shows custom alerts.",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "\n       A multinational company is looking to rollout Salesforce globally. The company has a Microsoft Active Directory Federation Services (ADFS) implementation for the Americas, Europe and APAC. The company plans to have a single org and they would like to have all of its users access Salesforce using the ADFS . The company would like to limit its investments and prefer not to procure additional applications to satisfy the requirements.\n       What is recommended to ensure these requirements are met ?",
      options: [
        "A. Use connected apps for each ADFS implementation and implement Salesforce site to authenticate users across the ADFS system applicable to their geo.",
        "B. Implement Identity Connect to provide single sign-on to Salesforce and federated across multiple ADFS systems.",
        "C. Configure Each ADFS system under single sign-on settings and allow users to choose the system to authenticate during sign on to Salesforce-",
        "D. Add a central identity system that federates between the ADFS systems and integrate with Salesforce for single sign-on.",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "Northern Trail Outfitters would like to automatically create new employee users in Salesforce with an appropriate profile that maps to its Active Directory Department.\n       How should an identity architect implement this requirement?",
      options: [
        "A. Use a login flow to collect Security Assertion Markup Language attributes and assign the appropriate profile during Just-In-Time (JIT) provisioning.",
        "B. Use the createUser method in the Just-in-Time (JIT) provisioning registration handler to assign the appropriate profile.",
        "C. Use the updateUser method in the Just-in-Time (JIT) provisioning registration handler to assign the appropriate profile.",
        "D. Make a callout during the login flow to query department from Active Directory to assign the appropriate profile.",
      ],
      answer: "C",
      title: "Question 6",
    },
    {
      content:
        "A real estate company wants to provide its customers a digital space to design their interior decoration options.\n       To simplify the registration to gain access to the community site (built in Experience Cloud), the CTO has requested that the IT/Development team provide the option for customers to use their existing social-media credentials to register and access.\n       The IT lead has approached the Salesforce Identity and Access Management (IAM) architect for technical direction on implementing the social sign-on (for Facebook, Twitter, and a new provider that supports standard OpenID Connect (OIDC)).\n       Which two recommendations should the Salesforce IAM architect make to the IT Lead?\n       Choose 2 answers",
      options: [
        "A. Authentication provider configuration is required each social sign-on providers; and enable Authentication providers in community.",
        "B. Apex coding skills are needed for registration handler to create and update users.",
        "C. Use declarative registration handler process builder/flow to create, update users and contacts.",
        "D. For supporting OIDC it is necessary to enable Security Assertion Markup Language (SAML) with Just-in-Time provisioning (JIT) and OAuth 2.0.",
      ],
      answer: "A,B",
      title: "Question 7",
    },
    {
      content:
        "A university is planning to set up an identity solution for its alumni. A third-party identity provider will be used for single sign-on Salesforce will be the system of records. Users are getting error messages when logging in.\n       Which Salesforce feature should be used to debug the issue?",
      options: [
        "A. Apex Exception Email",
        "B. Login History",
        "C. Debug Logs",
        "D. View Setup Audit Trail",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "A global fitness equipment manufacturer is planning to sell fitness tracking devices and has the following requirements:\n       1) Customer purchases the device.\n       2) Customer registers the device using their mobile app.\n       3) A case should automatically be created in Salesforce and associated with the customers account in cases where the device registers issues with tracking.\n       Which OAuth flow should be used to meet these requirements?",
      options: [
        "A. OAuth 2.0 User-Agent Flow",
        "B. OAuth 2.0 SAML Bearer Assertion Flow",
        "C. OAuth 2.0 Username-Password Flow",
        "D. OAuth 2.0 Asset Token Flow",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers (UC) has an existing Salesforce org configured for SP-Initiated SAML SSO with their Idp. A second Salesforce org is being introduced into the environment and the IT team would like to ensure they can use the same Idp for new org. What action should the IT team take while implementing the second org?",
      options: [
        "A. Use the same request bindings as the first org.",
        "B. Use a different Entity ID than the first org.",
        "C. Use the same SAML Identity location as the first org.",
        "D. Use the Salesforce Username as the SAML Identity Type.",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) has implemented SAML-based SSO solution for use with their multi-org Salesforce implementation, utilizing one of the the orgs as the Identity Provider. One user is reporting that they can log in to the Identity Provider org but get a generic SAML error message when accessing the other orgs. Which two considerations should the architect review to troubleshoot the issue? Choose 2 answers",
      options: [
        "A. The Federation ID must is case sensitive",
        "B. The Federation ID must be a valid Salesforce Username",
        "C. The Federation ID must be in the form of an email address.",
        "D. The Federation ID must be populated on the user record.",
      ],
      answer: "A,D",
      title: "Question 11",
    },
    {
      content:
        "Universal containers (UC) has multiple salesforce orgs and would like to use a single identity provider to access all of their orgs. How should UC'S architect enable this behavior?",
      options: [
        "A. Ensure the same username is allowed in multiple orgs by contacting salesforce support.",
        "B. Ensure that users have the same Federation ID value in their user records in all of UC's salesforce orgs.",
        "C. Ensure that users have the same alias value in their user records in all of UC's salesforce orgs.",
        "D. Ensure that users have the same email value in their user records in all of UC's salesforce orgs.",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "A division of a Northern Trail Outfitters (NTO) purchased Salesforce. NTO uses a third party identity provider (IdP) to validate user credentials against Its corporate Lightweight Directory Access Protocol (LDAP) directory. NTO wants to help employees remember as passwords as possible.\n       What should an identity architect recommend?",
      options: [
        "A. Use Salesforce connect to synchronize LDAP passwords to Salesforce.",
        "B. Setup Salesforce as an IdP to authenticate against the LDAP directory.",
        "C. Setup Salesforce as a Service Provider to the existing IdP.",
        "D. Setup Salesforce as an Authentication Provider to the existing IdP.",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "A Salesforce customer is implementing Sales Cloud and a custom pricing application for its call center agents.\n       An Enterprise single sign-on solution is used to authenticate and sign-in users to all applications. The customer has the following requirements:\n       1. The development team has decided to use a Canvas app to expose the pricing application to agents.\n       2. Agents should be able to access the Canvas app without needing to log in to the pricing application.\n       Which two options should the identity architect consider to provide support for the Canvas app to initiate login for users?\n       Choose 2 answers",
      options: [
        'A. Select "Enable as a Canvas Personal App" in the connected app settings.',
        "B. Enable OAuth settings in the connected app with required OAuth scopes for the pricing application.",
        "C. Enable SAML in the connected app and Security Assertion Markup Language (SAML) Initiation Method as Service Provider Initiated.",
        "D. Configure the Canvas app as a connected app and set Admin-approved users as pre-authorized.",
      ],
      answer: "C,D",
      title: "Question 14",
    },
    {
      content:
        'Universal containers (UC) has a classified information system that it\'s call centre team uses only when they are working on a case with a record type of "classified". They are only allowed to access the system when they own an open "classified" case, and their access to the system is removed at all other times. They would like to implement SAML SSO with salesforce as the IDP, and automatically allow or deny the staff\'s access to the classified information system based on whether they currently own an open "classified" case record when they try to access the system using SSO. What is the recommended solution for automatically allowing or denying access to the classified information system based on the open "classified" case record criteria?',
      options: [
        'A. Use salesforce reports to identify users that currently owns open "classified" cases and should be granted access to the classified information system.',
        'B. Use apex trigger on case to dynamically assign permission sets that grant access when a user is assigned with an open "classified" case, and remove it when the case is closed.',
        'C. Use a custom connected App handler using apex to dynamically allow access to the system based on whether the staff owns any open "classified" cases.',
        'D. Use custom SAML jit provisioning to dynamically query the user\'s open "classified" cases when attempting to access the classified information system',
      ],
      answer: "C",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers is implementing a new Experience Cloud site and the identity architect wants to use dynamic branding features as of the login process.\n       Which two options should the identity architect recommend to support dynamic branding for the site?\n       Choose 2 answers",
      options: [
        "A. To use dynamic branding, the community must be built with the Customer Account Portal template.",
        "B. An external content management system (CMS) must be used for dynamic branding on Experience Cloud sites.",
        "C. An experience ID (expid) or placeholder parameter must be used in the URL to represent the brand.",
        "D. To use dynamic branding, the community must be built with the Visuaiforce + Salesforce Tabs template.",
      ],
      answer: "A,C",
      title: "Question 16",
    },
    {
      content:
        "Universal containers wants to build a custom mobile app connecting to salesforce using Oauth, and would like to restrict the types of resources mobile users can access. What Oauth feature of Salesforce should be used to achieve the goal?",
      options: [
        "A. Access Tokens",
        "B. Refresh Tokens",
        "C. Scopes",
        "D. Mobile pins",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers (UC) is using its production org as the identity provider for a new Experience Cloud site and the identity architect is deciding which login experience to use for the site.\n       Which two page types are valid login page types for the site?\n       Choose 2 answers",
      options: [
        "A. lightning Experience Page",
        "B. Experience Builder Page",
        "C. Login Discovery Page",
        "D. Embedded Login Page",
      ],
      answer: "C,D",
      title: "Question 18",
    },
    {
      content:
        "Universal containers (UC) uses a home-grown employee portal for their employees to collaborate. UC decides to use salesforce ideas to allow the employees to post ideas from the employee portal. When clicking some links in the employee portal, the users should be redirected to salesforce, authenticated, and presented with relevant pages. What scope should be requested when using the Oauth token to meet this requirement?",
      options: ["A. Full", "B. Web", "C. API", "D. Visualforce"],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) is planning to build a new customer service portal and wants to use passwordless login, allowing customers to login with a one-time passcode sent to them via email or SMS.\n       How should the quantity of required Identity Verification Credits be estimated?",
      options: [
        "A. Identity Verification Credits are consumed with each SMS (text message) sent and should be estimated based on the number of login verification challenges for SMS verification users.",
        "B. Identity Verification Credits are consumed with each verification sent and should be estimated based on the number of logins that will incur a verification challenge.",
        "C. Identity Verification Credits are a direct add-on license based on the number of existing member-based or login-based Community licenses.",
        "D. Each community comes with 10,000 Identity Verification Credits per month and only customers with more than 10,000 logins a month should estimate additional SMS verifications needed.",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers (UC) employees have Salesforce access from restricted IP ranges only, to protect against unauthorised access. UC wants to roll out the Salesforce1 mobile app and make it accessible from any location. Which two options should an Architect recommend? Choose 2 answers",
      options: [
        "A. Use Login Flow to bypass IP range restriction for the mobile app.",
        "B. Relax the IP restriction with a second factor in the Connect App settings for Salesforce1 mobile app.",
        "C. Remove existing restrictions on IP ranges for all types of user access.",
        "D. Relax the IP restrictions in the Connect App settings for the Salesforce1 mobile app.",
      ],
      answer: "B,D",
      title: "Question 21",
    },
    {
      content:
        "How should an Architect force users to authenticate with Two-factor Authentication (2FA) for Salesforce only when not connected to an internal company network?",
      options: [
        "A. Use an Apex Trigger on the UserLogin object to detect the user's IP address and prompt for 2FA if needed.",
        "B. Use Custom Login Flows with Apex to detect the user's IP address and prompt for 2FA if needed.",
        "C. Add the list of company's network IP addresses to the Login Range list under 2FA Setup.",
        'D. Apply the "Two-factor Authentication for User Interface Logins" permission and Login IP Ranges for all Profiles.',
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) uses a Security Assertion Markup Language (SAML)-based Identity Provider (idP) to authenticate employees to all systems. The IdP authenticates users against a Lightweight Directory Access Protocol (LDAP) directory and has access to user information. NTO wants to minimize Salesforce license usage since only a small percentage of users need Salesforce.\n       What is recommended to ensure new employees have immediate access to Salesforce using their current IdP?",
      options: [
        "A. Build an integration that queries LDAP periodically and creates new active users in Salesforce.",
        "B. Build an integration that queries LDAP and creates new inactive users in Salesforce and use a login flow to activate the user at first login.",
        "C. Configure Just-in-Time provisioning using SAML attributes to create new Salesforce users as necessary when a new user attempts to login to Salesforce.",
        "D. Install Salesforce Identity Connect to automatically provision new users in Salesforce the first time they attempt to login.",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Which three are capabilities of SAML-based Federated authentication? Choose 3 answers",
      options: [
        "A. Web applications with no passwords are more secure and stronger against attacks.",
        "B. Trust relationships between Identity Provider and Service Provider are required.",
        "C. Centralized federation provides single point of access, control and auditing.",
        "D. Access tokens are used to access resources on the server once the user is authenticated.",
        "E. SAML tokens can be in XML or JSON format and can be used interchangeably.",
      ],
      answer: "B,C,D",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers allows employees to use a mobile device to access Salesforce for daily operations using a hybrid mobile app. This app uses Mobile software development kits (SDK), leverages refresh token to regenerate access token when required and is distributed as a private app.\n       The chief security officer is rolling out an org wide compliance policy to enforce re-venfication of devices if an employee has not logged in from that device in the last week.\n       Which connected app setting should be leveraged to comply with this policy change?",
      options: [
        "A. Permitted User - Ask admins to maintain a list of users who are permitted based on last login date.",
        "B. Scope - Deny refresh_token scope for this connected app.",
        "C. Refresh Token Policy - Expire the refresh token if it has not been used for 7 days.",
        "D. Session Policy - Set timeout value of the connected app to 7 days.",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers would like its customers to register and log in to a portal built on Salesforce Experience Cloud. Customers should be able to use their Facebook or Linkedln credentials for ease of use.\n       Which three steps should an identity architect take to implement social sign-on?\n       Choose 3 answers",
      options: [
        "A. Create authentication providers for both Facebook and Linkedln.",
        "B. Update the default registration handlers to create and update users.",
        "C. Register both Facebook and Linkedln as connected apps.",
        'D. Enable "Federated Single Sign-On Using SAML".',
        'E. Check "Facebook" and "Linkedln" under Login Page Setup.',
      ],
      answer: "A,B,E",
      title: "Question 26",
    },
    {
      content:
        "Universal Container's (UC) is using Salesforce Experience Cloud site for its container wholesale business. The identity architect wants to an authentication provider for the new site.\n       Which two options should be utilized in creating an authentication provider?\n       Choose 2 answers",
      options: [
        "A. A custom registration handier can be set.",
        "B. The default authentication provider certificate can be set.",
        "C. A custom error URL can be set.",
        "D. The default login user can be set.",
      ],
      answer: "A,C",
      title: "Question 27",
    },
    {
      content:
        "An architect needs to set up a Facebook Authentication provider as login option for a salesforce customer Community. What portion of the authentication provider setup associates a Facebook user with a salesforce user?",
      options: [
        "A. User info endpoint URL",
        "B. Federation ID",
        "C. Consumer key and consumer secret",
        "D. Apex registration handler",
      ],
      answer: "D",
      title: "Question 28",
    },
    {
      content:
        "Containers (UC) has implemented SAML-based single Sign-on for their Salesforce application and is planning to provide access to Salesforce on mobile devices using the Salesforce1 mobile app. UC wants to ensure that Single Sign-on is used for accessing the Salesforce1 mobile App. Which two recommendations should the Architect make? Choose 2 Answers",
      options: [
        "A. Use the existing SAML SSO flow along with Web Server Flow.",
        "B. Configure the Embedded Web Browser to use My Domain URL.",
        "C. Use the existing SAML-SSO flow along with User Agent Flow.",
        "D. Configure the Salesforce1 App to use the MY Domain URL.",
      ],
      answer: "C,D",
      title: "Question 29",
    },
    {
      content:
        "Universal containers (UC) would like to enable SAML-BASED SSO for a salesforce partner community. UC has an existing ldap identity store and a third-party portal. They would like to use the existing portal as the primary site these users access, but also want to allow seamless access to the partner community. What SSO flow should an architect recommend?",
      options: [
        "A. Sp-Initiated",
        "B. Web server",
        "C. IDP-initiated",
        "D. User-Agent",
      ],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) has a Customer Community that uses Facebook for Authentication. UC would like to ensure that Changes in the Facebook profile are reflected on the appropriate Customer Community user:\n       How can this requirement be met?",
      options: [
        "A. Use information in the signed Request that is received from facebook.",
        "B. Develop a scheduled job that calls out to Facebook on a nightly basis.",
        "C. Use the updateUser method on the registration Handler Class.",
        "D. Use SAML Just-In-Time Provisioning between Facebook and Salesforce.",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers (UC) currently uses Salesforce Sales Cloud and an external billing application. Both Salesforce and the billing application are accessed several times a day to manage customers. UC would like to configure single sign-on and leverage Salesforce as the identity provider. Additionally, UC would like the billing application to be accessible from Salesforce. A redirect is acceptable.\n       Which two Salesforce tools should an identity architect recommend to satisfy the requirements?\n       Choose 2 answers",
      options: [
        "A. salesforce Canvas",
        "B. Connected Apps",
        "C. Identity Connect",
        "D. App Launcher",
      ],
      answer: "A,D",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers (UC) built an integration for their employees to post, view, and vote for ideas in Salesforce from an internal Company portal. When ideas are posted in Salesforce, links to the ideas are created in the company portal pages as part of the integration process. The Company portal connects to Salesforce using OAuth. Everything is working fine, except when users click on links to existing ideas, they are always taken to the Ideas home page rather than the specific idea, after authorization. Which OAuth URL parameter can be used to retain the original requested page so that a user can be redirected correctly after OAuth authorization?",
      options: ["A. State", "B. Redirect_uri", "C. Callback_uri", "D. Scope"],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants to give customers the ability to submit and manage issues with their purchases. It is important for NTO to give its customers the ability to login with their Amazon credentials.\n       What should an identity architect recommend to meet these requirements?",
      options: [
        "A. Configure an OpenID Connect Authentication Provider for Amazon.",
        "B. Configure Amazon as a connected app.",
        "C. Create a custom external authentication provider for Amazon.",
        "D. Configure a predefined authentication provider for Amazon.",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has an off-boarding process where a terminated employee is first disabled in the Lightweight Directory Act Protocol (LDAP) directory, then requests are sent to the various application support teams to finish user deactivations. A terminated employee recently was able to login to NTO's Salesforce instance 24 hours after termination, even though the user was disabled in the corporate LDAP directory.\n       What should an identity architect recommend to prevent this from happening in the future?",
      options: [
        "A. use a login flow to make a callout to the LDAP directory before authenticating the user to Salesforce.",
        "B. Create a Just-in-Time provisioning registration handler to ensure users are deactivated in Salesforce as they are disabled in LDAP.",
        "C. Configure an authentication provider to delegate authentication to the LDAP directory.",
        "D. Setup an identity provider (IdP) to authenticate users using LDAP, set up single sign-on to Salesforce and disable Login Form authentication.",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers wants to implement Single Sign-on for a Salesforce org using an external Identity Provider and corporate identity store.\n       What type of authentication flow is required to support deep linking'",
      options: [
        "A. StartURL on Identity Provider",
        "B. Web Server OAuth SSO flow",
        "C. Service-Provider-Initiated SSO",
        "D. Identity-Provider-initiated SSO",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants to improve its engagement with existing customers to boost customer loyalty. To get a better understanding of its customers, NTO establishes a single customer view including their buying behaviors, channel preferences and purchasing history. All of this information exists but is spread across different systems and formats.\n       NTO has decided to use Salesforce as the platform to build a 360 degree view. The company already uses Microsoft Active Directory (AD) to manage its users and company assets.\n       What should an Identity Architect do to provision, deprovision and authenticate users?",
      options: [
        "A. A Salesforce Identity can be included but NTO will require Identity Connect.",
        "B. Salesforce Identity can be included but NTO will be required to build a custom integration with Microsoft AD.",
        "C. Salesforce Identity is included in the Salesforce licenses so it does not need to be considered separately.",
        "D. Salesforce Identity is not needed since NTO uses Microsoft AD.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        'Universal Containers (UC) implemented SSO to a third-party system for their Salesforce users to access the App Launcher. UC enabled "User Provisioning" on the Connected App so that changes to user accounts can be synched between Salesforce and the third party system. However, UC quickly notices that changes to user roles in Salesforce are not getting synched to the third-party system. What is the most likely reason for this behaviour?',
      options: [
        "A. The Approval queue for User Provisioning Requests is unmonitored.",
        "B. Required operation(s) was not mapped in User Provisioning Settings.",
        "C. Salesforce roles have more than three levels in the role hierarchy.",
        "D. User Provisioning for Connected Apps does not support role sync.",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "A company wants to provide its employees with a custom mobile app that accesses Salesforce. Users are required to download the internal native IOS mobile app from corporate intranet on their mobile device. The app allows flexibility to access other Non Salesforce internal applications once users authenticate with Salesforce. The apps self-authorize, and users are permitted to use the apps once they have logged into Salesforce.\n       How should an identity architect meet the above requirements with the privately distributed mobile app?",
      options: [
        "A. Configure Mobile App settings in connected app and Salesforce as identity provider for non-Salesforce internal apps.",
        "B. Create a new hybrid mobile app and use the connected app with OAuth to authenticate users for Salesforce and non-Salesforce internal apps.",
        "C. Use connected app with OAuth and Security Assertion Markup Language (SAML) to access other Non Salesforce internal apps.",
        "D. Use Salesforce as an identity provider (IdP) to access the mobile app and use the external IdP for other non-Salesforce internal apps.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) uses Salesforce Experience Cloud sites (previously known as Customer Community) to provide a digital portal where customers can login using their Google account.\n       NTO would like to automatically create a case record for first time users logging into Salesforce Experience Cloud.\n       What should an Identity architect do to fulfill the requirement?",
      options: [
        "A. Create an authentication provider for Social Login using Google and leverage standard registration handler.",
        "B. Implement a Just-in-Time handler class that has logic to create cases upon first login.",
        "C. Implement a login flow with a record create component for Case.",
        "D. Configure an authentication provider for Social Login using Google and a custom registration handler.",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "Universal containers (UC) has a mobile application that calls the salesforce REST API. In order to prevent users from having to enter their credentials everytime they use the app, UC has enabled the use of refresh Tokens as part of the salesforce connected App and updated their mobile app to take advantage of the refresh token. Even after enabling the refresh token, Users are still complaining that they have to enter their credentials once a day. What is the most likely cause of the issue?",
      options: [
        "A. The Oauth authorizations are being revoked by a nightly batch job.",
        "B. The app is requesting too many access Tokens in a 24-hour period",
        "C. The users forget to check the box to remember their credentials.",
        "D. The refresh token expiration policy is set incorrectly in salesforce",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        'A group of users try to access one of universal containers connected apps and receive the following error message : "Failed : Not approved for access". what is most likely to cause of the issue?',
      options: [
        "A. The use of high assurance sections are required for the connected App.",
        "B. The users do not have the correct permission set assigned to them.",
        "C. The salesforce administrators gave revoked the Oauth authorization.",
        'D. The connected App setting "All users may self-authorize" is enabled.',
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) wants to build a custom mobile app for their field reps to create orders in salesforce. After the first time the users log in, they must be able to access salesforce upon opening the mobile app without being prompted to log in again. What Oauth flows should be considered to support this requirement?",
      options: [
        "A. Web Server flow with a Refresh Token.",
        "B. Mobile Agent flow with a Bearer Token.",
        "C. User Agent flow with a Refresh Token.",
        "D. SAML Assertion flow with a Bearer Token.",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "Universal containers (UC) has a custom, internal-only, mobile billing application for users who are commonly out of the office. The app is configured as a connected App in salesforce. Due to the nature of this app, UC would like to take the appropriate measures to properly secure access to the app. Which two are recommendations to make the UC? Choose 2 answers",
      options: [
        "A. Require high assurance sessions in order to use the connected App",
        "B. Use Google Authenticator as an additional part of the logical processes.",
        "C. Set login IP ranges to the internal network for all of the app users profiles.",
        "D. Disallow the use of single Sign-on for any users of the mobile app.",
      ],
      answer: "A,B",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers wants to implement SAML SSO for their internal Salesforce users using a third-party IdP. After some evaluation, UC decides not to set up My Domain for their Salesforce org. How does that decision impact their SSO implementation?",
      options: [
        "A. SP-initiated SSO will not work.",
        "B. Either SP- or IdP-initiated SSO will work.",
        "C. IdP-initiated SSO will not work.",
        "D. Neither SP- nor IdP-initiated SSO will work.",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "Universal Containers (UC) operates in Asia, Europe and North America regions. There is one Salesforce org for each region. UC is implementing Customer 360 in Salesforce and has procured External Identity and Customer Community licenses in all orgs.\n       Customers of UC use Community to track orders and create inquiries. Customers also tend to move across regions frequently.\n       What should an identity architect recommend to optimize license usage and reduce maintenance overhead?",
      options: [
        "A. Merge three orgs into one instance of Salesforce. This will no longer require maintaining three separate copies of the same customer.",
        "B. Delete contact/ account records and deactivate user if user moves from a specific region; Sync will no longer be required.",
        "C. Contacts are required since Community access needs to be enabled. Maintenance is a necessary overhead that must be handled via data integration.",
        "D. Enable Contactless User in all orgs and downgrade users from Experience Cloud license to External Identity license once users have moved out of that region.",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers (UC) is building a customer community and will allow customers to authenticate using Facebook credentials. The First time the user authenticating using facebook, UC would like a customer account created automatically in their Accounting system. The accounting system has a web service accessible to Salesforce for the creation of accounts. How can the Architect meet these requirements?",
      options: [
        "A. Use OAuth JWT flow to pass the data from Salesforce to the Accounting System.",
        "B. Use JIT Provisioning to automatically create the account in the accounting system.",
        "C. Create a custom application on Heroku that manages the sign-on process from Facebook.",
        "D. Add an Apex callout in the registration handler of the authorization provider.",
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "A technology enterprise is planning to implement single sign-on login for users. When users log in to the Salesforce User object custom field, data should be populated for new and existing users.\n       Which two steps should an identity architect recommend?\n       Choose 2 answers",
      options: [
        "A. Implement RegistrationHandler Interface.",
        "B. Implement SesslonManagement Class.",
        "C. Create and update methods.",
        "D. Implement Auth.SamlJitHandler Interface.",
      ],
      answer: "C,D",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers (UC) has an existing e-commerce platform and is implementing a new customer community. They do not want to force customers to register on both applications due to concern over the customers experience. It is expected that 25% of the e-commerce customers will utilize the customer community . The e-commerce platform is capable of generating SAML responses and has an existing REST-ful API capable of managing users. How should UC create the identities of its e-commerce users with the customer community?",
      options: [
        "A. Use SAML JIT in the Customer Community to create users when a user tries to login to the community from the e-commerce site.",
        "B. Use the e-commerce REST API to create users when a user self-register on the customer community and use SAML to allow SSO.",
        "C. Use the standard Salesforce API to create users in the Community When a User is Created in the e-Commerce platform and use SAML to allow SSO.",
        "D. Use a nightly batch ETL job to sync users between the Customer Community and the e-commerce platform and use SAML to allow SSO.",
      ],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        "Universal containers (UC) uses an internal company portal for their employees to collaborate. UC decides to use salesforce ideas and provide the ability for employees to post ideas from the company portal. They use SAML-BASED SSO to get into the company portal and would like to leverage it to access salesforce. Most of the users don't exist in salesforce and they would like the user records created in salesforce communities the first time they try to access salesforce. What recommendation should an architect make to meet this requirement?",
      options: [
        "A. Use just-in-time provisioning",
        "B. Use salesforce APIs to create users on the fly",
        "C. Use on-the-fly provisioning",
        "D. Use Identity connect to sync users",
      ],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "An Identity and Access Management (IAM) Architect is recommending Identity Connect to integrate Microsoft Active Directory (AD) with Salesforce for user provisioning, deprovisioning and single sign-on (SSO).\n       Which feature of Identity Connect is applicable for this scenano?",
      options: [
        "A. If the number of provisioned users exceeds Salesforce licence allowances, identity Connect will start disabling the existing Salesforce users in First-in, First-out (FIFO) fashion.",
        "B. When configured, Identity Connect acts as an identity provider to both Active Directory and Salesforce, thus providing SSO as a default feature.",
        "C. Identity Connect can be deployed as a managed package on salesforce org, leveraging High Availability of Salesforce Platform out-of-the-box.",
        "D. When Identity Connect is in place, if a user is deprovisioned in an on-premise AD, the user's Salesforce session Is revoked Immediately.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Containers (UC) uses a legacy Employee portal for their employees to collaborate. Employees access the portal from their company's internal website via SSO. It is set up to work with SiteMinder and Active Directory. The Employee portal has features to support posing ideas. UC decides to use Salesforce Ideas for voting and better tracking purposes. To avoid provisioning users on Salesforce, UC decides to integrate Employee portal ideas with Salesforce idea through the API. What is the role of Salesforce in the context of SSO, based on this scenario?",
      options: [
        "A. An independent system, because Salesforce is not part of the SSO setup.",
        "B. Identity Provider, because the API calls are authenticated by Salesforce.",
        "C. Service Provider, because Salesforce is the application for managing ideas.",
        "D. Connected App, because Salesforce is connected with Employee portal via API.",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "The security team at Universal containers(UC) has identified exporting reports as a high-risk action and would like to require users to be logged into salesforce with their active directory (AD) credentials when doing so.\n       For all other uses of Salesforce, Users should be allowed to use AD credentials or salesforce credentials. What solution should be recommended to prevent exporting reports except when logged in using AD credentials while maintaining the ability to view reports when logged in with salesforce credentials?",
      options: [
        "A. Use SAML Federated Authentication and Custom SAML jit provisioning to dynamically add or remove a permission set that grants the Export Reports permission.",
        "B. Use SAML Federated Authentication, treat SAML sessions as high assurance, and raise the session level required for exporting reports.",
        "C. Use SAML Federated Authentication with a login flow to dynamically add or remove a permission set that grants the export reports permission.",
        "D. Use SAML Federated Authentication and block access to reports when accesses through a standard assurance session.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "An identity architect's client has a homegrown identity provider (IdP). Salesforce is used as the service provider (SP). The head of IT is worried that during a SP initiated single sign-on (SSO), the Security Assertion Markup Language (SAML) request content will be altered.\n       What should the identity architect recommend to make sure that there is additional trust between the SP and the IdP?",
      options: [
        "A. Ensure that there is an HTTPS connection between IDP and SP.",
        "B. Ensure that the Issuer and Assertion Consumer service (ACS) URL is property configured between SP and IDP.",
        "C. Encrypt the SAML Request using certification authority (CA) signed certificate and decrypt on IdP.",
        'D. Ensure that on the SSO settings page, the "Request Signing Certificate" field has a self-signed certificate.',
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has a number of employees who do NOT need access Salesforce objects. Trie employees should sign in to a custom Benefits web app using their Salesforce credentials.\n       Which license should the identity architect recommend to fulfill this requirement?",
      options: [
        "A. Identity Connect License",
        "B. Identity Verification Credits Add-on License",
        "C. External Identity License",
        "D. Identity Only License",
      ],
      answer: "D",
      title: "Question 55",
    },
    {
      content:
        "What information does the 'Relaystate' parameter contain in sp-Initiated Single Sign-on?",
      options: [
        "A. Reference to a URL redirect parameter at the identity provider.",
        "B. Reference to the login address URL of the service provider.",
        "C. Reference to the login address URL of the identity Provider.",
        "D. Reference to a URL redirect parameter at the service provider.",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Which two capabilities does My Domain enable in the context of a SAML SSO configuration? Choose 2 answers",
      options: [
        "A. Resource deep linking",
        "B. App Launcher",
        "C. Login Forensics",
        "D. SSO from Salesforce Mobile App",
      ],
      answer: "A,D",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers (UC) has implemented SAML-based Single Sign-On to provide seamless access to its Salesforce Orgs, financial system, and CPQ system. Below is the SSO implementation landscape.\n       \n       \n       What role combination is represented by the systems in this scenario''",
      options: [
        "A. Salesforce Org1 and Salesforce Org2 are the only Service Providers.",
        "B. Financial System and CPQ System are the only Service Providers.",
        "C. Salesforce Org1 and Salesforce Org2 are acting as Identity Providers.",
        "D. Salesforce Org1 and PingFederate are acting as Identity Providers.",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "Northern Trail Outfitters is implementing a busmess-to-business (B2B) collaboration site using Salesforce Experience Cloud. The partners will authenticate with an existing identity provider and the solution will utilize Security Assertion Markup Language (SAML) to provide single sign-on to Salesforce. Delegated administration will be used in the Expenence Cloud site to allow the partners to administer their users' access.\n       How should a partner identity be provisioned in Salesforce for this solution?",
      options: [
        "A. Create only a contact.",
        "B. Create a contactless user.",
        "C. Create a user and a related contact.",
        "D. Create a person account.",
      ],
      answer: "C",
      title: "Question 59",
    },
    {
      content:
        "Refer to the exhibit.\n       \n       \n       Outfitters (NTO) is using Experience Cloud as an Identity for its application on Heroku. The application on Heroku should be able to handle two brands, Northern Trail Shoes and Northern Trail Shirts.\n       A user should select either of the two brands in Heroku before logging into the community. The app then performs Authorization using OAuth2.0 with the Salesforce Experience Cloud site.\n       NTO wants to make sure it renders login page images dynamically based on the user's brand preference selected in Heroku before Authorization.\n       what should an identity architect do to fulfill the above requirements?",
      options: [
        "A. For each brand create different communities and redirect users to the appropriate community using a custom Login controller written in Apex.",
        "B. Authorize third-party service by sending authorization requests to the community-url/services/oauth2/authonze/expid_value.",
        "C. Authorize third-party service by sending authorization requests to the community-url/services/oauth2/authorize/cookie_value.",
        "D. Create multiple login screens using Experience Builder and use Login Flows at runtime to route to different login screens.",
      ],
      answer: "B",
      title: "Question 60",
    },
    {
      content:
        "The executive sponsor for an organization has asked if Salesforce supports the ability to embed a login widget into its service providers in order to create a more seamless user experience.\n       What should be used and considered before recommending it as a solution on the Salesforce Platform?",
      options: [
        "A. Embedded Login. Identify what level of UI customization will be required to make it match the service providers look and feel.",
        "B. Embedded Login. Consider whether or not it relies on third party cookies which can cause browser compatibility issues.",
        "C. OpenID Connect Web Server Flow. Determine if the service provider is secure enough to store the client secret on.",
        "D. Salesforce REST apis. Ensure that Secure Sockets Layer (SSL) connection for the integration is used.",
      ],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "Universal Container's (UC) identity architect needs to recommend a license type for their new Experience Cloud site that will be used by external partners (delivery providers) for reviewing and updating their accounts, downloading files provided by UC and obtaining scheduled pickup dates from their calendar.\n       UC is using their Salesforce production org as the identity provider for these users and the expected number of individual users is 2.5 million with 13.5 million unique logins per month.\n       Which of the following license types should be used to meet the requirement?",
      options: [
        "A. Partner Community Login License",
        "B. Partner Community License",
        "C. External Apps License",
        "D. Customer Community plus Login License",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) is planning to roll out a partner portal for its distributors using Experience Cloud. NTO would like to use an external identity provider (idP) and for partners to register for access to the portal. Each partner should be allowed to register only once to avoid duplicate accounts with Salesforce.\n       What should a identity architect recommend to create partners?",
      options: [
        "A. Create a custom page m Experience Cloud to self register partner with Experience Cloud and Ping identity store.",
        "B. Create a custom web page in the Portal and create users in the IdP and Experience Cloud using published APIs.",
        "C. On successful creation of Partners using Self Registration page in Experience Cloud, create identity in Ping.",
        "D. Allow partners to register through the IdP and create partner users in Salesforce through an API.",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "In a typical SSL setup involving a trusted party and trusting party, what consideration should an Architect take into account when using digital certificates?",
      options: [
        "A. Use of self-signed certificate leads to lower maintenance for trusting party because there is no trusted CA cert to maintain.",
        "B. Use of self-signed certificate leads to higher maintenance for trusted party because they have to act as the trusted CA",
        "C. Use of self-signed certificate leads to higher maintenance for trusting party because the cert needs to be added to their truststore.",
        "D. Use of self-signed certificate leads to lower maintenance for trusted party because multiple self-signed certs need to be maintained.",
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers (UC) is building a custom Innovation platform on their Salesforce instance. The Innovation platform will be written completely in Apex and Visualforce and will use custom objects to store the Data. UC would like all users to be able to access the system without having to log in with Salesforce credentials. UC will utilize a third-party idp using SAML SSO. What is the optimal Salesforce licence type for all of the UC employees?",
      options: [
        "A. Identity Licence.",
        "B. Salesforce Licence.",
        "C. Salesforce Platform Licence.",
        "D. External Identity Licence.",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "Uwversal Containers (UC) is building a custom employee hut) application on Amazon Web Services (AWS) and would like to store their users' credentials there. Users will also need access to Salesforce for internal operations. UC has tasked an identity architect with evaluating Afferent solutions for authentication and authorization between AWS and Salesforce.\n       How should an identity architect configure AWS to authenticate and authorize Salesforce users?",
      options: [
        "A. Develop a custom Auth server in AWS.",
        "B. Configure the custom employee app as a connected app.",
        "C. Create a custom external authentication provider.",
        "D. Configure AWS as an OpenID Connect Provider.",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers (UC) has implemented SSO according to the diagram below. uses SAML while Salesforce Org 1 uses OAuth 2.0. Users usually start their day by first attempting to log into Salesforce Org 2 and then later in the day, they will log into either the Financial System or CPQ system depending upon their job position. Which two systems are acting as Identity Providers?",
      options: [
        "A. Financial System",
        "B. Pingfederate",
        "C. Salesforce Org 2",
        "D. Salesforce Org 1",
      ],
      answer: "B,D",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers (UC) wants to build a mobile application that twill be making calls to the Salesforce REST API. UC's Salesforce implementation relies heavily on custom objects and custom Apex code. UC does not want its users to have to enter credentials every time they use the app. Which two scope values should an Architect recommend to UC? Choose 2 answers.",
      options: [
        "A. Full",
        "B. Refresh_token",
        "C. Api",
        "D. Custom_permissions",
      ],
      answer: "B,C",
      title: "Question 68",
    },
    {
      content:
        "Universal Containers is using OpenID Connect to enable a connection from their new mobile app to its production Salesforce org.\n       What should be done to enable the retrieval of the access token status for the OpenID Connect connection?",
      options: [
        "A. Create a custom OAuth scope.",
        "B. Query using OpenID Connect discovery endpoint.",
        "C. A Leverage OpenID Connect Token Introspection.",
        "D. Enable cross-origin resource sharing (CORS) for the /services/oauth2/token endpoint.",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers (UC) has an Experience Cloud site (Customer Community) where customers can authenticate and place orders, view the status of orders, etc. UC allows guest checkout.\n       Mow can a guest register using data previously collected during order placement?",
      options: [
        "A. Enable Security Assertion Markup Language Sign-On and use a login flow to collect only order details to retrieve customer data.",
        "B. Enable Facebook as an authentication provider and use a registration handler to collect only order details to retrieve customer data.",
        "C. Use a Connected App Handler Apex Plugin class to collect only order details to retrieve customer data.",
        "D. Enable self-registration and customize a self-registration page to collect only order details to retrieve customer data.",
      ],
      answer: "D",
      title: "Question 70",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has an existing custom business-to-consumer (B2C) website that does NOT support single sign-on standards, such as Security Assertion Markup Language (SAMi) or OAuth. NTO wants to use Salesforce Identity to register and authenticate new customers on the website.\n       Which two Salesforce features should an identity architect use in order to provide username/password authentication for the website?\n       Choose 2 answers",
      options: [
        "A. Embedded Login",
        "B. Connected Apps",
        "C. Identity Connect",
        "D. Delegated Authentication",
      ],
      answer: "A,D",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers (UC) uses Salesforce for its customer service agents. UC has a proprietary system for order tracking which supports Security Assertion Markup Language (SAML) based single sign-on. The VP of customer service wants to ensure only active Salesforce users should be able to access the order tracking system which is only visible within Salesforce.\n       What should be done to fulfill the requirement?\n       Choose 2 answers",
      options: [
        "A. Customize Order Tracking to initiate a REST call to validate users in Salesforce after login.",
        "B. Set up the Corporate Identity store as an identity provider (IdP) for Order Tracking,",
        "C. Setup Salesforce as an identity provider (IdP) for order Tracking.",
        "D. Setup Order Tracking as a Canvas app in Salesforce to POST IdP initiated SAML assertion.",
      ],
      answer: "B,C",
      title: "Question 72",
    },
    {
      content:
        "Universal containers(UC) has implemented SAML-BASED single Sign-on for their salesforce application and is planning to provide access to salesforce on mobile devices using the salesforce1 mobile app. UC wants to ensure that single Sign-on is used for accessing the salesforce1 mobile app. Which two recommendations should the architect make? Choose 2 answers",
      options: [
        "A. Use the existing SAML SSO flow along with Web server flow",
        "B. Configure the embedded Web browser to use my domain URL.",
        "C. Configure the salesforce1 app to use the my domain URL",
        "D. Use the existing SAML SSO flow along with user agent flow.",
      ],
      answer: "C,D",
      title: "Question 73",
    },
    {
      content:
        "Northern Trail Outfitters recently acquired a company. Each company will retain its Identity Provider (IdP).\n       Both companies rely extensively on Salesforce processes that send emails to users to take specific actions in Salesforce.\n       How should the combined companys' employees collaborate in a single Salesforce org, yet authenticate to the appropriate IdP?",
      options: [
        "A. Have generated links append a querystnng parameter indicating the IdP. The login service will redirect to the appropriate IdP.",
        "B. Enable each IdP as a login option in the MyDomain Authentication Service settings. Users will then click on the appropriate IdP button.",
        "C. Configure unique MyDomains for each company and have generated links use the appropriate MyDomam in the URL.",
        "D. Have generated links be prefixed with the appropriate IdP URL to invoke an IdP-initiated Security Assertion Markup Language flow when clicked.",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "Universal containers (UC) is successfully using Delegated Authentication for their salesforce users. The service supporting Delegated Authentication is written in Java. UC has a new CIO that is requiring all company Web services be RESR-ful and written in . NET. Which two considerations should the UC Architect provide to the new CIO? Choose 2 answers",
      options: [
        "A. Delegated Authentication will not work with rest services.",
        "B. Delegated Authentication will continue to work with a.net service.",
        "C. Delegated Authentication will not work with a.net service.",
        "D. Delegated Authentication will continue to work with rest services.",
      ],
      answer: "A,B",
      title: "Question 75",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) is planning to implement a community for its customers using Salesforce Experience Cloud . Customers are not able to self-register. NTO would like to have customers set their own passwords when provided access to the community.\n       Which two recommendations should an identity architect make to fulfill this requirement?\n       Choose 2 answers",
      options: [
        "A. Enable Welcome emails while configuring the Experience Cloud site.",
        "B. Use Login Flows to allow users to reset password in Experience Cloud site.",
        "C. Add customers as contacts and add them to Experience Cloud site.",
        "D. Allow Password reset using the API to update Experience Cloud site membership.",
      ],
      answer: "B,D",
      title: "Question 76",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants its customers to use phone numbers to log in to their new digital portal, which was designed and built using Salesforce Experience Cloud. In order to access the portal, the user will need to do the following:\n       1. Enter a phone number and/or email address\n       2. Enter a verification code that is to be sent via email or text.\n       What is the recommended approach to fulfill this requirement?",
      options: [
        "A. Create a custom login page with an Apex controller. The controller has logic to send and verify the identity.",
        "B. Create a custom login flow that uses an Apex controller to verify the phone numbers with the company's verification service.",
        "C. Create a Login Discovery page and provide a Login Discovery Handler Apex class.",
        "D. Create an Authentication provider and implement a self-registration handler class.",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "Universal containers (UC) has decided to use identity connect as it's identity provider. UC uses active directory(AD) and has a team that is very familiar and comfortable with managing ad groups. UC would like to use AD groups to help configure salesforce users. Which three actions can AD groups control through identity connect? Choose 3 answers",
      options: [
        "A. Granting report folder access",
        "B. Permission sets assignment",
        "C. Custom permission assignment",
        "D. Public Group Assignment",
        "E. Role Assignment",
      ],
      answer: "B,D,E",
      title: "Question 78",
    },
    {
      content:
        "Universal Containers is creating a web application that will be secured by Salesforce Identity using the OAuth\n       2.0 Web Server Flow uses the OAuth 2.0 authorization code grant type).\n       Which three OAuth concepts apply to this flow?\n       Choose 3 answers",
      options: [
        "A. Access Token",
        "B. Client Secret",
        "C. Scopes",
        "D. Verification URL",
      ],
      answer: "A,B,C",
      title: "Question 79",
    },
    {
      content:
        "Universal containers (UC) has implemented ansp-Initiated SAML flow between an external IDP and salesforce. A user at UC is attempting to login to salesforce1 for the first time and is being prompted for salesforce credentials instead of being shown the IDP login page. What is the likely cause of the issue?",
      options: [
        'A. The "Redirect to Identity Provider" option has been selected in the my domain configuration.',
        "B. The user has not configured the salesforce1 mobile app to use my domain for login",
        'C. The "Redirect to identity provider" option has not been selected the SAML configuration.',
        'D. The user has not been granted the "Enable single Sign-on" permission',
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "What are three capabilities of Delegated Authentication? Choose 3 answers",
      options: [
        "A. It can be assigned by Profiles.",
        "B. It can be assigned by Permission Sets.",
        "C. It can be assigned by Custom Permissions.",
        "D. It can connect to REST services.",
        "E. It can connect to SOAP services.",
      ],
      answer: "B,D,E",
      title: "Question 81",
    },
  ],
});