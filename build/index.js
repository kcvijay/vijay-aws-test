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
function XCircleIcon({ className }) {
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
          d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        },
        void 0,
        !1,
        {
          fileName: "app/ui/icons.tsx",
          lineNumber: 106,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/ui/icons.tsx",
      lineNumber: 98,
      columnNumber: 5
    },
    this
  );
}

// app/components/Nav.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Nav() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex  justify-between items-center p-4 bg-sky-600 text-lg text-gray-100", children: [
    /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "flex items-center gap-2 text-2xl font-bold", children: [
      /* @__PURE__ */ jsxDEV3(BankNotes, { className: "size-6" }, void 0, !1, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("span", { children: "Invoices" }, void 0, !1, {
        fileName: "app/components/Nav.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("nav", { className: "flex justify-end items-center gap-6", children: /* @__PURE__ */ jsxDEV3(
      NavLink,
      {
        className: ({ isActive }) => `inline-block ${isActive ? "font-bold" : ""}`,
        to: "/invoices",
        children: "Invoices"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav.tsx",
        lineNumber: 12,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 11,
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
var tailwind_default = "/build/_assets/tailwind-WHMWNMK6.css?url";

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
  ErrorComponent: () => ErrorComponent,
  default: () => Invoices
});
import { Link as Link2 } from "react-router-dom";

// app/utils/dates.ts
function getShortDate(date) {
  return new Date(date).toLocaleDateString("fi-FI");
}
function formatDateForInput(date) {
  return new Date(date).toISOString().split("T")[0];
}

// app/routes/invoices._index.tsx
import { useEffect, useState } from "react";

// app/utils/shortId.ts
function getShortenedId(id) {
  return id.split("-")[0] + "...";
}

// app/routes/invoices._index.tsx
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Invoices() {
  let [data, setData] = useState([]), [loading, setLoading] = useState(!0), [error, setError] = useState("");
  return useEffect(() => {
    (async () => {
      try {
        let response = await fetch("http://localhost:4242/invoices");
        if (!response.ok)
          throw new Error("Network response was not ok");
        let data2 = await response.json();
        setData(data2);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(!1);
      }
    })();
  }, []), error ? /* @__PURE__ */ jsxDEV6(ErrorComponent, { error }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 33,
    columnNumber: 12
  }, this) : loading ? /* @__PURE__ */ jsxDEV6("div", { children: "Loading..." }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 37,
    columnNumber: 12
  }, this) : /* @__PURE__ */ jsxDEV6(Fragment, { children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold mb-8", children: "Invoices" }, void 0, !1, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("table", { className: "w-full overflow-scroll", children: [
      /* @__PURE__ */ jsxDEV6("thead", { children: /* @__PURE__ */ jsxDEV6("tr", { className: "border bg-gray-300", children: [
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start w-20", children: "#" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "Invoicee" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "Invoiced Date" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "Due Date" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-center", children: "Amount" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4", children: "Currency" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4 text-start", children: "State" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "p-4" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(InvoiceList, { invoices: data }, void 0, !1, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 41,
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
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4", children: invoice.invoicee }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4", children: getShortDate(invoice.invoiceddate) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4", children: getShortDate(invoice.duedate) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-center", children: invoice.amount.toLocaleString("fi-FI") }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-center", children: invoice.currency }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 89,
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
            lineNumber: 91,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "p-4 text-center flex", children: /* @__PURE__ */ jsxDEV6(Link2, { className: "mr-2", to: `/invoices/${invoice.invoiceid}`, children: /* @__PURE__ */ jsxDEV6(PencilSquareIcon, { className: "size-6 text-gray-600 hover:text-gray-500" }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ]
    },
    invoice.invoiceid,
    !0,
    {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 76,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
function ErrorComponent({ error }) {
  return /* @__PURE__ */ jsxDEV6("div", { className: "size-80 mx-auto flex justify-center items-center bg-red-50", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col justify-center items-center gap-4", children: [
    /* @__PURE__ */ jsxDEV6(XCircleIcon, { className: "size-12 text-orange-300" }, void 0, !1, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("h2", { className: "text-2xl text-orange-500", children: "An error is ocurred." }, void 0, !1, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-500", children: error }, void 0, !1, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

// app/routes/invoices.$id.tsx
var invoices_id_exports = {};
__export(invoices_id_exports, {
  default: () => InvoiceEdit
});
import { Link as Link3, useParams } from "react-router-dom";
import { useEffect as useEffect2, useState as useState2 } from "react";

// app/components/Error.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ErrorComponent2({ error }) {
  return /* @__PURE__ */ jsxDEV7("div", { className: "size-80 mx-auto flex justify-center items-center bg-red-50", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col justify-center items-center gap-4", children: [
    /* @__PURE__ */ jsxDEV7("h2", { className: "text-2xl text-orange-500", children: "An error is ocurred." }, void 0, !1, {
      fileName: "app/components/Error.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-500", children: error }, void 0, !1, {
      fileName: "app/components/Error.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Error.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Error.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/invoices.$id.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function InvoiceEdit() {
  let [data, setData] = useState2(), [loading, setLoading] = useState2(!0), [error, setError] = useState2(""), params = useParams();
  return useEffect2(() => {
    (async () => {
      try {
        let response = await fetch(
          `http://localhost:4242/invoices/${params.invoiceid}`
        );
        if (!response.ok)
          throw { error: "Network response was not ok" };
        let data2 = await response.json();
        setData(data2[0]);
      } catch {
        setError("Error");
      } finally {
        setLoading(!1);
      }
    })();
  }, []), loading ? /* @__PURE__ */ jsxDEV8("div", { children: "Loading..." }, void 0, !1, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 43,
    columnNumber: 12
  }, this) : error ? /* @__PURE__ */ jsxDEV8(ErrorComponent2, { error }, void 0, !1, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 47,
    columnNumber: 12
  }, this) : /* @__PURE__ */ jsxDEV8("div", { className: "h-full md:flex justify-center items-center", children: /* @__PURE__ */ jsxDEV8("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxDEV8("h2", { className: "text-gray-500 mb-2", children: [
      /* @__PURE__ */ jsxDEV8("span", { className: "font-bold mr-2", children: "#" }, void 0, !1, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      data?.invoiceid
    ] }, void 0, !0, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("hr", {}, void 0, !1, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("form", { className: "mt-6", children: [
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "name", children: "Invoicee" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "text",
            name: "name",
            id: "name",
            defaultValue: data?.invoicee
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 63,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "invoicedDate", children: "Invoiced" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
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
            lineNumber: 75,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "dueDate", children: "Due" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
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
            lineNumber: 87,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "amount", children: "Amount" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8(
          "input",
          {
            className: "p-2 border rounded-md w-56",
            type: "number",
            name: "amount",
            id: "amount",
            defaultValue: data?.amount
          },
          void 0,
          !1,
          {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 100,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8(
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
            lineNumber: 109,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ jsxDEV8("label", { className: "font-bold w-32", htmlFor: "state", children: "State" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8(
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
            lineNumber: 122,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-4 justify-between items-center mt-8", children: [
        /* @__PURE__ */ jsxDEV8("button", { className: "py-2 px-4 bg-red-600 rounded-md text-white", children: "Delete invoice" }, void 0, !1, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsxDEV8(Link3, { className: "text-red-600", to: "/invoices", children: "Cancel" }, void 0, !1, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("button", { className: "py-2 px-4 bg-green-100 text-green-600 rounded-md", children: "Save" }, void 0, !1, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 51,
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
  return /* @__PURE__ */ jsxDEV9("div", { className: "h-full w-full flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxDEV9("h2", { className: "text-3xl font-bold capitalize", children: "view and manage invoices" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SZZWNFKH.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-C7BIZT6C.js", "/build/_shared/chunk-KDD6VS37.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-WHTWFBLJ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NOW3WYGX.js", imports: ["/build/_shared/chunk-ZWUAJJMP.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-CC346I6W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/invoices.$id": { id: "routes/invoices.$id", parentId: "root", path: "invoices/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/invoices.$id-SUQXRVQM.js", imports: ["/build/_shared/chunk-T53THLUO.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/invoices._index": { id: "routes/invoices._index", parentId: "root", path: "invoices", index: !0, caseSensitive: void 0, module: "/build/routes/invoices._index-MO37MZML.js", imports: ["/build/_shared/chunk-T53THLUO.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "3d80b38b", hmr: { runtime: "/build/_shared/chunk-WHTWFBLJ.js", timestamp: 1718785179096 }, url: "/build/manifest-3D80B38B.js" };

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
