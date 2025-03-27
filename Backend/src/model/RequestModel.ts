import { Schema, model, Model } from "mongoose";

export interface IRequest {
  id: number;
  username: string;
  name: string;
  message: string;
}

export type RequestModel = Model<IRequest>;

const RequestSchema = new Schema<IRequest>({
  id: { type: Number, required: true },
  username: { type: String, required: true, lowercase: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
});

export const Request = model<IRequest>("Request", RequestSchema);
