window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2023-01-05.q61",
  content: [
    {
      content:
        "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web service used in the application and notices that there are too many instances of unavailability.Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
      options: [
        "A. Change the code that makes the request to set the throwOnError attribute, of the service, to be true.",
        "B. Increase the web service time out.",
        "C. Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
        "D. Update the external service to have a faster response time.",
      ],
      answer: "C,D",
      title: "Question 1",
    },
    {
      content:
        "A merchant has reported that customers are seeing low stock items at the top of their search results, giving them asubpar customer experience and impacting conversion.How might this issue be resolved to ensure a better customer journey?",
      options: [
        "A. In Business Manager, set an availability low ranking threshold in Search Preferences.",
        "B. In Business Manager, select Show Orderable Products Only at the root level to hide any products that are currently out of stock.",
        "C. Create a job that sets all unavailable products to be hidden. Schedule the job to run hourly to clean up the catalog on a regular basis.",
        "D. In Business Manager, enter a higher boost factor for availability in Searchable Attributes.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers has expanded itsimplementation to support German with a locale code of de. The current resource bundle is checkout.properties.To which file should the developer add German string values?",
      options: [
        "A. checkout_de.properties in resources folder",
        "B. de_checkout.properties in resources folder",
        "C. checkout.properties in the default locale folder",
        "D. checkout.properties in the de locale folder",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms.In addition, a formfield node is in the form XML and the necessary form input is present in the ISML template.The code below is the submit button for the ISML markup.What additional steps must occur before the Digital Developer can begin writing the processing code forthis request?",
      options: ["A. Option C", "B. Option A", "C. Option B", "D. Option D"],
      answer: "A",
      title: "Question 4",
    },
    {
      content:
        "The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem.Which statement correctly adds a log entry?",
      options: [
        "A. Logger.getErrorLog().log('Unable to find Apple Pay payment instrument fororder.'+paymentInstruments);",
        "B. Logger.fault('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "C. Logger.error('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "D. Logger.exception('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        'Universal Containers calls the following combination of products "The Basics" and sells the combination as a unique product ID:* One Model 103 container* Five Model 611 container* Tree Model 201 containerThe Developer created these three products in the catalog.What is the next step in Business Manager to create "The Basics" as a combination?',
      options: [
        'A. In the Products module, create a product named "The Basics" and add the products to the Product Sets tab.',
        'B. In the Products module, create a product named "The Basics" and add the products to the ProductBundles tab.',
        'C. In the Product Sets module, create a product set named "The Basics".',
        'D. In the Product Bundles module, create a bundle named "The Basics".',
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "Adeveloper needs to render a Page Designer page in JSON format. What is the correct syntax?",
      options: [
        "A. PageMgr,renderPage{pageID, {parameter1:value1}}",
        "B. PageMgr.serializePage(pageID), {parameter1:value1}};",
        "C. JSON.stringgify(PageMgrrenderpage(pageID), {paramter1:value1}}:",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "A client wants to differentiate theirmonobrand stores with a special icon when shown in the store locator. The information is saved in a true/false custom attribute for each Store object in Merchant tools.How should the developer follow SFRA best practices to expose this data for rendering?",
      options: [
        "A. Ad dan <isscript> to the template, and call StoreMgr.searchStoresByCoordinates();",
        "B. Extend the existing Stores_Find controller with a new middleware function that performs the query",
        "C. Pass the Store system object to the template, so that custom propierties are available",
        "D. Use the module.superModule functionality and the call method to add a new property to the Store Model.",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "A developer needs to check for product inventory in all inventory lists using the Open Commerce API.An example request URL is:Which properly should the developer check in the OCAPI settings to confirm the appropriate resource is enabled?",
      options: ["A. Client_id", "B. Ecom-inventory", "C. Inventory_list"],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "A developer must configure permissions for an Open Commerce API resource on a sandbox instance that currently does not have any permissions configured.Which two configuration properties are required to enable Access to the resource?Choose 2 answers",
      options: [
        "A. Version_range",
        "B. Resource_id",
        "C. Client_id",
        "D. Read_attributes",
      ],
      answer: "B,C",
      title: "Question 10",
    },
    {
      content:
        "In order to implement site custom functionality, a developer creates a new cartridge.Which step should the developer take to ensure their cartridge changes take effect?",
      options: [
        "A. Add the new cartridge to the cartridge path for the business Manager site.",
        "B. Add the new cartridge to the cartridge path for the relevant Storefront site.",
        "C. Rebuild the site indexes to capture incremental changes.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "A Digital Developer added a file named MyBusinessController.js in the cartridge named app_project. The project design calls for this new file to override MyBusinessController.js in client_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controllers cartridges.Which cartridge path meets the project requirements?",
      options: [
        "A. app_project:storefront_controllers:storefront_core",
        "B. storefront_core:storefront_controllers:client_project:app_project",
        "C. app_project:client_project:storefront_controllers:storefront_core",
        "D. client_project:app_project:storefront_controllers:storefront_core",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "A developer set up a new site with Taxation: Net. However, the business requirements changed and the site now needs to be Taxation:Gross. The Business Manager interface does not give this option.Which sequence of steps is necessary to change the site to gross taxation?",
      options: [
        "A. Unlock the site preferences and then change the Taxation setting to Gross",
        'B. Make sure that the developer has "Administrator" Access, then change the Taxation setting to Gross',
        "C. Create a new site with Taxation set to Gross, then delete the old site.",
        'D. Change the global setting,"Enable Taxation Methods" to true, then change the Taxation setting to Gross',
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "A Digital Developer adds the following line of code to a script.The code executes without error;however, the log file on disk does NOT contain the log message.Which two actions should be completed to write the log message to disk? (Choose two.)",
      options: [
        "A. Ensure that the debug log level is enabled to write to file in the Custom Log Settings Business Manager module.",
        'B. Ensure that the "login" category is added to the Custom Log Filters in the Log Settings Business Manager module.',
        "C. Ensure that the debug log level has been added to the custom log level types in the Global Preferences business manager module.",
        "D. Archive old log files to make room in the log directory.",
      ],
      answer: "C,D",
      title: "Question 14",
    },
    {
      content:
        "Which code sample is required to use a custom tag provided in SiteGenesis inan ISML template?",
      options: ["A. Option B", "B. Option C", "C. Option A", "D. Option D"],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "A developer is implementing new Page Designer content on a merchant's Storefront and adds the line below toWhat does this achieve?",
      options: [
        "A. Filters Page Designer search results into separate page and component folders.",
        "B. Enables searching to find Page Designer content assets that are not in folders.",
        "C. Extends the ConrencSearchModei to allow the folder filter.",
        "D. Prevents Page Designer pages and components from being searchable.",
      ],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "Given the requirements:* To show thewashing Instructions for a clothing product on a dedicated section the detail page* Washing instructions come from the product Information manager (PIM)* To have this attribute available to localize in the StorefrontWhich action must these requirements?",
      options: [
        "A. Add a resource file for every locale for which the attribute needs to be translated.",
        "B. set the product system object type as localizable.",
        "C. Create a custom attribute on the product system object and set it as localizable.",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A developer has configured the following log levels for categories & sub categories as WARN logging is enabled for 'product' and DEBUG for \"product.import\" What will be the log level used forvarious categories and sub-categories?",
      options: [
        "A. WARN and ERROR are lugged for product\" and all its subcategories. For the subcategory'product.import' DEBUG and INFO are also logoed",
        "B. WARN and ERROR are logged fix product' and all its subcategories. For thesubcategory'' product.import* DEBUG and INFO are not logged.",
        'C. WARN and FRROR ate lugged for product" and all its subcategories.',
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "Given a file in a plug-in cartridge with the following code:'use strict':Var base = module.superModule;Function applyCustomCache (req,res,next){res.CachePeriod = 6; //eslint-disable-line no-param-reassignres.cachePeriodUnit = 'hours') //eslint-disable-line no-param-reassignnext();}Module.exports = base;Module.exports.applyCustomCache =applyCustomCache;What does this code extend?",
      options: [
        "A. A decorator",
        "B. A model",
        "C. A middleware script",
        "D. A controller",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "A Newsletter controller contains the following route:Server.post('Subscribe', function(req,res,next){var newsletterForm = server.forms.getForm('newsletter');var CustomObjectMgr = require('dw/object/CustomObjectMgr'); if(newsletterForm.valid){ try{ var CustomObject = CustomObjectMgr.createCustomObejct('NewsletterSubscription', newsletterform.email.value); CustomObject.custom.firstName = newsletterForm.fname.value; CustomObject.custom.lastName = newsletterForm.lname.value;-} catch(e){//Catch error here}}next();});Assuming the Custom Object metadata exists, why does this route fail torender the newsletter template when the subscription form is correctly submitted?",
      options: [
        "A. Custom Objects can only be created by Job scripts",
        "B. The Custom Object creation is not wrapped in a Transaction.",
        "C. The Subscribe route is missing the server.middleware.httpt middleware.",
        "D. The CustomObjectMgr variable should be declare outside of the route.",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "A client that sells to multiple countries in Europe needs to disable Apple Pay for Denmark.Which Business Manager module is used to achieve this requirement?",
      options: [
        "A. PaymentProcessors",
        "B. Locale Payments",
        "C. Payment Methods",
        "D. Apple Pay",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "Given the SFRA Controller below:Why would a JavaScript debugger, that is stopped at line 06, fall to show the viewdata variable in the inspectiontool?",
      options: [
        "A. viewdata is a B2C Script reserved name.",
        "B. viewdata is declared but not assigned.",
        "C. viewdata is assigned but not declared.",
        "D. cache. applyDefauItCache is not a valid middleware.",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "Amerchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items.How can a developer use Business Manager to ensure that thegift vouchers are always available?",
      options: [
        "A. Check the perpetual flag in the product inventory record",
        "B. Check the Available to Sell (ATS) flag dor the producto set",
        "C. Set StockLevel = maxAllocation for the producto.",
        "D. Manually set the inventory to a high number.",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content:
        "A Digital Developer must resolve a performance issue with product tiles. The Developer determines that the product tiles are NOT being cached for a long enough period.Which two methods can the Developer use to verify the cache settings for the product tiles? (Choose two.)",
      options: [
        "A. View the cache information provided by the Merchant Tools > Technical Reports Business Manager module.",
        "B. Enable cache information in thestorefront toolkit and view the cache information for the product tile.",
        "C. Enable the template debugger to verify the cache times for the producttile.isml template.",
        "D. View the product list page cache settings provided in the Administration >Manage Sites Business Manager module.",
      ],
      answer: "B,D",
      title: "Question 24",
    },
    {
      content:
        "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects.Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
      options: [
        "A. The Auto-Upload setting is enabled for the server connection.",
        "B. The server is configured to accept incoming connections.",
        "C. The cartridge is for the current version of B2C Commerce.",
        "D. The Active Server setting is enabled for theserver connection.",
        "E. The credentials for the server connection are correctly entered.",
      ],
      answer: "A,B,C",
      title: "Question 25",
    },
    {
      content:
        "A Digital Developer needs to storeinformation temporarily and decides to create a custom object.Which code creates a custom object?",
      options: [
        "A. CustomObject.createCustomObject(CustomObjectType,primaryKey);",
        "B. CustomObject.createCustomObject(primaryKey,CustomObjectType);",
        "C. CustomObjectMgr.createCustomObject(primaryKey);",
        "D. CustomObjectMgr.createCustomObject(CustomObjectType,primaryKey)",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting.Which approach should the Developer use to implement the requirement?",
      options: [
        "A. Implement a condition that checks to see if the response was empty and execute fallback code if true.",
        "B. Implement a ServiceUnavailableException exception handler to execute fallback code.",
        "C. Use the setTimeout method to execute fallback code if the request has NOT completed.",
        "D. Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "A Digital Developer is asked to optimize controller performance by lazy loading scripts as needed instead of loading all scripts at the start of the code execution.Which statement should the Developer use to lazy loadscripts?",
      options: [
        "A. local include",
        "B. require () method",
        "C. $.ajax () jQuery method",
        "D. importPackage () method",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "A merchant has asked their development team to add a new site.Which two tasks are essential for correct site configuration prior to launch?Choose 2 answers",
      options: [
        "A. Assign a default currency.",
        "B. Assign a default payment processor.",
        "C. Assign the appropriate taxation type.",
        "D. Assign a default payment method.",
        "E. Assign a default payment type.",
      ],
      answer: "A,C",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers wants to associate a region code value with an order to indicate the general area of its destination. This region code must be accessible whenever the order history is displayed.What is required to accomplish this?",
      options: [
        "A. Store the region code value in the geolocation system attribute of the Order.",
        "B. Define a custom object type to store the username with the region code.",
        "C. Store the region code value in a session variable.",
        "D. Define a custom attribute on the Order system object type to store the region code value.",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "Given the requirements:* To show the washing instructions for a clothing product on a dedicated section the detail page* Washing instructions come from the product information manager(PIM)* To have this attribute available to localize in the Storefront.Which action meets these requirements?",
      options: [
        "A. Add a custom attribute for each locale",
        "B. Set the product system object type as localizable",
        "C. Set the custom attribute as localizable",
        "D. Add a resource file for every locale for which the attribute needs to be translated.",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "Given the following conditions:* Site export file with acopy of the Storefront data for a custom site* Sandbox with the custom site code, but no Storefront data* Requirement for a working copy of SFRA for development referenceA developer is assigned the following Business manager tasks:A) Import the customSite using Site Import/ExportB) Import the SFRA Demo Sites using Site Import/ExportC) Rebuild the custom Site search indexesIn what sequence should the developer perform the tasks, so that the custom Site displays the products as intended?",
      options: [
        "A. Task A, then B, then C",
        "B. Task B, then A, then C",
        "C. Task A,then C, then B",
        "D. Task B, then C, then A",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers recently completed updates to their storefront shoppingcart page. A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. Additionally, authenticated users who try to add a coupon are logged out.The following processing code is found in the Cart.js controller file:What should the Developer verify to identify the issue?",
      options: [
        "A. The CSRF cartridge is included in the site's cartridge path.",
        "B. The CSRF token is present in the form and is being submitted in the request.",
        "C. The form group has the secure attribute set to true.",
        "D. The CSRF settings in Business Manager are properly configured.",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "Which two items are appropriate content of custom logs implemented at checkout?Choose 2 answers:",
      options: [
        "A. Customer's password at post-checkout sign up",
        "B. Transaction's credit card information",
        "C. Payment gateway service responsecode",
        "D. Order failure information",
      ],
      answer: "C,D",
      title: "Question 34",
    },
    {
      content:
        "A developer has a requirement to display a banner in two different category pages.Which snippet of code should the developer add to a template to allow the merchant to configure each independently?A)B)C)",
      options: ["A. Option B", "B. Option A", "C. Option C"],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "A client has a requirement to allow users on the Storefornt to filter by a newly createdattribute.Which is necessary to achieve this?",
      options: [
        "A. Change the productseachrefinerbar.iml template",
        "B. Set the attribute as Searchable.",
        "C. Add a new Search Refinment Definition.",
      ],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it iswritten.What must be done in order to use the debugger with the new controller when it is written?",
      options: [
        "A. Use the existing pipeline debugger.",
        "B. Modify the debugger configuration and use the existing pipeline debugger.",
        "C. Create and use a new script debug configuration.",
        "D. Create and use a new controller debug configuration.",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "Which line of code creates a content slot that can be included on homepage.isml to display on the home page?",
      options: [
        'A. <isslot id="my_banner " description="for home page" type="global" context="homepage"/>',
        'B. <isslot id="my_banner " description="for home page" context="global">',
        'C. <isslot id="my_banner " description="for home page" context="global" context-object="${pdict.CurrentHomePage}"/>',
        'D. <isslot id="my_banner " description="for home page" type="global" context="content" context-object="${pdict.ContentSearchResult.content}"/>',
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "A Storefront is designed so that multiple pages share a common header and footer layout.Which ISML tag should a developer use on the templates for these pages to avoid code repetition in the most effective way?",
      options: [
        "A. <iscontent> ... </iscontent>",
        "B. <isinclude> ... </isinclude>",
        "C. <isreplace> ... </isreplace>",
        "D. <isdecorate> ... </isdecorate>",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "A merchant has a requirement to sell a combination of fourexisting products with a unique product ID.This collection will be known as 'Our Top Combo', and is base don the merchant's trading information that shows this combination to be in high demand.What does the developer need to do next to fulfill this requirement?",
      options: [
        "A. Create a Content Slot with Content Type = Product and add the four component products into that slot.",
        "B. Create a Product Set called 'Our Top Combo' and add the products into the set.",
        "C. Create a recommendation rule associating the four products as a recommendation group.",
        "D. Create a unique produce to called 'Our Top Combo' and add the four products into the Product Bundles tab.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Giventhe file structure below, which ISML method call renders the customLandingPage template?",
      options: [
        "A. ISML.render('content/custom/customLandingPage');",
        "B. ISML.renderTamplate('cartridge/templates/default/content/custom/customLandingPage');",
        "C. ISML('content/custom/customLandingPage');",
        "D. ISML.renderTemplate('content/custom/customLandingPage');",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "Given the requirements:* To integrate with an external web service using HTTP requests* To create a service for this purpose with the Service framework using the LocalServiceRegistry class.* To test the servicebefore the external service provider makes the API available Which solution allows the developer to satisfy the requirements?",
      options: [
        "A. Create a service and a Sitepreference that induce the service to respond witch a mock response using a conditional.",
        "B. Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one",
        "C. Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.",
        "D. Create aservice and implement the mockFill callback and set the service mode to mock.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "The Home-Show route uses this middleware chain:The developer added Home.;s in another cartridge, which is before the original cartridge in the cartridge path, to extend that route but it does not have the middleware chain:Assuming the code is correct on both functions, what is the expected result?",
      options: [
        "A. The custom code executes and thenthe base code executes.",
        "B. The base code executes and then the custom code executes.",
        "C. The base code executes, but the custom code is ignored because the signature lines do not match.",
        'D. A RunTime error is thrown, "Error: Params do not match route".',
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "A merchant is selling a new product line of televisions. In orderto deliver a good customer experience, the merchandising team wants the screen size to be incorporated into the search and navigation journey.Which two things can the developer do to facilitate this for them?Choose 2 answers",
      options: [
        'A. Create a new search refinement for a Boolean value true or false and label it "big screen."',
        "B. Configure catalog-level search refinement definition for Screen Size.",
        "C. Configure Screen Size threshold search refinement bucket definitions.",
        "D. Define a new searchable attribute for Screen Size.",
      ],
      answer: "B,D",
      title: "Question 44",
    },
    {
      content:
        "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned.Given the above requirement, where should the developer create that partition in Business Manager?",
      options: [
        "A. Operations > Cache > Site",
        "B. Administration > Sites > Manage Sites > Site > Cache",
        "C. Site > Site Preferences > Cache",
        "D. Operations > Site > Manage Sites > Cache",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "A developer is importing edits for two different sites into the same sandbox, and is provided with four different files.Which two XML files should thedeveloper import using the site-specific Merchant Tools import modules, instead of the Administration section import modules?Choose 2 answers.",
      options: [
        "A. System type extensions (solo en Sites)",
        "B. Search Settings En (search y en Sites)",
        "C. Site Jobs (sites)",
        "D. Promotions ( en sites y en online marketing)",
      ],
      answer: "B,D",
      title: "Question 46",
    },
    {
      content:
        'A developer needs to display a products list of their "Women Dresses" category in a new web application, independent of their main B2C Commerce site. This custom listing page needs to be styled differently from the existing one, as per marketing requirements.Which B2C Commerce tool should the developer use to collect the necessary information?',
      options: [
        "A. The existing category's endpoint to perform a REST call.",
        "B. The ProductSearch resource of the Shop OCAPI.",
        "C. The Search-Show Controller URL to perform a web crawl.",
        "D. The iframe of the existing category page.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "A client has two B2C Commerce sites in the same instance: one for the U.S. market, the other for the European market. They offer free gift wrapping on a selection of products. For each order, five products can be wrapped in theU.S., but only three products can be wrapped in the European region.How should a developer allow the merchant to independently adjust this number?",
      options: [
        "A. Create a new custom preference by extending the Site Preference object type.",
        "B. Select the correspondingoption in the system preference for Orders.",
        "C. Add a new Campaign using the Online Marketing section of the Business Manager.",
        "D. Configure a new localizable content slot with a market-specific value.",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers created a site export file from staging in the global export directory.How should the Digital Developer update their sandbox using this staging site export file?",
      options: [
        "A. Perform a data replication from staging.",
        "B. Use the Site Development > Site Import & Export Business Manager module.",
        "C. Use the Site Development > Import & Export Business Manager module.",
        "D. Download the site export file and use UX Studio to transfer the data to the sandbox.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:How should the Developer change the request?",
      options: [
        "A. Change the HTTP method to PUT.",
        "B. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
        "C. Change the HTTP method to GET.",
        "D. Include an authentication token in the request.",
      ],
      answer: "C",
      title: "Question 50",
    },
    {
      content:
        "A Digital Developersuspects a logical error in a script.Which action will help locate the error?",
      options: [
        "A. Submit a support ticket to B2C Commerce.",
        "B. Put breakpoints in the code, debug, and examine variable values.",
        "C. Check request logs for evidence of the logical error.",
        "D. Print all values in the script node called before the current script.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers wants to give customers the ability to refine product search results by a product custom attribute, weightCapacity.Which series of steps should a Digital Developer take to show this refinement on the storefront?",
      options: [
        "A. Define a sorting rule for weightCapacity, then rebuild the product search index.",
        "B. Define a search refinement for weightCapacity, then clear the page cache segment for Search-Show.",
        "C. Define search-suggestion buckets for weightCapacity, then rebuild the product search index.",
        "D. Define a search refinement for weightCapacity, then rebuild the product search index.",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "Recent code changes to an existing cartridge do not appear correctly on a Storefront. The developer confirms that the code is uploaded in the IDE and ensures that the cartridge is associated with the sandbox.Which two additional steps should the developer take to troubleshoot this problem?Choose 2 answers",
      options: [
        "A. Check that the correct code version is selected.",
        "B. Check the Business Manager site cartridge path.",
        "C. Check the Storefront site cartridge path.",
        "D. Check that the search index was recently rebuilt.",
      ],
      answer: "C,D",
      title: "Question 53",
    },
    {
      content:
        "A Digital Developer wants pass control to an ISML template from a JavaScript Controller and load product on the pipeline dictionary with the name myProduct.Which code sample will achieve this?",
      options: [
        'A. ISML.renderTemlpate ( "helloworld.isml", { "myProduct": "product" });',
        'B. ISML.renderTemlpate ( "helloworld.isml", { "product": myProduct });',
        'C. ISML.renderTemlpate ( "helloworld.isml", { myProduct: product });',
        'D. ISML.renderTemlpate ( "helloworld.isml", { product: myProduct });',
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "A Digital Developer is working in a sandbox on a site named test-site using the domain test.demandware.net.The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.By default, which URL format is a proper Open Commerce API for Sandbox?",
      options: [
        "A. https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
        "B. https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...",
        "C. https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa...",
        "D. https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa...",
      ],
      answer: "C",
      title: "Question 55",
    },
    {
      content:
        "A developer is asked to improve the maintainability of a page by reducing its code repetition.What are two techniques the developer should implementto achieve this?Choose 2 answers.",
      options: [
        "A. Require and render templates with <isscript> tags",
        "B. Embed partial files using ISML expressions",
        "C. Implement template decorators paired with replace tags",
        "D. Use local template includes",
      ],
      answer: "C,D",
      title: "Question 56",
    },
    {
      content:
        "Once the Cache Information tool of the storefront toolkit is enabled, how can a Digital Developer view caching information for a particular component of the page?",
      options: [
        "A. Open the Request Logs to view the caching information.",
        "B. Right-click on the component in UX Studioand view the caching properties of the file.",
        "C. Start a pipeline debugging session and view the caching information provided.",
        "D. Hover over the caching icons now present on the storefront.",
      ],
      answer: "D",
      title: "Question 57",
    },
    {
      content:
        "A developer wants to create in Business Manager extension with the cartridge named plugin_vm_extension.Which two steps should the developer take for the extension option to show up in Business Manager?Choose 2 answers:",
      options: [
        "A. Add plugin_bm_extension to the cartridge path under business manager cartridge site",
        "B. Add the appropiate roles and permission to the user to view the business manager extension.",
        "C. Add plugin_bm_extension to the cartridge path under Storefront cartridge site path.",
        "D. Activate a new code version for the Business Manager Site.",
      ],
      answer: "A,D ",
      title: "Question 58",
    },
    {
      content:
        "Which method is efficient and scalable because it uses the product search index rather than searching the database?",
      options: [
        "A. ProduccAvailabiliryModel.isOrderable()",
        "B. ProducrlndexModel.getOrderableProductsOnly()",
        "C. ProductSearcbHodel().gerProductSearchHita()",
        "D. ProductVanari.cnMcciel.aerVariams ()",
      ],
      answer: "C",
      title: "Question 59",
    },
    {
      content:
        "Universal Containers needs to have Apple Pay disabled for the country of Spain.Which Business Manager module should the Developer use to meet this requirement?",
      options: [
        "A. Merchant Tools > Site Preferences > Apple Pay",
        "B. Merchant Tools > Ordering > Payment Methods",
        "C. Merchant Tools > Site Preferences > Payment Types",
        "D. Merchant Tools > Ordering > Payment Processors",
      ],
      answer: "B",
      title: "Question 60",
    },
    {
      content:
        "A developer is asked to write a log containing the ID and name of the product with a variable named myProduct.Which snippet of code should be used?",
      options: [
        "A. Logger.warn('The current producto is {0} with name {1}', myProduct.getID(), myProduct.getName());",
        "B. Logger.warn('The current producto is ${myProduct.getID()} with name ${myProduct.getName()}');",
        "C. Logger.warn('The current producto is %s with name %s'), context(myProduct.getID(), myProduct.getName());",
        "D. Logger.warn('The current producto is {0} with name {1}'), context(myProduct.getID(), myProduct.getName());",
      ],
      answer: "A",
      title: "Question 61",
    },
  ],
});
