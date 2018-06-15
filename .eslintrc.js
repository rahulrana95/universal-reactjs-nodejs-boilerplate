module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": 2,

        /********************************************
         ************* Possible Errors **************
         ********************************************/

      // http://eslint.org/docs/rules/comma-dangle
      "comma-dangle": 2,
      // http://eslint.org/docs/rules/no-cond-assign
      "no-cond-assign": [2, "always"],
      // http://eslint.org/docs/rules/no-console
      "no-console": 2,
      // http://eslint.org/docs/rules/no-constant-condition
      "no-constant-condition": 2,
      // http://eslint.org/docs/rules/no-control-regex
      "no-control-regex": 2,
      // http://eslint.org/docs/rules/no-debugger
      "no-debugger": 2,
      // http://eslint.org/docs/rules/no-dupe-args
      "no-dupe-args": 2,
      // http://eslint.org/docs/rules/no-dupe-keys
      "no-dupe-keys": 2,
      // http://eslint.org/docs/rules/no-duplicate-case
      "no-duplicate-case": 2,
      // http://eslint.org/docs/rules/no-empty-character-class
      "no-empty-character-class": 2,
      // http://eslint.org/docs/rules/no-empty
      "no-empty": 2,
      // http://eslint.org/docs/rules/no-ex-assign
      "no-ex-assign": 2,
      // http://eslint.org/docs/rules/no-extra-boolean-cast
      "no-extra-boolean-cast": 2,
      // http://eslint.org/docs/rules/no-extra-semi
      "no-extra-semi": 2,
      // http://eslint.org/docs/rules/no-func-assign
      "no-func-assign": 2,
      // http://eslint.org/docs/rules/no-inner-declarations
      "no-inner-declarations": 2,
      // http://eslint.org/docs/rules/no-invalid-regexp
      "no-invalid-regexp": 2,
      // http://eslint.org/docs/rules/no-irregular-whitespace
      "no-irregular-whitespace": 2,
      // http://eslint.org/docs/rules/no-negated-in-lhs
      "no-negated-in-lhs": 2,
      // http://eslint.org/docs/rules/no-obj-calls
      "no-obj-calls": 2,
      // http://eslint.org/docs/rules/no-regex-spaces
      "no-regex-spaces": 2,
      // http://eslint.org/docs/rules/no-sparse-arrays
      "no-sparse-arrays": 2,
      // http://eslint.org/docs/rules/no-unreachable
      "no-unreachable": 2,
      // http://eslint.org/docs/rules/use-isnan
      "use-isnan": 2,
      // http://eslint.org/docs/rules/valid-typeof
      "valid-typeof": 2,
      // http://eslint.org/docs/rules/no-unexpected-multiline
      "no-unexpected-multiline": 2,


      /********************************************
       ************** Best Practices **************
      ********************************************/

      // http://eslint.org/docs/rules/curly
      "curly": 2,
      // http://eslint.org/docs/rules/dot-notation
      "dot-notation": [2, {
        "allowKeywords": false
      }],
      // http://eslint.org/docs/rules/dot-location
      "dot-location": [2, "property"],
      // http://eslint.org/docs/rules/eqeqeq
      "eqeqeq": 2,
      // http://eslint.org/docs/rules/guard-for-in
      "guard-for-in": 2,
      // http://eslint.org/docs/rules/no-alert
      "no-alert": 2,
      // http://eslint.org/docs/rules/no-caller
      "no-caller": 2,
      // http://eslint.org/docs/rules/no-div-regex
      "no-div-regex": 2,
      // http://eslint.org/docs/rules/no-eval
      "no-eval": 2,
      // http://eslint.org/docs/rules/no-extend-native
      "no-extend-native": 2,
      // http://eslint.org/docs/rules/no-extra-bind
      "no-extra-bind": 2,
      // http://eslint.org/docs/rules/no-fallthrough
      "no-fallthrough": 2,
      // http://eslint.org/docs/rules/no-floating-decimal
      "no-floating-decimal": 2,
      // http://eslint.org/docs/rules/no-implied-eval
      "no-implied-eval": 2,
      // http://eslint.org/docs/rules/no-iterator
      "no-iterator": 2,
      // http://eslint.org/docs/rules/no-labels
      "no-labels": 2,
      // http://eslint.org/docs/rules/no-lone-blocks
      "no-lone-blocks": 2,
      // http://eslint.org/docs/rules/no-multi-spaces
      "no-multi-spaces": [2, {
        "exceptions": {
          "Property": true
        }
      }],
      // http://eslint.org/docs/rules/no-multi-str
      "no-multi-str": 2,
      // http://eslint.org/docs/rules/no-native-reassign
      "no-native-reassign": 2,
      // http://eslint.org/docs/rules/no-new-func
      "no-new-func": 2,
      // http://eslint.org/docs/rules/no-new-wrappers
      "no-new-wrappers": 2,
      // http://eslint.org/docs/rules/no-new
      "no-new": 2,
      // http://eslint.org/docs/rules/no-octal-escape
      "no-octal-escape": 2,
      // http://eslint.org/docs/rules/no-octal
      "no-octal": 2,
      // http://eslint.org/docs/rules/no-proto
      "no-proto": 2,
      // http://eslint.org/docs/rules/no-redeclare
      "no-redeclare": 2,
      // http://eslint.org/docs/rules/no-return-assign
      "no-return-assign": 2,
      // http://eslint.org/docs/rules/no-script-url
      "no-script-url": 2,
      // http://eslint.org/docs/rules/no-self-compare
      "no-self-compare": 2,
      // http://eslint.org/docs/rules/no-sequences
      "no-sequences": 2,
      // http://eslint.org/docs/rules/no-throw-literal
      "no-throw-literal": 2,
      // http://eslint.org/docs/rules/no-unused-expressions
      "no-unused-expressions": 2,
      // http://eslint.org/docs/rules/no-useless-call
      "no-useless-call": 2,
      // http://eslint.org/docs/rules/no-void
      "no-void": 2,
      // http://eslint.org/docs/rules/no-with
      "no-with": 2,
      // http://eslint.org/docs/rules/radix
      "radix": 2,
      // http://eslint.org/docs/rules/vars-on-top
      "vars-on-top": 2,
      // http://eslint.org/docs/rules/wrap-iife
      "wrap-iife": [2, "inside"],


      /********************************************
       **************** Strict Mode ***************
      ********************************************/

      "strict": 2,


      /********************************************
       ***************** Variables ****************
      ********************************************/

      // http://eslint.org/docs/rules/no-delete-var
      "no-delete-var": 2,
      // http://eslint.org/docs/rules/no-shadow-restricted-names
      "no-shadow-restricted-names": 2,
      // http://eslint.org/docs/rules/no-shadow
      "no-shadow": 2,
      // http://eslint.org/docs/rules/no-undef-init
      "no-undef-init": 2,
      // http://eslint.org/docs/rules/no-undef
      "no-undef": 2,
      // http://eslint.org/docs/rules/no-unused-vars
      "no-unused-vars": 2,


      /********************************************
       ************* Stylistic Issues *************
      ********************************************/

      // http://eslint.org/docs/rules/array-bracket-spacing
      "array-bracket-spacing": [2, "never"],
      // http://eslint.org/docs/rules/block-spacing
      "block-spacing": [2, "never"],
      // http://eslint.org/docs/rules/brace-style
      "brace-style": [2, "1tbs"],
      // http://eslint.org/docs/rules/camelcase
      "camelcase": [2, {
        "properties": "never"
      }],
      // http://eslint.org/docs/rules/comma-spacing
      "comma-spacing": [2, {
        "before": false,
        "after": true
      }],
      // http://eslint.org/docs/rules/comma-style
      "comma-style": 2,
      // http://eslint.org/docs/rules/computed-property-spacing
      "computed-property-spacing": 2,
      // http://eslint.org/docs/rules/func-style
      "func-style": [2, "expression"],
      // http://eslint.org/docs/rules/indent
      "indent": [2, 2, {
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3
        },
        "SwitchCase": 1
      }],
      // http://eslint.org/docs/rules/linebreak-style
      "linebreak-style": 2,
      // http://eslint.org/docs/rules/new-cap
      "new-cap": [2, {
        "capIsNewExceptions": ["YUI"]
      }],
      // http://eslint.org/docs/rules/new-parens
      "new-parens": 2,
      // http://eslint.org/docs/rules/no-array-constructor
      "no-array-constructor": 2,
      // http://eslint.org/docs/rules/no-lonely-if
      "no-lonely-if": 2,
      // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
      "no-mixed-spaces-and-tabs": 2,
      // http://eslint.org/docs/rules/no-nested-ternary
      "no-nested-ternary": 2,
      // http://eslint.org/docs/rules/no-new-object
      "no-new-object": 2,
      // http://eslint.org/docs/rules/no-trailing-spaces
      "no-trailing-spaces": 2,
      // http://eslint.org/docs/rules/no-unneeded-ternary
      "no-unneeded-ternary": 2,
      // http://eslint.org/docs/rules/object-curly-spacing
      "object-curly-spacing": [2, "never"],
      // http://eslint.org/docs/rules/operator-linebreak
      "operator-linebreak": [2, "after"],
      // http://eslint.org/docs/rules/quote-props
      "quote-props": [2, "consistent-as-needed", {
        "keywords": true
      }],
      // http://eslint.org/docs/rules/quotes
      "quotes": [2, "double"],
      // http://eslint.org/docs/rules/semi-spacing
      "semi-spacing": 2,
      // http://eslint.org/docs/rules/semi
      "semi": 2,
      // http://eslint.org/docs/rules/keyword-spacing
      "keyword-spacing": 2,
      // http://eslint.org/docs/rules/space-before-blocks
      "space-before-blocks": [2, "always"],
      // http://eslint.org/docs/rules/space-before-function-paren
      "space-before-function-paren": [2, "always"],
      // http://eslint.org/docs/rules/space-in-parens
      "space-in-parens": [2, "never"],
      // http://eslint.org/docs/rules/space-infix-ops
      "space-infix-ops": 2,
      // http://eslint.org/docs/rules/space-unary-ops
      "space-unary-ops": 2,
      // http://eslint.org/docs/rules/jsx-quotes
      "jsx-quotes": [2, "prefer-double"],
      // http://eslint.org/docs/rules/spaced-comment
      "spaced-comment": [2, "always", {
        "exceptions": ["*"]
      }],


      /********************************************
       ****************** Legacy ******************
      ********************************************/

      //http://eslint.org/docs/rules/max-len
      "max-len": [2, 100, 2],


      /********************************************
       ****************** ES6 *********************
      ********************************************/

      // http://eslint.org/docs/rules/arrow-parens
      "arrow-parens": [2, "always"],
      // http://eslint.org/docs/rules/arrow-spacing
      "arrow-spacing": 2,
      // http://eslint.org/docs/rules/no-class-assign
      "no-class-assign": 2,
      // http://eslint.org/docs/rules/no-const-assign
      "no-const-assign": 2,
      // http://eslint.org/docs/rules/no-dupe-class-members
      "no-dupe-class-members": 2,
      // http://eslint.org/docs/rules/prefer-const
      "prefer-const": 2,
      // http://eslint.org/docs/rules/prefer-spread
      "prefer-spread": 2,
      // http://eslint.org/docs/rules/template-curly-spacing
      "template-curly-spacing": [2, "never"],


      /********************************************
       *************** JSX Specific ***************
      ********************************************/

      // https://www.npmjs.com/package/eslint-plugin-react
      "react/jsx-curly-spacing": [2, "never"],
      "react/jsx-no-duplicate-props": 2,
      "react/jsx-uses-vars": 2,
      "react/jsx-no-undef": 2,
      "react/no-danger": 2,
      "react/no-did-update-set-state": 2,
      "react/no-unknown-property": 2,
      "react/prop-types": [2, {
        "ignore": ["children", "className"]
      }],
      "react/self-closing-comp": 2,
        "groups": {
          "lifecycle": [
            "componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "componentDidUpdate",
            "componentWillMount",
            "componentDidMount",
            "componentWillUnmount"
          ]
        }
      },
    }
