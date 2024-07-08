/// <reference types="qs" />
import type { Request, Response, NextFunction } from 'express';
export declare const validateLoginData: (request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, response: Response<any, Record<string, any>>, next: NextFunction) => Promise<void>;
