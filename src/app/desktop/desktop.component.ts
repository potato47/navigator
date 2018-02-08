import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  visibleSidebarTop = false;
  visibleSidebarLeft = false;
  visibleSidebarRight = false;
  visibleSidebarBottom = false;
  visibleSidebarFull = false;
  @ViewChild('searchInput', { read: ElementRef }) searchInput: ElementRef;
  tabs: Array<ITab>;
  colorList: Array<string>;
  marginList: Array<number>;
  dataLoaded = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://raw.githubusercontent.com/potato47/star-catcher/master/project.json').subscribe(data => {
      // Read the result field from the JSON response.
      
    });
    this.tabs = [
      {
        title: '常用',
        apps: [
          { name: 'Cosos论坛', url: 'http://forum.cocos.com/' },
          { name: 'Creator文档', url: 'http://docs.cocos.com/creator/manual/zh/' },
          { name: 'Github', url: 'https://github.com/' },
          { name: 'CSDN博客', url: 'http://blog.csdn.net/potato47' },
          { name: 'Angular文档', url: 'https://angular.cn/docs' },
          { name: 'Primeng', url: 'https://www.primefaces.org/primeng/#/' },
          { name: 'FontAwesome', url: 'https://fontawesome.com/icons?d=gallery' },
          { name: '百度翻译', url: 'https://fanyi.baidu.com/#en/zh/' },
          { name: '百度脑图', url: 'http://naotu.baidu.com/home' },
          { name: '谷歌Keep', url: 'https://keep.google.com/' },
          { name: 'Indienova', url: 'https://www.indienova.com/' },
          { name: 'Taptap', url: 'https://www.taptap.com/' },
          { name: 'Processon', url: 'https://www.processon.com/diagrams' },
          { name: 'iCloud', url: 'https://www.icloud.com/' },
          { name: 'B站', url: 'https://www.bilibili.com/' }
        ]
      },
      {
        title: '工作',
        apps: [
          { name: '百度五个字', url: 'https://www.baidu.com' },
          { name: '谷歌', url: 'https://www.google.com' }
        ]
      },
      {
        title: '娱乐',
        apps: [
          { name: '百度五个字', url: 'https://www.baidu.com' },
          { name: '谷歌', url: 'https://www.google.com' }
        ]
      }
    ];
    this.dataLoaded = true;
    this.colorList = [
      '#FFFFCC',
      '#CCFFFF',
      '#FFCCCC',
      '#FFFF99',
      '#CCCCFF',
      '#FF9966',
      '#FF6666',
      '#FFCC99',
      '#CCFF99',
      '#CCFFCC',
      '#99CCCC',
      '#99CC99',
      '#99CCCC'
    ];
    this.marginList = [];
    for (let i = 0; i < 100; i++) {
      this.marginList.push(5 + Math.floor(Math.random() * 30));
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if(event.altKey && event.key === 'q'){
      this.visibleSidebarTop = true;
      this.searchInput.nativeElement.value = '';
      this.searchInput.nativeElement.focus();
    }else if (event.ctrlKey && event.key === 'ArrowUp') {
      this.visibleSidebarTop = true;
      this.searchInput.nativeElement.value = '';
      this.searchInput.nativeElement.focus();
      // (document.getElementsByClassName('bdSug_sd')[0] as any).style.display = 'none';
      // (document.getElementsByClassName('bdSug_wpr')[0] as any).style.display = 'none';
    } else if (event.ctrlKey && event.key === 'ArrowDown') {
      this.visibleSidebarBottom = true;
    } else if (event.ctrlKey && event.key === 'ArrowLeft') {
      this.visibleSidebarLeft = true;
    } else if (event.ctrlKey && event.key === 'ArrowRight') {
      this.visibleSidebarRight = true;
    } else if (event.key === 'Escape') {
      this.visibleSidebarTop = false;
      this.visibleSidebarLeft = false;
      this.visibleSidebarRight = false;
      this.visibleSidebarBottom = false;
    }
    if (this.visibleSidebarTop) {
      if (!event.altKey && event.key === 'Enter') {
        this.onSearch(this.searchInput.nativeElement.value, 'baidu');
      } else if (event.altKey && event.key === 'Enter') {
        this.onSearch(this.searchInput.nativeElement.value, 'google');
      }

    }
  }

  onSearch(event: string, type: string): void {
    let url: string;
    if (type === 'baidu') {
      url = `https://www.baidu.com/s?wd=${event}`;
    } else if (type === 'google') {
      url = `https://www.google.com/search?q=${event}`;
    }
    window.open(url);
    this.visibleSidebarTop = false;
  }

  getAppColor(index: number): string {
    return this.colorList[index % this.colorList.length];
  }

  getAppMargin(index): string {
    return this.marginList[index % this.marginList.length] + 'px';
  }

}
