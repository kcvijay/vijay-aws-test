import {
  PencilSquareIcon,
  XCircleIcon
} from "/build/_shared/chunk-ZWUAJJMP.js";
import {
  getShortDate
} from "/build/_shared/chunk-T53THLUO.js";
import {
  Link,
  init_dist2 as init_dist
} from "/build/_shared/chunk-KDD6VS37.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-WHTWFBLJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/invoices._index.tsx
init_dist();
var import_react = __toESM(require_react(), 1);

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
  import.meta.hot.lastModified = "1718785178162.7664";
}
function Invoices() {
  _s();
  const [data, setData] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4242/invoices");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data2 = await response.json();
        setData(data2);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorComponent, { error }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 50,
      columnNumber: 12
    }, this);
  }
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 53,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-8", children: "Invoices" }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full overflow-scroll", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border bg-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start w-20", children: "#" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "Invoicee" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "Invoiced Date" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "Due Date" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-center", children: "Amount" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4", children: "Currency" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4 text-start", children: "State" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-4" }, void 0, false, {
          fileName: "app/routes/invoices._index.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InvoiceList, { invoices: data }, void 0, false, {
        fileName: "app/routes/invoices._index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Invoices, "XgxZZJ8yHmz3URDGJO+OC9TIpHw=");
_c = Invoices;
function InvoiceList({
  invoices
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: invoices.map((invoice) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "even:bg-gray-50 hover:bg-sky-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-gray-500", children: getShortenedId(invoice.invoiceid) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4", children: invoice.invoicee }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4", children: getShortDate(invoice.invoiceddate) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4", children: getShortDate(invoice.duedate) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-center", children: invoice.amount.toLocaleString("fi-FI") }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-center", children: invoice.currency }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `py-1 px-3 text-sm rounded-md capitalize ${invoice.state === "Pending" ? "bg-purple-100 text-purple-600" : invoice.state === "Paid" ? "bg-green-100 text-green-600" : invoice.state === "Unpaid" ? "bg-red-100 text-red-600" : ""}`, children: invoice.state }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-4 text-center flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "mr-2", to: `/invoices/${invoice.invoiceid}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilSquareIcon, { className: "size-6 text-gray-600 hover:text-gray-500" }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 98,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this)
  ] }, invoice.invoiceid, true, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 80,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_c2 = InvoiceList;
function ErrorComponent({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-80 mx-auto flex justify-center items-center bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon, { className: "size-12 text-orange-300" }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl text-orange-500", children: "An error is ocurred." }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: error }, void 0, false, {
      fileName: "app/routes/invoices._index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/invoices._index.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_c3 = ErrorComponent;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Invoices");
$RefreshReg$(_c2, "InvoiceList");
$RefreshReg$(_c3, "ErrorComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Invoices as default
};
//# sourceMappingURL=/build/routes/invoices._index-MO37MZML.js.map
