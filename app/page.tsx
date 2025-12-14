import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import FreelanceProjects from "../components/FreelanceProjects";
import GithubProjects from "../components/GithubProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <About />
            <Skills />
            <Experience />
            <div id="projects" className="grid gap-8">
                <FreelanceProjects />
                <GithubProjects />
                <FeaturedProjects />
            </div>
            <Education />
            <Contact />
        </main>
    );
}
