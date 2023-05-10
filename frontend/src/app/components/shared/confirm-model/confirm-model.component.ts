import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.css']
})
export class ConfirmModelComponent implements OnInit {

  @Input() modalTypes = {
    default: 0,
    account: 1,
    url: 2
  }

  @Input() modalData = {
    state: this.modalTypes.default,
    type: 0,
    title: "",
    text: "",
    confirmBtnText: "",
  }

  @Output() confirmModelEmit = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  onModalClose() {
    this.resetModel();
  }

  launchModal(title: string, text: string, confirmBtnText: string, type: number) {
    this.modalData.title = title;
    this.modalData.text = text;
    this.modalData.confirmBtnText = confirmBtnText;
    this.modalData.type = type;
    if (this.modalData.state == 0) {
      this.modalData.state++;
      return;
    }
  }

  private resetModel() {
    this.modalData.state = 0;
    this.modalData.title = '';
    this.modalData.text = '';
    this.modalData.type = this.modalTypes.default;
  }

  onConfirmModal() {
    this.confirmModelEmit.emit(null);
    this.resetModel();
  }

}
