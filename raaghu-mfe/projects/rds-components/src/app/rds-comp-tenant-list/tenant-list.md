---
slug: "/comp-tenant-list"
date: "2019-05-04"
title: "Components > tenant-list"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

#### Tenant list

<p>A card having details ina form of a table with necessary information and actions</p>
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
         <div class="contents p-5">
              <div class="row">
            <div class="col-md-12">
              <img src="/images/tenant-list.png" class="img-fluid ">
           </div>
          </div>             
  </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<app-rds-comp-tenant-list
  [tenantSettingsInfo]="tenantSettingsInfo"
  [tenantData]="tenantData"
  [tenantList]="tenantList"
  [editionList]="editionList"
  [tenantHeaders]="tenantHeaders"
></app-rds-comp-tenant-list>
```
</div>
</div>
  </div>
        </div>
      </div>
    </div>
  </section>
                                                                                                                 
