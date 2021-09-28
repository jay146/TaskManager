import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // property and datatype
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects:string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  Accdata:any=[];

  onprojectsclick($event:any)
{

//console.log($event.target.innerHTML);
if($event.target.innerHTML=="Project-A")
  {

    this.ProjectCost = 1;
    this.CurrentExpenditure = 10000;
    this.AvailableFunds = 1000000;
    }
    else if($event.target.innerHTML=="Project-B")
    {
    this.ProjectCost = 2;
    this.CurrentExpenditure = 20000;
    this.AvailableFunds = 200000;
    }
  else if($event.target.innerHTML=="Project-C")
  {
    this.ProjectCost = 3;
    this.CurrentExpenditure = 30000;
    this.AvailableFunds = 300000;
    }
   else if($event.target.innerHTML=="Project-D")
  {
    this.ProjectCost = 4;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    }
}
constructor() { }
ngOnInit() {
  this.Designation='Team Leader';
  this.Username = 'Jayakrishna Surampudi';
  this.NoOfTeamMembers = 146;
  this.TotalCostOfAllProjects = 240;
  this.PendingTasks = 15;
  this.UpComingProjects = 2;


this.Projects=["Project-A","Project-B","Project-C","Project-D","Project-Z"];

  this.Clients=["hcl","google","wipro"];
  //this.Projects=["Project-A","Project-B","Project-C","Project-D","Project-Z"];
  //for(var i=2019;i>=2010;i--){
    //if(i==2017){
     //break;
    //}
    //this.Years.push(i);
  //}

this.TeamMembersSummary=[ {Region:"East",TeamMembersCount:10,TemporaryUnavailableMembers:5},
                          {Region:"West",TeamMembersCount:20,TemporaryUnavailableMembers:6},
                          {Region:"North",TeamMembersCount:30,TemporaryUnavailableMembers:4},
                          {Region:"South",TeamMembersCount:40,TemporaryUnavailableMembers:6}
                        ]

this.Accdata=[
  {region:"East", members:
    [{Id:1,Name:"ford",Status:"available"},
     {Id:2,Name:"bmw",Status:"busy"}
    ]
  },

  {region:"NORTH", members:
   [ {Id:1,Name:"ford",Status:"available"},
     {Id:2,Name:"bmw",Status:"busy"}
   ]
  },
  {region:"SOUTH", members:
   [{Id:1,Name:"ford",Status:"available"},
    {Id:2,Name:"bmw",Status:"busy"}
   ]
},
  {region:"West", members:
   [{Id:1,Name:"ford",Status:"available"},
    {Id:2,Name:"bmw",Status:"busy"}
   ]
}
];



}
}
