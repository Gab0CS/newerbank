// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b60e3b7ee3350205a84c39e4a627a19b@o4509045615689728.ingest.us.sentry.io/4509076535508992",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});