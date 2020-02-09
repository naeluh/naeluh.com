module.exports = {
  name: "netlify-plugin-hello-world",
  onInit: () => {
    console.log("Do thing on onInit event");
  },
  onPreBuild: () => {
    console.log("Hello world from onPreBuild event!");
  },
  onBuild: () => {
    console.log("Do thing on onBuild event");
  },
  onPostBuild: () => {
    console.log("Do thing on onPostBuild event");
  },
  onFunctionsPackage: () => {
    console.log("Do thing on onFunctionsPackage event");
  },
  onSuccess: () => {
    console.log("Do thing on onSuccess event");
  },
  onError: () => {
    console.log("Do thing on onError event");
  },
  onEnd: () => {
    console.log("Do thing on onEnd event");
  }
};
