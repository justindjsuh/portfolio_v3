import "./AboutView.css";

// ADD A FADE UP FOR THE CONTENT

const AboutView: React.FunctionComponent = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">
                <h2>Hey there, I'm Justin.</h2>
                <p>
                    I&apos;m a full-stack software engineer based in
                    Philadelphia, passionate about creating user-centric,
                    innovative solutions that make a real impact on users. With
                    a strong drive to push my skills to new heights, I aim to
                    craft meaningful products that connect with people.
                    Recently, I&apos;ve had the opportunity to give back by
                    building websites for local churches, combining my technical
                    expertise with my desire to serve the community.
                </p>
                <p>
                    Professionally, I bring over two years of experience at a
                    major telecommunications company, along with more than a
                    year of co-op roles at leading fintech companies. My
                    expertise spans React, TypeScript/JavaScript, Node.js, HTML,
                    and CSS—tools that have allowed me to work on the frontlines
                    of web development, solving complex challenges and
                    delivering high-quality results. I&apos;m also deeply
                    passionate about mentoring aspiring engineers, guiding them
                    as they take their first steps in this competitive yet
                    incredibly rewarding field of software engineering.
                </p>
                <p>
                    Outside of work, you&apos;ll often find me grinding through
                    Leetcode (not always willingly), watching my favorite shows,
                    or playing my guitar. I cherish moments spent with my
                    girlfriend—exploring delicious food together is a highlight
                    of my week. And while I don&apos;t have a cat yet, I&apos;m
                    definitely looking forward to adopting one someday!
                </p>
            </div>
        </div>
    );
};

export default AboutView;
