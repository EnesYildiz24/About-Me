import { Request, IRequest } from "../model/RequestModel";

export class RequestService {
  static async createRequest(data: IRequest): Promise<IRequest> {
    return await Request.create(data);
  }

  static async getAllRequests(): Promise<IRequest[]> {
    return await Request.find().lean();
  }

  static async getRequestById(id: number): Promise<IRequest | null> {
    return await Request.findOne({ id }).lean();
  }

  static async updateRequest(id: number, data: Partial<IRequest>): Promise<IRequest | null> {
    return await Request.findOneAndUpdate({ id }, data, { new: true }).lean();
  }

  static async deleteRequest(id: number): Promise<IRequest | null> {
    return await Request.findOneAndDelete({ id }).lean();
  }
}
