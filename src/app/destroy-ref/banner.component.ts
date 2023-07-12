import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-banner',
  template: `
    <div style="position: relative; background: rgba(255, 122, 89, .5); padding: 2rem;">
      <div class="position: absolute; top: 50%">
        <h1>Banner</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit?</p>
      </div>
    </div>
  `,
  standalone: true,
})
export class BannerComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  // counter = interval(1000).pipe(takeUntilDestroyed()).subscribe(console.log);

  ngOnInit(): void {
    interval(1000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(console.log);
  }
}