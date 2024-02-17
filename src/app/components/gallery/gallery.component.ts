import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  isModalOpen: boolean = false;
  modalImageUrl: string = '';
  modalImageCaption: string = '';

  constructor() { }
  ngOnInit(): void {
  }

  openImageModal(imageUrl: string, caption: string) {
    this.modalImageUrl = ''
    this.modalImageUrl = imageUrl;
    this.modalImageCaption = caption;
    this.isModalOpen = true;
  }

  closeImageModal() {
    this.isModalOpen = false;
  }
}
