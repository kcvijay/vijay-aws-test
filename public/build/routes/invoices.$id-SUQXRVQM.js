import {
  formatDateForInput
} from "/build/_shared/chunk-T53THLUO.js";
import {
  Link,
  init_dist2 as init_dist,
  useParams
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

// app/routes/invoices.$id.tsx
init_dist();
var import_react = __toESM(require_react(), 1);

// app/components/Error.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Error.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Error.tsx"
  );
  import.meta.hot.lastModified = "1718712897087.3025";
}
function ErrorComponent({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-80 mx-auto flex justify-center items-center bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center items-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl text-orange-500", children: "An error is ocurred." }, void 0, false, {
      fileName: "app/components/Error.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: error }, void 0, false, {
      fileName: "app/components/Error.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Error.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Error.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = ErrorComponent;
var _c;
$RefreshReg$(_c, "ErrorComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/invoices.$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/invoices.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/invoices.$id.tsx"
  );
  import.meta.hot.lastModified = "1718712977317.562";
}
function InvoiceEdit() {
  _s();
  const [data, setData] = (0, import_react.useState)();
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)("");
  const params = useParams();
  (0, import_react.useEffect)(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4242/invoices/${params.invoiceid}`);
        if (!response.ok) {
          throw {
            error: "Network response was not ok"
          };
        }
        const data2 = await response.json();
        setData(data2[0]);
      } catch (err) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ErrorComponent, { error }, void 0, false, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 55,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-full md:flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-gray-500 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-bold mr-2", children: "#" }, void 0, false, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      data?.invoiceid
    ] }, void 0, true, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "name", children: "Invoicee" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "text", name: "name", id: "name", defaultValue: data?.invoicee }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "invoicedDate", children: "Invoiced" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "date", name: "invoicedDate", id: "invoicedDate", defaultValue: data && formatDateForInput(data?.invoiceddate) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "dueDate", children: "Due" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "date", name: "dueDate", id: "dueDate", defaultValue: data && formatDateForInput(data?.duedate) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "amount", children: "Amount" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "number", name: "amount", id: "amount", defaultValue: data?.amount }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "p-2 border rounded-md w-20", type: "text", name: "currency", id: "currency", defaultValue: data?.currency }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "state", children: "State" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "text", name: "state", id: "state", defaultValue: data?.state }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 justify-between items-center mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "py-2 px-4 bg-red-600 rounded-md text-white", children: "Delete invoice" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "text-red-600", to: "/invoices", children: "Cancel" }, void 0, false, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "py-2 px-4 bg-green-100 text-green-600 rounded-md", children: "Save" }, void 0, false, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(InvoiceEdit, "DPxVZk5TDdQsz7mHdesBannS3qc=", false, function() {
  return [useParams];
});
_c2 = InvoiceEdit;
var _c2;
$RefreshReg$(_c2, "InvoiceEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InvoiceEdit as default
};
//# sourceMappingURL=/build/routes/invoices.$id-SUQXRVQM.js.map
