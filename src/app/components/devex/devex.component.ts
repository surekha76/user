import { Component, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DxChartComponent, DxPivotGridComponent } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';


@Component({
  selector: 'app-devex',
  templateUrl: './devex.component.html',
  styleUrls: ['./devex.component.css']
})
export class DevexComponent implements AfterViewInit {
  @ViewChild(DxPivotGridComponent) pivotGrid: DxPivotGridComponent;

  @ViewChild(DxChartComponent) chart: DxChartComponent;
  commonSeriesSettings: any;
  isItemVisible: boolean = false;
  
  ngAfterViewInit() {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
    });
  }
  customizePoint = (cellInfo: any) => {
    console.log('cellInfo',cellInfo);
    const colors = ['green', 'orange', 'red']; // Customize with your desired colors 
    cellInfo.color = colors[cellInfo.index % colors.length];
    return {color: cellInfo.color};
  }
  
  constructor() {}

  pivotDataSource: PivotGridDataSource;

  dataSource: any[] = [
    {
      atmUniqueKey: 1,
      atmStatus: 'In Service',
      region: 'Chennai',
    },
    {
      atmUniqueKey: 2,
      atmStatus: 'Out Of Service',
      region: 'Chennai',
    },
    {
      atmUniqueKey: 3,
      atmStatus: 'Out Of Service',
      region: 'Chennai',
    },
    {
      atmUniqueKey: 4,
      atmStatus: 'Offline',
      region: 'Chennai',
    },
    {
      atmUniqueKey: 5,
      atmStatus: 'In Service',
      region: 'Chennai',
    },
    {
      atmUniqueKey: 6,
      atmStatus: 'Out Of Service',
      region: 'Chennai',
    },
  ];


  onPivotGridInitialized(e: any) {
    console.log("data",this.dataSource);
    this.pivotDataSource = new PivotGridDataSource({
      store: this.dataSource,
      fields: [
        { dataField: 'region', area: 'row' },
        { dataField: 'atmStatus', area: 'column' },
        { summaryType: 'count', area: 'data' },
      ],
    });
  }
}

