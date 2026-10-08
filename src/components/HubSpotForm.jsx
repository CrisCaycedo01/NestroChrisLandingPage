
"use client";

import Script from "next/script";

export default function HubSpotForm() {
  return (
    <div className="hubspotForm">
      <Script
        src="https://js.hsforms.net/forms/embed/52140389.js"
        strategy="afterInteractive"
      />

      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="bd667629-faee-4607-a6ce-8b0906484b54"
        data-portal-id="52140389"
      />
    </div>
  );
}
