import { DataSource } from '@angular/cdk/collections';

import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface StutentTableItem {
  name: string;
  class:number;
  section:string;
  subject1:number;
  subject2:number;
  subject3:number;
}

const EXAMPLE_DATA: StutentTableItem[] = [
  {name: 'Jhon',class:3,section:'A',subject1:25,subject2:35,subject3:89},
  {name: 'Walter',class:5,section:'D',subject1:99,subject2:35,subject3:99},
  { name: 'Luther',class:2,section:'B',subject1:25,subject2:99,subject3:77},
  {name: 'Arya',class:7,section:'E',subject1:78,subject2:65,subject3:90},
  {name: 'Faizal',class:9,section:'C',subject1:25,subject2:28,subject3:29},
  
];


export class StutentTableDataSource extends DataSource<StutentTableItem> {
  data: StutentTableItem[] = EXAMPLE_DATA;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<StutentTableItem[]> {
   
    const dataMutations = [
      observableOf(this.data),
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));
  }

  
  disconnect() {}

  
  private getSortedData(data: StutentTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'class': return compare(+a.class, +b.class, isAsc);
        case 'section': return compare(a.section, b.section, isAsc);
        case 'subject1': return compare(+a.subject1, +b.subject1, isAsc);
        case 'subject2': return compare(+a.subject2, +b.subject2, isAsc);
        case 'subject3': return compare(+a.subject3, +b.subject3, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
