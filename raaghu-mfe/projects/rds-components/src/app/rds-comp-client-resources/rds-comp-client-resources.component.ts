import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comp-client-resources',
  templateUrl: './rds-comp-client-resources.component.html',
  styleUrls: ['./rds-comp-client-resources.component.scss']
})
export class RdsCompClientResourcesComponent implements OnInit, OnChanges {
  selectAll: boolean = false;
  @Input() clientResources: any = [];
  @Output() selectedResources = new EventEmitter<any>();
  resources: any = [
    {
      displayName: 'A - E',
      selected: false,
      children: [{
        displayName: 'Availability',
        selected: false
      },
      {
        displayName: 'Apiopolis',
        selected: false
      },
      {
        displayName: 'Apigenix',
        selected: false
      },
      {
        displayName: 'Best Selector',
        selected: false
      },
      {
        displayName: 'Best Selector',
        selected: false
      },
      {
        displayName: 'Creative',
        selected: false
      },
      {
        displayName: 'ALT Genix Api',
        selected: false
      },
      {
        displayName: 'Dev Support Api',
        selected: false
      }
      ]
    },
    {
      displayName: 'F - O',
      selected: false,
      children: [{
        displayName: 'Availability',
        selected: false
      },
      {
        displayName: 'Apiopolis',
        selected: false
      },
      {
        displayName: 'Apigenix',
        selected: false
      },
      {
        displayName: 'Best Selector',
        selected: false
      },
      {
        displayName: 'Best Selector',
        selected: false
      },
      {
        displayName: 'Creative',
        selected: false
      },
      {
        displayName: 'ALT Genix Api',
        selected: false
      },
      {
        displayName: 'Dev Support Api',
        selected: false
      }
      ]
    },
    {
      displayName: 'P - Z',
      selected: false,
      children: [{
        displayName: 'Availability',
        selected: false
      },
      {
        displayName: 'Apiopolis',
        selected: false
      },
      {
        displayName: 'Apigenix',
        selected: false
      },
      {
        displayName: 'Best Selector',
        selected: false
      },
      {
        displayName: 'Best Selector',
        selected: false
      },
      {
        displayName: 'Creative',
        selected: false
      },
      {
        displayName: 'ALT Genix Api',
        selected: false
      },
      {
        displayName: 'Dev Support Api',
        selected: false
      }
      ]
    }
  ];
  constructor(public translate:TranslateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.clientResources) {
      this.clientResources.forEach((resource: any) => {
        const _resource: any = this.resources.find((x: any) => x.displayName === resource.displayName);
        if (_resource) {
          _resource.selected = resource.selected;
        }
        resource.children.forEach((child: any) => {
          const _child = _resource.children.find((c: any) => c.displayName === child.displayName);
          if (_child) {
            _child.selected = child.selected;
          }
        })
      })
    }
  }

  ngOnInit(): void {
    if (this.clientResources) {
      this.clientResources.forEach((resource: any) => {
        const _resource: any = this.resources.find((x: any) => x.displayName === resource.displayName);
        if (_resource) {
          _resource.selected = resource.selected;
        }
        resource.children.forEach((child: any) => {
          const _child = _resource.children.find((c: any) => c.displayName === child.displayName);
          if (_child) {
            _child.selected = child.selected;
          }
        })
      })
    }
  }

  onSelect(item: any): void {
    item.children.forEach(element => {
      element.selected = item.selected;
    });
    this.emitData();
  }

  selectAllItems(): void {
    this.resources.forEach((item) => {
      item.selected = this.selectAll;
      this.onSelect(item);
    });
    this.emitData();
  }

  checkSelection(): boolean {
    const selectedItems = this.resources.filter((x: any) => x.selected);
    return selectedItems.length === this.resources.length;

  }

  onChangeItem(child: any, resource: any): void {
    const selectedChildren: any = resource.children.filter((x: any) => x.selected);
    resource.selected = selectedChildren.length === resource.children.length;
    this.emitData();
  }

  emitData(): void {
    const selectedResources = [];
    this.resources.forEach((resource: any) => {
      const children: any = resource.children.filter((x: any) => x.selected);
      if (children.length > 0) {
        const _resource: any = {
          displayName: resource.displayName,
          selected: children.length === resource.children.length,
          children: children
        }
        selectedResources.push(_resource);
      }

    })
    this.selectedResources.emit(selectedResources);
  }





}
