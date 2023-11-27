jest demo

## known issue
### kafkajs trigger exception with `request is not a function`
The issue has been raised in kafkajs [779](https://github.com/tulios/kafkajs/issues/779). It cased by kafkajs' lazying protocol loading, which need to mock the operation on kafka or wait for kafka's connection ready. 