const Transition: React.FunctionComponent = () => {
    return (
        <div
            className="transitionContainer"
            style={{
                height: "30vh",
                width: "100vw",
                background:
                    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(26,25,29,1) 100%)",
            }}
        ></div>
    );
};

export default Transition;
