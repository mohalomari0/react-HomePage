import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <h2>Services</h2>
            <div className="services-grid">
                <div className="service-item">First Service</div>
                <div className="service-item">Second Service</div>
                <div className="service-item">Third Service</div>
            </div>
        </section>
    );
};

export default Services;