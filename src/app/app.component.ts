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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  addItem() {
    let obj = { title: '', indent: 10 };
    this.data.push(obj);
  }
  deleteItem(index: number) {
    this.data.splice(index, 1);
  }
  updateVal(i: number, val: any) {
    this.data[i].title = val;
  }
  indent(type: string, i: number) {
    let element = document.getElementById(`text_${i}`);
    if (type === 'dec' && this.data[i].indent > 10) {
      // TODO: decrease indent
      this.data[i].indent = this.data[i].indent - 40;
    } else {
      // TODO: increase indent
      this.data[i].indent = this.data[i].indent + 40;
    }
  }
  appendPx(num: number) {
    return `${num}px`;
  }

}
