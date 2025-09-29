
export interface PackageResponse {
  id: number;
  trackingNumber: string;
  courier: string;
  receivedDate: string;
  receivedByUserName: string;
  apartmentNumber: string;
  recipientUser?: string;
  deliveredDate?: string;
  status: PackageStatus;
  recipientUserId?: number;
  deliveredByUserName?: string;
}

export interface CreatePackageRequest {
  trackingNumber: string;
  courier: string;
  recipientName: string;
  apartmentNumber: string;
  description: string;
  notes: string;
}

export enum PackageStatus {
  Pending = "PENDING",
  Delivered = "DELIVERED",
  Returned = "RETURNED"
}

export interface UpdatePackageStatusRequest {
  status: PackageStatus;
  deliveryNotes?: string;
  recipientUserId?: number;
}