import {
  PencilSquareIcon,
  PlusIcon
} from "/build/_shared/chunk-TYZFC4SH.js";
import {
  getShortDate,
  require_node
} from "/build/_shared/chunk-T5SKRTMX.js";
import {
  Link,
  init_dist,
  useLoaderData
} from "/build/_shared/chunk-OUWR2FA2.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-WHTWFBLJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/invoices._index.tsx
init_dist();

// app/utils/shortId.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/shortId.ts"
  );
  import.meta.hot.lastModified = "1717610487777.397";
}
function getShortenedId(id) {
  return id.split("-")[0] + "...";
}

// app/routes/invoices._index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/invoices._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/invoices._index.tsx"
  );
  import.meta.hot.lastModified = "1719170336709.047";
}
function Invoices() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center gap-2 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Invoices" }, void 0, false, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/invoices/new", className: "flex gap-2 items-center border border-slate-200 py-2 pl-2 pr-4 rounded-md hover:bg-slate-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon, { className: "size-5" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full overflow-scroll", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border bg-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start w-20", children: "#" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "Invoicee" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "Invoiced Date" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "Due Date" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-center", children: "Amount" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4", children: "Currency" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "State" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceList, { invoices: data }, void 0, false, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Invoices, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Invoices;
function InvoiceList({
  invoices
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: invoices.map((invoice) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "even:bg-gray-50 hover:bg-sky-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-gray-500", children: getShortenedId(invoice.invoiceid) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4", children: invoice.invoicee }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4", children: getShortDate(invoice.invoiceddate) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4", children: getShortDate(invoice.duedate) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-center", children: invoice.amount.toLocaleString("fi-FI") }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-center", children: invoice.currency }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `py-1 px-3 text-sm rounded-md capitalize ${invoice.state === "Pending" ? "bg-purple-100 text-purple-600" : invoice.state === "Paid" ? "bg-green-100 text-green-600" : invoice.state === "Unpaid" ? "bg-red-100 text-red-600" : ""}`, children: invoice.state }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-center flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "mr-2", to: `/invoices/${invoice.invoiceid}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon, { className: "size-6 text-gray-600 hover:text-gray-500" }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 93,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this)
  ] }, invoice.invoiceid, true, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 75,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_c2 = InvoiceList;
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 bg-red-100 text-red-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error instanceof Error ? error.message : "An error ocurred while loading the data." }, void 0, false, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Invoices");
$RefreshReg$(_c2, "InvoiceList");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Invoices as default
};
//# sourceMappingURL=/build/routes/invoices._index-ORZFIRJR.js.map
