import React from "react";
import { Helmet } from "react-helmet";

export const GTMContainer = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-180598229-1"
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-409941666"
      ></script>
    </Helmet>
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML:
            'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-180598229-1");',
        },
      ]}
    />
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML:
            'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "AW-409941666");',
        },
      ]}
    />
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML:
            'gtag("event", "conversion", {"send_to": "AW-409941666/9L4cCLmYrvoBEKLtvMMB"});',
        },
      ]}
    />
  </>
);
