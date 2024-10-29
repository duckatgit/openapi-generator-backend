/* tslint:disable */
/* eslint-disable */
/**
 * Platform Healthcare API
 * The Platform Healthcare API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateOrganizationRequestDto
 */
export interface UpdateOrganizationRequestDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateOrganizationRequestDto
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrganizationRequestDto
     */
    organizationName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrganizationRequestDto
     */
    organizationIDFileLink?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrganizationRequestDto
     */
    governmentIDFileLink?: string;
}

/**
 * Check if a given object implements the UpdateOrganizationRequestDto interface.
 */
export function instanceOfUpdateOrganizationRequestDto(value: object): value is UpdateOrganizationRequestDto {
    return true;
}

export function UpdateOrganizationRequestDtoFromJSON(json: any): UpdateOrganizationRequestDto {
    return UpdateOrganizationRequestDtoFromJSONTyped(json, false);
}

export function UpdateOrganizationRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrganizationRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'domain': json['domain'] == null ? undefined : json['domain'],
        'organizationName': json['organizationName'] == null ? undefined : json['organizationName'],
        'organizationIDFileLink': json['organizationIDFileLink'] == null ? undefined : json['organizationIDFileLink'],
        'governmentIDFileLink': json['governmentIDFileLink'] == null ? undefined : json['governmentIDFileLink'],
    };
}

  export function UpdateOrganizationRequestDtoToJSON(json: any): UpdateOrganizationRequestDto {
      return UpdateOrganizationRequestDtoToJSONTyped(json, false);
  }

  export function UpdateOrganizationRequestDtoToJSONTyped(value?: UpdateOrganizationRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domain': value['domain'],
        'organizationName': value['organizationName'],
        'organizationIDFileLink': value['organizationIDFileLink'],
        'governmentIDFileLink': value['governmentIDFileLink'],
    };
}

