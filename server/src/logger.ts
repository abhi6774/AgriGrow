import { NextFunction, Request, Response } from "express";

export function RequestLogger(req: Request, res: Response, next:NextFunction) {
    const formatter = Intl.DateTimeFormat("en-IN", {})
    console.log(`${formatter.format(new Date())} ${req.method}: ${req.url}`)
    next();
}