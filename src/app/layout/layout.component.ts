import { AfterViewInit, Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {

  ngAfterViewInit() {
    (function($) {
      "use strict";
  
      // Add active state to sidbar nav links
      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
        const anchorElement = this as HTMLAnchorElement; // Type assertion
        if (anchorElement.href === path) {
          $(anchorElement).addClass("active");
        }
      }); 
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
  }

}
