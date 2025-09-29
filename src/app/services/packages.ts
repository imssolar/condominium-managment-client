import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePackageRequest, PackageResponse } from '../models/package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAllPendingPackages(): Observable<PackageResponse[]> {
    return this.http.get<PackageResponse[]>(`${this.API_URL}/packages/pending`);
  }

  createPackage(request: CreatePackageRequest, currentUserId: number): Observable<PackageResponse> {
    return this.http.post<PackageResponse>(`${this.API_URL}/packages`, request, {
      params: { currentUserId: currentUserId.toString() },
    });
  }
}
