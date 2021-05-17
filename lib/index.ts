/**
 * @packageDocumentation
 * AWS CDK remove identifers package
 *
 * This package contains the class for managing the removal of identifiers of a template synthesized.
 * 
 * Package contents one class. The class reads a template, and return the template without identifiers.
 * 
 * # Installation
 * ```
 * npm install aws-cdk-remove-identifiers
 * ```
 * 
 * # Usage
 * ```typescript
 * import { RemoveIdentifiers } from 'aws-cdk-remove-identifiers';
 * console.log(new RemoveIdentifiers(template));
 * ```
 * 
 * **license**: MIT,
 * **support**: https://github.com/bilardi/aws-cdk-remove-identifiers/issues
 */
export { RemoveIdentifiers } from "./removeIdentifiers";