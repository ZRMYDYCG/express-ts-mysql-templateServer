/// <reference types="qs" />
import type { Request, Response, NextFunction } from 'express';
export declare const requestUrl: (request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, response: Response<any, Record<string, any>>, next: NextFunction) => void;
export declare const defaultErrorHandler: (error: any, request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, response: Response<any, Record<string, any>>, next: NextFunction) => void;
