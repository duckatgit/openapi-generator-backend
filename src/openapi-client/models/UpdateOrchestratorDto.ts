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
 * @interface UpdateOrchestratorDto
 */
export interface UpdateOrchestratorDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateOrchestratorDto
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateOrchestratorDto
     */
    ip: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateOrchestratorDto
     */
    port: number;
}

/**
 * Check if a given object implements the UpdateOrchestratorDto interface.
 */
export function instanceOfUpdateOrchestratorDto(value: object): value is UpdateOrchestratorDto {
    if (!('ip' in value) || value['ip'] === undefined) return false;
    if (!('port' in value) || value['port'] === undefined) return false;
    return true;
}

export function UpdateOrchestratorDtoFromJSON(json: any): UpdateOrchestratorDto {
    return UpdateOrchestratorDtoFromJSONTyped(json, false);
}

export function UpdateOrchestratorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrchestratorDto {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'] == null ? undefined : json['label'],
        'ip': json['ip'],
        'port': json['port'],
    };
}

  export function UpdateOrchestratorDtoToJSON(json: any): UpdateOrchestratorDto {
      return UpdateOrchestratorDtoToJSONTyped(json, false);
  }

  export function UpdateOrchestratorDtoToJSONTyped(value?: UpdateOrchestratorDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'label': value['label'],
        'ip': value['ip'],
        'port': value['port'],
    };
}

