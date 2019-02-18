var root = document.getElementById('root');

const App = () => 
{
    return React.createElement('div', {}, [
            React.createElement(customerForm, 
            {
                itemone: "Email",
                itemtwo: "Zip Code",
                itemthree: "submit"
            }),
    ])
}

ReactDOM.render(React.createElement(App), root);