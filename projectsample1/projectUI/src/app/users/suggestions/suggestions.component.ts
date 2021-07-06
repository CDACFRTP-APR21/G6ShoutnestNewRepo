import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor(private service: SharedService) { }

  suggestionList: any;
  id = sessionStorage.getItem('Id');
  anotherlist: []
  friendid:number

  ngOnInit(): void {
    this.refreshSuggestionList()
  }

  refreshSuggestionList() {
    this.service.getSuggestionsbyId(this.id).subscribe(data => {
      this.suggestionList = data;
      console.log("suggestion list ", this.suggestionList)
      var self = this;
      this.suggestionList.forEach(function (data: any) {

        data.forEach(function (data1: any) {
          console.log(data1.userName)

        });
      });
      console.log("anotherlist", self.anotherlist)
    })
  }

  sendRequest(data1:any)
  {
    var val = {
      userId: this.id,
      friendId: data1,
      status: 1
    };
    console.log("friendid", data1)
    this.service.addfriend(val).subscribe(res => {
     
    });

    window.location.reload();
  

  }
}
function s1(s1: any) {
  throw new Error('Function not implemented.');
}

