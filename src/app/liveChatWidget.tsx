// components/LiveChatWidget.tsx
import Script from 'next/script';

const LiveChatWidget = () => {
  return (
    <Script
      id="Microsoft_Omnichannel_LCWidget"
      src="https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js"
      data-app-id="a63c66cc-d8f4-4dcd-8d55-5e8c2b65d266"
      data-lcw-version="prod"
      data-org-id="67afb66b-0377-ef11-ac1c-6045bdc4b0c5"
      data-org-url="https://m-67afb66b-0377-ef11-ac1c-6045bdc4b0c5.au.omnichannelengagementhub.com"
      strategy="lazyOnload"
    />
  );
};

export default LiveChatWidget;
