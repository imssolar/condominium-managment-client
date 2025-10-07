import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreatePackageRequest,
  PackageResponse,
  UpdatePackageStatusRequest,
} from '../models/package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private readonly API_URL = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getAllPendingPackages(): Observable<PackageResponse[]> {
    return this.http.get<PackageResponse[]>(`${this.API_URL}/packages/pending`);
  }

  createPackage(request: CreatePackageRequest, currentUserId: number): Observable<PackageResponse> {
    return this.http.post<PackageResponse>(`${this.API_URL}/packages`, request, {
      params: { currentUserId: currentUserId.toString() },
    });
  }

  /*
  Explicación:
    URL: http://localhost:8080/api/packages/15/status (ejemplo con ID 15)
    Body: El objeto UpdatePackageStatusRequest
    Params: ?currentUserId=3 (ejemplo)
  */

  updatePackageStatus(
    packageId: number,
    request: UpdatePackageStatusRequest,
    currentUserId: number
  ) {
    return this.http.patch<PackageResponse>(`${this.API_URL}/${packageId}/status`, request, {
      params: { currentUserId: currentUserId.toString() },
    });
  }

  getPackagesByApartment(apartmentNumber: string): Observable<PackageResponse[]>{
    return this.http.get<PackageResponse[]>(`${this.API_URL}/by-apartment/${apartmentNumber}`)
  }
}
