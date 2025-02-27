import { JsonObject } from 'type-fest'
import UserCodeRunner from '../user_code_runner'
import { formatLocation } from '../formatter/helpers'
import { doesHaveValue, valueOrDefault } from '../value_checker'
import TestRunHookDefinition from '../models/test_run_hook_definition'

export type RunsTestRunHooks = (
  definitions: TestRunHookDefinition[],
  name: string
) => Promise<void>

export const makeRunTestRunHooks = (
  dryRun: boolean,
  defaultTimeout: number,
  worldParameters: JsonObject,
  errorMessage: (name: string, location: string) => string
): RunsTestRunHooks =>
  dryRun
    ? async () => {}
    : async (definitions, name) => {
        for (const hookDefinition of definitions) {
          const { error } = await UserCodeRunner.run({
            argsArray: [],
            fn: hookDefinition.code,
            thisArg: { parameters: worldParameters },
            timeoutInMilliseconds: valueOrDefault(
              hookDefinition.options.timeout,
              defaultTimeout
            ),
          })
          if (doesHaveValue(error)) {
            const location = formatLocation(hookDefinition)
            throw new Error(errorMessage(name, location), { cause: error })
          }
        }
      }
