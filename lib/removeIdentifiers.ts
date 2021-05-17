/**
 * The class for managing the removal of identifiers.
 *
 * The class requires to pass a template synthesized by AWS CDK and returns the same template without identifiers.
 * 
 * **license**: MIT,
 * **see**: https://github.com/bilardi/aws-cdk-remove-identifiers
 */
export class RemoveIdentifiers {
    /**
     * Returns the template cleaned
     * @param template json of template synthetized
     * @returns template without identifiers
     */
    constructor(template: any) {
        return this.remove(template);
    }

    /**
     * Removes the identifier of Asset Parameters
     * @param string key or value of property
     * @returns string without the identifier of Asset Parameters
     */
    removeAssetParameterIdentifier(string: string): string {
        return string.replace(/[0-9a-z]{64,}/, "");
    }

    /**
     * Removes the identifier
     * @param string key or value of property
     * @returns string without the identifier
     */
    removeIdentifier(string: string): string {
        string = string.replace(/[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]$/, "");
        string = this.removeAssetParameterIdentifier(string);
        return string;
    }

    /**
     * Iters the properties of the template for removing the identifiers
     * @param part_of_template value of property
     * @returns part of template cleaned from the identifiers
     */
    iterator(part_of_template: any): any {
        let template: any = {};
        if (typeof part_of_template === "object") {
            for (const key of Object.keys(part_of_template)) {
                const new_key = this.removeIdentifier(key);
                template[new_key] = this.iterator(part_of_template[key]);
            }
        }
        if (Array.isArray(part_of_template)) {
            const values_list = [];
            for (const value of part_of_template) {
                values_list.push(this.iterator(value));
            }
            template = values_list
        }
        if (typeof part_of_template === "string") {
            template = this.removeIdentifier(part_of_template);
        }
        return template;
    }

    /**
     * removes the identifiers
     * @param original_template object of Cloudformation properties
     * @returns template cleaned from the identifiers
     */
    remove(original_template: any): any {
        const template: any = {};
        for (const key of Object.keys(original_template)) {
            template[key] = this.iterator(original_template[key])
        }
        return template;
    }
}
