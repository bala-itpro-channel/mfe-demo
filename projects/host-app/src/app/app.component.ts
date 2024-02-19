import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';

  @ViewChild('placeholder', { read: ViewContainerRef }) placeholderContainerRef!: ViewContainerRef;

  ngOnInit() {
    this.loadHelloWorldRemote();
  }

  private async loadHelloWorldRemote() {
    const comp = await loadRemoteModule({
      type: "module",
      remoteEntry: "http://localhost:4300/remoteEntry.js",
      exposedModule: "./HelloComponent",
    });
    
    const ref: any = this.placeholderContainerRef.createComponent(comp.HelloComponent);
    
    setTimeout(() => {
      ref.instance.title = "Bala";
    }, 3000);
  }
}
