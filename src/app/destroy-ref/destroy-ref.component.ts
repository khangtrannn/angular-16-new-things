import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BannerComponent } from "./banner.component";

@Component({
  selector: 'app-destroy-ref',
  template: `
    <h1>DestroyRef Demo</h1>
    <button *ngIf="!isDisplayBanner" (click)="isDisplayBanner = true">Create Banner</button>
    <button *ngIf="isDisplayBanner" (click)="isDisplayBanner = false">Destroy Banner</button>

    <app-banner style="display: block; margin-top: 1rem" *ngIf="isDisplayBanner"></app-banner>
  `,
  standalone: true,
  imports: [CommonModule, BannerComponent],
})
export class DestroyRefComponent {
  isDisplayBanner = false;
}