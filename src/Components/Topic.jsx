import { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import NavBar from "./NavBar";

const Topic = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/getFieldData?field=topic')
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

        const topicData = d3.rollup(data, v => v.length, d => d.topic);

        const x = d3.scaleBand()
            .domain(Array.from(topicData.keys()))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(Array.from(topicData.values()))]).nice()
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
            .data(Array.from(topicData.entries()))
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d[0]))
            .attr("y", d => y(d[1]))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d[1]))
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
                                <h2>Welcome to the <span className="Data text-blue text-[20px] font-[600]">Topic Data</span> here.</h2>
                            </div>
                            <button type="button" className="fs-18 text-grey-blue">
                                <i className="fas fa-ellipsis-vertical"></i>
                            </button>
                        </div>
                    </div>
                    <div className="overview-section p-4">
                        <div className="chart-container mb-4">
                            <svg id="chart"></svg>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Topics</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.topic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topic;
