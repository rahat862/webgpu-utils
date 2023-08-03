/// <reference types="dist" />
import { TypedArray, TypedArrayConstructor } from './typed-arrays.js';
export type FullArraySpec = {
    data: number[] | TypedArray;
    type?: TypedArrayConstructor;
    numComponents?: number;
    shaderLocation?: number;
    normalize?: boolean;
};
export type ArrayUnion = number[] | TypedArray | FullArraySpec;
export type Arrays = {
    [key: string]: ArrayUnion;
};
export type ArraysOptions = {
    interleave?: boolean;
    stepMode?: GPUVertexStepMode;
    usage?: GPUBufferUsageFlags;
    shaderLocation?: number;
};
export type BufferInfo = {
    numElements: number;
    bufferLayout: GPUVertexBufferLayout;
    buffer: GPUBuffer;
    indexBuffer?: GPUBuffer;
    indexFormat?: GPUIndexFormat;
};
/**
 *
 */
export declare function createVertexAttribsFromArrays(arrays: Arrays, options?: ArraysOptions): {
    attributes: GPUVertexAttribute[];
    arrayStride: number;
    typedArrays: TypedArray[];
};
export declare function interleaveVertexData(attributes: GPUVertexAttribute[], typedArrays: TypedArray[], arrayStride: number, arrayBuffer: ArrayBuffer): void;
/**
 * Given arrays, create buffers, fill the buffers with data, optionally
 * interleave the data.
 */
export declare function createBufferInfoFromArrays(device: GPUDevice, arrays: Arrays, options?: ArraysOptions): BufferInfo;
