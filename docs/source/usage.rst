Usage
=====

The class reads a template synthesed by AWS CDK and returns it without identifiers.

You have to import the class **removeIdentifiers** before to use it.

.. code-block:: typescript

    import { RemoveIdentifiers } from "aws-cdk-remove-identifiers";

The class wants an object-type template like input and returns the same template without identifers.

.. code-block:: typescript

    const templateWithoutIdentifiers = new RemoveIdentifiers(templateWithIdentifiers);

Example
#######

When you create your **stack.ts** file, you can create your **stack.test.ts** like the example in this repo.
You can find

* **lib/removeIdentifiers.ts**, the example of your class implemented
* **tests/removeIdentifiers.test.ts**, the example of your unittest class
* **tests/*.json**, the templates saved

When you run the unittest (see the `Development <https://aws-cdk-remove-identifiers.io/en/latest/development.html>`_ Section),

* before, you have to create a json file empty (ie: **tests/templateWithoutIdentifiers.json**)
* the first time, you have to fill it with the first version (so, at the beginning the test fails and it returns the json)
* the times after, if the templates saved and new are different, so the unittest fails, you can evaluate if you have to save a new version or fix your change

You can find real examples in the repositories below:

* `aws-simple-ts-pipeline/tests/pipelineStack.test.ts <https://github.com/bilardi/aws-simple-ts-pipeline/tree/master/tests/pipelineStack.test.ts>`_
* `aws-tool-comparison/cdk/typescript/tests/ <https://github.com/bilardi/aws-tool-comparison/tree/master/cdk/typescript/tests/>`_\*.test.ts
