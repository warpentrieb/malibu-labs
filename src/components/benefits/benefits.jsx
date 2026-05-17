import React from "react";
import './benefits.css';
import BenefitsCard from "../benefitsCard/benefitsCard";
import SectionIntro from "../sectionIntro/SectionIntro";
import Btn from "../btn/Btn";

const Benefits = () => {
    return (
        <section id="benefits">
            <SectionIntro
                title="What we offer"
                heading={
                    <>
                        Growth systems built<br />around your business
                    </>
                } description={
                    <>
                        We combine strategy, design, development, marketing, and AI automation into one practical plan. First we learn your goals and requirements, then we scope the work around the fastest path to more leads, better follow-up, and a cleaner customer experience.
                    </>
                }
            />
            <div id="benefits-summary">
                <div>
                    <strong>Custom scope</strong>
                    <span>No bloated packages or guesswork.</span>
                </div>
                <div>
                    <strong>Conversion first</strong>
                    <span>Every page and workflow has a job.</span>
                </div>
                <div>
                    <strong>Built to scale</strong>
                    <span>Start focused, then add systems as you grow.</span>
                </div>
            </div>
            <div id="benefits-card-wrapper">
                <BenefitsCard
                    icon="fa-solid fa-compass-drafting"
                    tag="Strategy"
                    heading="Requirements First"
                    description="We map your goals, audience, services, competitors, and must-have features before recommending what to build."
                />
                <BenefitsCard
                    icon="fa-solid fa-code"
                    tag="Build"
                    heading="Custom Development"
                    description="Fast, hand-coded websites and web tools built around your brand, workflows, and customer journey."
                />
                <BenefitsCard
                    icon="fa-solid fa-robot"
                    tag="Automate"
                    heading="AI Agent Workflows"
                    description="Agents can answer common questions, qualify leads, collect project details, and route inquiries to your team."
                />
                <BenefitsCard
                    icon="fa-solid fa-magnifying-glass-chart"
                    tag="Grow"
                    heading="SEO + Paid Traffic"
                    description="We structure pages and campaigns to attract the right visitors and turn traffic into measurable opportunities."
                />
                <BenefitsCard
                    icon="fa-solid fa-chart-simple"
                    tag="Convert"
                    heading="Designed to Convert"
                    description="Calls to action, forms, trust signals, and page flow are planned to move visitors toward the next step."
                />
                <BenefitsCard
                    icon="fa-solid fa-handshake-angle"
                    tag="Support"
                    heading="Clear Communication"
                    description="You get transparent scope, practical quote guidance, and responsive support from planning through launch."
                />
            </div>
            <div id="benefits-cta">
                <div>
                    <strong>Not sure what you need yet?</strong>
                    <span>Tell us the outcome you want. We will help shape the right scope.</span>
                </div>
                <Btn label="Request a Custom Quote" href="#contact"></Btn>
            </div>
        </section>
    )
};

export default Benefits;
