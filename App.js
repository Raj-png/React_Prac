const heading = React.createElement(
    "div",
    {id: "parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child1"}, [React.createElement(
                "h1", 
                {},
                "This is a h1 tag inside child1"),
                React.createElement("h2",{}, "This is an h2 tag inside child1")
            ]
            ),
            React.createElement(
                "div", 
                {id: "child2"}, [React.createElement(
                    "h1", 
                    {},
                    "This is a h1 tag inside child2"), 
                    React.createElement("h2",{}, "This is an h2 tag inside child2")
                ]
                )
    ]
    );
 



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);