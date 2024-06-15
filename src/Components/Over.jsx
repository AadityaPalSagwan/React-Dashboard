import { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import NavBar from './NavBar';

const Over = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/getallData')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!loading && !error) {
            drawChart();
        }
    }, [data, loading, error]);

    const drawChart = () => {
        const svg = d3.select("#chart")
            .attr("width", 1000)
            .attr("height", 400);

        const margin = { top: 20, right: 30, bottom: 70, left: 60 };
        const width = svg.attr("width") - margin.left - margin.right;
        const height = svg.attr("height") - margin.top - margin.bottom;

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.topic))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.intensity)]).nice()
            .range([height, 0]);

        g.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-0.8em")
            .attr("dy", "0.15em")
            .attr("transform", "rotate(-65)");

        g.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(y));

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.topic))
            .attr("y", d => y(d.intensity))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.intensity))
            .attr("fill", "steelblue");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <NavBar />
            <div className="dashboard-main">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <div className="dashboard-title-text">
                                <h2>Welcome to the <span className="data text-blue text-[20px] font-[600]">Over All Data</span> here.</h2>
                            </div>
                            <button type="button" className="fs-18 text-grey-blue">
                                <i className="fas fa-ellipsis-vertical"></i>
                            </button>
                        </div>
                    </div>
                    <div className="overview-section p-4" style={{ overflowX: 'auto' }}>
                        <div className="chart-container">
                            <svg id="chart"></svg>
                        </div>
                        <table className="table mt-4 table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">end_year</th>
                                    <th scope="col">intensity</th>
                                    <th scope="col">sector</th>
                                    <th scope="col">topic</th>
                                    <th scope="col">insight</th>
                                    <th scope="col">url</th>
                                    <th scope="col">start_year</th>
                                    <th scope="col">added</th>
                                    <th scope="col">published</th>
                                    <th scope="col">relevance</th>
                                    <th scope="col">pestel</th>
                                    <th scope="col">source</th>
                                    <th scope="col">title</th>
                                    <th scope="col">likelihood</th>
                                    <th scope="col">impact</th>
                                    <th scope="col">region</th>
                                    <th scope="col">country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.end_year}</td>
                                        <td>{item.intensity}</td>
                                        <td>{item.sector}</td>
                                        <td>{item.topic}</td>
                                        <td>{item.insight}</td>
                                        <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                                        <td>{item.start_year}</td>
                                        <td>{item.added}</td>
                                        <td>{item.published}</td>
                                        <td>{item.relevance}</td>
                                        <td>{item.pestel}</td>
                                        <td>{item.source}</td>
                                        <td>{item.title}</td>
                                        <td>{item.likelihood}</td>
                                        <td>{item.impact}</td>
                                        <td>{item.region}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Over;
