const curl = require('./src/utils/curl');
const cheerio = require('cheerio');
const fs = require('fs');
const Promise = require('bluebird');

var links = [
  'https://www.exam4training.com/which-future-would-allow-this-functionality/',
  'https://www.exam4training.com/which-two-products-would-allow-them-to-send-push-notifications-to-customers-with-their-mobile-app/',
  'https://www.exam4training.com/what-action-should-correct-the-issue/',
  'https://www.exam4training.com/which-three-considerations-should-be-made-when-setting-up-distributed-marketing-choose-3-answers-3/',
  'https://www.exam4training.com/where-in-setup-could-they-accomplish-this-task/',
  'https://www.exam4training.com/what-solution-will-decrease-manual-workloads-on-the-team-and-will-improve-their-customers-experience-4/',
  'https://www.exam4training.com/where-in-email-studio-should-the-marketing-cloud-admin-look-to-determine-if-the-test-deployed-2/',
  'https://www.exam4training.com/which-email-report-should-ntos-marketing-analyst-pull-from-marketing-cloud-to-get-this-information-2/',
  'https://www.exam4training.com/which-networks-support-lookalike-audiences-directly-from-advertising-studio/',
  'https://www.exam4training.com/how-could-the-admin-ensure-send-data-is-recorded/',
  'https://www.exam4training.com/which-two-recommendations-should-the-consultant-make-3/',
  'https://www.exam4training.com/which-two-report-types-could-help-nto-drive-their-mobile-adoption-strategy/',
  'https://www.exam4training.com/which-solution-should-the-admin-suggest/',
  'https://www.exam4training.com/how-could-the-marketing-cloud-admin-ensure-distinct-data-integrity-across-the-regions/',
  'https://www.exam4training.com/what-solution-should-they-implement-2/',
  'https://www.exam4training.com/which-two-standard-roles-should-be-selected-for-the-new-user-2/',
  'https://www.exam4training.com/what-should-the-marketing-cloud-admin-consider-when-sending-from-the-new-ip-address-2/',
  'https://www.exam4training.com/what-are-the-effects-of-the-click-to-the-subscribers-status/',
  'https://www.exam4training.com/what-are-entry-source-types-for-journey-builder/',
  'https://www.exam4training.com/which-two-statements-are-correct-about-send-logging-choose-2-answers-3/',
  'https://www.exam4training.com/which-value-should-link-these-new-data-extensions-in-data-designer-to-the-existing-contact-records/',
  'https://www.exam4training.com/which-three-items-will-validate-check-in-an-email-message-3/',
  'https://www.exam4training.com/which-two-terms-would-they-add-to-their-website-to-accomplish-this/',
  'https://www.exam4training.com/which-two-filtering-options-could-be-used-when-configuring-the-contact-synced-object/',
  'https://www.exam4training.com/which-functionality-would-allow-this-2/',
  'https://www.exam4training.com/which-three-data-preparations-should-be-made-to-retain-high-data-quality-in-the-new-mode-3/',
  'https://www.exam4training.com/where-could-the-details-be-found-2/',
  'https://www.exam4training.com/when-should-the-admin-create-separate-business-units-for-each-of-ntos-brands-2/',
  'https://www.exam4training.com/what-should-the-admin-confirm-to-resolve-the-issue-3/',
  'https://www.exam4training.com/what-storage-model-should-be-used-if-a-subscriber-has-more-than-one-value-for-an-attribute-2/',
  'https://www.exam4training.com/what-does-marketing-cloud-authenticate-when-a-user-logs-in-through-the-user-interface/',
  'https://www.exam4training.com/which-three-considerations-should-be-made-for-long-term-success-2/',
  'https://www.exam4training.com/which-activity-would-allow-nto-to-build-the-journey-with-the-fewest-activities-possible-3/',
  'https://www.exam4training.com/what-should-the-admin-do-to-resolve-the-issue-so-the-user-can-send-an-email-2/',
  'https://www.exam4training.com/which-two-components-are-appropriate-for-this-solution/',
  'https://www.exam4training.com/where-should-their-marketing-cloud-admin-set-up-permissions-to-allow-rest-authentication/',
  'https://www.exam4training.com/which-feature-would-allow-nto-to-monitor-whether-all-records-were-added-to-the-target-data-structure-each-day-2/',
  'https://www.exam4training.com/which-two-steps-should-the-admin-take-to-enable-this-functionality/',
  'https://www.exam4training.com/why-could-this-be-the-case/',
  'https://www.exam4training.com/what-elements-of-can-spam-should-the-marketing-cloud-admin-ensure-are-present-for-each-commercial-send-2/',
  'https://www.exam4training.com/how-should-nto-create-a-new-user-to-fill-in-2/',
  'https://www.exam4training.com/how-could-the-marketing-cloud-admin-address-this-issue-2/',
  'https://www.exam4training.com/which-marketing-cloud-product-should-nto-purchase-as-a-solution-2/',
  'https://www.exam4training.com/which-two-actions-should-the-implementation-consultant-recommend-2/',
  'https://www.exam4training.com/where-would-a-marketing-cloud-admin-view-all-verified-email-addresses-3/',
  'https://www.exam4training.com/which-2-prerequisites-for-configuring-social-studio-should-the-admin-consider/',
  'https://www.exam4training.com/how-should-they-accomplish-this-4/',
  'https://www.exam4training.com/which-two-data-structures-could-be-configured-to-appear-in-the-out-of-the-box-subscription-center-choose-2-answers-2/',
  'https://www.exam4training.com/which-feature-would-nto-enable-to-assist-in-reducing-threats-from-malicious-api-attacks-2/',
  'https://www.exam4training.com/which-solution-should-the-admin-suggest-2/',
  'https://www.exam4training.com/which-two-fields-would-need-minimal-consideration-for-size-scalability-related-reasons-when-creating-a-data-extension-to-house-this-data/',
  'https://www.exam4training.com/which-aspects-would-confirm-a-sender-authentication-package-sap-has-been-set-up-on-the-account-3/',
  'https://www.exam4training.com/what-should-the-admin-use-to-get-granular-bounce-data-in-bulk-in-a-pre-defined-format/',
  'https://www.exam4training.com/what-functionality-is-contained-in-journey-builder-that-does-not-exist-in-automation-studio/',
  'https://www.exam4training.com/what-should-the-admin-confirm-about-the-data-extension-2/',
  'https://www.exam4training.com/what-feature-should-be-recommended-2/',
  'https://www.exam4training.com/which-import-type-could-the-admin-use-instead/',
  'https://www.exam4training.com/which-two-topics-does-setup-assistant-cover-2/',
  'https://www.exam4training.com/how-should-this-setup-be-achieved/',
  'https://www.exam4training.com/which-three-considerations-should-be-made-when-setting-up-distributed-marketing-choose-3-answers-2/',
  'https://www.exam4training.com/which-skill-is-needed-to-build-an-efficient-solution-2/',
  'https://www.exam4training.com/what-should-the-admin-do-to-prevent-the-prefix-from-deploying-in-live-sends/',
  'https://www.exam4training.com/which-two-standard-roles-should-be-selected-for-the-new-user/',
  'https://www.exam4training.com/which-aspects-would-confirm-a-sender-authentication-package-sap-has-been-set-up-on-the-account-2/',
  'https://www.exam4training.com/where-would-a-marketing-cloud-admin-view-all-verified-email-addresses-2/',
  'https://www.exam4training.com/what-is-the-best-way-to-facilitate-this-within-contact-builder/',
  'https://www.exam4training.com/how-should-the-marketing-cloud-admin-ensure-users-have-access-2/',
  'https://www.exam4training.com/in-order-for-this-solution-to-be-viable-which-skill-set-does-the-customer-team-need-to-possess-2/',
  'https://www.exam4training.com/which-feature-would-nto-enable-to-assist-in-reducing-threats-from-malicious-api-attacks/',
  'https://www.exam4training.com/which-two-actions-should-the-implementation-consultant-recommend/',
  'https://www.exam4training.com/what-elements-of-can-spam-should-the-marketing-cloud-admin-ensure-are-present-for-each-commercial-send/',
  'https://www.exam4training.com/what-solution-should-they-implement/',
  'https://www.exam4training.com/which-three-items-will-validate-check-in-an-email-message-2/',
  'https://www.exam4training.com/what-should-the-admin-confirm-to-resolve-the-issue-2/',
  'https://www.exam4training.com/which-feature-would-allow-nto-to-monitor-whether-all-records-were-added-to-the-target-data-structure-each-day/',
  'https://www.exam4training.com/where-under-setup-could-this-be-created/',
  'https://www.exam4training.com/how-should-they-accomplish-this-3/',
  'https://www.exam4training.com/what-functionality-would-allow-this/',
  'https://www.exam4training.com/what-feature-should-be-recommended/',
  'https://www.exam4training.com/which-marketing-cloud-product-should-nto-purchase-as-a-solution/',
  'https://www.exam4training.com/which-three-values-could-be-used-as-personalization-strings-in-query-string-parameters-2/',
  'https://www.exam4training.com/how-could-the-admin-receive-a-file-of-the-bad-data-rows-to-confirm-this-theory/',
  'https://www.exam4training.com/which-statement-differentiates-the-use-of-data-extensions-over-lists-3/',
  'https://www.exam4training.com/which-feature-should-they-use-3/',
  'https://www.exam4training.com/how-would-the-admin-ensure-a-notification-is-received-when-the-query-fails/',
  'https://www.exam4training.com/which-activity-in-automation-studio-could-be-used-to-decrypt-the-file-to-prepare-for-importing/',
  'https://www.exam4training.com/which-two-data-structures-could-be-configured-to-appear-in-the-out-of-the-box-subscription-center-choose-2-answers/',
  'https://www.exam4training.com/what-would-the-decrypted-data-be-after-the-file-transfer-activity-completes/',
  'https://www.exam4training.com/what-should-the-admin-confirm-about-the-data-extension/',
  'https://www.exam4training.com/where-in-email-studio-should-the-marketing-cloud-admin-look-to-determine-if-the-test-deployed/',
  'https://www.exam4training.com/which-feature-would-allow-compliance-with-this-requirement/',
  'https://www.exam4training.com/what-type-of-relationship-should-be-used-3/',
  'https://www.exam4training.com/what-are-two-possible-outcomes-when-send-as-multipart-mime-is-selected-during-the-send-process-choose-2-answers/',
  'https://www.exam4training.com/which-two-links-in-setup-home-could-be-used-to-troubleshoot-the-issue-2/',
  'https://www.exam4training.com/which-three-data-preparations-should-be-made-to-retain-high-data-quality-in-the-new-mode-2/',
  'https://www.exam4training.com/what-could-be-used-to-replicate-journey-structure-so-it-can-be-easily-recreated-in-another-account/',
  'https://www.exam4training.com/which-two-marketing-cloud-features-will-support-this-effort-3/',
  'https://www.exam4training.com/which-two-considerations-should-be-taken-when-configuring-an-sftp-user/',
  'https://www.exam4training.com/what-should-be-taken-into-consideration-to-accomplish-this-2/',
  'https://www.exam4training.com/how-should-they-accomplish-this-2/',
  'https://www.exam4training.com/which-feature-should-be-used-to-create-a-survey-form/',
  'https://www.exam4training.com/what-feature-could-be-used-to-solicit-website-feedback-without-navigating-away-from-the-email-2/',
  'https://www.exam4training.com/which-error-code-would-the-file-contain-for-this-record/',
  'https://www.exam4training.com/what-is-the-recommended-best-practice-for-font-usage-in-email/',
  'https://www.exam4training.com/what-would-be-achieved-with-sap/',
  'https://www.exam4training.com/what-should-the-admin-do-to-fix-the-issue/',
  'https://www.exam4training.com/how-should-the-user-be-updated-to-allow-the-analyst-the-appropriate-access/',
  'https://www.exam4training.com/which-activity-would-allow-nto-to-build-the-journey-with-the-fewest-activities-possible-2/',
  'https://www.exam4training.com/what-component-should-the-customers-solution-include-2/',
  'https://www.exam4training.com/which-three-data-preparations-should-be-made-to-retain-high-data-quality-in-the-new-mode/',
  'https://www.exam4training.com/which-two-marketing-cloud-features-will-support-this-effort/',
  'https://www.exam4training.com/which-aspects-would-confirm-a-sender-authentication-package-sap-has-been-set-up-on-the-account/',
  'https://www.exam4training.com/what-should-the-admin-do-to-resolve-the-issue-so-the-user-can-send-an-email/',
  'https://www.exam4training.com/where-could-the-details-be-found/',
  'https://www.exam4training.com/a-customer-with-limited-technical-resources-has-requested-assistance-in-setting-up-a-small-email-deployment-that-the-customer-will-maintain-long-term-the-email-will-display-mens-shoes-to-males-in-th/',
  'https://www.exam4training.com/what-component-should-the-customers-solution-include/',
  'https://www.exam4training.com/how-should-nto-create-a-new-user-to-fill-in/',
  'https://www.exam4training.com/how-are-publication-lists-used-in-the-marketing-cloud/',
  'https://www.exam4training.com/which-three-considerations-should-be-made-when-setting-up-distributed-marketing-choose-3-answers/',
  'https://www.exam4training.com/which-activity-would-allow-nto-to-build-the-journey-with-the-fewest-activities-possible/',
  'https://www.exam4training.com/which-two-statements-are-correct-about-send-logging-choose-2-answers-2/',
  'https://www.exam4training.com/what-should-the-admin-confirm-to-resolve-the-issue/',
  'https://www.exam4training.com/where-would-a-marketing-cloud-admin-view-all-verified-email-addresses/',
  'https://www.exam4training.com/which-feature-should-they-use-2/',
  'https://www.exam4training.com/what-feature-could-be-used-to-solicit-website-feedback-without-navigating-away-from-the-email/',
  'https://www.exam4training.com/which-two-topics-does-setup-assistant-cover/',
  'https://www.exam4training.com/in-which-two-ways-should-the-admin-configure-data-designer-to-allow-this-data-to-be-used-within-a-journey/',
  'https://www.exam4training.com/which-three-items-will-validate-check-in-an-email-message/',
  'https://www.exam4training.com/what-storage-model-should-be-used-if-a-subscriber-has-more-than-one-value-for-an-attribute/',
  'https://www.exam4training.com/how-should-the-marketing-cloud-admin-ensure-users-have-access/',
  'https://www.exam4training.com/what-should-the-marketing-cloud-admin-consider-when-sending-from-the-new-ip-address/',
  'https://www.exam4training.com/what-configuration-change-must-be-made-to-alleviate-this-issue-2/',
  'https://www.exam4training.com/which-functionality-would-allow-this/',
  'https://www.exam4training.com/which-component-should-be-discussed-with-the-customer-to-allow-for-this-use-case-2/',
  'https://www.exam4training.com/when-should-the-admin-create-separate-business-units-for-each-of-ntos-brands/',
  'https://www.exam4training.com/which-three-options-determine-when-a-contact-could-enter-a-journey-choose-3-answers/',
  'https://www.exam4training.com/which-report-should-be-used/',
  'https://www.exam4training.com/which-three-values-could-be-used-as-personalization-strings-in-query-string-parameters/',
  'https://www.exam4training.com/what-should-be-taken-into-consideration-to-accomplish-this/',
  'https://www.exam4training.com/which-skill-is-needed-to-build-an-efficient-solution/',
  'https://www.exam4training.com/why-would-the-total-contact-count-be-less-than-the-total-number-of-contacts-from-all-data-sources/',
  'https://www.exam4training.com/how-could-the-marketing-cloud-admin-address-this-issue/',
  'https://www.exam4training.com/which-three-considerations-should-be-made-for-long-term-success/',
  'https://www.exam4training.com/which-email-report-should-ntos-marketing-analyst-pull-from-marketing-cloud-to-get-this-information/',
  'https://www.exam4training.com/which-two-actions-should-be-taken-in-data-designer/',
  'https://www.exam4training.com/which-two-links-in-setup-home-could-be-used-to-troubleshoot-the-issue/',
  'https://www.exam4training.com/which-two-actions-should-nto-take-in-order-to-create-send-classifications/',
  'https://www.exam4training.com/at-which-level-should-the-utm_campaign-value-be-configured/',
  'https://www.exam4training.com/what-functionality-would-get-messages-out-the-door-faster/',
];

async function crawl(url) {
  let res = await curl(url);
  console.log('cloning url:', url, 'length:', res.length);
  let $ = cheerio.load(res);
  let json = {
    content: $('.entry-content p').first().text(),
    answer: $('#exam_question_1').text(),
    title: $('#secondary strong').text(),
  };
  console.log('json', json);
  return json;
}
async function init() {
  let data = await Promise.map(links, crawl, {
    concurrency: 10,
  });

  fs.writeFile('test.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
init();