import Profile from "../../components/Profile/Profile";

import "./about.scss";

function Home() {
    return (
        <main className="main-content">
            <section className="about section" id="about">
                <div className="container">
                    <Profile />
                </div>
            </section>
        </main>
    );
}

export default Home;
