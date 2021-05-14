import { Component, OnInit } from '@angular/core';
// import * as d3 from 'd3';

interface TechEvolution {
  name: string,
  init: { year: number, value: number },
  end:  { year: number, value: number }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  private HMLT: TechEvolution[] = [
    { name: 'HTML', init: { year: 2015, value:  0 }, end: { year: 2016, value: .22 } },
    { name: 'HTML', init: { year: 2016, value: .22 }, end: { year: 2017, value: .34 } },
    { name: 'HTML', init: { year: 2017, value: .34 }, end: { year: 2018, value: .45 } },
    { name: 'HTML', init: { year: 2018, value: .45 }, end: { year: 2019, value: .58 } },
    { name: 'HTML', init: { year: 2019, value: .58 }, end: { year: 2020, value: .70 } },
    { name: 'HTML', init: { year: 2020, value: .70 }, end: { year: 2021, value: .78 } },
    { name: 'HTML', init: { year: 2021, value: .78 }, end: { year: 2021, value: .78 } },
  ];

  private data = [
    {"Framework": "Vue", "Percent": ".1", "Released": "2015"},
    {"Framework": "React", "Percent": ".3", "Released": "2016"},
    {"Framework": "Angular", "Percent": ".6", "Released": "2017"},
    {"Framework": "Backbone", "Percent": ".3", "Released": "2018"},
    {"Framework": "Ember", "Percent": ".5", "Released": "2019"},
  ];
  private svg: any;
  private margin = 50;
  private width = 700 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    // this.createSvg();
    // this.drawPlot();
  }

  // private createSvg(): void {
  //   this.svg = d3.select("figure#scatter")
  //   .append("svg")
  //   .attr("width", this.width + (this.margin * 2))
  //   .attr("height", this.height + (this.margin * 2))
  //   .append("g")
  //   .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  // }

  // private drawPlot(): void {
  //   // Add X axis
  //   const x = d3.scaleLinear()
  //   .domain([2015, (new Date()).getFullYear()])
  //   .range([ 0, this.width ]);
  //   this.svg.append("g")
  //   .attr("transform", "translate(0," + this.height + ")")
  //   .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  //   // Add Y axis
  //   const y = d3.scaleLinear()
  //   .domain([0, 1])
  //   .range([ this.height, 0]);
  //   this.svg.append("g")
  //   .call(d3.axisLeft(y).tickFormat(d3.format(".0%")));

  //   this.drawLine(x, y, this.HMLT)

  // }

  // drawLine(
  //   xData: d3.ScaleLinear<number, number, never>,
  //   yData: d3.ScaleLinear<number, number, never>,
  //   data: TechEvolution[]
  // ) {

  //   const line = this.svg.append('g');
  //   line.selectAll("line")
  //   .data(data)
  //   .enter()
  //   .append("line")
  //   .attr("x1", (d: TechEvolution) => xData(d.init.year))
  //   .attr("y1", (d: TechEvolution) => yData(d.init.value))
  //   .attr("x2", (d: TechEvolution) => xData(d.end.year))
  //   .attr("y2", (d: TechEvolution) => yData(d.end.value))
  //   .style("opacity", .5)
  //   .style("fill", "#69b3a2")
  //   .style("stroke-width", "3px")
  //   .style("stroke", "#69b3a2");

  //   line
  //   .selectAll("text")
  //   .data(data)
  //   .enter()
  //   .append("text")
  //   .text((d: TechEvolution) => d.name)
  //   .attr("x", (d: TechEvolution) => xData(d.init.year))
  //   .attr("y", (d: TechEvolution) => yData(d.init.value))
  //   .style("stroke-width", "0px")
  //   .style("fill", "#69b3a2")
  //   .style("stroke", "#69b3a2");

  // }

}

