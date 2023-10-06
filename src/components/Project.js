import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import nrfProject from "../projects/nRF51-Firmware.md";
import echoRemoval from "../projects/EchoRemoval-System.md"
import edgeDetection from "../projects/Edge-Detection.md"
import hpcTutorial from "../projects/HPC-Tutorial.md"
import lifeExpectancy from "../projects/LifeExpectancyAnalysis.md"
import iosBle from "../projects/iOS-BLE-Monitor.md"
import WritingSampleProject from './WritingSampleProject.js';

const Project = (props) => {
  const { title, fname, image } = props;
  const [text, setText] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    fetch(fname)
      .then((response) => response.text())
      .then((text) => setText(text))
      .catch((error) => {
        console.error('Error fetching file:', error);
      });
  }, [fname]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  let img = null;
  if (image && image.length > 0) {
    img = <img className="Project-image" src={`img/${image}`} alt="logo" />;
  }

  return (
    <Card className="Main">
      <Card.Body>
        <div onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
          <Card.Title>{title}</Card.Title>
        </div>
        {img}
        {
					!isCollapsed && (
          	<ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
        	)
				}
				<br />
					<Button 
						variant="outline-info"
						className="mt-3 float-right" 
						onClick={toggleCollapse}>{isCollapsed ? "Expand": "Collapse"}
					</Button>
      </Card.Body>
    </Card>
  );
};

var projectMeta = [
  {
    title: "ARM Embedded Project (nRF51)",
    fname: nrfProject,
    image: "ble-nano.jpg",
  },
  {
    title: "iOS BLE Monitor",
    fname: iosBle,
    image: "iosnav.jpg",
  },
  {
    title: "Life Expectancy Analysis",
    fname: lifeExpectancy,
    image: "LifeExpectancy_prediction.jpg"
  },
  {
    title: "Edge-Based Segmentation",
    fname: edgeDetection,
    image: "edges.png"
  },
  {
    title: "Echo Removal System",
    fname: echoRemoval,
    image: "echoremoval.jpg"
  },
  {
    title: "High Perfomance Computing Tutorial",
    fname: hpcTutorial,
    image: "HPC_submitjobs.jpg"
  }
];


export const projects = [
  <WritingSampleProject key={'writing-sample'}/>,
  projectMeta.map(({ title, fname, image }, index) => (
    <Project
      key={index}
      title={title}
      fname={fname}
      image={image}
    />
  ))
]
