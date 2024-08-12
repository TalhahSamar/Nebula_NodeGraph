import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { nodes, edges } from '../data/sampleData';

const NodeGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr("width", 800)
      .attr("height", 600)
      .style("border", "1px solid black");

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(edges).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(400, 300))
      .on("tick", ticked);

    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(edges)
      .enter().append("line")
      .attr("stroke-width", d => Math.sqrt(d.invocations));

    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", 20)
      .attr("fill", d => d.errorRatio > 0.1 ? "red" : "green")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.append("title")
      .text(d => d.name);

    function ticked() {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default NodeGraph;
