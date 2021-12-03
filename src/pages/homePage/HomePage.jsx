import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <div className="container homepage">
      <h1>W E L C O M E ! </h1>
      <div className="row">
        <div class="card text-white bg-primary mb-3 col">
          <div class="card-header">Paragraph1</div>
          <div class="card-body">
            <h4 class="card-title">Discover Our Services</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link to='/users'>Get To Our Users</Link>
          </div>
        </div>
        <div class="card bg-light mb-3 col">
          <div class="card-header">Paragraph2</div>
          <div class="card-body">
            <h4 class="card-title">Check Out Our Users</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link to='/users'>Get To Our Users</Link>
          </div>
        </div>
        <div class="card text-white bg-secondary mb-3 col">
          <div class="card-header">Paragraph3</div>
          <div class="card-body">
            <h4 class="card-title">Enjoy Our Offers</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link to='/users'>Get To Our Users</Link>
          </div>
        </div>
      </div>
      <div className="row">
      <div class="card text-white bg-secondary mb-3 col">
          <div class="card-header">Paragraph4</div>
          <div class="card-body">
            
            <h4 class="card-title">Join Our Team</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link to='/users'>Get To Our Users</Link>
          </div>
        </div>
        <div class="card text-white bg-primary mb-3 col">
          <div class="card-header">Paragraph5</div>
          <div class="card-body">
            <h4 class="card-title">Ask Your Questions</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link  to='/users'>Get To Our Users</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="card text-white bg-primary mb-3 col">
          <div class="card-header">Paragraph6</div>
          <div class="card-body">
            <h4 class="card-title">Subscribe To Us</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link to='/users'>Get To Our Users</Link>
          </div>
        </div>
        <div class="card bg-light mb-3 col">
          <div class="card-header">Paragraph7</div>
          <div class="card-body">
            <h4 class="card-title">Join Our Community</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link to='/users'>Get To Our Users</Link>
          </div>
        </div>
        <div class="card text-white bg-secondary mb-3 col">
          <div class="card-header">Paragraph8</div>
          <div class="card-body">
            <h4 class="card-title">Benefit From Us</h4>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lquas inventore alias soluta blanditiis!</p>
            <Link  to='/users'>Get To Our Users</Link>
          </div>
        </div>
      </div>
     
    </div>
  )
}
