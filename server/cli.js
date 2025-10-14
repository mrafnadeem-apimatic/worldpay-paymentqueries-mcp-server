#!/usr/bin/env node
import { executeMcpServerCli } from "@apimatic/mcp-core";
import * as sdkMetadata from "payment-querieslib/metadata";

await executeMcpServerCli(
  sdkMetadata,
  {
  "name": "Payment QueriesLib MCP Server",
  "description": "Query your payments data based on a variety of parameters.  __Authentication__   Set your headers:    ```     Authorization: {your_credentials}     Accept: application/vnd.worldpay.payment-queries-v1.hal+json   ``` Replace `{your_credentials}` with your base64-encoded Basic Auth username and password.  <br><br> __DNS whitelisting__  Whitelist the following URLs: * `https://try.access.worldpay.com/` * `https://access.worldpay.com/`  Please ensure you use DNS whitelisting, not explicit IP whitelisting."
}
);