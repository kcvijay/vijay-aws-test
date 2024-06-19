import {
  createHotContext
} from "/build/_shared/chunk-WHTWFBLJ.js";

// app/utils/dates.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/dates.ts"
  );
  import.meta.hot.lastModified = "1718130742321.5771";
}
function getShortDate(date) {
  return new Date(date).toLocaleDateString("fi-FI");
}
function formatDateForInput(date) {
  return new Date(date).toISOString().split("T")[0];
}

export {
  getShortDate,
  formatDateForInput
};
//# sourceMappingURL=/build/_shared/chunk-T53THLUO.js.map
