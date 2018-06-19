import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service'

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css'],
})
export class DetectComponent implements OnInit {

  fileSelected: string

  file: File

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  selectFile() {
    document.getElementById("upload-input").click()
  }

  getFile($event) {
    this.file = $event.target.files[0]

    var formData = new FormData();
    formData.append('file', this.file)
    this.httpService.post('http://localhost:8080/upload', formData)
      .subscribe(res => {
        this.fileSelected = this.file.name + '已选择'
        console.log(res)
      }, error => {
        console.log(error)
      })
  }

  detect() {
    if(this.file) {
      var formData = new FormData();
      formData.append('file', this.file)
      this.httpService.post('http://localhost:8080/detector', formData)
        .subscribe(res => {
          console.log(res)
        }, error => {
          console.log(error)
        })
    }
  }

}
