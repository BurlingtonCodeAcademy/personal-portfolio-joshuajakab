import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ceres from '../Images/Ceres.svg'
import TicTacToe from '../Images/TicTacToe.svg'
import Yelp from '../Images/Yelp.svg'

function Portfolio(props) {
        
    return (
            <Carousel interval="10000">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        id="ceres"
                        src={Ceres}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="project-title">Ceres Greens Project</div>
                        <div className="project-description">This was my Capstone project in the Burlington Code Academy. It is a web app that the company Ceres Greens needed to gather data from sensors on their farm. This app takes that information and parses it into a useful dashboard. I worked with Josh Downs, Sara Ritter and GJ Critchlow to accomplish this task</div>
                        <div >Git Repo: <a className="repo-link" href="https://github.com/JoshLDowns/ceres-greens-capstone">https://github.com/JoshLDowns/ceres-greens-capstone</a></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TicTacToe}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="project-title">Politic Tac Toe</div>
                        <div className="project-description">This was a Burlington Code Academy project where we had to make a tic tac toe game that could be played in one or two player mode.</div>
                        <div >Git Repo: <a className="repo-link" href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-joshuajakab">https://github.com/BurlingtonCodeAcademy/tic-tac-toe-joshuajakab</a></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Yelp}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="project-title">Yelpington</div>
                        <div className="project-description">This was a Burlington Code Academy project where I made an app similar to Yelp but just for Burlington, VT restaurants. This app fetches information about the restaurants, loads a leaflet map that shows locations of restaurants and brings you to a landing page that gives an overview of the chosen restaurant.</div>
                        <div >Git Repo<a className="repo-link" href="https://github.com/BurlingtonCodeAcademy/yelpington-joshuajakab">https://github.com/BurlingtonCodeAcademy/yelpington-joshuajakab</a></div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Portfolio