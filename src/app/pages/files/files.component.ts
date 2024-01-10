import { Component, OnInit } from '@angular/core';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  
  remoteProvider: RemoteFileSystemProvider;

  imageItemToDisplay: any = {};

  popupVisible = false;
  
  constructor() { 
    this.remoteProvider = new RemoteFileSystemProvider({
      endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images',
    });
  }

  displayImagePopup(e: any) {
    this.imageItemToDisplay = e.file;
    this.popupVisible = true;
  }

  ngOnInit(): void {
  }

}
