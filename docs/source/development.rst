Development
===========

This package is used only for testing your AWS CDK code, so it is useful for helping you to implement your **TDD**.

If you want to use this package with your AWS CDK code, you can find an example in the `tests <https://github.com/bilardi/aws-cdk-remove-identifiers/tree/master/tests>`_ folder of this repository.

Run tests
#########

.. code-block:: bash

    cd aws-cdk-remove-identifiers/
    make test # it also run other commands like npm install

Template saved
##############

If the unittest fails, the class prints the json files.
So, if you will want to compare what it is different with the template saved, you can save the new template:

.. code-block:: bash

    cd aws-cdk-remove-identifiers/
    npm test -- tests/removeIdentifiers.test.ts > tests/templateWithoutIdentifiers.json.2

This approach is comfortable for running your program for comparison, like `Meld <https://meldmerge.org/>`_, diff or fc:

.. code-block:: bash

    cd aws-cdk-remove-identifiers/
    diff tests/templateWithoutIdentifiers.json tests/templateWithoutIdentifiers.json.2
