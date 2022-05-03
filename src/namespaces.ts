/// <reference path="form-namespaces.ts" />
namespace Form_ {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: string) {}

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state,
      }
    }
  }

  export const form1 = new MyForm('dfg')
}

console.log(Form_.form1)
