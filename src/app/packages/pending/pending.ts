import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../services/packages';
import { PackageResponse } from '../../models/package';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending',
  imports: [CommonModule],
  templateUrl: './pending.html',
  styleUrl: './pending.css',
})
export class PackagesPendingComponent implements OnInit{
  packages: PackageResponse[] = [];
  constructor(private packageService: PackagesService) {}

  ngOnInit() {
    this.packageService.getAllPendingPackages().subscribe({
      next: (data) => {
        this.packages = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
