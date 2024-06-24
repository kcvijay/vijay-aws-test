import {
  Form,
  Link2 as Link
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

// app/routes/invoices.new.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/invoices.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/invoices.new.tsx"
  );
  import.meta.hot.lastModified = "1719171285827.7112";
}
function AddNewInvoice() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full h-full grid place-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-2 font-bold text-2xl", children: "New Invoice" }, void 0, false, {
      fileName: "app/routes/invoices.new.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-6", reloadDocument: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "invoicee", children: "Invoicee" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "text", name: "invoicee", id: "invoicee", placeholder: "Company Oy" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "invoicedDate", children: "Invoiced" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "date", name: "invoicedDate", id: "invoicedDate" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "dueDate", children: "Due" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "date", name: "dueDate", id: "dueDate" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "amount", children: "Amount" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "p-2 border rounded-md w-56", type: "number", name: "amount", id: "amount", placeholder: "0.00", step: "0.01" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "currency", id: "currency", className: "p-2 border rounded-md w-20", defaultValue: "eur", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "eur", children: "EUR" }, void 0, false, {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "gbp", children: "GBP" }, void 0, false, {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "usd", children: "USD" }, void 0, false, {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { className: "flex gap-2 mt-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold w-32", htmlFor: "state", children: "State" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "state", id: "state", className: "p-2 border rounded-md w-56", defaultValue: "pending", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "paid", children: "Paid" }, void 0, false, {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "unpaid", children: "Unpaid" }, void 0, false, {
            fileName: "app/routes/invoices.new.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 justify-between items-center mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-red-600", to: "/invoices", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "py-2 px-4 bg-green-100 text-green-600 rounded-md", children: "Save" }, void 0, false, {
          fileName: "app/routes/invoices.new.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/invoices.new.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/invoices.new.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/invoices.new.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/invoices.new.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = AddNewInvoice;
var _c;
$RefreshReg$(_c, "AddNewInvoice");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddNewInvoice as default
};
//# sourceMappingURL=/build/routes/invoices.new-P4AVRONY.js.map
