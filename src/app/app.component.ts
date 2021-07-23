import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any[] = [
  ];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  addItem(): void {
    const obj = { title: '', indent: 10 };
    this.data.push(obj);
  }
  deleteItem(index: number): void {
    this.data.splice(index, 1);
  }
  updateVal(i: number, val: any): void {
    this.data[i].title = val;
  }
  indent(type: string, i: number): void {
    if (type === 'dec' && this.data[i].indent > 10) {
      // TODO: decrease indent
      this.data[i].indent = this.data[i].indent - 40;
    } else if (type === 'inc') {
      // TODO: increase indent
      this.data[i].indent = this.data[i].indent + 40;
    }
  }
  appendPx(num: number): string {
    return `${num}px`;
  }

}
