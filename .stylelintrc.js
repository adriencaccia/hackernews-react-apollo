module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-empty-source": null,
    "block-no-empty": null,
    "max-nesting-depth": 5,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["contain", "appearance"]
      }
    ]
  }
};
