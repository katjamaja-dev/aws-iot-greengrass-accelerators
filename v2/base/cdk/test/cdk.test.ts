import { expect as expectCDK, matchTemplate, MatchStyle, SynthUtils } from "@aws-cdk/assert"
import * as cdk from "@aws-cdk/core"
import { BaseImplementationStack } from "../lib/BaseImplementationStack"

const scope = new cdk.Stack()
const _stack = new BaseImplementationStack(scope, "mystack", {})
const stack = SynthUtils.toCloudFormation(scope)

test("create the stack", () => {
  expect(_stack).not.toBeNull()
  expect(stack).not.toBeNull()
})
