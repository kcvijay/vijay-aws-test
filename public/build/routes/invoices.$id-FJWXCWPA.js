import {
  formatDateForInput,
  require_node
} from "/build/_shared/chunk-T5SKRTMX.js";
import {
  Form,
  Link,
  init_dist,
  useActionData,
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

// app/routes/invoices.$id.tsx
init_dist();
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1718814557073.7979";
}
function InvoiceEdit() {
  _s();
  const {
    data
  } = useLoaderData();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full md:flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-gray-500 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold mr-2", children: "#" }, void 0, false, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      data?.invoiceid
    ] }, void 0, true, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-6", reloadDocument: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "invoicee", children: "Invoicee" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "text", name: "invoicee", id: "invoicee", defaultValue: data?.invoicee }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "invoicedDate", children: "Invoiced" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "date", name: "invoicedDate", id: "invoicedDate", defaultValue: data && formatDateForInput(data?.invoiceddate) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "dueDate", children: "Due" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "date", name: "dueDate", id: "dueDate", defaultValue: data && formatDateForInput(data?.duedate) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "amount", children: "Amount" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "number", name: "amount", id: "amount", step: "0.01", defaultValue: data?.amount }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-20", type: "text", name: "currency", id: "currency", defaultValue: data?.currency }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "state", children: "State" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "text", name: "state", id: "state", defaultValue: data?.state }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 justify-between items-center mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "py-2 px-4 bg-red-600 rounded-md text-white", children: "Delete invoice" }, void 0, false, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-red-600", to: "/invoices", children: "Cancel" }, void 0, false, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "py-2 px-4 bg-green-100 text-green-600 rounded-md", children: "Save" }, void 0, false, {
            fileName: "app/routes/invoices.$id.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/invoices.$id.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.$id.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/invoices.$id.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/invoices.$id.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(InvoiceEdit, "LbyDs3+6gI9n/HN+I7m7nCrGbtc=", false, function() {
  return [useLoaderData, useActionData];
});
_c = InvoiceEdit;
var _c;
$RefreshReg$(_c, "InvoiceEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InvoiceEdit as default
};
//# sourceMappingURL=/build/routes/invoices.$id-FJWXCWPA.js.map
