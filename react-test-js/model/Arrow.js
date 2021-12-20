var name = "Arrow function";
export default {
  name: "Regular function",
  thisInArrow: () => {
    console.log("Example of " + name); // --- (1) this.name doesn't work
  },
  thisInRegular() {
    console.log("Example of " + this.name); // --- (2)
  },
};
