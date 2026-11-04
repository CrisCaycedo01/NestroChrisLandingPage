
"use client";

import Script from "next/script";
import { useState } from "react";

export default function HubSpotForm() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="hubspotForm">
      <Script
        src="https://js.hsforms.net/forms/embed/52140389.js"
        strategy="lazyOnload"
        onError={() => setFailed(true)}
      />

      {failed && <p role="status">No se pudo cargar el formulario. Recarga la página para volver a intentarlo.</p>}
      <noscript>Activa JavaScript para cargar el formulario de contacto.</noscript>
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="bd667629-faee-4607-a6ce-8b0906484b54"
        data-portal-id="52140389"
      />
    </div>
  );
}
