import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

interface PrivacyContent {
  product: string;
  displayName: string;
  content: string;
}

const privacyPolicies: PrivacyContent[] = [
  {
    product: "planetgame",
    displayName: "Planet Game",
    content: `Planet Game Privacy Policy
Effective Date: February 4, 2026

Thank you for playing Planet Game! This privacy policy explains how we handle your information when you use our game.

Information We Collect
We do not collect, store, or process any personal information or user data. Planet Game is designed to be played offline and does not require an internet connection.

• No Account Data: No user accounts, emails, or personal identifiers are collected.
• No Gameplay Data: We do not track scores, progress, or any gameplay statistics.
• No Device Data: We do not access device information, location, or any hardware details.
• No Advertising: Planet Game does not display ads or use any advertising networks.

How We Use Information
Since we don't collect any information, we don't use it for any purposes.

Data Sharing
We do not share any data with third parties because we don't collect any data.

Data Security
All game data is stored locally on your device. We don't have access to or control over your local data.

Children's Privacy
Planet Game is suitable for all ages and does not collect any information from children.

Changes to This Policy
If we make changes to this privacy policy, we will update the date at the top and make the updated policy available within the game.

Contact Us
If you have any questions about this privacy policy, please contact us through the App Store or our website.

Thank you for playing Planet Game!`,
  },
  {
    product: "pack-pal",
    displayName: "Pack-Pal",
    content: `Pack-Pal Privacy Policy
Effective Date: February 4, 2026

Thank you for using Pack-Pal! This privacy policy explains how we handle your information when you use our application.

Information We Collect
We do not collect, store, or process any personal information or user data. Pack-Pal is designed to be used offline and does not require an internet connection.

• No Account Data: No user accounts, emails, or personal identifiers are collected.
• No Usage Data: We do not track usage patterns, progress, or any statistics.
• No Device Data: We do not access device information, location, or any hardware details.
• No Advertising: Pack-Pal does not display ads or use any advertising networks.

How We Use Information
Since we don't collect any information, we don't use it for any purposes.

Data Sharing
We do not share any data with third parties because we don't collect any data.

Data Security
All application data is stored locally on your device. We don't have access to or control over your local data.

Children's Privacy
Pack-Pal is suitable for all ages and does not collect any information from children.

Changes to This Policy
If we make changes to this privacy policy, we will update the date at the top and make the updated policy available within the application.

Contact Us
If you have any questions about this privacy policy, please contact us through the App Store or our website.

Thank you for using Pack-Pal!`,
  },
];

export default function Privacy() {
  const navigate = useNavigate();
  const { product } = useParams<{ product: string }>();
  
  // Default to first product if no product specified
  const activeProduct = product || privacyPolicies[0].product;
  const activePolicy = privacyPolicies.find(p => p.product === activeProduct) || privacyPolicies[0];

  return (
    <motion.div
      initial={{ width: "66.666667%", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: "66.666667%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-[1400px] mx-auto px-4 py-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="mb-6 max-w-[1200px] mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-300 dark:border-gray-700 mb-6">
          {privacyPolicies.map((policy) => (
            <button
              key={policy.product}
              onClick={() => navigate(`/privacy/${policy.product}`)}
              className={`px-6 py-3 font-medium transition-all relative ${
                activeProduct === policy.product
                  ? "text-linkedin-blue dark:text-linkedin-blue"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {policy.displayName}
              {activeProduct === policy.product && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-linkedin-blue"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
        >
          <div className="prose dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
              {activePolicy.content}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
