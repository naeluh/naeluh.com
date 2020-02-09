module.exports = {
  name: "netlify-plugin-hello-world",
  onInit: ({ utils }) => {
    const { git } = utils;

    /* Do stuff if files modified */
    if (git.modifiedFiles.length) {
      console.log("Modified files:", git.modifiedFiles);
    }

    /* Do stuff only if html code edited */
    const htmlFiles = git.fileMatch("**/*.html");
    console.log("html files git info:", htmlFiles);

    if (htmlFiles.edited.length !== 0) {
      console.log(">> Run thing because HTML has changed\n");
    }
    //
    /* Do stuff only if markdown files edited */
    const markdownFiles = git.fileMatch("**/*.md");
    console.log("markdown files git info:", markdownFiles);

    if (markdownFiles.modified.length !== 0) {
      console.log(
        ">> Run thing because Markdown files have been created/changed/deleted\n"
      );
    }

    /* Do stuff only if css files edited */
    const cssFiles = git.fileMatch("**/*.css");
    if (cssFiles.deleted.length !== 0) {
      console.log(">> Run thing because css files have been deleted\n");
      console.log(cssFiles);
    }
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
