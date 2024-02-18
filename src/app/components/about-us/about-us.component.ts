import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(pdfUrlPath: string, name: string) {
    const pdfUrl = pdfUrlPath;
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = name; // Specify the filename for the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
