---
slug: "/comp-timeline"
date: "2019-05-04"
title: "Components > Timeline"
---


### Timeline

<p>It gives a detail about the updates done in a day at different phases </p>

<section class="py-4">
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
         <div class="contents  p-5">
              <div class="row">
              <div class="col-md-12">
                  <img src="/images/timeline-basic.png" class="img-fluid w-50">
            </div>
          </div>
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-timeline
  displayType="Basic"
  [timelinData]="timelinData"
></app-rds-comp-timeline>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
   
  <section class="py-4">
    <h6>Advanced</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic1-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic1" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic1-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic1" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic1" role="tabpanel" aria-labelledby="PreviewBasic1-tab">
         <div class="contents  p-5">
              <div class="row">
                   <div class="col-md-12">
                  <img src="/images/timeline-basic.png" class="img-fluid w-50">
            </div>
            </div>
          
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic1" role="tabpanel" aria-labelledby="AngularBasic1-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <app-rds-comp-timeline
  displayType="Advance"
  [recentData]="recentData"
></app-rds-comp-timeline>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Timeline</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic2-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic2" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic2-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic2" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic2" role="tabpanel" aria-labelledby="PreviewBasic2-tab">
         <div class="contents  p-5">
              <div class="row">
              <div class="col-md-12">
                  <img src="/images/timeline.png" class="img-fluid w-50">
            </div>
          </div> 
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic2" role="tabpanel" aria-labelledby="AngularBasic2-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
 <app-rds-comp-timeline
  displayType="Timeline"
  [timeLine]="timeLine"
></app-rds-comp-timeline>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>  