export class apiError extends Error {
  constructor(message: string, public readonly statuscode: number) {
    super(message);
    this.statuscode = statuscode;
  }
}
