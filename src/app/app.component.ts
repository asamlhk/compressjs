import { Component, ViewChild, ElementRef } from "@angular/core";
import Compressor from "compressorjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  @ViewChild("fileInput", {
    static: true
  })
  fileInput: ElementRef;
data = {};
  selectFile = () => {
    let file = this.fileInput.nativeElement.files[0];

    const c = new Compressor(file, {
      quality: 0.5,
      success(result) {
        globalThis.data = {
          originalFileSize: file.size,
          compressedFileSize: result.size
        };
      }
    });

    this.data = globalThis.data;
  };
}
