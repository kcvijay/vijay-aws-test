var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 41,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 83,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/components/Nav.tsx
import { Link, NavLink } from "react-router-dom";

// app/ui/icons.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function PencilSquareIcon({ className }) {
  return /* @__PURE__ */ jsxDEV2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsxDEV2(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        },
        void 0,
        !1,
        {
          fileName: "app/ui/icons.tsx",
          lineNumber: 68,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/ui/icons.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  );
}
function BankNotes({ className }) {
  return /* @__PURE__ */ jsxDEV2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsxDEV2(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        },
        void 0,
        !1,
        {
          fileName: "app/ui/icons.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/ui/icons.tsx",
      lineNumber: 79,
      columnNumber: 5
    },
    this
  );
}
function PlusIcon({ className }) {
  return /* @__PURE__ */ jsxDEV2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsxDEV2(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 4.5v15m7.5-7.5h-15"
        },
        void 0,
        !1,
        {
          fileName: "app/ui/icons.tsx",
          lineNumber: 125,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/ui/icons.tsx",
      lineNumber: 117,
      columnNumber: 5
    },
    this
  );
}

// app/components/Nav.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Nav() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex  justify-between items-center p-4 bg-sky-600 text-lg text-gray-100", children: [
    /* @__PURE__ */ jsxDEV3(Link, { to: "/", children: /* @__PURE__ */ jsxDEV3(BankNotes, { className: "size-8" }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("nav", { className: "flex justify-end items-center gap-6", children: /* @__PURE__ */ jsxDEV3(
      NavLink,
      {
        className: ({ isActive }) => `inline-block ${isActive ? "font-bold" : ""}`,
        to: "/invoices",
        children: "All Invoices"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "w-screen flex flex-col items-start justify-center h-26 p-4 bg-gray-700 text-gray-200", children: [
    /* @__PURE__ */ jsxDEV4(BankNotes, { className: "size-12 text-gray-400 mb-2" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { children: "Created with Remix Vite, integrated with Postgres and AWS" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/tailwind.css?url
var tailwind_default = "/build/_assets/tailwind-T2DBXAO7.css?url";

// app/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxDEV5(Nav, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("main", { className: "flex-1 p-6", children }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}

// app/routes/invoices._index.tsx
var invoices_index_exports = {};
__export(invoices_index_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Invoices,
  loader: () => loader
});
import { Link as Link2 } from "react-router-dom";

// app/utils/dates.ts
function getShortDate(date) {
  return new Date(date).toLocaleDateString("fi-FI");
}
function formatDateForInput(date) {
  return new Date(date).toISOString().split("T")[0];
}

// app/utils/shortId.ts
function getShortenedId(id) {
  return id.split("-")[0] + "...";
}

// app/routes/invoices._index.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// app/actions/crud.ts
import { neon } from "@neondatabase/serverless";
async function getAllInvoices() {
  return await neon(`${process.env.DATABASE_URL}`)`SELECT * FROM invoices`;
}
async function getInvoice(id) {
  return await neon(`${process.env.DATABASE_URL}`)`SELECT * FROM invoices WHERE invoiceid = ${id}`;
}
async function updateInvoice(id, invoice) {
  let { invoicee, invoiceddate, duedate, amount, currency, state } = invoice;
  return await neon(`${process.env.DATABASE_URL}`)`
    UPDATE invoices
    SET invoicee = ${invoicee},
        invoiceddate = ${invoiceddate},
        duedate = ${duedate},
        amount = ${amount},
        currency = ${currency},
        state = ${state}
    WHERE invoiceid = ${id}
  `;
}

// app/routes/invoices._index.tsx
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var loader = async () => {
  try {
    let invoices = await getAllInvoices();
    return json(invoices);
  } catch {
    throw { error: "Error" };
  }
};
function Invoices() {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxDEV6(Fragment, { children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center gap-2 mb-8", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold", children: "Invoices" }, void 0, !1, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Link2, { to: "/invoices/new", className: "flex gap-2 items-center border border-slate-200 py-2 pl-2 pr-4 rounded-md hover:bg-slate-200", children: [
        /* @__PURE__ */ jsxDEV6(PlusIcon, { className: "size-5" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("span", { children: "Add" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("table", { className: "w-full overflow-scroll", children: [
      /* @__PURE__ */ jsxDEV6("thead", { children: /* @__PURE__ */ jsxDEV6("tr", { className: "border bg-gray-300", children: [
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start w-20", children: "#" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "Invoicee" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "Invoiced Date" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "Due Date" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-center", children: "Amount" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4", children: "Currency" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "State" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(InvoiceList, { invoices: data }, void 0, !1, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function InvoiceList({ invoices }) {
  return /* @__PURE__ */ jsxDEV6("tbody", { children: invoices.map((invoice) => /* @__PURE__ */ jsxDEV6(
    "tr",
    {
      className: "even:bg-gray-50 hover:bg-sky-100",
      children: [
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-gray-500", children: getShortenedId(invoice.invoiceid) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4", children: invoice.invoicee }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4", children: getShortDate(invoice.invoiceddate) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4", children: getShortDate(invoice.duedate) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-center", children: invoice.amount.toLocaleString("fi-FI") }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-center", children: invoice.currency }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-start", children: /* @__PURE__ */ jsxDEV6(
          "span",
          {
            className: `py-1 px-3 text-sm rounded-md capitalize ${invoice.state === "Pending" ? "bg-purple-100 text-purple-600" : invoice.state === "Paid" ? "bg-green-100 text-green-600" : invoice.state === "Unpaid" ? "bg-red-100 text-red-600" : ""}`,
            children: invoice.state
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices._index.tsx",
            lineNumber: 78,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-center flex", children: /* @__PURE__ */ jsxDEV6(Link2, { className: "mr-2", to: `/invoices/${invoice.invoiceid}`, children: /* @__PURE__ */ jsxDEV6(PencilSquareIcon, { className: "size-6 text-gray-600 hover:text-gray-500" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ]
    },
    invoice.invoiceid,
    !0,
    {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 63,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ jsxDEV6("div", { className: "p-4 bg-red-100 text-red-600", children: /* @__PURE__ */ jsxDEV6("p", { children: error instanceof Error ? error.message : "An error ocurred while loading the data." }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

// app/routes/invoices.$id.tsx
var invoices_id_exports = {};
__export(invoices_id_exports, {
  action: () => action,
  default: () => InvoiceEdit,
  loader: () => loader2
});
import { Link as Link3 } from "react-router-dom";
import {
  json as json2,
  redirect
} from "@remix-run/node";
import { Form, useActionData, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader2({ params }) {
  try {
    return { data: (await getInvoice(params.id))[0] };
  } catch {
    throw { error: "Error" };
  }
}
var action = async ({ params, request }) => {
  let formData = await request.formData(), invoice = {
    invoicee: formData.get("invoicee"),
    invoiceddate: new Date(formData.get("invoicedDate")),
    duedate: new Date(formData.get("dueDate")),
    amount: Number(formData.get("amount")),
    currency: formData.get("currency"),
    state: formData.get("state")
  };
  try {
    return await updateInvoice(params.id, invoice), redirect("/invoices");
  } catch {
    return json2({ error: "Failed to update the invoice" }, { status: 500 });
  }
};
function InvoiceEdit() {
  let { data } = useLoaderData2(), actionData = useActionData();
  return /* @__PURE__ */ jsxDEV7("div", { className: "h-full md:flex justify-center items-center", children: /* @__PURE__ */ jsxDEV7("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxDEV7("h2", { className: "text-gray-500 mb-2", children: [
      /* @__PURE__ */ jsxDEV7("span", { className: "font-bold mr-2", children: "#" }, void 0, !1, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      data?.invoiceid
    ] }, void 0, !0, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("hr", {}, void 0, !1, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7(Form, { method: "post", className: "mt-6", reloadDocument: !0, children: [
      /* @__PURE__ */ jsxDEV7("fieldset", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV7("label", { className: "font-bold w-32", htmlFor: "invoicee", children: "Invoicee" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "text",
            name: "invoicee",
            id: "invoicee",
            defaultValue: data?.invoicee
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 57,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV7("label", { className: "font-bold w-32", htmlFor: "invoicedDate", children: "Invoiced" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "date",
            name: "invoicedDate",
            id: "invoicedDate",
            defaultValue: data && formatDateForInput(data?.invoiceddate)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV7("label", { className: "font-bold w-32", htmlFor: "dueDate", children: "Due" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "date",
            name: "dueDate",
            id: "dueDate",
            defaultValue: data && formatDateForInput(data?.duedate)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 81,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV7("label", { className: "font-bold w-32", htmlFor: "amount", children: "Amount" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "number",
            name: "amount",
            id: "amount",
            step: "0.01",
            defaultValue: data?.amount
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 94,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(
          "input",
          {
            className: "p-2 border rounded-md w-20",
            type: "text",
            name: "currency",
            id: "currency",
            defaultValue: data?.currency
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 104,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV7("label", { className: "font-bold w-32", htmlFor: "state", children: "State" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "text",
            name: "state",
            id: "state",
            defaultValue: data?.state
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 117,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-4 justify-between items-center mt-8", children: [
        /* @__PURE__ */ jsxDEV7("button", { className: "py-2 px-4 bg-red-600 rounded-md text-white", children: "Delete invoice" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsxDEV7(Link3, { className: "text-red-600", to: "/invoices", children: "Cancel" }, void 0, !1, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7(
            "button",
            {
              type: "submit",
              className: "py-2 px-4 bg-green-100 text-green-600 rounded-md",
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/invoices.$id.tsx",
              lineNumber: 133,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/invoices.new.tsx
var invoices_new_exports = {};
__export(invoices_new_exports, {
  default: () => AddNewInvoice
});
import { Form as Form2, Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function AddNewInvoice() {
  return /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("section", { className: "w-full h-full grid place-items-center", children: [
    /* @__PURE__ */ jsxDEV8("h2", { className: "mb-2 font-bold text-2xl", children: "New Invoice" }, void 0, !1, {
      fileName: "app/routes/invoices.new.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(Form2, { method: "post", className: "mt-6", reloadDocument: !0, children: [
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "invoicee", children: "Invoicee" }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 10,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "text",
            name: "invoicee",
            id: "invoicee",
            placeholder: "Company Oy"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 13,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "invoicedDate", children: "Invoiced" }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "date",
            name: "invoicedDate",
            id: "invoicedDate"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "dueDate", children: "Due" }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "date",
            name: "dueDate",
            id: "dueDate"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "amount", children: "Amount" }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "number",
            name: "amount",
            id: "amount",
            placeholder: "0.00",
            step: "0.01"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 48,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8(
          "select",
          {
            name: "currency",
            id: "currency",
            className: "p-2 border rounded-md w-20",
            defaultValue: "eur",
            children: [
              /* @__PURE__ */ jsxDEV8("option", { value: "eur", children: "EUR" }, void 0, !1, {
                fileName: "app/routes/invoices.new.tsx",
                lineNumber: 64,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("option", { value: "gbp", children: "GBP" }, void 0, !1, {
                fileName: "app/routes/invoices.new.tsx",
                lineNumber: 65,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV8("option", { value: "usd", children: "USD" }, void 0, !1, {
                fileName: "app/routes/invoices.new.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 58,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "state", children: "State" }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "select",
          {
            name: "state",
            id: "state",
            className: "p-2 border rounded-md w-56",
            defaultValue: "pending",
            children: [
              /* @__PURE__ */ jsxDEV8("option", { value: "pending", children: "Pending" }, void 0, !1, {
                fileName: "app/routes/invoices.new.tsx",
                lineNumber: 80,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("option", { value: "paid", children: "Paid" }, void 0, !1, {
                fileName: "app/routes/invoices.new.tsx",
                lineNumber: 81,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("option", { value: "unpaid", children: "Unpaid" }, void 0, !1, {
                fileName: "app/routes/invoices.new.tsx",
                lineNumber: 82,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 74,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-4 justify-between items-center mt-8", children: [
        /* @__PURE__ */ jsxDEV8(Link4, { className: "text-red-600", to: "/invoices", children: "Cancel" }, void 0, !1, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "button",
          {
            type: "submit",
            className: "py-2 px-4 bg-green-100 text-green-600 rounded-md",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 89,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/invoices.new.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/invoices.new.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/invoices.new.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => App2
});
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function App2() {
  return /* @__PURE__ */ jsxDEV9("div", { className: "h-full", children: /* @__PURE__ */ jsxDEV9("section", { className: "flex gap-6 items-center", children: /* @__PURE__ */ jsxDEV9("h2", { className: "text-[5vw] font-bold text-slate-800 capitalize", children: "Invoices" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DE2SZ5VI.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-OUWR2FA2.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-WHTWFBLJ.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7LBFG7YW.js", imports: ["/build/_shared/chunk-TYZFC4SH.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-46FPZBU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/invoices.$id": { id: "routes/invoices.$id", parentId: "root", path: "invoices/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/invoices.$id-FJWXCWPA.js", imports: ["/build/_shared/chunk-T5SKRTMX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/invoices._index": { id: "routes/invoices._index", parentId: "root", path: "invoices", index: !0, caseSensitive: void 0, module: "/build/routes/invoices._index-ORZFIRJR.js", imports: ["/build/_shared/chunk-T5SKRTMX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/invoices.new": { id: "routes/invoices.new", parentId: "root", path: "invoices/new", index: void 0, caseSensitive: void 0, module: "/build/routes/invoices.new-P4AVRONY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e339e01f", hmr: { runtime: "/build/_shared/chunk-WHTWFBLJ.js", timestamp: 1719210140593 }, url: "/build/manifest-E339E01F.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/invoices._index": {
    id: "routes/invoices._index",
    parentId: "root",
    path: "invoices",
    index: !0,
    caseSensitive: void 0,
    module: invoices_index_exports
  },
  "routes/invoices.$id": {
    id: "routes/invoices.$id",
    parentId: "root",
    path: "invoices/:id",
    index: void 0,
    caseSensitive: void 0,
    module: invoices_id_exports
  },
  "routes/invoices.new": {
    id: "routes/invoices.new",
    parentId: "root",
    path: "invoices/new",
    index: void 0,
    caseSensitive: void 0,
    module: invoices_new_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
